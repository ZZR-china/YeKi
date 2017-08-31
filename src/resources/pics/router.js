import * as pic from './controller'

export const baseUrl = '/pics'

export default [
  {
    method: 'GET',
    route: '/proxy',
    handlers: [
      pic.getProxy
    ]
  }
]
