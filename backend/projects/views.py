from django.shortcuts import render

from rest_framework.parsers import MultiPartParser, FormParser, JSONParser
from rest_framework.permissions import AllowAny, IsAuthenticatedOrReadOnly, IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from rest_framework import viewsets


from .models import Project, Goal, Objective, SupportNeeded, SkillRequired, AdditionalNote
from .serializers import ProjectSerializer, GoalSerializer, ObjectiveSerializer, SupportNeededSerializer, \
    SkillRequiredSerializer, AdditionalNoteSerializer
from .permissions import IsAdminOrOwner

from projects.models import Project
from projects.serializers import ProjectSerializer
from notifications.models import UserProjectSkillNotification
from core.models import Skill
from django.contrib.auth.models import User


class ProjectViewSet(viewsets.ModelViewSet):
    authentication_classes = [TokenAuthentication]
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    parser_classes = [MultiPartParser, FormParser, JSONParser]

    def get_permissions(self):
        if self.action in ['create', 'update', 'partial_update', 'destroy']:
            return [IsAuthenticated(), IsAdminOrOwner()]
        return [AllowAny()]

    def perform_create(self, serializer):
        project = serializer.save(user=self.request.user)

        # Создание уведомлений
        skills_required = project.skills_required.all()  # Это QuerySet объектов SkillRequired

        for skill_required in skills_required:
            skill = skill_required.skill  # Получаем экземпляр Skill из SkillRequired

            if isinstance(skill, Skill):  # Проверяем, что это экземпляр Skill
                users_with_skill = User.objects.filter(
                    innovator_profile__skills=skill
                )  # Замените 'innovator_profile' на правильное имя связи, если необходимо

                for user in users_with_skill:
                    # Проверяем наличие существующей записи для пользователя и проекта
                    notification_exists = UserProjectSkillNotification.objects.filter(
                        user=user,
                        project=project
                    ).exists()

                    if not notification_exists:
                        UserProjectSkillNotification.objects.create(
                            user=user,
                            project=project,
                            skill=skill
                        )
            else:
                # Логирование или обработка ошибки, если skill не является экземпляром Skill
                print(f"Error: {skill} is not a Skill instance.")

class GoalViewSet(viewsets.ModelViewSet):
    authentication_classes = [TokenAuthentication]
    queryset = Goal.objects.all()
    serializer_class = GoalSerializer


class ObjectiveViewSet(viewsets.ModelViewSet):
    authentication_classes = [TokenAuthentication]
    queryset = Objective.objects.all()
    serializer_class = ObjectiveSerializer


class SupportNeededViewSet(viewsets.ModelViewSet):
    authentication_classes = [TokenAuthentication]
    queryset = SupportNeeded.objects.all()
    serializer_class = SupportNeededSerializer


class SkillRequiredViewSet(viewsets.ModelViewSet):
    authentication_classes = [TokenAuthentication]
    queryset = SkillRequired.objects.all()
    serializer_class = SkillRequiredSerializer


class AdditionalNoteViewSet(viewsets.ModelViewSet):
    authentication_classes = [TokenAuthentication]
    queryset = AdditionalNote.objects.all()
    serializer_class = AdditionalNoteSerializer
