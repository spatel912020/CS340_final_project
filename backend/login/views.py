from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated
from .models import *
from rest_framework.response import Response
from .serializer import *
# Create your views here.


class ReactView(APIView):

    serializer_class = ReactSerializer

    def post(self, request):
        serializer = ReactSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)

    def get(self, request, format=None):
        content = {
            # `django.contrib.auth.User` instance.
            'user': str(request.user),
            'auth': str(request.auth),
        }
        return Response(content)
