'use strict';

module.exports = {
  env: process.env.NODE_ENV,
  jwtSecret: process.env.jwtSecret,
  port: process.env.APP_PORT || 80
};