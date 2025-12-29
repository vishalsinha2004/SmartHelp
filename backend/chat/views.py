from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .ai import get_ai_response
from .models import ChatHistory

@api_view(['POST'])
def chat_response(request):
    user_message = request.data.get("message")

    if not user_message:
        return Response(
            {"error": "Message is required"},
            status=status.HTTP_400_BAD_REQUEST
        )

    try:
        # Get AI reply
        ai_reply = get_ai_response(user_message)

        # Save to database
        ChatHistory.objects.create(
            user_message=user_message,
            ai_reply=ai_reply
        )

        return Response({
            "user": user_message,
            "reply": ai_reply
        }, status=status.HTTP_200_OK)

    except Exception as e:
        return Response({
            "error": "Internal Server Error",
            "details": str(e)
        }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
@api_view(['GET'])
def get_chat_history(request):
    chats = ChatHistory.objects.order_by("-created_at")
    data = [
        {
            "user": chat.user_message,
            "reply": chat.ai_reply,
            "time": chat.created_at
        } for chat in chats
    ]
    return Response(data)