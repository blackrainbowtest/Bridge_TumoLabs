from django.contrib.auth import get_user_model
from django.db import models

User = get_user_model()


class StudentProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='student_profile')
    date_of_birth = models.DateField(null=True, blank=True)
    # other student fields


class BusinessProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='business_profile')
    business_type = models.CharField(max_length=255)
    # other business fields


class UniversityProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='university_profile')
    address = models.CharField(max_length=255)
    # other university fields
