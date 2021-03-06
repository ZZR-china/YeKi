import Koa from 'koa'
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

global.Handle =  handle

const app = new Koa()
app.keys = [config.jwtSecret]
// x-response-time
app.use(responseMiddleware())
app.use(convert(logger()))
app.use(bodyParser())
app.use(errorMiddleware())

app.use(convert(mount('/docs', serve(`${process.cwd()}/docs`))))
app.use(convert(mount('/upload', serve(`${process.cwd()}/upload`))))
app.use(convert(mount('/statics', serve(`${process.cwd()}/statics`))))

// 引入 restful api 路由
resources(app)
/**
 *  open mysql connect
 */

models.sequelize.sync().then(function() {
  // Listen on provided port, on all network interfaces.
  const port = config.port

  app.listen(config.port, () => {
    console.log(`Server started on ${config.port}`)
  })
})


module.exports = app
