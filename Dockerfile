FROM node:12

RUN npm install -g @quasar/cli

COPY . /app
WORKDIR /app

RUN npm install && quasar build -m ssr
