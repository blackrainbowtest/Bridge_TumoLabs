"""
ASGI config for bridge project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/5.0/howto/deployment/asgi/
"""

import os
import django

from django.core.asgi import get_asgi_application
from channels.routing import ProtocolTypeRouter, URLRouter
from channels.auth import AuthMiddlewareStack
import notifications.routing

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'bridge.settings')
# django.setup()

# from notifications import routing as notifications_routing


application = ProtocolTypeRouter({
    "http": get_asgi_application(),
    "websocket":
        AuthMiddlewareStack(
            URLRouter(
                notifications.routing.websocket_urlpatterns
            )

    ),
})
