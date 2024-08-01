from django.db import models


class Post(models.Model):
    title = models.CharField(max_length=150)
    author = models.CharField(max_length=100)
    email = models.EmailField(default='')
    
    def __str__(self):
        return self.title