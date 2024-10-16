from talks.models import Talk, Pop
from rest_framework import serializers


class TalkSerializer(serializers.ModelSerializer):
    class Meta:
        model= Talk
        fields = '__all__'

class PopSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pop
        fields = '__all__'

