from django.shortcuts import render
from django.http import HttpResponse
import json


def index_view(request):
    return render(request, "index.html")


def ajax_view(request):
    request_message = json.load(request)['post_data']
    print (request_message)