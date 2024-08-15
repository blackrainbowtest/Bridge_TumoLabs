from django.db import models
from django.contrib.auth.models import User


class Project(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='projects')
    title = models.CharField(max_length=255)
    description = models.TextField()
    problem_challenge = models.TextField()
    start_date = models.DateField()
    end_date = models.DateField()
    budget = models.DecimalField(max_digits=10, decimal_places=2)
    location = models.CharField(max_length=255)
    business_name = models.CharField(max_length=255)
    business_description = models.TextField()

    def __str__(self):
        return f'Project ID: {self.id} - Title: {self.title}'


class Goal(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name='goals')
    name = models.CharField(max_length=255)
    description = models.TextField()

    def __str__(self):
        return f'Project ID: {self.id} - Title: {self.name}'


class Objective(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name='objectives')
    name = models.CharField(max_length=255)
    description = models.TextField()

    def __str__(self):
        return f'Project ID: {self.id} - Title: {self.name}'


class SupportNeeded(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name='support_needed')
    name = models.CharField(max_length=255)
    description = models.TextField()

    def __str__(self):
        return f'Project ID: {self.id} - Title: {self.name}'


class SkillRequired(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name='skills_required')
    name = models.CharField(max_length=255)
    description = models.TextField()

    def __str__(self):
        return f'Project ID: {self.id} - Title: {self.name}'


class AdditionalNote(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name='additional_notes')
    name = models.CharField(max_length=255)
    description = models.TextField()

    def __str__(self):
        return f'Project ID: {self.id} - Title: {self.name}'
