# Generated by Django 4.0.6 on 2022-08-08 09:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('office_direct', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='kreslo',
            name='name',
            field=models.CharField(max_length=75, verbose_name='Название'),
        ),
    ]
