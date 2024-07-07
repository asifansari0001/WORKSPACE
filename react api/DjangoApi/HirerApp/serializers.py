from rest_framework import serializers
from HirerApp.models import *


class HirerSerializer(serializers.Serializer):
    class Meta:
        model = HirerModel
        fields = '__all__'

class JobSerializer(serializers.Serializer):
    class Meta:
        model = JobModel
        fields = '__all__'

class BidSerializer(serializers.Serializer):
    class Meta:
        model = BidModel
        fields = '__all__'

class HirerReviewSerializer(serializers.Serializer):
    class Meta:
        model = HirerReviewModel
        fields = '__all__'

class CategorySerializer(serializers.Serial):
    class Meta:
        model = CategoryModel
        fields = '__all__'
