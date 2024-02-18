import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import validateIpAddress from './validateIpAddress.js';
import {exec} from 'child_process';

const app = express();
const port = 8080;

app.use(bodyParser.json());
app.use(cors());

app.post('/ping', validateIpAddress, (req, res) => {

  const ipAddress = req.body.ipAddress;
  const command = `ping -c 1 -W 5 ${ipAddress}`; // $ipAddress is the injection point

  exec(command, (error, stdout, stderr) => {
    if (error) {
      res.status(500).json({ error: `Error: ${error.message}` }); // Leaks injection point
      return;
    }
    if (stderr) {
      res.status(500).json({ error: `Error: ${stderr}` }); // Leaks injection point
      return;
    }
    res.status(200).json({result: `Host ${ipAddress} seems to be up!` });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
