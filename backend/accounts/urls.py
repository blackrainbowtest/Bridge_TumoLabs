from django.urls import include, path
from rest_framework.routers import DefaultRouter
from .views import RegisterViewSet, LoginViewSet

router = DefaultRouter()
router.register(r'registration', RegisterViewSet, basename='register')
router.register(r'login', LoginViewSet, basename='login')

urlpatterns = [
    path('', include(router.urls)),
]
