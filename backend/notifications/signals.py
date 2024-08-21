from django.db.models.signals import post_save
from django.dispatch import receiver
from projects.models import Project
from .models import ProjectCreatedNotification, UserProjectSkillNotification
from core.models import Skill
from django.contrib.auth.models import User


@receiver(post_save, sender=Project)
def create_project_notifications(sender, instance, **kwargs):
    # Получаем все скиллы, связанные с новым проектом
    skill_ids = instance.skills_required.values_list('skill', flat=True)

    # Создаем уведомления о создании проекта
    for skill_id in skill_ids:
        skill = Skill.objects.get(id=skill_id)
        ProjectCreatedNotification.objects.get_or_create(
            project=instance,
            skill=skill
        )

        # Создаем уведомления для всех пользователей, которые могут быть заинтересованы
        users = User.objects.filter(skill__id=skill_id)
        for user in users:
            UserProjectSkillNotification.objects.get_or_create(
                user=user,
                project=instance,
                is_read=False
            )
