'use strict';

const express = require('express');
const router = express.Router();
const models = require('../../models')

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
      	const tourline = await models.Tourline.findAndCountAll({
              where: {
                  is_effect: 1
              },
              limit: 10,
              offset: 1
            })
      	return res.send(tourline)
      })

module.exports = {
	router,
	baseUrl: '/line'
}