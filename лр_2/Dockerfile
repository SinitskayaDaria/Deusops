FROM python:3.9-alpine

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /app

# Копируем файл зависимостей Python из подкаталога app
COPY ./app/requirements.txt .

# Устанавливаем зависимости без использования кэша 
RUN pip install --no-cache-dir -r requirements.txt

# Копируем Python-код приложения из директории app
COPY ./app/menu .

# Создаём непривилегированного пользователя 
RUN adduser -D wuser

# Передаём права на рабочую директорию новому пользователю
RUN chown -R wuser:wuser /app

# Устанавливаем пользователя, от имени которого будет запускаться приложение
USER wuser

# Открываем порт 8000
EXPOSE 8000

# Копируем скрипт запуска в контейнер
COPY ./entrypoint.sh .

# Устанавливаем команду запуска по умолчанию
CMD [ "sh", "entrypoint.sh" ]
