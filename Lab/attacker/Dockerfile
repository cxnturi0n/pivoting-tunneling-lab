FROM kalilinux/kali-rolling

RUN apt -y update && apt -y upgrade && apt -y autoremove && apt clean

RUN DEBIAN_FRONTEND=noninteractive apt install -y \
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
    proxychains 

RUN DEBIAN_FRONTEND=noninteractive apt install -y xfce4 xfce4-goodies x11vnc xvfb dbus-x11

RUN mkdir ~/.vnc
RUN x11vnc -storepasswd password ~/.vnc/passwd

EXPOSE 5900

CMD x11vnc -forever -usepw -create 