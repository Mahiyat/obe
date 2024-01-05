from django.shortcuts import render
from django.core.serializers import serialize
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .models import IncourseMarksheet, FinalMarksheet
from .serializers import IncourseMarksheetSerializer, FinalMarksheetSerializer
from students.models import Student
from students.serializers import StudentSerializer

# Create your views here.

# Incourse Marksheet
@api_view(['POST'])
def create(request, i_pk):
  student=Student.objects.all()
  student_serializer=StudentSerializer(student,many=True)
  errors = []
  for s in student_serializer.data:
    data = {'incourse_pk': i_pk, 'student_id': s['student_id']}
    serializer = IncourseMarksheetSerializer(data=data)
    if serializer.is_valid():
      serializer.save()
    else:
      errors.append(serializer.errors)
  if errors:
    return Response(errors, status=status.HTTP_400_BAD_REQUEST)
  return Response({'message': 'Marksheets created successfully.'}, status=status.HTTP_201_CREATED)

@api_view(['GET'])
def show(request, i_pk):
  m=IncourseMarksheet.objects.filter(incourse_pk=i_pk)
  serializer=IncourseMarksheetSerializer(m, context={'request': request}, many=True)
  return Response(serializer.data)

@api_view(['PUT', 'DELETE'])
def detail(request, pk):
  try:
    incourse = IncourseMarksheet.objects.get(pk=pk)
  except IncourseMarksheet.DoesNotExist:
    return Response(status=status.HTTP_404_NOT_FOUND)
  if request.method == 'PUT':
    serializer = IncourseMarksheetSerializer(incourse, data=request.data, context={'request': request})
    if serializer.is_valid():
      serializer.save()
      return Response(status=status.HTTP_204_NO_CONTENT)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
  elif request.method == 'DELETE':
    incourse.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)
  
# Final Marksheet
@api_view(['GET'])
def final_show(request, c_pk):
  m=FinalMarksheet.objects.filter(course_pk=c_pk)
  serializer=FinalMarksheetSerializer(m, context={'request': request}, many=True)
  return Response(serializer.data)

@api_view(['POST'])
def final_create(request, c_pk):
  student=Student.objects.all()
  student_serializer=StudentSerializer(student,many=True)
  errors = []
  for s in student_serializer.data:
    data = {'course_pk': c_pk, 'exam_roll': s['exam_roll']}
    serializer = FinalMarksheetSerializer(data=data)
    if serializer.is_valid():
      serializer.save()
    else:
      errors.append(serializer.errors)
  if errors:
    return Response(errors, status=status.HTTP_400_BAD_REQUEST)
  return Response({'message': 'Marksheet created successfully.'}, status=status.HTTP_201_CREATED)

@api_view(['PUT', 'DELETE'])
def final_detail(request, pk):
  try:
    final = FinalMarksheet.objects.get(pk=pk)
  except FinalMarksheet.DoesNotExist:
    return Response(status=status.HTTP_404_NOT_FOUND)
  if request.method == 'PUT':
    serializer = FinalMarksheetSerializer(final, data=request.data, context={'request': request})
    if serializer.is_valid():
      serializer.save()
      return Response(status=status.HTTP_204_NO_CONTENT)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
  elif request.method == 'DELETE':
    final.delete()
    return Response({'message': 'Marksheet record deleted successfully.'}, status=status.HTTP_204_NO_CONTENT)