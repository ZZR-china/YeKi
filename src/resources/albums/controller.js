import models from '../../models'

const { Album } = models
/**
  @api {GET} /albums 获取图册列表
  @apiPermission User
  @apiVersion 1.0.0
  @apiName 获取图册列表
  @apiGroup Albums
  @apiExample Example usage:
    curl -H "Content-Type: application/json" "authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU4YjhmZDRkODUyYTE1YzliNmYyNjI3MSIsImlhdCI6MTQ4ODU1MTc2N30.IEgYwmgyqOBft9s38ool7cmuC2yIlWYVLf4WQzcbqAI" -X GET localhost:5000/bookshelfs
  @apiSuccessExample {json} Success-Response:
    HTTP/1.1 200 OK
    {
      "count": 1,
      "rows": [
        {
          "id": 1,
          "album_views": 11
        }
      ]
    }
  @apiErrorExample {json} Error-Response:
    HTTP/1.1 422 Unprocessable Entity
      {
        "status": 422,
        "error": ""
      }
 */
export async function getAlbums (ctx) {
  let list
  try {
    list = await Album.findAndCountAll({
      where: {
        hide: 1
      },
      limit: 10,
      offset: 0
    })
  } catch (e) {
    ctx.throw(422, e.message)
  }

  ctx.body = {
    ...list
  }
}

export async function testAlbums (ctx) {
  try {
    let list = await Album.findOne({
      where: {
        album_name: 'shijie'
      }
    })
    return ctx.body = {
      list: list
    }
  } catch (e) {
    ctx.throw(422, e.message)
  }
}

