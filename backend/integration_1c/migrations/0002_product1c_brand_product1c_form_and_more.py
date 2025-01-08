# Generated by Django 4.2.11 on 2024-12-23 10:07

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('marketplace', '0003_product_dosage_product_flavor_and_more'),
        ('integration_1c', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='product1c',
            name='brand',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='marketplace.brand', verbose_name='Бренд'),
        ),
        migrations.AddField(
            model_name='product1c',
            name='form',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='marketplace.form', verbose_name='Форма'),
        ),
        migrations.AddField(
            model_name='product1c',
            name='manufacturer_country',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='marketplace.country', verbose_name='Страна производитель'),
        ),
    ]
