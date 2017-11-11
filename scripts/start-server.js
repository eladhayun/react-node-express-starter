process.env.NODE_ENV = 'development';

var shell = require('shelljs');

shell.exec('node src/server.js')
