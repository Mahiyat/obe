from django.shortcuts import render
from django.core.serializers import serialize
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .models import Student
from .serializers import StudentSerializer

# Create your views here.
@api_view(['GET', 'POST'])
def show(request):
  if request.method == 'GET':
    c=Student.objects.all()
    serializer = StudentSerializer(c, context={'request': request}, many=True)
    return Response(serializer.data)
  elif request.method == 'POST':
    serializer = StudentSerializer(data=request.data)
    if serializer.is_valid():
      serializer.save()
      return Response(status=status.HTTP_201_CREATED, data=serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
  
@api_view(['PUT', 'DELETE'])
def detail(request, pk):
  try:
    student = Student.objects.get(pk=pk)
  except Student.DoesNotExist:
    return Response(status=status.HTTP_404_NOT_FOUND)
  if request.method == 'PUT':
    serializer = StudentSerializer(student, data=request.data, context={'request': request})
    if serializer.is_valid():
      serializer.save()
      return Response(status=status.HTTP_204_NO_CONTENT)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
  elif request.method == 'DELETE':
    student.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)
  
@api_view(['GET'])
def retrieve_name(request, s_id):
  try:
    c=Student.objects.get(student_id=s_id)
    serializer=StudentSerializer(c, context={'request': request})
  except Student.DoesNotExist:
    return Response(status=status.HTTP_404_NOT_FOUND)
  return Response({'name': serializer.data['name']})
  