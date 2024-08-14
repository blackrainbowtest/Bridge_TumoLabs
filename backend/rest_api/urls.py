from django.urls import include, path
from .views import PostViewSet
from rest_framework import routers

router = routers.SimpleRouter()

# router.register('posts', PostViewSet, basename='posts')

# FIXME:
urlpatterns = [
    path('', include(router.urls)),
]
