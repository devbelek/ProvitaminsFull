FROM nginx:stable-alpine

COPY nginx.conf /etc/nginx/nginx.conf
RUN mkdir -p /vitamins-backend/staticfiles /vitamins-backend/media

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]