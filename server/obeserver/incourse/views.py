from django.shortcuts import render
from django.core.serializers import serialize
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .models import Incourse
from .serializers import IncourseSerializer

# Create your views here.
@api_view(['GET'])
def show(request, c_pk):
  try:
    c=Incourse.objects.filter(course_pk=c_pk)
    serializer=IncourseSerializer(c, context={'request': request}, many=True)
  except Incourse.DoesNotExist:
    return Response(status=status.HTTP_404_NOT_FOUND)
  return Response(serializer.data)

@api_view(['POST'])
def create(request):
  c=Incourse.objects.all()
  serializer=IncourseSerializer(data=request.data)
  if serializer.is_valid():
    serializer.save()
    return Response(status=status.HTTP_201_CREATED, data=serializer.data)
  return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE'])
def detail(request, pk):
  try:
    incourse = Incourse.objects.get(pk=pk)
  except Incourse.DoesNotExist:
    return Response(status=status.HTTP_404_NOT_FOUND)
  if request.method == 'PUT':
    serializer = IncourseSerializer(incourse, data=request.data, context={'request': request})
    if serializer.is_valid():
      serializer.save()
      return Response(status=status.HTTP_204_NO_CONTENT)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
  elif request.method == 'DELETE':
    incourse.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)
