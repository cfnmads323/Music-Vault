from django.urls import path, include

urlpatterns = [
    path('auth/', include('users.urls')),
    path('auth/', include('social_django.urls', namespace='social')),
]
