FROM kalilinux/kali-rolling

RUN apt-get update && \
    DEBIAN_FRONTEND=noninteractive apt-get install -y metasploit-framework openssl nmap proxychains shellinabox && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

RUN echo 'root:toor' | chpasswd

RUN touch /root/.hushlogin

COPY shellinabox.conf /etc/default/shellinabox

EXPOSE 4200

CMD service shellinabox start && tail -f /dev/null
