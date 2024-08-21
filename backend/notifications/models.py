from django.db import models
from django.contrib.auth.models import User
from core.models import Skill
from projects.models import Project


class ProjectCreatedNotification(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    skill = models.ForeignKey(Skill, on_delete=models.CASCADE)

    class Meta:
        unique_together = ('project', 'skill')  # uniqueness check

    def __str__(self):
        return f'Project {self.project.id} with Skill {self.skill.name}'


class UserProjectSkillNotification(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    skill = models.ForeignKey(Skill, on_delete=models.CASCADE)
    is_read = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    read_at = models.DateTimeField(null=True, blank=True)

    class Meta:
        unique_together = ('user', 'project')

    def __str__(self):
        return f'User {self.user.id} - Project {self.project.id}'
