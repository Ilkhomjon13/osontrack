FROM nginx:alpine

# Static fayllarni nginx html papkasiga nusxalaymiz
COPY src/ /usr/share/nginx/html/

# 80-port
EXPOSE 80
