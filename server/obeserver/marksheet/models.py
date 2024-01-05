from django.db import models

from incourse.models import Incourse
from students.models import Student
from courses.models import Course

# Create your models here.
class IncourseMarksheet(models.Model):
  incourse_pk=models.ForeignKey(Incourse, on_delete=models.CASCADE)
  student_id=models.ForeignKey(Student, to_field="student_id", db_column="student_id", on_delete=models.CASCADE)
  section1=models.IntegerField(default=0)
  section2=models.IntegerField(default=0)
  section3=models.IntegerField(default=0)
  
  @property
  def marks_obtained(self):
    return self.section1+self.section2+self.section3
  
  def __str__(self) -> str:
    return self.incourse_pk+" "+self.student_id
  
class FinalMarksheet(models.Model):
  course_pk=models.ForeignKey(Course, on_delete=models.CASCADE)
  exam_roll=models.ForeignKey(Student, to_field="exam_roll", db_column="exam_roll", on_delete=models.CASCADE)
  section1=models.IntegerField(default=0)
  section2=models.IntegerField(default=0)
  section3=models.IntegerField(default=0)
  section4=models.IntegerField(default=0)
  section5=models.IntegerField(default=0)
  section6=models.IntegerField(default=0)
  
  @property
  def marks_obtained(self):
    return self.section1+self.section2+self.section3+self.section4+self.section5+self.section6
