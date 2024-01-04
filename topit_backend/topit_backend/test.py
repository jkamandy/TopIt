from django.core.mail import send_mail
from django.conf import settings

# settings.configure()
settings.configure(
    EMAIL_BACKEND='django.core.mail.backends.smtp.EmailBackend',
    EMAIL_HOST='smtp.gmail.com',
    EMAIL_PORT=587,
    EMAIL_USE_TLS=True,
    EMAIL_HOST_USER='yosuftesting@gmail.com',
    EMAIL_HOST_PASSWORD='momttlikcguyvpus',
    RECIPIENT_ADDRESS ='yosuftesting@gmail.com'
)
send_mail(
    subject='A cool subject',
    message='A cool message',
    from_email=settings.EMAIL_HOST_USER,
    recipient_list=['yosuftesting@gmail.com']
)
