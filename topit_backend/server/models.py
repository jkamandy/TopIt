from django.db import models
from django.utils import timezone


# Create your models here.

class QuoteForm(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    phone = models.CharField(max_length=15)
    comments = models.CharField(max_length=5555)
    created_at = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.name
    
