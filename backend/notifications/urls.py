from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProjectCreatedNotificationViewSet, UserProjectSkillNotificationViewSet

router = DefaultRouter()
router.register(r'project-created-notifications', ProjectCreatedNotificationViewSet)
router.register(r'user-project-skill-notifications', UserProjectSkillNotificationViewSet)

urlpatterns = [
    path('', include(router.urls)),
]