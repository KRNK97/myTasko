from django.contrib import admin
from django.urls import path, include
from .views import CreateUserView, CreateTaskView, ListTaskView, ManageTaskView, ChangeStatus, getUser

urlpatterns = [
    path('register/', CreateUserView.as_view(), name="register"),
    path('tasks/add/', CreateTaskView.as_view(), name="add"),
    path('tasks/all/', ListTaskView.as_view(), name="list"),
    path('tasks/<int:pk>/', ManageTaskView.as_view(), name="manage_task"),
    path('tasks/<int:pk>/status/', ChangeStatus.as_view(), name="status_change"),
    path('getuser/', getUser.as_view(), name="getuser"),
]
