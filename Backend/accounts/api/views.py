from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .serializers import UserSerializer
from accounts.models import UserProfile


@api_view(['POST'])
def SignUp(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        user = serializer.save()  
        UserProfile.objects.create(user=user).save()
    
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)