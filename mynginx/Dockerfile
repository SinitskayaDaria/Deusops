FROM alpine:3.18

RUN apk add --no-cache nginx && \
    mkdir -p /var/www/html /etc/nginx/conf.d && \
    chown -R nginx:nginx /var/www/html 
    

COPY nginx.conf /etc/nginx/nginx.conf

USER nginx

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
