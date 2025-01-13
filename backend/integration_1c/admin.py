from django.contrib import admin
from django.utils.html import format_html
from django.contrib import messages
from django.db import transaction
from django_better_admin_arrayfield.admin.mixins import DynamicArrayMixin

from .models import Product1C, SyncLog, ProductImage1C
from marketplace.models import Product, ProductImage


class Product1CImageInline(admin.TabularInline):
    model = ProductImage1C
    extra = 0
    max_num = 3


@admin.register(Product1C)
class Product1CAdmin(admin.ModelAdmin, DynamicArrayMixin):
    inlines = (Product1CImageInline,)
    filter_horizontal = ('similar_products',)

    list_display = (
        'id', 'name_en', 'name', 'brand', 'manufacturer_country',
        'form', 'price', 'sale_price', 'status', 'published_product', 'is_variation'
    )
    list_display_links = ('id', 'name')

    list_filter = (
        'categories', 'brand', 'manufacturer_country', 'form',
        'is_hit', 'is_sale', 'status', 'rating', 'is_variation'
    )
    list_editable = ('published_product',)

    fieldsets = (
        ('Основная информация', {
            'fields': (
                'categories', 'brand', 'manufacturer_country', 'form',
                'name_en', 'name', 'description'
            )
        }),
        ('Вариации товара', {
            'fields': (
                'is_variation', 'base_product',
                'flavor', 'dosage', 'quantity'
            ),
            'classes': ('collapse',),
        }),
        ('Цены и статусы', {
            'fields': (
                'price', 'sale_price', 'status',
                'is_hit', 'is_sale', 'is_recommend',
                'rating', 'vendor_code'
            )
        }),
        ('СЕО и публикация', {
            'fields': (
                'seo_keywords',
                'published_product',
            ),
            'classes': ('collapse',)
        })
    )

    def formfield_for_foreignkey(self, db_field, request, **kwargs):
        if db_field.name == "base_product":
            # Показываем только базовые товары из основного каталога
            kwargs["queryset"] = Product.objects.filter(is_variation=False)
            return db_field.formfield(**kwargs)
        return super().formfield_for_foreignkey(db_field, request, **kwargs)

    def get_queryset(self, request):
        return super().get_queryset(request).select_related(
            'brand',
            'manufacturer_country',
            'form',
            'base_product'
        ).prefetch_related(
            'categories',
            'similar_products',
        )

    def published_status(self, obj):
        if Product.objects.filter(vendor_code=obj.vendor_code).exists():
            return format_html(
                '<span style="color: green;">✔ Опубликован</span>'
            )
        return format_html(
            '<span style="color: red;">✖ Не опубликован</span>'
        )

    published_status.short_description = 'Статус публикации'

    actions = ['publish_products', 'unpublish_products']

    def create_product_in_marketplace(self, product, base_product=None):
        """Вспомогательный метод для создания товара в основном каталоге"""
        new_product = Product.objects.create(
            name=product.name or product.name_en,
            name_en=product.name_en,
            vendor_code=product.vendor_code,
            price=product.price or 0,
            status=product.status,
            description=product.description or "",
            brand=product.brand,
            manufacturer_country=product.manufacturer_country,
            form=product.form,
            flavor=product.flavor or "",
            dosage=product.dosage or "",
            sale_price=product.sale_price,
            is_hit=product.is_hit or False,
            is_sale=product.is_sale or False,
            is_recommend=product.is_recommend or False,
            quantity=product.quantity or "",
            rating=product.rating,
            seo_keywords=product.seo_keywords or [],
            is_variation=product.is_variation,
            base_product=base_product
        )

        if hasattr(product, 'categories'):
            new_product.categories.set(product.categories.all())

        for image in product.images.all():
            ProductImage.objects.create(
                product=new_product,
                image=image.image
            )

        return new_product

    @transaction.atomic
    def publish_products(self, request, queryset):
        for product in queryset:
            if not product.published_product:
                if not all([product.brand, product.manufacturer_country]):
                    self.message_user(
                        request,
                        f'Товар {product.name_en} не может быть опубликован. '
                        f'Заполните обязательные поля (Бренд, Страна производитель)',
                        level=messages.ERROR
                    )
                    continue

                try:
                    base_in_marketplace = None

                    # Если это вариация, проверяем базовый товар
                    if product.is_variation:
                        if not product.base_product:
                            self.message_user(
                                request,
                                f'Товар {product.name_en} не может быть опубликован. '
                                f'Укажите базовый товар для вариации.',
                                level=messages.ERROR
                            )
                            continue

                        # Базовый товар уже есть в основном каталоге, используем его
                        base_in_marketplace = product.base_product

                    # Создаем новый товар (вариацию или обычный)
                    new_product = self.create_product_in_marketplace(
                        product,
                        base_in_marketplace
                    )

                    SyncLog.objects.create(
                        product_1c=product,
                        sync_type='publish',
                        status=True,
                        message='Товар успешно опубликован в основном каталоге'
                    )

                    product.delete()

                    self.message_user(
                        request,
                        f'Товар {product.name_en} успешно опубликован',
                        level=messages.SUCCESS
                    )

                except Exception as e:
                    self.message_user(
                        request,
                        f'Ошибка при публикации товара {product.name_en}: {str(e)}',
                        level=messages.ERROR
                    )

    publish_products.short_description = 'Опубликовать выбранные товары'

    @transaction.atomic
    def unpublish_products(self, request, queryset):
        for product in queryset:
            main_product = Product.objects.filter(vendor_code=product.vendor_code).first()
            if main_product:
                main_product.delete()
                SyncLog.objects.create(
                    product_1c=product,
                    sync_type='unpublish',
                    status=True,
                    message='Товар удален из основного каталога'
                )

    unpublish_products.short_description = 'Снять с публикации'

    @transaction.atomic
    def save_model(self, request, obj, form, change):
        if obj.published_product:
            if not all([obj.brand, obj.manufacturer_country]):
                messages.error(
                    request,
                    'Невозможно опубликовать товар. Заполните обязательные поля (Бренд, Страна производитель)'
                )
                obj.published_product = False
                super().save_model(request, obj, form, change)
                return

            if obj.is_variation and not obj.base_product:
                messages.error(
                    request,
                    'Для вариации необходимо указать базовый товар'
                )
                obj.published_product = False
                super().save_model(request, obj, form, change)
                return

            self.publish_products(request, Product1C.objects.filter(pk=obj.pk))
        else:
            super().save_model(request, obj, form, change)