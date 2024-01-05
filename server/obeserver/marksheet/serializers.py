from rest_framework import serializers

from .models import IncourseMarksheet, FinalMarksheet

class IncourseMarksheetSerializer(serializers.ModelSerializer):
  class Meta:
    model=IncourseMarksheet
    fields='__all__'

class FinalMarksheetSerializer(serializers.ModelSerializer):
  class Meta:
    model=FinalMarksheet
    fields=(
      'id',
      'course_pk',
      'exam_roll',
      'section1',
      'section2',
      'section3',
      'section4',
      'section5',
      'section6',
      'marks_obtained'
    )