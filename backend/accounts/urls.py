from django.urls import include, path
from rest_framework.routers import DefaultRouter
from .views import DynamicProfileViewSet, RegisterViewSet, \
    LoginViewSet, get_groups

router = DefaultRouter()
router.register(r'registration', RegisterViewSet, basename='register')
router.register(r'login', LoginViewSet, basename='login')
router.register(r'profiles', DynamicProfileViewSet, basename='profile')

urlpatterns = [
    path('', include(router.urls)),
    path('api/groups/', get_groups, name='get_groups'),
]
