from django.db import models

class HirerModel(models.Model):
    user_id = models.AutoField(primary_key=True)
    profile_picture = models.ImageField(upload_to='images', blank=True)
    user_name = models.CharField(max_length=255)
    bio = models.TextField()
    email = models.EmailField(max_length=255)
    password = models.CharField(max_length=255)
    contact_number = models.CharField(max_length=15)
    create_at = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=255, default='active')

    class Meta:
        db_table = 'hirer_table'


class JobModel(models.Model):
    job_id = models.AutoField(primary_key=True)
    hirer_id = models.ForeignKey(HirerModel, on_delete=models.CASCADE)
    job_title = models.CharField(max_length=255)
    job_description = models.CharField(max_length=255)
    job_price = models.IntegerField()
    deadline = models.DateField()
    assigned_to = models.ForeignKey('EmployeeApp.EmployeeModel', on_delete=models.CASCADE, blank=True)
    status = models.CharField(max_length=255, default='active')
    categories = models.ManyToManyField('CategoryModel')

    class Meta:
        db_table = 'job_table'


class BidModel(models.Model):
    bid_id = models.AutoField(primary_key=True)
    job_id = models.ForeignKey(JobModel, on_delete=models.CASCADE)
    employee_id = models.ForeignKey('EmployeeApp.EmployeeModel', on_delete=models.CASCADE)
    bid_price = models.IntegerField()
    proposal = models.CharField(max_length=255)
    status = models.CharField(max_length=255, default='pending')

    class Meta:
        db_table = 'bid_table'


class HirerReviewModel(models.Model):
    review_id = models.AutoField(primary_key=True)
    hirer_id = models.ForeignKey(HirerModel, on_delete=models.CASCADE)
    employee_id = models.ForeignKey('EmployeeApp.EmployeeModel', on_delete=models.CASCADE)
    review = models.TextField(max_length=500)
    rating = models.IntegerField(default=1)
    status = models.CharField(max_length=255, default='active')
    create_at = models.DateField(auto_now_add=True)

    class Meta:
        db_table = 'hirer_review_table'


class CategoryModel(models.Model):
    category_id = models.AutoField(primary_key=True)
    category_name = models.CharField(max_length=255)

    class Meta:
        db_table = 'category_table'

    def __str__(self):
        return self.category_name
