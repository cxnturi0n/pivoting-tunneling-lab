FROM node:20.11.1-alpine3.18 as builder

ENV NODE_ENV production

ARG REACT_APP_API_BASE_URL
ARG REACT_APP_API_PING_ENDPOINT 

ENV REACT_APP_API_BASE_URL=${REACT_APP_API_BASE_URL}
ENV REACT_APP_API_PING_ENDPOINT=${REACT_APP_API_PING_ENDPOINT}

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine3.18

COPY --from=builder /usr/src/app/build /usr/share/nginx/ping-web-app

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80 

CMD nginx -g "daemon off;"