FROM node:20.11.1-alpine3.18

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN apk --no-cache add openssh

RUN adduser -D "sysadmin" && \
    echo "sysadmin:asp4980-23a4221!" | chpasswd && \
    mkdir -p /home/sysadmin/.ssh && \
    touch /home/sysadmin/.ssh/authorized_keys && \
    ssh-keygen -t rsa -f /home/sysadmin/.ssh/id_rsa -N "" && \
    chmod 600 /home/sysadmin/.ssh/authorized_keys && \
    chown -R sysadmin:sysadmin /home/sysadmin && \
    rmdir /home/node

RUN ssh-keygen -A

COPY sshd_config /etc/ssh/sshd_config
COPY start.sh /usr/src/app/start.sh

RUN chmod +x /usr/src/app/start.sh

EXPOSE 8080 22

ENTRYPOINT [ "/usr/src/app/start.sh" ] 
