# quotes/urls.py

from django.urls import path
from .views import submit_form, get_posted_data

urlpatterns = [
    path('submitForm/', submit_form, name='submit_form'),
    path('getPostedData/', get_posted_data, name='process_posted_data'),

]
