'use strict';

const http = require('http');
const debug = require('debug')('init:server');
const conf = require('../conf');
const app = require('./express');

// 打印异常日志
process.on('uncaughtException', error => {
    console.log(error);
});

/**
 *  open mysql connect
 */

const sequelize = new Sequelize(config.database, config.username, config.password, config);
const db = {};

/**
 * Create HTTP server.
 */

const port = conf.port;
const server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  console.log('Listening on ' + bind);
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}