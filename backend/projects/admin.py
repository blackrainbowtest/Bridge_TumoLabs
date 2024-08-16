from django.contrib import admin
from .models import Project, Goal, Objective, SupportNeeded, SkillRequired, AdditionalNote, ProjectImage
# Register your models here.

admin.site.register(Project)
admin.site.register(Goal)
admin.site.register(Objective)
admin.site.register(SupportNeeded)
admin.site.register(SkillRequired)
admin.site.register(AdditionalNote)
admin.site.register(ProjectImage)
