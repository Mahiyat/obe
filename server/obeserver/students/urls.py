from django.urls import path, re_path

from . import views

urlpatterns = [
    re_path('$',views.show,name='show'),
    re_path('(\d{1,2})$', views.detail, name='detail'),
    re_path('(\d{3,4})$', views.retrieve_name, name='retrieve_name'),

]