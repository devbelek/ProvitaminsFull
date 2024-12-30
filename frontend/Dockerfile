FROM node:18

WORKDIR /app

# Копируем файлы зависимостей
COPY package*.json ./

# Устанавливаем зависимости
RUN npm config set registry https://registry.npmjs.org/ && \
    npm install

# Копируем исходный код
COPY . .

# Собираем приложение
ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_ENV production
RUN npm run build

# Запускаем приложение
ENV PORT 3000
CMD ["npm", "start"]