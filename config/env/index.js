'use strict';

const path = require('path');
const env = process.env.NODE_ENV || 'development';
const config = require(`./${env}`);

const defaults = {
  rootPath: path.join(__dirname, '/../..')
};

module.exports = Object.assign({}, defaults, config);