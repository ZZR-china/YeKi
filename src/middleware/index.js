export function errorMiddleware () {
  return async (ctx, next) => {
    try {
      await next()
    } catch (err) {
      ctx.status = err.status || 500
      ctx.body = err.message
      ctx.app.emit('error', err, ctx)
    }
  }
}

export function responseMiddleware () {
  return async (ctx, next) => {
    const start = Date.now()
    await next()
    const ms = Date.now() - start
    ctx.set('X-Response-Time', `${ms}ms`)
  }
}

/*
 * koa-react-view.js
 * 提供 react server render 功能
 * {
 *   options : {
 *     viewpath: viewpath,                 // the root directory of view files
 *     doctype: '<!DOCTYPE html>',
 *     extname: '.js',                     // view层直接渲染文件名后缀
 *     writeResp: true,                    // 是否需要在view层直接输出
 *   }
 * }
 */
export function reactView () {

}
