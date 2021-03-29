from rest_framework import serializers
from .models import SortInstance


class SortInstanceSerializer(serializers.ModelSerializer):
    class Meta:
        model = SortInstance
        fields = ('id', 'title', 'num_songs')
