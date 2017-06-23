'use strict';

require('../server/globals');
require('../conf/setup-qcloud-sdk');

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('../server/routes');
const resources = require('../server/resources');

const app = express();

app.set('query parser', 'simple');
app.set('case sensitive routing', true);
app.set('jsonp callback name', 'callback');
app.set('strict routing', true);
app.set('trust proxy', true);

app.disable('x-powered-by');

// 记录请求日志
app.use(morgan('tiny'));

// parse `application/x-www-form-urlencoded`
app.use(bodyParser.urlencoded({ extended: true }));

// parse `application/json`
app.use(bodyParser.json());

app.use('/', routes);
app.use('/', resources);

module.exports = app