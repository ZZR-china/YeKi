import models from '../../models'

const { Rooms } = models

/**
  @api {GET} /rooms 获取房间列表
  @apiPermission User
  @apiVersion 1.0.0
  @apiName 获取房间列表
  @apiGroup Rooms
  @apiSuccessExample {json} Success-Response:
    HTTP/1.1 200 OK
    {
      "count": 1,
      "rows": [
        {
          "id": 1,
          "room_name": 11
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
export async function getRooms (ctx) {
  try {
    let list = await Rooms.findAndCountAll({
      where: {
        hide: 1
      },
      limit: 10,
      offset: 0
    })
    ctx.body = {
      ...list
    }
  } catch (e) {
    ctx.throw(422, e.message)
  }

}

/**
  @api {GET} /rooms 创建新房间
  @apiPermission User
  @apiVersion 1.0.0
  @apiName 创建新房间
  @apiGroup Rooms
  @apiSuccessExample {json} Success-Response:
    HTTP/1.1 200 OK
    {
      "message": "创建房间成功",
      "data": {
        "id": 1,
        "room_name": 11
      }
    }
  @apiErrorExample {json} Error-Response:
    HTTP/1.1 422 Unprocessable Entity
      {
        "status": 422,
        "error": ""
      }
*/
export async function createRooms (ctx) {
  try {
    const { room_name, room_password, room_max_people, room_type, room_puzzle } = ctx.body
    let list = await Rooms.findAndCountAll({
      where: {
        hide: 1
      },
      limit: 10,
      offset: 0
    })
    ctx.body = {
      ...list
    }
  } catch (e) {
    ctx.throw(422, e.message)
  }

}
