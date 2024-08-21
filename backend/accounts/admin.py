from django.contrib import admin
from .models import ProfileImage, InnovatorProfile, PartnerProfile, AdvisorProfile
# Register your models here.

admin .site.register(ProfileImage)
admin .site.register(InnovatorProfile)
admin .site.register(PartnerProfile)
admin .site.register(AdvisorProfile)

