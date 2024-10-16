from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .serializers import TalkSerializer, PopSerializer
from talks.models import Talk, Pop


@api_view(['GET'])
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
def AddTalk(request):
    serializer = TalkSerializer(request.data)
    if (serializer.is_valid):
        talk = serializer.save()
        Talk.objects.create(talk=talk).save()
        return Response( status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
