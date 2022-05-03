FROM php:fpm-alpine3.14

RUN mkdir doit-api

WORKDIR /doit-api

RUN apk update
RUN apk add curl
RUN docker-php-ext-install mysqli pdo pdo_mysql && docker-php-ext-enable pdo_mysql

COPY --from=composer /usr/bin/composer /usr/bin/composer

RUN mkdir .docker

COPY /.docker/entrypoint.sh ./.docker
ENTRYPOINT ["sh", "./.docker/entrypoint.sh"]

EXPOSE 8000