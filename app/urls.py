from django.urls import path
from . import views

urlpatterns = [
    path('',views.index,name='index'),
    path('hakeing.io',views.fh,name='fh'),
    #this is for learnig purpose
]