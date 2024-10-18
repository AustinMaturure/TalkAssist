from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.GetTalks),
    path('add/', views.AddTalk),
    path('addpop/', views.addPop)
    
]
