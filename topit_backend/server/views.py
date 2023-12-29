from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.core.mail import send_mail
from django.conf import settings


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
        new_quote.save()


        # Dont need this here, only in stand alone scripts (see test.py)
        # settings.configure(
        #     EMAIL_BACKEND=os.environ.get('EMAIL_BACKEND'),
        #     EMAIL_HOST=os.environ.get('EMAIL_HOST'),
        #     EMAIL_PORT=587,
        #     EMAIL_USE_TLS=True,
        #     EMAIL_HOST_USER=os.environ.get('EMAIL_HOST_USER'),
        #     EMAIL_HOST_PASSWORD=os.environ.get('EMAIL_HOST_PASSWORD'),
        #     RECIPIENT_ADDRESS =os.environ.get('RECIPIENT_ADDRESS'),
        # )


        try:
            send_mail(
                subject = 'TopIt Form Submission',
                message = f'Name: {new_quote.name}\nEmail: {new_quote.email}\nPhone: {new_quote.phone}\nComments: {new_quote.comments}',
                from_email=settings.EMAIL_HOST_USER,
                recipient_list=[settings.RECIPIENT_ADDRESS]
            )
        
            # print('sent mail')
            return JsonResponse({
             'name': new_quote.name,
             'email': new_quote.email,
             'phone': new_quote.email,
             'comments': new_quote.comments,
             'message': 'Form submitted successfully'
             })
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)

    
    return JsonResponse({'error': 'Invalid request'}, status=400)




"""
View to return desired data.
url: /api/getPostedData

@returns JSON serialized data
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