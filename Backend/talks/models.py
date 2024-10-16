from django.db import models
from accounts.models import UserProfile

# Create your models here.

class Talk(models.Model):
    user = models.ForeignKey(UserProfile, null=True, on_delete=models.CASCADE, db_index=True)
    title = models.CharField(default="Talk", max_length=50)
    text = models.TextField(blank=False)
    time = models.DateField(auto_now_add=True)

    def __str__(self):
        return f'{self.title} - {self.user.user.username}'
    
class Pop(models.Model):
    talk= models.ForeignKey(Talk, on_delete=models.CASCADE)
    title = models.CharField(default="Pop", max_length=50, blank=False)
    text = models.TextField(blank=False)
    def __str__(self):
        return f'{self.title} for {self.talk.title}'
