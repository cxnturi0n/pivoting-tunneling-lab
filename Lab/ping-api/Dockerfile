FROM node:20.11.1-alpine3.18

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

USER node

EXPOSE 8080

CMD ["node", "index"]