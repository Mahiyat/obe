from django.urls import path, re_path

from . import views

urlpatterns = [
    re_path('$',views.show,name='show'),
    re_path('(\d{2})$', views.detail, name='detail'),

]