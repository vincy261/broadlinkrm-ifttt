"use strict";
const path = require('path');
const https = require('https');
const BroadlinkServer = require('./index');
const commands = require('./commands/commands');
const smartPlugCommands = require('./commands/smartplug');
const fs = require('fs');

// set server port
const PORT = process.env.PORT || 1881;

// retrieve key and cert from file system
const privateKey  = fs.readFileSync(path.join(__dirname, '/sslcert') + '/kenzo.key', 'utf8');
const certificate = fs.readFileSync(path.join(__dirname, '/sslcert') + '/kenzo.cert', 'utf8');

// import express server configurations
const app = BroadlinkServer([...smartPlugCommands,...commands], true);

// set https key and cert
const credentials = {key: privateKey, cert: certificate};

// create server and run
https.createServer(credentials, app).listen(PORT)

console.log('K! Server running, go to https://localhost:' + PORT);