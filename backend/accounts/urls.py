from django.urls import include, path
from rest_framework.routers import DefaultRouter
from .views import ProfileViewSet, RegisterViewSet, \
    LoginViewSet, get_groups, ProfileImageViewSet

router = DefaultRouter()
router.register(r'registration', RegisterViewSet, basename='register')
router.register(r'login', LoginViewSet, basename='login')
router.register(r'profile', ProfileViewSet, basename='profile')
# accounts/profile-images/upload-profile-image/
router.register(r'profile-images', ProfileImageViewSet, basename='profile-images')

urlpatterns = [
    path('', include(router.urls)),
    # FIXME:
    # path('api/groups/', get_groups, name='get_groups'),
]
