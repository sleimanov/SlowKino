from rest_framework import generics, status
from rest_framework.decorators import permission_classes, api_view
from django.core.exceptions import EmptyResultSet
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.models import User
from django.http import Http404
from rest_framework.response import Response

from api.models import Genre, Actor, Comment, Movie, UserProfile
from api.serializers import GenreSerializer, ActorSerializer, CommentSerializer, MovieSerializer, UserProfileSerializer

class MovieList(generics.ListAPIView):
    serializer_class = MovieSerializer
    queryset = Movie.objects.all()

class UserProfileList(generics.ListAPIView):
    serializer_class = UserProfileSerializer
    queryset = UserProfile.objects.all()

class ActorList(generics.ListAPIView):
    serializer_class = ActorSerializer
    queryset = Actor.objects.all()

class GenreList(generics.ListAPIView):
    serializer_class = GenreSerializer
    queryset = Genre.objects.all()

class ActorDetail(generics.RetrieveAPIView):
    serializer_class = ActorSerializer
    queryset = Actor.objects.all()

class MovieDetail(generics.RetrieveAPIView):
    serializer_class = MovieSerializer
    queryset = Movie.objects.all()

class GenreMovies(generics.ListAPIView):
    serializer_class = MovieSerializer
    def get_queryset(self):
        try:
            genre = Genre.objects.get(id = self.kwargs.get('pk'))
        except EmptyResultSet:
            raise Http404
        queryset = genre.movies
        return queryset

class ActorMovies(generics.ListAPIView):
    serializer_class = MovieSerializer
    def get_queryset(self):
        try:
            actor = Actor.objects.get(id = self.kwargs.get('pk'))
        except EmptyResultSet:
            raise Http404
        queryset = actor.movie
        return queryset

class MovieComments(generics.ListAPIView):
    serializer_class = CommentSerializer

    def get_queryset(self):
        try:
            movie = Movie.objects.get(id = self.kwargs.get('pk'))
        except EmptyResultSet:
            raise Http404
        queryset = movie.comments
        return queryset

@api_view(['POST'])
def comment_create(request):
    serializer = CommentSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response({'error': serializer.errors},
                    status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class MovieActors(generics.ListAPIView):
    serializer_class = ActorSerializer
    def get_queryset(self):
        try:
            movie = Movie.objects.get(id = self.kwargs.get('pk'))
        except EmptyResultSet:
            raise Http404
        queryset = movie.cast
        return queryset


class CommentList(generics.ListAPIView):
    serializer_class = CommentSerializer
    queryset = Comment.objects.all()
