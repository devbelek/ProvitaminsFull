FROM node:18 AS builder

WORKDIR /app

# Копируем только package.json и package-lock.json сначала
COPY package*.json ./

# Устанавливаем зависимости
RUN npm ci

# Копируем остальные файлы проекта
COPY . .

# Собираем приложение
ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_ENV production
RUN npm run build

# Запускаем
ENV PORT 3000
CMD ["npm", "start"]