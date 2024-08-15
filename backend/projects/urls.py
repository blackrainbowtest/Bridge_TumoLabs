from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProjectViewSet, GoalViewSet, ObjectiveViewSet, SupportNeededViewSet, SkillRequiredViewSet, \
    AdditionalNoteViewSet

router = DefaultRouter()
router.register(r'projects', ProjectViewSet, basename='projects')
router.register(r'goals', GoalViewSet, basename='goals')
router.register(r'objectives', ObjectiveViewSet, basename='objectives')
router.register(r'support_needed', SupportNeededViewSet, basename='support_needed')
router.register(r'skills_required', SkillRequiredViewSet, basename='skills_required')
router.register(r'additional_notes', AdditionalNoteViewSet, basename='additional_notes')

urlpatterns = [
    path('', include(router.urls)),
]
