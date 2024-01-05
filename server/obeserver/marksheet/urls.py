from django.urls import path, re_path

from . import views

urlpatterns = [
    re_path('show/(\d{1,2})$',views.show,name='show'),
    re_path('create/(\d{1,2})$',views.create,name='create'),
    re_path('(\d{1,2})$', views.detail, name='detail'),
    re_path('final/show/(\d{1,2})$',views.final_show,name='final_show'),
    re_path('final/create/(\d{1,2})$',views.final_create,name='final_create'),
    re_path('final/(\d{1,2})$', views.final_detail, name='final_detail'),

]