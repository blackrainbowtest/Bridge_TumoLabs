# Generated by Django 5.0.7 on 2024-08-20 20:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0004_alter_advisorprofile_address_and_more'),
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='innovatorprofile',
            name='skills',
        ),
        migrations.AddField(
            model_name='innovatorprofile',
            name='skills',
            field=models.ManyToManyField(blank=True, related_name='innovator_profiles', to='core.skill'),
        ),
    ]
