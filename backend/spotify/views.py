import requests
from django.shortcuts import render, redirect
from credentials import REDIRECT_URI, CLIENT_SECRET, CLIENT_ID, USER_ID
from rest_framework import status


class Spotify:
    def __init__(self):
        self.client_secret = CLIENT_SECRET
        self.token = ""
        self.user_id = USER_ID
        self.client_it = CLIENT_ID
        self.redirect = REDIRECT_URI
        self.headers = {}

    def get_spotify_token(self):
        AUTH_URL = 'https://accounts.spotify.com/api/token'
        # POST
        auth_response = requests.post(AUTH_URL, {
            'grant_type': 'client_credentials',
            'client_id': CLIENT_ID,
            'client_secret': CLIENT_SECRET,
        })
        # convert the response to JSON
        auth_response_data = auth_response.json()
        # save the access token
        access_token = auth_response_data['access_token']
        self.token = access_token

    def fetch_user_playlist(self):
        self.get_spotify_token()
        self.headers = {
            "Content-Type": "application/json",
            "Authorization": f"Bearer {self.token}"}
        url = f"https://api.spotify.com/v1/users/{self.user_id}/playlists?offset=0&limit=50"
        response = requests.get(url, headers=self.headers)
        print(response.status_code)
        res = response.json()
        for items in res['items']:
            print("Playlist name = " + items['name'] + ", ID = ", items['id'])
        return res

    def list_songs_in_playlist(self):
        pass


test = Spotify()
test.fetch_user_playlist()
