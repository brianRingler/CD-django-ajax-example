from django.http import HttpResponse
# https://www.kite.com/python/docs/django.http.HttpResponse

def likeed_post(request):
    # Need to add if condition to check if ajax
    if request.is_ajax():
        # code for what to do here
        # Key is to use HttpResponse 
        return HttpResponse()