from django.contrib.auth import get_user_model, authenticate
from django.contrib.auth.models import Group
from rest_framework import serializers
from .models import InnovatorProfile, PartnerProfile, AdvisorProfile, ProfileImage


class InnovatorProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = InnovatorProfile
        fields = '__all__'
        read_only_fields = ['user']

    def create(self, validated_data):
        user = self.context['request'].user
        profile, created = InnovatorProfile.objects.get_or_create(user=user, defaults=validated_data)
        return profile


class PartnerProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = PartnerProfile
        fields = '__all__'
        read_only_fields = ['user']

    def create(self, validated_data):
        user = self.context['request'].user
        profile, created = PartnerProfile.objects.get_or_create(user=user, defaults=validated_data)
        return profile


class AdvisorProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = AdvisorProfile
        fields = '__all__'
        read_only_fields = ['user']

    def create(self, validated_data):
        user = self.context['request'].user
        profile, created = AdvisorProfile.objects.get_or_create(user=user, defaults=validated_data)
        return profile


# Account Registration serializer
class UserSerializer(serializers.ModelSerializer):
    group = serializers.PrimaryKeyRelatedField(
        queryset=Group.objects.all(),
        required=False
    )
    confirmPassword = serializers.CharField(write_only=True)

    class Meta:
        model = get_user_model()
        fields = ["username", "email", "password", "confirmPassword", "last_name", "first_name", "group"]
        extra_kwargs = {'password': {'write_only': True}}

    def validate(self, data):
        if data['password'] != data['confirmPassword']:
            raise serializers.ValidationError({"confirmPassword": "Passwords must match."})
        return data

    def create(self, validated_data):
        group = validated_data.pop('group', None)
        user = get_user_model()(
            username=validated_data['username'],
            email=validated_data['email'],
            first_name=validated_data.get('first_name', ''),
            last_name=validated_data.get('last_name', '')
        )
        user.set_password(validated_data['password'])
        user.save()

        if group:
            user.groups.add(group)
        else:
            default_group = Group.objects.get(id=1)
            user.groups.add(default_group)

        if group.name == 'innovators':
            InnovatorProfile.objects.create(user=user)
        elif group.name == 'partners':
            PartnerProfile.objects.create(user=user)
        elif group.name == 'advisors':
            AdvisorProfile.objects.create(user=user)

        return user


# Account Login serializer
class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField(write_only=True)

    def validate(self, data):
        username = data.get('username')
        password = data.get('password')

        if username and password:
            user = authenticate(request=self.context.get('request'), username=username, password=password)

            if not user:
                raise serializers.ValidationError('Invalid username or password')
        else:
            raise serializers.ValidationError('Must include "username" and "password".')

        data['user'] = user
        return data


class ProfileImageSerializer(serializers.ModelSerializer):
    user = serializers.HiddenField(default=serializers.CurrentUserDefault())

    class Meta:
        model = ProfileImage
        fields = ['id', 'user', 'image', 'name', 'uploaded_at']
        read_only_fields = ['user', 'uploaded_at']

    def create(self, validated_data):
        profile_image = ProfileImage.objects.create(**validated_data)
        return profile_image
