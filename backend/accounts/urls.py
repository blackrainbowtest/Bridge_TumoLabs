from django.urls import include, path
from rest_framework.routers import DefaultRouter
from .views import DynamicProfileViewSet, RegisterViewSet, \
    LoginViewSet, get_groups, ProfileViewSet

router = DefaultRouter()
router.register(r'registration', RegisterViewSet, basename='register')
router.register(r'login', LoginViewSet, basename='login')
router.register(r'profiles', DynamicProfileViewSet, basename='profile')
# accounts/profile-images/upload-profile-image/
router.register(r'profile-images', ProfileViewSet, basename='profile-images')

urlpatterns = [
    path('', include(router.urls)),
    # FIXME:
    # path('api/groups/', get_groups, name='get_groups'),
]
