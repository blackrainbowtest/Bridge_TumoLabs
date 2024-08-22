from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .models import ProjectCreatedNotification, UserProjectSkillNotification
from .serializers import ProjectCreatedNotificationSerializer, UserProjectSkillNotificationSerializer
from rest_framework.exceptions import PermissionDenied
from rest_framework import status
from rest_framework.decorators import action


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

    @action(detail=True, methods=['post'])
    def mark_as_read(self, request, pk=None):
        try:
            notification = self.get_object()
        except UserProjectSkillNotification.DoesNotExist:
            return Response({'detail': 'Notification not found.'}, status=status.HTTP_404_NOT_FOUND)

        # Проверяем, что текущий пользователь является владельцем уведомления
        if notification.user != request.user:
            raise PermissionDenied("You do not have permission to mark this notification as read.")

        notification.is_read = True
        notification.save()
        
        serializer = self.get_serializer(notification)
        return Response(serializer.data, status=status.HTTP_200_OK)
