'use strict';

const express = require('express');
const router = express.Router();
const models = require('../../models')

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
      	const tourline = await models.Tourline.findAll({})
      	return res.send(tourline)
      })
      .post(async (req, res) => {
      	const userCreateRes = await models.Line.create({
      	  username: req.body.username,
      	  sexg: 1,
      	  pwd: 'asdsadsad'
      	})
      	return res.send(userCreateRes)
      })

module.exports = {
	router,
	baseUrl: '/line'
}