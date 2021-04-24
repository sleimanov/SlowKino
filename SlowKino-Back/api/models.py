from django.contrib.auth.models import User
from django.db import models

class Genre(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Actor(models.Model):
    name = models.CharField(max_length=100)
    county = models.CharField(max_length=50)
    age = models.IntegerField("Возраст", default=0)
    imageSrc = models.CharField(max_length=90, null=True)

    def __str__(self):
        return self.name

class Movie(models.Model):
    title = models.CharField(max_length=30)
    description = models.TextField()
    posterSrc = models.CharField(max_length=90, null=True)
    year = models.IntegerField()
    rating = models.FloatField(null=True)
    countries = models.CharField(max_length=50, null= True)
    cast = models.ManyToManyField(Actor, related_name="movie")
    genres = models.ManyToManyField(Genre,  related_name="movies")
    budget = models.PositiveIntegerField(null=True)

    def __str__(self):
        return self.title


class UserProfileManager(models.Manager):
    def create_user_profile(self, user, name, birthDate, aboutSelf, gender, mood):
        userProfile = self.create(user=user)
        userProfile.name = name
        userProfile.gender = gender
        userProfile.birthDate = birthDate
        userProfile.aboutSelf = aboutSelf
        userProfile.mood = mood
        userProfile.save()
        return userProfile

class UserProfile(models.Model):
    name = models.CharField(max_length=30)
    user = models.OneToOneField(User, on_delete=models.CASCADE, default=None)
    birthDate = models.DateField()
    aboutSelf = models.CharField(max_length=300)
    gender = models.CharField(max_length=50)
    mood = models.CharField(max_length=30)
    objects = UserProfileManager()

    def __str__(self):
        return self.user.username


class Comment(models.Model):
    text = models.CharField(max_length=300)
    user = models.ForeignKey(UserProfile, on_delete = models.CASCADE, related_name="comments")
    movie = models.ForeignKey(Movie, related_name="comments", on_delete = models.CASCADE)
