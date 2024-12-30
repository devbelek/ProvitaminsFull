# Этап сборки
FROM node:18 AS builder

WORKDIR /app

# Копируем файлы зависимостей
COPY package*.json ./

# Устанавливаем все зависимости
RUN npm config set registry https://registry.npmjs.org/ && \
    npm install

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
FROM node:18-slim

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

# Открываем порт
EXPOSE 3000

# Запускаем приложение
CMD ["node", "server.js"]