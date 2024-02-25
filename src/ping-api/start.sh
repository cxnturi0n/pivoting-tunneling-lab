#!/bin/sh

su -s /bin/sh -c 'node index' sysadmin &

exec /usr/sbin/sshd -D
