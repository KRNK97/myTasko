from rest_framework.permissions import BasePermission


class CreatorPermission(BasePermission):
    def has_object_permission(self, request, view, obj):
        print(request.user.id, obj.creator_id.id)
        if request.user.id == obj.creator_id.id:
            return True

        return False
