from django.shortcuts import render
from django.core.serializers import serialize
from django.http import HttpResponse

from .models import Course

# Create your views here.
def show(request):
  c=Course.objects.all()
  data=serialize("json",c)
  return HttpResponse(data, content_type="application/json")