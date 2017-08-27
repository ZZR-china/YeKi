import * as album from './controller'

export const baseUrl = '/albums'

export default [
  {
    method: 'GET',
    route: '/',
    handlers: [
      album.getAlbums
    ]
  }
]
