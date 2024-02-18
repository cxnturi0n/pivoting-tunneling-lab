FROM node:20.11.1-alpine3.18 as builder

ENV NODE_ENV production

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine3.18

COPY --from=builder /usr/src/app/build /usr/share/nginx/ping-web-app

EXPOSE 80

COPY nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]
