from rest_framework import serializers
from .models import Product1C, SyncLog
from marketplace.models import Product


class Product1CSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product1C
        fields = ('name_en', 'name', 'vendor_code', 'price', 'status', 'is_variation')

    def to_internal_value(self, data):
        # Копируем значение name_en в name если name не предоставлен
        if 'name_en' in data and 'name' not in data:
            data = data.copy()
            data['name'] = data['name_en']
        return super().to_internal_value(data)

    def create(self, validated_data):
        # Добавляем необходимые поля с дефолтными значениями
        validated_data['is_published'] = False
        validated_data['published_product'] = False

        vendor_code = validated_data['vendor_code']

        # Проверяем существование товара в основном каталоге
        main_product = Product.objects.filter(vendor_code=vendor_code).first()

        if main_product:
            # Обновляем существующий товар в основном каталоге
            main_product.name_en = validated_data['name_en']
            main_product.name = validated_data['name']
            main_product.price = validated_data['price']
            main_product.status = validated_data['status']
            main_product.save()

        # Создаем запись в Product1C
        instance = Product1C.objects.create(**validated_data)

        # Создаем лог
        SyncLog.objects.create(
            product_1c=instance,
            sync_type='create' if not main_product else 'update',
            status=True,
            message=f'Товар {"создан" if not main_product else "обновлен"} в 1C. '
                    f'Артикул: {vendor_code}, Name_EN: {validated_data["name_en"]}'
        )

        return instance

    def update(self, instance, validated_data):
        # Устанавливаем значения по умолчанию
        instance.is_published = False
        instance.published_product = False

        # Обновляем остальные поля
        for attr, value in validated_data.items():
            setattr(instance, attr, value)

        instance.save()
        return instance