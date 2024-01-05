# Generated by Django 5.0 on 2024-01-05 04:42

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('incourse', '0001_initial'),
        ('students', '0003_alter_student_student_id'),
    ]

    operations = [
        migrations.CreateModel(
            name='IncourseMarksheet',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('section1', models.IntegerField(default=0)),
                ('section2', models.IntegerField(default=0)),
                ('section3', models.IntegerField(default=0)),
                ('incourse_pk', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='incourse.incourse')),
                ('student_id', models.ForeignKey(db_column='student_id', on_delete=django.db.models.deletion.CASCADE, to='students.student', to_field='student_id')),
            ],
        ),
    ]