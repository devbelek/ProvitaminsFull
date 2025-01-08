FROM nginx:stable-alpine

# Копируем конфигурацию
COPY nginx.conf /etc/nginx/nginx.conf

# Удаляем дефолтный конфиг
RUN rm -f /etc/nginx/conf.d/default.conf

# Создаем необходимые директории
RUN mkdir -p /vitamins-backend/staticfiles \
    && mkdir -p /vitamins-backend/media

# Правильные права доступа
RUN chown -R nginx:nginx /vitamins-backend /var/cache/nginx /var/log/nginx /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]