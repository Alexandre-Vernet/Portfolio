FROM nginx:alpine

WORKDIR /usr/share/nginx/html

COPY ./src .
COPY ./assets ./assets

EXPOSE 80
