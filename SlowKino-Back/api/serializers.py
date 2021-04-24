from rest_framework import serializers
from django.contrib.auth.models import User
from api.models import Movie, Actor, Genre, Comment, UserProfile


class GenreSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()


class ActorSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()
    county = serializers.CharField()
    age = serializers.IntegerField()
    imageSrc = serializers.CharField()


class MovieSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField()
    cast = ActorSerializer(many=True)
    genres = serializers.StringRelatedField(many=True)
    class Meta:
        model = Movie
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'password', 'email')

    def create(self, validated_data):
        return User.objects.create(**validated_data)



class UserProfileSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    user = UserSerializer()
    class Meta:
        model = UserProfile
        fields = '__all__'

    def create(self, validated_data):
        return UserProfile.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.phoneNumber = validated_data.get('phoneNumber', instance.phoneNumber)
        instance.name = validated_data.get('name', instance.name)
        instance.birthDate = validated_data.get('birthDate', instance.birthDate)
        instance.mood = validated_data.get('mood', instance.mood)
        user_data = validated_data.pop('user', None)
        user = User.objects.get_or_create(**user_data)[0]
        instance.user = user
        instance.save()
        return instance


class UserProfileSerializerSignUp(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    class Meta:
        model = UserProfile
        fields = '__all__'

    def create(self, validated_data):
        return UserProfile.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.phoneNumber = validated_data.get('phoneNumber', instance.phoneNumber)
        instance.name = validated_data.get('name', instance.name)
        instance.birthDate = validated_data.get('birthDate', instance.birthDate)
        instance.mood = validated_data.get('mood', instance.mood)
        user_data = validated_data.pop('user', None)
        user = User.objects.get_or_create(**user_data)[0]
        instance.user = user
        instance.save()
        return instance


class CommentSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    class Meta:
        model = Comment
        fields = '__all__'

    def create(self, validated_data):
        movie_data = validated_data.pop('movie', None)

        return Comment.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.text = validated_data
        instance.save
        return instance