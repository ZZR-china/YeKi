'use strict';

const http = require('http');
const config = require('./config/env');
const app = require('./config/express');

// 打印异常日志
process.on('uncaughtException', error => {
    console.log(error);
});

// 启动server
http.createServer(app).listen(config.port, () => {
    console.log('Express server listening on port: %s', config.port);
});