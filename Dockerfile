FROM node:18-alpine as build

WORKDIR /app

COPY . .

FROM nginx:alpine

COPY --from=build /app/src /usr/share/nginx/html

EXPOSE 80
