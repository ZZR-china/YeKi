import spiderCtrl from '../../utils/spiders'
/**
  @api {GET} /spiders 爬虫api
  @apiPermission Spiders
  @apiVersion 1.0.0
  @apiName 妹子图爬虫
  @apiGroup Spiders
  @apiExample Example usage:
    curl -X GET localhost:3000/spiders/meizi?start=0&end=1
  @apiSuccessExample {json} Success-Response:
    HTTP/1.1 200 OK
    {
      message: 'spider is start'
    }
  @apiErrorExample {json} Error-Response:
    HTTP/1.1 422 Unprocessable Entity
      {
        "status": 422,
        "error": ""
      }
*/
export async function getMeizi (ctx) {
  try {
    await spiderCtrl['meizi'].start(ctx)
  } catch (e) {
    console.error(e)
    ctx.throw(422, e.message)
  }
}
