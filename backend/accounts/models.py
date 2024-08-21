from django.contrib.auth import get_user_model
from django.db import models
from core.models import Skill

User = get_user_model()


class InnovatorProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='innovator_profile')
    address = models.CharField(max_length=255, null=True, default='', blank=True)
    educational_organization = models.CharField(max_length=255, null=True, default='', blank=True)
    year_of_study = models.CharField(max_length=255, null=True, default='', blank=True)
    profession = models.CharField(max_length=255, null=True, default='', blank=True)
    skills = models.ManyToManyField(Skill, related_name='innovator_profiles', blank=True)
    location = models.CharField(max_length=255, null=True, default='', blank=True)
    portfolio = models.CharField(max_length=255, null=True, default='', blank=True)
    availability = models.CharField(max_length=255, null=True, default='', blank=True)
    professional_interests = models.CharField(max_length=255, null=True, default='', blank=True)
    phone_number = models.CharField(max_length=255, null=True, default='', blank=True)
    social_media_link = models.CharField(max_length=255, null=True, default='', blank=True)
    bio = models.CharField(max_length=255, null=True, default='', blank=True)


class PartnerProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='partner_profile')
    address = models.CharField(max_length=255, null=True, default='', blank=True)
    # other business fields


class AdvisorProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='advisor_profile')
    address = models.CharField(max_length=255, null=True, default='', blank=True)
    # other university fields


class ProfileImage(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='profile_images')
    image = models.ImageField(upload_to='profile_images/%Y/%m/%d/', blank=True)
    name = models.CharField(max_length=255, blank=True, null=True)
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name or 'No name'
