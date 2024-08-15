from django.shortcuts import render

from rest_framework import viewsets
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import AllowAny, IsAuthenticatedOrReadOnly, IsAuthenticated

from .models import Project, Goal, Objective, SupportNeeded, SkillRequired, AdditionalNote
from .serializers import ProjectSerializer, GoalSerializer, ObjectiveSerializer, SupportNeededSerializer, SkillRequiredSerializer, AdditionalNoteSerializer


class ProjectViewSet(viewsets.ModelViewSet):
    authentication_classes = [TokenAuthentication]
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

    def get_permissions(self):
        if self.action in ['create', 'update', 'partial_update', 'destroy']:
            return [IsAuthenticated()]
        return [AllowAny()]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class GoalViewSet(viewsets.ModelViewSet):
    queryset = Goal.objects.all()
    serializer_class = GoalSerializer


class ObjectiveViewSet(viewsets.ModelViewSet):
    queryset = Objective.objects.all()
    serializer_class = ObjectiveSerializer


class SupportNeededViewSet(viewsets.ModelViewSet):
    queryset = SupportNeeded.objects.all()
    serializer_class = SupportNeededSerializer


class SkillRequiredViewSet(viewsets.ModelViewSet):
    queryset = SkillRequired.objects.all()
    serializer_class = SkillRequiredSerializer


class AdditionalNoteViewSet(viewsets.ModelViewSet):
    queryset = AdditionalNote.objects.all()
    serializer_class = AdditionalNoteSerializer
