from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from users.models import CustomUser
from todo.models import Task


class UserSerializer(ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ("id", "username", "email", "password")

        extra_kwargs = {
            'password': {
                'write_only': True
            }
        }

    # we need to override create method so that we can save encrypted pw instead of plain text
    def create(self, validated_data):
        password = validated_data['password']           # get entered password
        instance = self.Meta.model(**validated_data)

        if password is not None:
            # save the encrypted password to instance
            instance.set_password(password)
        instance.save()                                 # save user
        return instance


class TaskSerializer(ModelSerializer):
    # add current user as creator by default
    creator_id = serializers.HiddenField(
        default=serializers.CurrentUserDefault())

    class Meta:
        model = Task
        fields = ("id", "title", "status", 'date', "creator_id")

        read_only_fields = ['date', ]

    # def create(self, validated_data):
    #     print(validated_data)
    #     instance = self.Meta.model(**validated_data)
    #     instance.creator =
    #     instance.save()
    #     return instance
