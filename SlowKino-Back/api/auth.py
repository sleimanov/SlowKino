from .serializers import UserSerializer,UserProfileSerializer
from rest_framework import generics
from django.contrib.auth.models import User
from rest_framework.response import Response
from rest_framework.decorators import api_view,permission_classes
from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework.authtoken.models import Token
from rest_framework.permissions import IsAuthenticated
from .models import UserProfile
from rest_framework import status
from .models import UserProfile

@api_view(['POST'])
def login(request):
    serializer = AuthTokenSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    user = serializer.validated_data.get('user')
    token, created = Token.objects.get_or_create(user=user)
    is_staff = user.is_staff

    return Response({'token': token.key, 'is_staff': is_staff})

@api_view(['POST'])
def logout(request):
    print(request.auth)
    request.auth.delete()
    return Response('Successfully deleted')

@api_view(['POST'])
def signup(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        user = User.objects.create_user(
            username=serializer.data['username'],
            email=serializer.data['email'],
            password=serializer.data['password']
        )
        userProfile = UserProfile.objects.create_user_profile(
            # website=serializer.data['website'],
            user = user,
            # mobile=serializer.data['mobile']
        )
        return Response(serializer.data, status=status.HTTP_200_OK)
    return Response(serializer.errors)


@api_view(['GET'])
@permission_classes((IsAuthenticated,))
def this_user(request):
    print(request.user)
    serializer = UserProfileSerializer(request.user)
    return Response(serializer.data)