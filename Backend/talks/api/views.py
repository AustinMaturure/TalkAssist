from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from .serializers import TalkSerializer, PopSerializer
from accounts.models import UserProfile
from talks.models import Talk, Pop


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def GetTalks(request):
    username = request.headers.get('Username')

    if not username:
        return Response({"error": "Username not provided"}, status=400)

    try:
        user_talks = Talk.objects.filter(user__user__username=username)
        serializer = TalkSerializer(user_talks, many=True) 
        return Response(serializer.data)
    except Exception as e:
        print(f"Error: {e}")  
        return Response({"error": str(e)}, status=500)



@api_view(['POST'])
@permission_classes([IsAuthenticated])
def AddTalk(request):
    serializer = TalkSerializer(data=request.data)
    
    if serializer.is_valid(): 
        user_profile = UserProfile.objects.get(user=request.user)
        serializer.save(user=user_profile) 
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(["POST"])
def addPop(request):
    serializer = PopSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.http)