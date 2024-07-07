from django.shortcuts import render
from django.http import HttpResponse

@api_view(['GET'])
def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")
