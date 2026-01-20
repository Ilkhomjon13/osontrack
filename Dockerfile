FROM nginx:alpine

# Static fayllar
COPY src/ /usr/share/nginx/html/

# Nginx template config (PORT uchun)
COPY nginx.conf.template /etc/nginx/templates/default.conf.template
