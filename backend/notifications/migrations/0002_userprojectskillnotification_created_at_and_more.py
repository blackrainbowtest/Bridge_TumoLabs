# Generated by Django 5.0.7 on 2024-08-20 21:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('notifications', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='userprojectskillnotification',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True, default='2024-08-15 11:39:52.682877'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='userprojectskillnotification',
            name='read_at',
            field=models.DateTimeField(blank=True, null=True),
        ),
    ]
