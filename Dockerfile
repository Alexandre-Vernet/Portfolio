FROM node:18-alpine as build

WORKDIR /app

COPY ./src ./src

FROM nginx:alpine

COPY --from=build /app /usr/share/nginx/html

EXPOSE 80
