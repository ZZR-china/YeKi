import Koa from 'koa'
import next from 'next'
import Router from 'koa-router'
import bodyParser from 'koa-bodyparser'
import convert from 'koa-convert'
import logger from 'koa-logger'
import mount from 'koa-mount'
import serve from 'koa-static'
import sequelize from 'sequelize'

import config from '../conf'
import models from '../src/models'
import handle from '../src/utils/handle'
import { errorMiddleware, responseMiddleware } from '../src/middleware'
import resources from '../src/resources'

const dev = process.env.NODE_ENV !== 'production'
const nextapp = next({ dev })
const nexthandle = nextapp.getRequestHandler()

global.Handle =  handle

nextapp.prepare()
.then(() => {
	const app = new Koa()
	app.keys = [config.jwtSecret]
  // x-response-time
  app.use(responseMiddleware())
  app.use(convert(logger()))
  app.use(bodyParser())
  app.use(errorMiddleware())

  app.use(convert(mount('/docs', serve(`${process.cwd()}/docs`))))
  app.use(convert(mount('/upload', serve(`${process.cwd()}/upload`))))

  // 引入 restful api 路由
  resources(app)
  // 引入views
  const router = new Router()

  router.get('/a', async ctx => {
    await nextapp.render(ctx.req, ctx.res, '/b', ctx.query)
    ctx.respond = false
  })

  router.get('/b', async ctx => {
    await nextapp.render(ctx.req, ctx.res, '/a', ctx.query)
    ctx.respond = false
  })

  router.get('*', async ctx => {
    await nexthandle(ctx.req, ctx.res)
    ctx.respond = false
  })

  app.use(async (ctx, next) => {
     ctx.res.statusCode = 200
     await next()
   })
  /**
   *  open mysql connect
   */
  models.sequelize.sync().then(function() {
    // Listen on provided port, on all network interfaces.
  	const port = config.port

  	app.use(router.routes())

  	app.listen(config.port, () => {
  	  console.log(`Server started on ${config.port}`)
  	})
  })

  module.exports = app

})
