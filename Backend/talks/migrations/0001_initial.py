# Generated by Django 5.1.1 on 2024-10-16 12:54

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('accounts', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Talk',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(default='Talk', max_length=50)),
                ('text', models.TextField()),
                ('time', models.DateField(auto_now_add=True)),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='accounts.userprofile')),
            ],
        ),
        migrations.CreateModel(
            name='Pop',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(default='Pop', max_length=50)),
                ('text', models.TextField()),
                ('talk', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='talks.talk')),
            ],
        ),
    ]
