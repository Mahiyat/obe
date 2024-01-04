from django.db import models

from courses.models import Course

# Create your models here.
class Incourse(models.Model):
  course_pk=models.ForeignKey(Course, on_delete=models.CASCADE)
  exam=models.CharField(max_length=50)
  def __str__(self):
    return self.exam
  # def __iter__(self):
  #   yield self.course_pk
  #   yield self.exam