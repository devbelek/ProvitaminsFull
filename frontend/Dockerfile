FROM node:18-alpine AS builder

WORKDIR /app

# Копируем файлы зависимостей
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем исходный код
COPY . .

# Создаем .env.production
RUN echo "DOMAIN_NAME=176.124.212.65" > .env.production && \
    echo "BASE_URL=http://176.124.212.65/api/v1" >> .env.production && \
    echo "NEXT_PUBLIC_BASE_URL=http://176.124.212.65/api/v1" >> .env.production && \
    echo "IMAGE_URL=176.124.212.65" >> .env.production

# Собираем приложение
ENV NODE_ENV=production
RUN npm run build

# Этап production
FROM node:18-alpine

WORKDIR /app

# Копируем необходимые файлы
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
COPY --from=builder /app/.env.production ./.env.production

# Переменные окружения
ENV NODE_ENV=production
ENV PORT=3000
ENV DOMAIN_NAME=176.124.212.65
ENV BASE_URL=http://176.124.212.65/api/v1
ENV NEXT_PUBLIC_BASE_URL=http://176.124.212.65/api/v1
ENV IMAGE_URL=176.124.212.65

EXPOSE 3000

CMD ["node", "server.js"]