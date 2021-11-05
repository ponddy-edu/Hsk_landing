FROM node:12.16.1-alpine as builder

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package*.json /usr/src/app/
RUN npm ci

COPY ./ /usr/src/app

RUN npm run build:ssr


FROM node:12.16.1-alpine
WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/dist ./dist
EXPOSE 4000
ARG PROJECT_NAME
ENV PROJECT_NAME=$PROJECT_NAME
CMD node dist/$PROJECT_NAME/server/main.js
