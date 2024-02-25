FROM node:20.11.1-alpine3.18

ARG SSH_USER
ARG SSH_PASSWORD

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN apk update && \
    apk --no-cache add python3 openssh build-base git

RUN adduser -D $SSH_USER && \
    echo "$SSH_USER:$SSH_PASSWORD" | chpasswd && \
    mkdir -p /home/$SSH_USER/.ssh && \
    touch /home/$SSH_USER/.ssh/authorized_keys && \
    ssh-keygen -t rsa -f /home/$SSH_USER/.ssh/id_rsa -N "" && \
    chmod 600 /home/$SSH_USER/.ssh/authorized_keys && \
    chown -R $SSH_USER:$SSH_USER /home/$SSH_USER && \
    rmdir /home/node

RUN ssh-keygen -A

COPY sshd_config /etc/ssh/sshd_config
COPY start.sh /usr/src/app/start.sh

RUN chmod +x /usr/src/app/start.sh

EXPOSE 8080 22

ENTRYPOINT [ "/usr/src/app/start.sh" ]
