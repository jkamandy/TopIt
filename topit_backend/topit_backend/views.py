from django.shortcuts import render

'''
@returns rendered react app 'server'
'''
def react_app(request):
    return render(request, 'index.html')