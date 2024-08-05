from django.contrib.auth import get_user_model
from rest_framework import viewsets, status, mixins
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from .serializers import UserSerializer, LoginSerializer
from django.contrib.auth import authenticate
from django.contrib.auth import login
from .models import StudentProfile, BusinessProfile, UniversityProfile
from .serializers import StudentProfileSerializer, BusinessProfileSerializer, UniversityProfileSerializer
from .permissions import check_group
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from django.contrib.auth.models import Group
from django.http import JsonResponse


# User registration
class RegisterViewSet(viewsets.GenericViewSet,
                      mixins.ListModelMixin,
                      mixins.CreateModelMixin,
                      mixins.RetrieveModelMixin,
                      mixins.UpdateModelMixin,
                      mixins.DestroyModelMixin):
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
                return Response({
                    'token': str(token.key),
                    'user': {
                        'id': user.id,
                        'username': user.username,
                        'email': user.email,
                        "last_name": user.last_name,
                        "first_name": user.first_name,
                    }
                }, status=status.HTTP_200_OK)
            else:
                return Response({'error': 'Invalid credentials'}, status=status.HTTP_400_BAD_REQUEST)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class StudentProfileViewSet(viewsets.ModelViewSet):
    queryset = StudentProfile.objects.all()
    serializer_class = StudentProfileSerializer

    @check_group(1)  # Проверка на группу с id=1 (student)
    def create(self, request, *args, **kwargs):
        return super().create(request, *args, **kwargs)

    @check_group(1)
    def update(self, request, *args, **kwargs):
        return super().update(request, *args, **kwargs)

    @check_group(1)
    def partial_update(self, request, *args, **kwargs):
        return super().partial_update(request, *args, **kwargs)

    @check_group(1)
    def destroy(self, request, *args, **kwargs):
        return super().destroy(request, *args, **kwargs)


class BusinessProfileViewSet(viewsets.ModelViewSet):
    queryset = BusinessProfile.objects.all()
    serializer_class = BusinessProfileSerializer

    @check_group(2)  # Проверка на группу с id=2 (business)
    def create(self, request, *args, **kwargs):
        return super().create(request, *args, **kwargs)

    @check_group(2)
    def update(self, request, *args, **kwargs):
        return super().update(request, *args, **kwargs)

    @check_group(2)
    def partial_update(self, request, *args, **kwargs):
        return super().partial_update(request, *args, **kwargs)

    @check_group(2)
    def destroy(self, request, *args, **kwargs):
        return super().destroy(request, *args, **kwargs)


class UniversityProfileViewSet(viewsets.ModelViewSet):
    queryset = UniversityProfile.objects.all()
    serializer_class = UniversityProfileSerializer

    @check_group(3)  # Проверка на группу с id=3 (university)
    def create(self, request, *args, **kwargs):
        return super().create(request, *args, **kwargs)

    @check_group(3)
    def update(self, request, *args, **kwargs):
        return super().update(request, *args, **kwargs)

    @check_group(3)
    def partial_update(self, request, *args, **kwargs):
        return super().partial_update(request, *args, **kwargs)

    @check_group(3)
    def destroy(self, request, *args, **kwargs):
        return super().destroy(request, *args, **kwargs)


# GET account groups
def get_groups(request):
    groups = Group.objects.all()
    groups_list = list(groups.values('id', 'name'))
    return JsonResponse(groups_list, safe=False)
