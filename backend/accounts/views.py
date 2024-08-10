from django.contrib.auth import get_user_model
from rest_framework import viewsets, status, mixins
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from .serializers import UserSerializer, LoginSerializer
from django.contrib.auth import authenticate
from django.contrib.auth import login
from .models import InnovatorProfile, PartnerProfile, AdvisorProfile
from .serializers import InnovatorProfileSerializer, PartnerProfileSerializer, AdvisorProfileSerializer
from .permissions import check_group
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from django.contrib.auth.models import Group
from django.http import JsonResponse
from rest_framework.decorators import action


# User registration
class RegisterViewSet(viewsets.GenericViewSet, mixins.CreateModelMixin):
    serializer_class = UserSerializer
    queryset = get_user_model().objects.all()

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            email = serializer.validated_data.get('email')
            if get_user_model().objects.filter(email=email).exists():
                return Response({'email': 'Email is already in use.'}, status=status.HTTP_400_BAD_REQUEST)
            self.perform_create(serializer)
            headers = self.get_success_headers(serializer.data)
            return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# User Login
@method_decorator(csrf_exempt, name='dispatch')
class LoginViewSet(viewsets.GenericViewSet, mixins.CreateModelMixin):
    serializer_class = LoginSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)

        if serializer.is_valid():
            user = authenticate(username=serializer.validated_data['username'],
                                password=serializer.validated_data['password'])
            if user:
                login(request, user)
                token, created = Token.objects.get_or_create(user=user)
                group = user.groups.first()
                return Response({
                    'token': str(token.key),
                    'user': {
                        'id': user.id,
                        'username': user.username,
                        'email': user.email,
                        "last_name": user.last_name,
                        "first_name": user.first_name,
                        "group": {
                            "id": group.id,
                            "name": group.name
                        } if group else None
                    }
                }, status=status.HTTP_200_OK)
            else:
                return Response({'error': 'Invalid credentials'}, status=status.HTTP_400_BAD_REQUEST)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=False, methods=['post'], url_path='token-login')
    def login_with_token(self, request):
        auth_header = request.headers.get('Authorization')
        if auth_header and auth_header.startswith('Bearer '):
            token_key = auth_header.split(' ')[1]
        else:
            token_key = None

        try:
            token = Token.objects.get(key=token_key)
            user = token.user
            group = user.groups.first()
            return Response({
                'token': str(token.key),
                'user': {
                    'id': user.id,
                    'username': user.username,
                    'email': user.email,
                    "last_name": user.last_name,
                    "first_name": user.first_name,
                    "group": {
                        "id": group.id,
                        "name": group.name
                    } if group else None
                }
            }, status=status.HTTP_200_OK)
        except Token.DoesNotExist:
            return Response({'error': 'Invalid token'}, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=False, methods=['post'], url_path='logout')
    def logout(self, request):
        auth_header = request.headers.get('Authorization')
        if auth_header and auth_header.startswith('Bearer '):
            token_key = auth_header.split(' ')[1]
        else:
            return Response({'error': 'Token not provided'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            token = Token.objects.get(key=token_key)
            token.delete()
            return Response({'message': 'Successfully logged out'}, status=status.HTTP_200_OK)
        except Token.DoesNotExist:
            return Response({'message': 'Invalid token'}, status=status.HTTP_400_BAD_REQUEST)


# Get account profile
class DynamicProfileViewSet(viewsets.ViewSet):

    def list(self, request, *args, **kwargs):
        user, group_id = self.get_user_and_group_from_token(request)

        if group_id == 1:
            queryset = InnovatorProfile.objects.filter(user=user)
            serializer = InnovatorProfileSerializer(queryset, many=True)
        elif group_id == 2:
            queryset = PartnerProfile.objects.filter(user=user)
            serializer = PartnerProfileSerializer(queryset, many=True)
        elif group_id == 3:
            queryset = AdvisorProfile.objects.filter(user=user)
            serializer = AdvisorProfileSerializer(queryset, many=True)
        else:
            return Response({'error': 'Permission denied'}, status=status.HTTP_403_FORBIDDEN)

        return Response(serializer.data)

    def retrieve(self, request, *args, **kwargs):
        user, group_id = self.get_user_and_group_from_token(request)
        profile_id = kwargs.get('pk')

        if group_id == 1:
            queryset = InnovatorProfile.objects.filter(user=user, id=profile_id)
            serializer = InnovatorProfileSerializer(queryset, many=True)
        elif group_id == 2:
            queryset = PartnerProfile.objects.filter(user=user, id=profile_id)
            serializer = PartnerProfileSerializer(queryset, many=True)
        elif group_id == 3:
            queryset = AdvisorProfile.objects.filter(user=user, id=profile_id)
            serializer = AdvisorProfileSerializer(queryset, many=True)
        else:
            return Response({'error': 'Permission denied'}, status=status.HTTP_403_FORBIDDEN)

        if not queryset.exists():
            return Response({'error': 'Not found'}, status=status.HTTP_404_NOT_FOUND)

        return Response(serializer.data)

    def get_user_and_group_from_token(self, request):
        auth_header = request.headers.get('Authorization')
        if auth_header and auth_header.startswith('Bearer '):
            token_key = auth_header.split(' ')[1]  # Извлекаем токен
        else:
            token_key = None

        try:
            token = Token.objects.get(key=token_key)
            user = token.user
            group = user.groups.first()  # Получаем первую группу пользователя
            group_id = group.id if group else None
        except Token.DoesNotExist:
            return None, None  # Токен не найден, возвращаем None

        return user, group_id


# GET account groups
def get_groups(request):
    groups = Group.objects.all()
    groups_list = list(groups.values('id', 'name'))
    return JsonResponse(groups_list, safe=False)
