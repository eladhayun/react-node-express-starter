process.env.NODE_ENV = 'development';

var shell = require('shelljs');

shell.exec('node_modules/babel-cli/bin/babel-node.js --debug src/server.js')
