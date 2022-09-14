from django.shortcuts import render
from django.http import HttpResponse
import json
from django.views.decorators.csrf import csrf_exempt
import os
from django.http import FileResponse


def index_view(request):
    return render(request, "index.html")

 
@csrf_exempt
def ajax_view(request):
    request_message = json.load(request)

    with open('ToDo.txt', 'a+') as f:
        for i in request_message['data']:
            f.write( f"{i}\n" )
    
    with open('ToDo.txt', 'rb') as f:
        file_data = f.read()

    response = HttpResponse(file_data, 'text/plain')
    response['Content-Length'] = os.path.getsize('ToDo.txt')
    response['Content-Disposition'] = 'attachment; filename=ToDo.txt'

    os.remove("ToDo.txt")  

    return response 