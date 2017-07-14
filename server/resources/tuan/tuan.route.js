'use strict';

const express = require('express');
const router = express.Router();
const models = require('../../models')

/**
 * @api {get} /tuan 线路路由
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
      	const tuan = await models.Tuan.findAndCountAll({
              where: {
                  is_effect: 1
              },
              limit: 10,
              offset: 1
            })
      	return res.send(tuan)
      })

/*
 * 微信小程序首页api 
 */

router.route('/wxindex')
      .get(async (req, res) => {
        let tuans = []
        let tuanCate = await models.TuanCate.findAll({})
        for (let i = 0, len = tuanCate.length; i < len; i++) {
          let tuan = await models.Tuan.findOne({
              where: {
                cate_id: tuanCate[i].id
              }
          })
          tuans.push(tuan)
        }
        console.log('tuanCate', tuanCate)
        return res.send(tuans)
      })

module.exports = {
	router,
	baseUrl: '/tuan'
}