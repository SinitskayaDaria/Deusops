FROM alpine:3.18

RUN apk add --no-cache nginx && \
    mkdir -p /var/lib/nginx/logs /run/nginx && \
    addgroup -S myuser && \
    adduser -S -G myuser myuser && \
    chown -R myuser:myuser /var/lib/nginx /run/nginx && \
    chmod -R 755 /var/lib/nginx && \
    ln -sf /dev/stdout /var/lib/nginx/logs/access.log && \
    ln -sf /dev/stderr /var/lib/nginx/logs/error.log && \
    touch /var/lib/nginx/nginx.pid && \
    chown myuser:myuser /var/lib/nginx/nginx.pid

COPY nginx.conf /etc/nginx/nginx.conf

USER myuser

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
