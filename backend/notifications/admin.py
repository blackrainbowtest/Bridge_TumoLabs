from django.contrib import admin
from .models import ProjectCreatedNotification, UserProjectSkillNotification


@admin.register(ProjectCreatedNotification)
class ProjectCreatedNotificationAdmin(admin.ModelAdmin):
    list_display = ['project', 'skill']


@admin.register(UserProjectSkillNotification)
class UserProjectSkillNotificationAdmin(admin.ModelAdmin):
    list_display = ['user', 'project', 'is_read']