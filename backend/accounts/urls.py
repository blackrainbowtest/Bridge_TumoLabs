from django.urls import include, path
from rest_framework.routers import DefaultRouter
from .views import StudentProfileViewSet, BusinessProfileViewSet, UniversityProfileViewSet, RegisterViewSet, \
    LoginViewSet

router = DefaultRouter()
router.register(r'registration', RegisterViewSet, basename='register')
router.register(r'login', LoginViewSet, basename='login')
router.register(r'student-profile', StudentProfileViewSet, basename='student-profile')
router.register(r'business-profile', BusinessProfileViewSet, basename='business-profile')
router.register(r'university-profile', UniversityProfileViewSet, basename='university-profile')

urlpatterns = [
    path('', include(router.urls)),
]
