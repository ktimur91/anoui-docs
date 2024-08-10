# Использование официального образа node в качестве базового образа для сборки приложения Vue
FROM node:16.15-alpine as build-stage

# Установка рабочей директории
WORKDIR /app

# Копирование файла package.json в контейнер
COPY package*.json ./

ARG CI_SERVER_HOST
ARG CI_JOB_TOKEN
ARG CI_SERVER_URL

RUN npm config set -- '//${CI_SERVER_HOST}/api/v4/packages/npm/:_authToken' "${CI_JOB_TOKEN}"
RUN npm config set @telecom:registry ${CI_SERVER_URL}/api/v4/packages/npm/

# Установка зависимостей
RUN npm install

# Копирование всех файлов проекта в контейнер
COPY . .

# Сборка проекта
RUN npm run build

# установка образа nginx для запуска Vue.js SPA
FROM nginx:1.21-alpine

# Копирование собранного проекта Vue из предыдущего этапа в директорию /usr/share/nginx/html
COPY --from=build-stage /app/dist-docs /usr/share/nginx/html

# настройка конфигурации nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# установка команды запуска nginx в контейнере
CMD ["nginx", "-g", "daemon off;"]
