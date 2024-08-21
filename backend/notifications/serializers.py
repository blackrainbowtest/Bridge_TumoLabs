from rest_framework import serializers
from .models import ProjectCreatedNotification, UserProjectSkillNotification

class ProjectCreatedNotificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectCreatedNotification
        fields = ['id', 'project', 'skill']

class UserProjectSkillNotificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProjectSkillNotification
        fields = ['id', 'user', 'project', 'is_read']
