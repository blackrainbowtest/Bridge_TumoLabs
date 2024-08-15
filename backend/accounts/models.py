from django.contrib.auth import get_user_model
from django.db import models

User = get_user_model()


class InnovatorProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='student_profile')
    address = models.CharField(max_length=255, null=True, default='')
    educational_organization = models.CharField(max_length=255, null=True, default='')
    year_of_study = models.CharField(max_length=255, null=True, default='')
    profession = models.CharField(max_length=255, null=True, default='')
    skills = models.CharField(max_length=255, null=True, default='')
    location = models.CharField(max_length=255, null=True, default='')
    portfolio = models.CharField(max_length=255, null=True, default='')
    availability = models.CharField(max_length=255, null=True, default='')
    professional_interests = models.CharField(max_length=255, null=True, default='')
    phone_number = models.CharField(max_length=255, null=True, default='', blank=True)
    social_media_link = models.CharField(max_length=255, null=True, default='', blank=True)
    bio = models.CharField(max_length=255, null=True, default='', blank=True)


class PartnerProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='business_profile')
    address = models.CharField(max_length=255, null=True, default='')
    # other business fields


class AdvisorProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='university_profile')
    address = models.CharField(max_length=255, null=True, default='')
    # other university fields


class ProfileImage(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='profile_images')
    image = models.ImageField(upload_to='profile_images/%Y/%m/%d/', blank=True)
    name = models.CharField(max_length=255, blank=True, null=True)
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name or 'No name'
