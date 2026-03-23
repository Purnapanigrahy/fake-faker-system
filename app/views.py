from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request,'index.html')

def fh(request):
    return render(request,'fh.html')