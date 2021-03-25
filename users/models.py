from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager


class CustomManager(BaseUserManager):

    def create_user(self, username, email, password, **other_fields):
        if not email:
            raise ValueError("email can't be empty")

        email = self.normalize_email(email)
        user = self.model(username=username, email=email, **other_fields)
        user.set_password(password)
        user.save()

        return user

    def create_superuser(self, username, email, password, **other_fields):
        other_fields.setdefault("is_staff", True)
        other_fields.setdefault("is_superuser", True)

        return self.create_user(username=username, email=email, password=password, **other_fields)

    def get_queryset(self):
        return super().get_queryset().all()


class CustomUser(AbstractBaseUser, PermissionsMixin):
    username = models.CharField(max_length=150)
    email = models.EmailField(unique=True, null=False)

    objects = CustomManager()

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ("username",)

    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.email
