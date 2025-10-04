FROM node:18-alpine as build

WORKDIR /app

COPY . .

FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80
