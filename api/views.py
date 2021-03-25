from django.shortcuts import render
from rest_framework.generics import CreateAPIView, ListAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.views import APIView
from todo.models import Task
from users.models import CustomUser
from .serializers import UserSerializer, TaskSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .permissions import CreatorPermission


class CreateUserView(CreateAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer


class CreateTaskView(CreateAPIView):
    queryset = Task.objects.all()
    permission_classes = (IsAuthenticated,)
    serializer_class = TaskSerializer


class ListTaskView(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        print(request.user.id)

        serializer = TaskSerializer(Task.objects.filter(
            creator_id=request.user.id).order_by('-date'), many=True)
        print(serializer.data)

        return Response({"tasks": serializer.data})


class ManageTaskView(RetrieveUpdateDestroyAPIView):
    permission_classes = (CreatorPermission,)
    serializer_class = TaskSerializer
    queryset = Task.objects.all()


class ChangeStatus(APIView):
    permission_classes = (CreatorPermission,)

    def get(self, request, pk):
        task = Task.objects.filter(id=pk).first()

        serializer = TaskSerializer(task)
        self.check_object_permissions(request, task)

        return Response({"task": serializer.data})

    def post(self, request, pk):
        task = Task.objects.filter(id=pk).first()
        task.status = not task.status
        task.save()

        serializer = TaskSerializer(task)
        self.check_object_permissions(request, task)

        return Response({"task": serializer.data})


class getUser(APIView):
    def get(self, request):
        if request.user.id:
            user = CustomUser.objects.get(id=request.user.id)
            return Response({"current_user": user.username})

        return Response({"current_user": ""})
