from rest_framework import serializers
from .models import Project, Goal, Objective, SupportNeeded, SkillRequired, AdditionalNote


class GoalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Goal
        fields = ['name', 'description']


class ObjectiveSerializer(serializers.ModelSerializer):
    class Meta:
        model = Objective
        fields = ['name', 'description']


class SupportNeededSerializer(serializers.ModelSerializer):
    class Meta:
        model = SupportNeeded
        fields = ['name', 'description']


class SkillRequiredSerializer(serializers.ModelSerializer):
    class Meta:
        model = SkillRequired
        fields = ['name', 'description']


class AdditionalNoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = AdditionalNote
        fields = ['name', 'description']


class ProjectSerializer(serializers.ModelSerializer):
    goals = GoalSerializer(many=True, required=False)
    objectives = ObjectiveSerializer(many=True, required=False)
    support_needed = SupportNeededSerializer(many=True, required=False)
    skills_required = SkillRequiredSerializer(many=True, required=False)
    additional_notes = AdditionalNoteSerializer(many=True, required=False)

    class Meta:
        model = Project
        fields = ['title', 'description', 'problem_challenge', 'goals', 'objectives', 'support_needed',
                  'skills_required', 'additional_notes', 'start_date', 'end_date', 'budget', 'location',
                  'business_name', 'business_description']
        read_only_fields = ['user']

    def create(self, validated_data):
        # Извлекаем вложенные данные
        goals_data = validated_data.pop('goals', [])
        objectives_data = validated_data.pop('objectives', [])
        support_needed_data = validated_data.pop('support_needed', [])
        skills_required_data = validated_data.pop('skills_required', [])
        additional_notes_data = validated_data.pop('additional_notes', [])

        # Создаем проект
        project = Project.objects.create(**validated_data)

        # Создаем связанные объекты
        for goal_data in goals_data:
            Goal.objects.create(project=project, **goal_data)

        for objective_data in objectives_data:
            Objective.objects.create(project=project, **objective_data)

        for support_needed_data in support_needed_data:
            SupportNeeded.objects.create(project=project, **support_needed_data)

        for skill_required_data in skills_required_data:
            SkillRequired.objects.create(project=project, **skill_required_data)

        for additional_note_data in additional_notes_data:
            AdditionalNote.objects.create(project=project, **additional_note_data)

        return project
