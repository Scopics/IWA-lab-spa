FROM node:16.10.0 as build

WORKDIR /app

COPY ./package.json /app/package.json
COPY ./yarn.lock /app/yarn.lock

RUN yarn
COPY . .
RUN yarn build

FROM nginx
EXPOSE 80/tcp
COPY --from=build /app/build /usr/share/nginx/html
