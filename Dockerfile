FROM node:12

RUN npm install -g @quasar/cli

COPY . /app
WORKDIR /app

RUN npm install && quasar build -m ssr

FROM node:12-alpine

COPY from=0 /app/dist/ssr/ /app/
WORKDIR /app

RUN npm install

CMD ["npm", "start"]
