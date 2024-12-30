FROM node:18

WORKDIR /app

# Копируем package.json
COPY package*.json ./

# Устанавливаем зависимости с выводом отладочной информации
RUN npm install --verbose

# Копируем исходники
COPY . .

# Выводим список файлов для проверки
RUN ls -la

# Проверяем содержимое next.config.mjs
RUN cat next.config.mjs

# Устанавливаем переменные окружения
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV IMAGE_URL="176.124.212.65"

# Пытаемся собрать с выводом отладочной информации
RUN npm run build --verbose || exit 1

EXPOSE 3000

CMD ["npm", "start"]