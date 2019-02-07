FROM alpine:3.7

RUN apk update && apk upgrade

ADD https://php.codecasts.rocks/php-alpine.rsa.pub /etc/apk/keys/php-alpine.rsa.pub

RUN apk --update add ca-certificates

RUN echo "@php https://php.codecasts.rocks/v3.7/php-7.2" >> /etc/apk/repositories

RUN apk update

# install php and some extensions
# notice the @php is required to avoid getting default php packages from alpine instead.
RUN apk add \
  php@php \
  php-curl@php \
  php-gd@php \
  php-iconv@php \
  php-dom@php \
  php-json@php \
  php-mbstring@php \
  php-openssl@php \
  php-pcntl@php \
  php-pdo_mysql@php \
  php-phar@php \
  php-zip@php \
  php-zlib@php \
  php-posix@php \
  php-xml@php \
  php-session@php

RUN php7 -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" \
  && php7 -r "if (hash_file('SHA384', 'composer-setup.php') === trim(file_get_contents('https://composer.github.io/installer.sig'))) { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;" \
  && php7 composer-setup.php \
  && php7 -r "unlink('composer-setup.php');" \
  && mv composer.phar /usr/local/bin/composer

RUN ln -s /usr/bin/php7 /usr/bin/php
RUN ln -s /usr/bin/php7 /usr/bin/php7.2

RUN apk add php-apache2@php

ADD ./docker/httpd.conf /etc/apache2/conf.d/infra.conf

RUN sed -i 's#^DocumentRoot ".*#DocumentRoot "/var/www/html/public"#g' /etc/apache2/httpd.conf
RUN sed -i 's#AllowOverride none#AllowOverride All#' /etc/apache2/httpd.conf

RUN echo 'LoadModule rewrite_module modules/mod_rewrite.so' >> /etc/apache2/conf.d/infra.conf

RUN mkdir /run/apache2

EXPOSE 80
