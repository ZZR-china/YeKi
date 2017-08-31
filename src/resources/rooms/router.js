import * as roomCtrl from './controller'

export const baseUrl = '/rooms'

export default [
  {
    method: 'GET',
    route: '/',
    handlers: [
      roomCtrl.getRooms
    ]
  }, {
  	method: 'POST',
  	route: '/',
  	handlers: [
  	  roomCtrl.createRooms
  	]
  }
]
