from django.db import models


class SortInstance(models.Model):
    user = models.CharField(max_length=50)
    title = models.CharField(max_length=200)
    num_songs = models.IntegerField(default=1)


class Song(models.Model):
    sort_instance = models.ForeignKey(SortInstance, on_delete=models.CASCADE)
    name = models.CharField(max_length=200)
    artist = models.CharField(max_length=200)
    album = models.CharField(max_length=200)
    spotify_id = models.CharField(max_length=30)
