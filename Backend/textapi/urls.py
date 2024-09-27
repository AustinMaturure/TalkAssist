from django.urls import path
from . import views

urlpatterns = [
    path('divide-text/', views.divide_text)
]
