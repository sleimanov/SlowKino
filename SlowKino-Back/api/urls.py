from django.conf import settings
from django.urls import path

from api.views_cbv import MovieList, MovieDetail, ActorList, ActorDetail, \
    GenreList, GenreMovies, UserProfileList, ActorMovies, MovieComments, comment_create, MovieActors, CommentList
from api.auth import login, logout, signup

urlpatterns = [
    path('movies/', MovieList.as_view()),
    path('comments/', CommentList.as_view()),
    path('movies/<int:pk>', MovieDetail.as_view()),
    path('movies/<int:pk>/comments', MovieComments.as_view()),
    path('movies/<int:pk>/actors', MovieActors.as_view()),
    path('actors/', ActorList.as_view()),
    path('actors/<int:pk>', ActorDetail.as_view()),
    path('genres/', GenreList.as_view()),
    path('create_comment/', comment_create),
    path('genres/<int:pk>/movies', GenreMovies.as_view()),
    path('actors/<int:pk>/movies', ActorMovies.as_view()),
    path('users/', UserProfileList.as_view()),

    path('login/', login),
    path('logout/', logout),
    path('signup/', signup)
]