from django.contrib import admin

from .models import IncourseMarksheet, FinalMarksheet

# Register your models here.
admin.site.register(IncourseMarksheet)
admin.site.register(FinalMarksheet)