import * as spider from './controller'

export const baseUrl = '/spiders'

export default [
  {
    method: 'GET',
    route: '/meizi',
    handlers: [
      spider.getMeizi
    ]
  }
]
