from rest_framework import serializers

from .models import Incourse

class IncourseSerializer(serializers.ModelSerializer):
  class Meta:
    model=Incourse
    fields='__all__'