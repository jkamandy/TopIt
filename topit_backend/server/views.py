from django.shortcuts import render
from django.http import JsonResponse
from .models import Server

def submit_form(request):
    if request.method == 'POST':
        data = request.POST
        new_quote = Server.objects.create(
            name=data.get('name', ''),
            email=data.get('email', ''),
            phone=data.get('phone', ''),
            comments=data.get('comments', '')
        )
        new_quote.save()
        return JsonResponse({'message': 'Form submitted successfully'})
    return JsonResponse({'error': 'Invalid request'}, status=400)
