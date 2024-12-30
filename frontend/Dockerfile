FROM node:18 AS builder

WORKDIR /app

# Копируем только файлы package
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем исходный код
COPY . .

# Переменные окружения
ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_ENV production
ENV NEXT_PUBLIC_API_URL http://176.124.212.65

# Собираем приложение
RUN npm run build

# Запускаем в режиме production
CMD ["npm", "start"]