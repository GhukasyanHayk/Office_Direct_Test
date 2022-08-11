from django.db import models


class kreslo(models.Model):
    name = models.CharField(max_length=75, verbose_name='Название')
    title = models.TextField(verbose_name='Описание')
    images = models.ImageField(upload_to='images', verbose_name='Изображение')
    price = models.DecimalField(max_digits=10, decimal_places=2, verbose_name='Цена')

    def __str__(self):
        return self.name
