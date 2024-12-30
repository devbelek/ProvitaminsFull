FROM nginx:alpine

RUN apk add --no-cache --virtual .build-deps \
    gcc \
    libc-dev \
    make \
    openssl-dev \
    pcre-dev \
    zlib-dev \
    linux-headers \
    curl \
    git \
    brotli-dev

RUN cd /tmp && \
    git clone https://github.com/google/ngx_brotli.git && \
    cd ngx_brotli && \
    git submodule update --init

RUN NGINX_VERSION=$(nginx -v 2>&1 | sed 's/^nginx version: nginx\///') && \
    curl -fSL https://nginx.org/download/nginx-$NGINX_VERSION.tar.gz -o nginx.tar.gz && \
    tar -zxC /tmp -f nginx.tar.gz

RUN NGINX_VERSION=$(nginx -v 2>&1 | sed 's/^nginx version: nginx\///') && \
    cd /tmp/nginx-$NGINX_VERSION && \
    ./configure --with-compat --add-dynamic-module=/tmp/ngx_brotli && \
    make modules

RUN cp /tmp/nginx-$NGINX_VERSION/objs/ngx_http_brotli_filter_module.so /usr/lib/nginx/modules/ && \
    cp /tmp/nginx-$NGINX_VERSION/objs/ngx_http_brotli_static_module.so /usr/lib/nginx/modules/

RUN apk del .build-deps && \
    rm -rf /tmp/* /var/cache/apk/*

COPY nginx.conf /etc/nginx/nginx.conf
RUN rm /etc/nginx/conf.d/default.conf
RUN mkdir -p /app/staticfiles /app/media

RUN chown -R nginx:nginx /app /var/cache/nginx /var/log/nginx /etc/nginx/conf.d

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]