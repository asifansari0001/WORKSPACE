from django.db import models

class EmployeeModel(models.Model):
    user_id = models.AutoField(primary_key=True)
    profile_picture = models.ImageField(upload_to='images', blank=True)
    bio = models.TextField()
    user_name = models.CharField(max_length=255)
    email = models.EmailField(max_length=255)
    password = models.CharField(max_length=255)
    contact_number = models.CharField(max_length=15)
    create_at = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=255, default='active')

    class Meta:
        db_table = 'employee_table'


class SubmissionModel(models.Model):
    submission_id = models.AutoField(primary_key=True)
    job_id = models.ForeignKey('HirerApp.JobModel', on_delete=models.CASCADE)
    employee_id = models.ForeignKey(EmployeeModel, on_delete=models.CASCADE)
    submitted_at = models.DateField()
    status = models.CharField(max_length=255, default='pending')

    class Meta:
        db_table ='submission_table'


class PaymentModel(models.Model):
    payment_id = models.AutoField(primary_key=True)
    job_id = models.ForeignKey('HirerApp.JobModel', on_delete=models.CASCADE)
    employee_id = models.ForeignKey(EmployeeModel, on_delete=models.CASCADE)
    amount = models.IntegerField()
    payment_date = models.DateField()
    status = models.CharField(max_length=255, default='pending')

    class Meta:
        db_table = 'payment_table'


class EmployeeReviewModel(models.Model):
    review_id = models.AutoField(primary_key=True)
    hirer_id = models.ForeignKey('HirerApp.HirerModel', on_delete=models.CASCADE)
    employee_id = models.ForeignKey(EmployeeModel, on_delete=models.CASCADE)
    review = models.TextField(max_length=500)
    rating = models.IntegerField(default=1)
    status = models.CharField(max_length=255, default='active')
    create_at = models.DateField(auto_now_add=True)

    class Meta:
        db_table = 'employee_review_table'
