# Generated by Django 4.2.11 on 2025-01-09 10:47

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('marketplace', '0003_product_dosage_product_flavor_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='base_product',
            field=models.ForeignKey(blank=True, help_text='Если это вариация, укажите базовый товар', null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='marketplace_variations', to='marketplace.product', verbose_name='Базовый товар'),
        ),
        migrations.AddField(
            model_name='product',
            name='dosageArray',
            field=models.URLField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='product',
            name='flavorArray',
            field=models.URLField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='product',
            name='is_variation',
            field=models.BooleanField(default=False, help_text='Отметьте, если это вариация другого товара', verbose_name='Является вариацией'),
        ),
        migrations.AddField(
            model_name='product',
            name='name_en',
            field=models.CharField(blank=True, max_length=255, null=True, verbose_name='Наименование (EN)'),
        ),
        migrations.AddField(
            model_name='product',
            name='quantityArray',
            field=models.URLField(blank=True, null=True),
        ),
    ]
