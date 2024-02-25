FROM alpine:3.18

RUN apk --no-cache add openssh

RUN ssh-keygen -A

ARG USER
ARG PASSWORD

RUN adduser -D $USER
RUN echo "$USER:$PASSWORD" | chpasswd

EXPOSE 22

CMD ["/usr/sbin/sshd", "-D"]




