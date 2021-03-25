from django.contrib import admin
from django.urls import path, include, re_path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include("rest_framework.urls")),
    path('api/token/', TokenObtainPairView.as_view(), name="token"),
    path('api/token/refresh/', TokenRefreshView.as_view(), name="refresh"),
    path('api/', include("api.urls")),

    # use react build urls
    re_path('.*', TemplateView.as_view(template_name="index.html"))
]
