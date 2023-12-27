from django.db import models

# Create your models here.

class Server(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    phone = models.CharField(max_length=15)
    comments = models.CharField(max_length=5555)

    def __str__(self):
        return self.name
    
