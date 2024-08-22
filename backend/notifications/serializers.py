from rest_framework import serializers
from .models import ProjectCreatedNotification, UserProjectSkillNotification
from projects.serializers import ProjectSerializer
from accounts.serializers import SkillSerializer


class ProjectCreatedNotificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectCreatedNotification
        fields = ['id', 'project', 'skill']


class UserProjectSkillNotificationSerializer(serializers.ModelSerializer):
    project = ProjectSerializer(read_only=True)
    skill = SkillSerializer(read_only=True)

    class Meta:
        model = UserProjectSkillNotification
        fields = ['id', 'user', 'project', 'skill', 'is_read', 'created_at', 'read_at']
