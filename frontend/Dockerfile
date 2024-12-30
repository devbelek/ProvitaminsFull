FROM node:18

WORKDIR /app

COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем код
COPY . .

# Создаем .env файл
RUN echo "NEXT_PUBLIC_API_URL=http://176.124.212.65" > .env
RUN echo "NEXT_PUBLIC_BASE_URL=http://176.124.212.65" >> .env

# Собираем приложение
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]