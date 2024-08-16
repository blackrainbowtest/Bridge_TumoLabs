from rest_framework import serializers
from .models import Project, Goal, Objective, SupportNeeded, SkillRequired, AdditionalNote, ProjectImage


class GoalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Goal
        fields = ['id', 'name', 'description']


class ObjectiveSerializer(serializers.ModelSerializer):
    class Meta:
        model = Objective
        fields = ['id', 'name', 'description']


class SupportNeededSerializer(serializers.ModelSerializer):
    class Meta:
        model = SupportNeeded
        fields = ['id', 'name', 'description']


class SkillRequiredSerializer(serializers.ModelSerializer):
    class Meta:
        model = SkillRequired
        fields = ['id', 'name', 'description']


class AdditionalNoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = AdditionalNote
        fields = ['id', 'name', 'description']


class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectImage
        fields = ['id', 'image', 'is_main']


class ProjectSerializer(serializers.ModelSerializer):
    goals = GoalSerializer(many=True, required=False)
    objectives = ObjectiveSerializer(many=True, required=False)
    support_needed = SupportNeededSerializer(many=True, required=False)
    skills_required = SkillRequiredSerializer(many=True, required=False)
    additional_notes = AdditionalNoteSerializer(many=True, required=False)
    images = ImageSerializer(many=True, required=False, allow_null=True)

    class Meta:
        model = Project
        fields = ['id', 'title', 'description', 'problem_challenge', 'goals', 'objectives', 'support_needed',
                  'skills_required', 'additional_notes', 'start_date', 'end_date', 'budget', 'location',
                  'business_name', 'business_description', 'images']
        read_only_fields = ['user']

    def create(self, validated_data):
        # Extracting nested data
        goals_data = validated_data.pop('goals', [])
        objectives_data = validated_data.pop('objectives', [])
        support_needed_data = validated_data.pop('support_needed', [])
        skills_required_data = validated_data.pop('skills_required', [])
        additional_notes_data = validated_data.pop('additional_notes', [])
        # Extract images
        images_data = self.context['request'].data.get('images', [])

        # Create a project
        project = Project.objects.create(**validated_data)

        # Create related objects
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

        # Create images
        for index, image_data in enumerate(images_data):
            image = ProjectImage.objects.create(project=project, **image_data)
            # Set first image as main
            if index == 0:
                project.main_image = image
                project.save()

        return project

    def update(self, instance, validated_data):
        # Extract nested data
        goals_data = validated_data.pop('goals', [])
        objectives_data = validated_data.pop('objectives', [])
        support_needed_data = validated_data.pop('support_needed', [])
        skills_required_data = validated_data.pop('skills_required', [])
        additional_notes_data = validated_data.pop('additional_notes', [])
        # Extract images
        images_data = self.context['request'].data.getlist('images')

        # Updating the main project fields
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()

        # Updating goals
        for goal_data in goals_data:
            if 'id' in goal_data:
                goal = Goal.objects.get(id=goal_data['id'])
                for attr, value in goal_data.items():
                    setattr(goal, attr, value)
                goal.save()
            else:
                Goal.objects.create(project=instance, **goal_data)

        # Updating tasks
        for objective_data in objectives_data:
            if 'id' in objective_data:
                objective = Objective.objects.get(id=objective_data['id'])
                for attr, value in objective_data.items():
                    setattr(objective, attr, value)
                objective.save()
            else:
                Objective.objects.create(project=instance, **objective_data)

        # Updating support
        for support_needed_data in support_needed_data:
            if 'id' in support_needed_data:
                support_needed = SupportNeeded.objects.get(id=support_needed_data['id'])
                for attr, value in support_needed_data.items():
                    setattr(support_needed, attr, value)
                support_needed.save()
            else:
                SupportNeeded.objects.create(project=instance, **support_needed_data)

        # Updating skills
        for skill_required_data in skills_required_data:
            if 'id' in skill_required_data:
                skill_required = SkillRequired.objects.get(id=skill_required_data['id'])
                for attr, value in skill_required_data.items():
                    setattr(skill_required, attr, value)
                skill_required.save()
            else:
                SkillRequired.objects.create(project=instance, **skill_required_data)

        # Updating additional notes
        for additional_note_data in additional_notes_data:
            if 'id' in additional_note_data:
                additional_note = AdditionalNote.objects.get(id=additional_note_data['id'])
                for attr, value in additional_note_data.items():
                    setattr(additional_note, attr, value)
                additional_note.save()
            else:
                AdditionalNote.objects.create(project=instance, **additional_note_data)

        # Updating images
        for image_data in images_data:
            if 'id' in image_data:
                image = ProjectImage.objects.get(id=image_data['id'])
                for attr, value in image_data.items():
                    setattr(image, attr, value)
                image.save()

                # If the image being updated is specified as the main one, we update the project
                if image_data.get('is_main', False):
                    instance.main_image = image
                    instance.save()
            else:
                new_image = ProjectImage.objects.create(project=instance, **image_data)

                # If the new image is specified as the main one, we update the project
                if image_data.get('is_main', False):
                    instance.main_image = new_image
                    instance.save()

        return instance
