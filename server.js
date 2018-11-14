"use stict";
const PORT = process.env.PORT || 1880;

const BroadlinkServer = require('./index'); // use require('broadlink-rm-server')
const commands = require('./commands/commands');
const smartPlugCommands = require('./commands/smartplug');

// import express server configurations
const app = BroadlinkServer([...smartPlugCommands,...commands], true);

app.listen(PORT);

console.log('Server running, go to http://localhost:' + PORT);