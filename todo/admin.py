from django.contrib import admin
from .models import Task
# Register your models here.


class TaskAdmin(admin.ModelAdmin):
    list_display = ('title', 'status', 'date', 'creator_id')
    list_filter = ('status', 'creator_id')


admin.site.register(Task, TaskAdmin)
