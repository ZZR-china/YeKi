import models from '../../models'

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
      "list": [
        {
          "_id": "58c949c5d18e2024b66360fc",
          "user": "58c94997d18e2024b66360fb",
          "novel": {
            "_id": "58c4cb509e4dad30f80d2f84",
            "url": "http://www.37zw.com/3/3960/",
            "name": "1852铁血中华",
            "author": "绯红之月",
            "updateTime": "2017-03-12",
            "introduction": "    1852,是革命，或者是一场该改朝换代的改良。燃烧的铁与血，最终能创造一个什么样的未来？\n",
            "__v": 0,
            "countChapter": "1377",
            "lastChapterTitle": "第644章 剪影 3",
            "img": "http://www.37zw.com/d/image/3/3960/3960s.jpg"
          }
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
    list = await models.Album.findAndCountAll({})
  } catch (e) {
    ctx.throw(422, e.message)
  }

  ctx.body = {
    list: list
  }
}
