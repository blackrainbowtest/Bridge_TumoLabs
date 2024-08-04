from functools import wraps
from rest_framework.response import Response
from rest_framework import status


def check_group(group_id):
    def decorator(view_func):
        @wraps(view_func)
        def _wrapped_view(viewset, request, *args, **kwargs):
            user = request.user
            if not user.is_authenticated:
                return Response({'detail': 'Authentication credentials were not provided.'},
                                status=status.HTTP_401_UNAUTHORIZED)

            # Отладочные сообщения
            print("______________________________")
            print(f"User: {user}")
            print(f"User Groups: {user.groups.all()}")  # Получение всех групп пользователя

            if not user.groups.filter(id=group_id).exists():
                return Response({'detail': 'You do not have permission to perform this action.'},
                                status=status.HTTP_403_FORBIDDEN)

            return view_func(viewset, request, *args, **kwargs)

        return _wrapped_view

    return decorator
