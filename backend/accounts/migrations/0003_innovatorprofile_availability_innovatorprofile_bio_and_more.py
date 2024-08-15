# Generated by Django 5.0.7 on 2024-08-15 08:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0002_auto_20240814_1446'),
    ]

    operations = [
        migrations.AddField(
            model_name='innovatorprofile',
            name='availability',
            field=models.CharField(default='', max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='innovatorprofile',
            name='bio',
            field=models.CharField(blank=True, default='', max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='innovatorprofile',
            name='educational_organization',
            field=models.CharField(default='', max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='innovatorprofile',
            name='location',
            field=models.CharField(default='', max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='innovatorprofile',
            name='phone_number',
            field=models.CharField(blank=True, default='', max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='innovatorprofile',
            name='portfolio',
            field=models.CharField(default='', max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='innovatorprofile',
            name='profession',
            field=models.CharField(default='', max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='innovatorprofile',
            name='professional_interests',
            field=models.CharField(default='', max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='innovatorprofile',
            name='skills',
            field=models.CharField(default='', max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='innovatorprofile',
            name='social_media_link',
            field=models.CharField(blank=True, default='', max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='innovatorprofile',
            name='year_of_study',
            field=models.CharField(default='', max_length=255, null=True),
        ),
    ]