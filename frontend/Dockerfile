# Этап сборки
FROM node:18-alpine3.19 AS builder

# Обновляем apk и устанавливаем зависимости
RUN apk update && apk add --no-cache libc6-compat python3 make g++

WORKDIR /app

# Копируем файлы зависимостей
COPY package*.json ./

# Устанавливаем все зависимости
RUN npm install

# Добавляем специфичные зависимости
RUN npm install critters@0.0.20 \
    chalk@4.1.2 \
    css-select@5.1.0 \
    dom-serializer@2.0.0 \
    domhandler@5.0.3 \
    htmlparser2@8.0.2 \
    pretty-bytes@5.6.0 \
    sharp

# Копируем исходный код
COPY . .

# Устанавливаем переменные окружения для сборки
ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_ENV production

# Собираем приложение
RUN npm run build

# Этап production
FROM node:18-alpine3.19

# Установка необходимых пакетов
RUN apk update && apk add --no-cache curl

WORKDIR /app

# Копируем необходимые файлы из этапа сборки
COPY --from=builder /app/next.config.mjs ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/node_modules/critters ./node_modules/critters

# Устанавливаем переменные окружения для production
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1
ENV PORT 3000

# Проверка работоспособности приложения
HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 \
    CMD curl -f http://localhost:3000/ || exit 1

# Открываем порт
EXPOSE 3000

# Запускаем приложение
CMD ["node", "server.js"]