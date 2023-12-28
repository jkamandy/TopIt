from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

from .models import QuoteForm


'''
Handles POST requests made to server, intializes and creates a new 
entry within QuoteForm model.

@returns the JSON of the newly created model entry.
'''
@csrf_exempt
def submit_form(request):
    if request.method == 'POST':
        data = request.POST
        print(data)
        new_quote = QuoteForm.objects.create(
            name=data.get('name', ''),
            email=data.get('email', ''),
            phone=data.get('phone', ''),
            comments=data.get('comments', '')
        )
        print('created new table entry')
        new_quote.save()
        return JsonResponse({
             'name': new_quote.name,
             'email': new_quote.email,
             'phone': new_quote.email,
             'comments': new_quote.comments,
             'message': 'Form submitted successfully'
             })
    return JsonResponse({'error': 'Invalid request'}, status=400)




"""
View to return desired data 
"""
def get_posted_data(request):
    try:
        # Fetch the data based on the ID or any other criteria
        data = QuoteForm.objects.latest('created_at')

        # Serialize the data or extract relevant fields
        serialized_data = {
            'name': data.name,
            'email': data.email,
            'phone': data.phone,
            'comments': data.comments,
            'created_at': data.created_at
        }

        return JsonResponse(serialized_data)
    except QuoteForm.DoesNotExist:
        return JsonResponse({'error': 'Data not found'}, status=404)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)