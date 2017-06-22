'use strict';

const glob = require('glob');
const express = require('express');
const config = require('../../config/env');
const router = express.Router();

const path = config.rootPath + '/server/resources/**/**.route.js'
let routes = glob.sync(path)

routes.forEach(function(route) {
  console.log('Loading resource route：' + route)
  let routeCtrl = require(route)
  router.use(routeCtrl.baseUrl, routeCtrl.router)
})

module.exports = router