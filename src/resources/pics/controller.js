import axios from 'axios'
import request from 'request'
import fs from 'fs'
import config from '../../../conf'
import models from '../../models'

const { Pic } = models

export async function getProxy (ctx) {
  try {
    const imgPath = config.rootPath + '/upload/test4.jpg'
    request({
      url: 'http://i.meizitu.net/2017/08/27c16.jpg',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.1 (KHTML, like Gecko) Chrome/22.0.1207.1 Safari/537.1'
      }
    }).pipe(fs.createWriteStream(imgPath))
    ctx.body = 'pic is downloading'
  } catch (e) {
    ctx.throw(422, e.message)
  }
}
