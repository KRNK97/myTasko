from django.db import models
from users.models import CustomUser
from django.utils import timezone


class Task(models.Model):
    title = models.CharField(max_length=200)
    status = models.BooleanField(default=False)
    date = models.DateTimeField(default=timezone.now)
    creator_id = models.ForeignKey(
        CustomUser, related_name="tasks", on_delete=models.CASCADE)

    def __str__(self):
        return f"Title - {self.title} || Completed - {self.status} || Creator ID = {self.creator_id}"
