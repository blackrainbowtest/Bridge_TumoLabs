# Generated by Django 5.0.7 on 2024-08-20 21:14

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
        ('notifications', '0002_userprojectskillnotification_created_at_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='userprojectskillnotification',
            name='skill',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='core.skill'),
            preserve_default=False,
        ),
    ]