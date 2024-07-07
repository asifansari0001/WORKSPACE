from rest_framework import serializers
from EmployeeApp.models import *

class EmployeeSerializer(serializers.ModelSerializers):
    class Meta:
        model = EmployeeModel
        fields = '__all__'

class SubmissionSerializer(serializers.ModelSerializers):
    class Meta:
        model = SubmissionModel
        fields = '__all__'

class PaymentSerializer(serializers.ModelSerializers):
    class Meta:
        model = PaymentModel
        fields = '__all__'

class EmployeeReviewSerializer(serializers.ModelSerializers):
    class Meta:
        model = EmployeeReviewModel
        fields = '__all__'




