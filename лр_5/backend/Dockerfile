# Сборка Java-приложения с помощью Maven
FROM maven:3.9.9-eclipse-temurin-11-alpine AS build

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /app

# Копируем файл зависимостей проекта 
COPY pom.xml .

# Копируем исходный код в контейнер
COPY src ./src

# Собираем приложение без запуска тестов
RUN mvn -ntp clean package -DskipTests

# Создаём минимальный образ только с собранным приложением
FROM eclipse-temurin:11-jre-alpine

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем собранный .jar-файл из предыдущего этапа
COPY --from=build /app/target/*.jar app.jar

# Создаём нового непривилегированного пользователя
RUN adduser -D new_user

# Запускаем приложение от имени созданного пользователя
USER new_user

# Открываем порт 8080 
EXPOSE 8080

# Устанавливаем команду по умолчанию — запуск Java-приложения
ENTRYPOINT ["java", "-jar", "app.jar"]
