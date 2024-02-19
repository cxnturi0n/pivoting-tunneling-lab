FROM kalilinux/kali-rolling

RUN apt -y update && DEBIAN_FRONTEND=noninteractive apt -y dist-upgrade && apt -y autoremove && apt clean

RUN DEBIAN_FRONTEND=noninteractive apt install -y \
    netcat-traditional \
    wget \
    nano \
    iproute2 \
    iputils-ping \
    metasploit-framework \
    net-tools \
    nmap \
    proxychains \
    shellinabox \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

RUN echo 'root:toor' | chpasswd && \
    touch /root/.hushlogin

COPY shellinabox.conf /etc/default/shellinabox

EXPOSE 4200

CMD service shellinabox start && tail -f /dev/null
