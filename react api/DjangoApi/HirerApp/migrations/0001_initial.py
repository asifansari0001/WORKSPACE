# Generated by Django 5.0.6 on 2024-06-25 14:05

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('EmployeeApp', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='CategoryModel',
            fields=[
                ('category_id', models.AutoField(primary_key=True, serialize=False)),
                ('category_name', models.CharField(max_length=255)),
            ],
            options={
                'db_table': 'category_table',
            },
        ),
        migrations.CreateModel(
            name='HirerModel',
            fields=[
                ('user_id', models.AutoField(primary_key=True, serialize=False)),
                ('profile_picture', models.ImageField(blank=True, upload_to='images')),
                ('user_name', models.CharField(max_length=255)),
                ('bio', models.TextField()),
                ('email', models.EmailField(max_length=255)),
                ('password', models.CharField(max_length=255)),
                ('contact_number', models.CharField(max_length=15)),
                ('create_at', models.DateTimeField(auto_now_add=True)),
                ('status', models.CharField(default='active', max_length=255)),
            ],
            options={
                'db_table': 'hirer_table',
            },
        ),
        migrations.CreateModel(
            name='HirerReviewModel',
            fields=[
                ('review_id', models.AutoField(primary_key=True, serialize=False)),
                ('review', models.TextField(max_length=500)),
                ('rating', models.IntegerField(default=1)),
                ('status', models.CharField(default='active', max_length=255)),
                ('create_at', models.DateField(auto_now_add=True)),
                ('employee_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='EmployeeApp.employeemodel')),
                ('hirer_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='HirerApp.hirermodel')),
            ],
            options={
                'db_table': 'hirer_review_table',
            },
        ),
        migrations.CreateModel(
            name='JobModel',
            fields=[
                ('job_id', models.AutoField(primary_key=True, serialize=False)),
                ('job_title', models.CharField(max_length=255)),
                ('job_description', models.CharField(max_length=255)),
                ('job_price', models.IntegerField()),
                ('deadline', models.DateField()),
                ('status', models.CharField(default='active', max_length=255)),
                ('assigned_to', models.ForeignKey(blank=True, on_delete=django.db.models.deletion.CASCADE, to='EmployeeApp.employeemodel')),
                ('categories', models.ManyToManyField(to='HirerApp.categorymodel')),
                ('hirer_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='HirerApp.hirermodel')),
            ],
            options={
                'db_table': 'job_table',
            },
        ),
        migrations.CreateModel(
            name='BidModel',
            fields=[
                ('bid_id', models.AutoField(primary_key=True, serialize=False)),
                ('bid_price', models.IntegerField()),
                ('proposal', models.CharField(max_length=255)),
                ('status', models.CharField(default='pending', max_length=255)),
                ('employee_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='EmployeeApp.employeemodel')),
                ('job_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='HirerApp.jobmodel')),
            ],
            options={
                'db_table': 'bid_table',
            },
        ),
    ]
