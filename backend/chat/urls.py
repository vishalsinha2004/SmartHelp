from django.urls import path
from .views import chat_response, get_chat_history

urlpatterns = [
    path("chat/", chat_response),
    path("history/", get_chat_history),
]
