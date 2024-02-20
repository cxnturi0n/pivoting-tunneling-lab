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

RUN apk --no-cache add openssh 

RUN adduser -D "sysadmin" && \
    echo "sysadmin:asp4980-23a4221!" | chpasswd && \
    mkdir -p /home/sysadmin/.ssh && \
    touch /home/sysadmin/.ssh/authorized_keys && \
    ssh-keygen -t rsa -f /home/sysadmin/.ssh/id_rsa -N "" && \
    chmod a+rw /home/sysadmin/.ssh/authorized_keys && \
    chown -R sysadmin:sysadmin /home/sysadmin

RUN ssh-keygen -A

EXPOSE 80 22

CMD nginx -g "daemon off;" & /usr/sbin/sshd -D