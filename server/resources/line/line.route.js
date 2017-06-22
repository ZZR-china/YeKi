'use strict';

const express = require('express');
const router = express.Router();

function testpromise () {
	return new Promise((resolve, reject) => {
		return resolve('asdsad')
	})
}

/**
 * @api {get} /line 线路路由
 * @apiName GetLine
 * @apiGroup Line
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
router.route('/')
      .get(async (req, res) => {
      	const res1 = await testpromise()
      	return res.send(res1)
      });

module.exports = {
	router,
	baseUrl: '/line'
}