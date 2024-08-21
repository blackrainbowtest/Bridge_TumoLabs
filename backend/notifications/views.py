from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .models import ProjectCreatedNotification, UserProjectSkillNotification
from .serializers import ProjectCreatedNotificationSerializer, UserProjectSkillNotificationSerializer


class ProjectCreatedNotificationViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = ProjectCreatedNotification.objects.all()
    serializer_class = ProjectCreatedNotificationSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return self.queryset.filter(project__in=self.request.user.project_set.all())


class UserProjectSkillNotificationViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = UserProjectSkillNotification.objects.all()
    serializer_class = UserProjectSkillNotificationSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return self.queryset.filter(user=self.request.user)

    def mark_as_read(self, request, pk=None):
        notification = self.get_object()
        notification.is_read = True
        notification.save()
        return Response({'status': 'notification marked as read'})
