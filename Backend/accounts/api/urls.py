from django.urls import path
from . import views


urlpatterns = [
    path('signup/', views.SignUp),
    path('login/', views.CustomTokenObtainPairView.as_view(),  name='token_obtain_pair')
]
