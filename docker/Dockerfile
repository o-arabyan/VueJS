# build stage
FROM node:lts-alpine as build-stage

WORKDIR /opt/app
COPY ./package*.json ./
RUN npm install
COPY . .
RUN npm run build

# production stage
FROM nginx:stable-alpine as proudction-stage
RUN rm /etc/nginx/conf.d/default.conf
COPY --from=build-stage /opt/app/dist /usr/share/nginx/html
COPY --from=build-stage /opt/app/docker/nginx/conf /etc/nginx/conf.d

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
