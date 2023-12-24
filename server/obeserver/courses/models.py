from django.db import models

# Create your models here.
class Course(models.Model):
  course_id=models.CharField(max_length=10)
  course_name=models.CharField(max_length=40)
  exam_title=models.CharField(max_length=60)
  def __str__(self) -> str:
    return self.course_id + ": "+self.exam_title
