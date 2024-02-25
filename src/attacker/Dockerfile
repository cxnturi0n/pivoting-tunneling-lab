FROM kalilinux/kali-rolling

RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get autoremove -y && \
    DEBIAN_FRONTEND=noninteractive apt-get install -y \
    netcat-traditional \
    wget \
    nano \
    tcpdump \
    iproute2 \
    iputils-ping \
    metasploit-framework \
    net-tools \
    nmap \
    burpsuite \
    proxychains \
    xfce4 \
    xfce4-goodies \
    x11vnc \
    xvfb \
    dbus-x11

RUN mkdir -p /dev/net && \
    mknod /dev/net/tun c 10 200 && \
    chmod 600 /dev/net/tun && \
    apt-get clean

RUN mkdir -p ~/.vnc && \
    x11vnc -storepasswd password ~/.vnc/passwd

EXPOSE 5900

CMD ["x11vnc", "-forever", "-usepw", "-create"]
