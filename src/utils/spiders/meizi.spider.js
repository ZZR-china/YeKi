import axios from 'axios'
import cheerio from 'cheerio'

import config from '../../../conf'
import models from '../../models'
import * as _time from '../time'

const { Album, Pic, AlbumPic, Category, CategoryAlbum, CategoryPic } = models
const homesite = config.origin_web.meizi
/**
 * [manageBricks 处理获得的$('#post-archives .archive-brick').eq(n)
 * 得到其中的网址并解析]
 * @param  {[type]} bricks [$('#post-archives .archive-brick').eq(n)]
 * @return {[type]}        [description]
 */
function manageBricks(brick) {
  let href = brick.find('a').attr('href')
  return saveAlbum(href)
}

function managePreviw(str) {
  const picview_reg = /(次浏览)|(,)/g;
  str = Number(str.replace(picview_reg, ""));
  str = typeof str === "number" ? str : 10000;
  return str;
}

function managePageCount(str) {
  const reg = /页/
  str = str.replace(reg, "").split(/\//)[1]
  return Number(str)
}

/**
 * [uniquSave 根据query保存数据， 确保唯一性]
 * @param  {[type]} query      [description]
 * @param  {[type]} data       [description]
 * @param  {[type]} MysqlModel [description]
 * @return {[type]}            [description]
 */
async function uniquSave(query, data, MysqlModel) {
    try {
        const queryRes = await MysqlModel.findOne({
            where: query
        })
        if (queryRes) {
            return queryRes
        }
        const newData = await MysqlModel.create(data)
        return newData
    } catch (e) {
        console.error(e)
        return null
    }
}

async function saveAlbum(href, count = 1) {
    try {
        let origin_url = href + "/" + count
        let response = await axios.get(origin_url)
        let data = response.data;
        let $ = cheerio.load(data)
        let album_origin_url = href
        let article = $("#content article").eq(0)
        let album_name = article.find('h2').text()
        let url = article.find('figure a img').attr('src')
        let alt = article.find('figure a img').attr('alt') || ""
        let meta = article.find('.post-meta')
        let picview = managePreviw(meta.find('.time').eq(1).text())
        let time = meta.find('.time').eq(0).text()
        let album_time = new Date(time)
        let pagecount = $(".single-page .prev-next-page").text()
        pagecount = managePageCount(pagecount)

        let album, album_query = { album_name }
        let album_doc = { 
                album_name,
                album_description: album_name,
                album_time,
                album_origin_web_id: homesite.id,
                album_type: 2
            }
        album = await uniquSave(album_query, album_doc, Album);
        let album_id = album.id
        let categoriesArr = $(".post-meta ul li a"), categories = []
        for (let i = 0, len = categoriesArr.length; i < len; i++) {
            let cate = categoriesArr.eq(i).text().trim()
            console.log('cate', cate)
            let category_doc, category_query = { category_name: cate }
            category_doc = await uniquSave(category_query, category_query, Category)
            await categories.push(category_doc)
            let album_category_query = { album_id, category_id: category_doc._id }
            await uniquSave(album_category_query, album_category_query, CategoryAlbum)
        }
        let albumUpdate = {
            href,
            count,
            album_id,
            categories,
            view: 0,
            max_picview: 0,
            hotest_pic_id: null,
            hotest_pic_url: null
        }
        //if pagecount not done iteration this func
        while ((pagecount - count) >= 0) {
            albumUpdate = await savePic(albumUpdate)
            count = albumUpdate.count
        }
        return await Album.update(albumUpdate, {
          where: {
            id: album_id
          }
        })
    } catch (err) {
        console.error(err);
    }
}

async function savePic({ href, count, album_id, categories, view, max_picview, hotest_pic_id, hotest_pic_url }) {
    try {
        let pic_parse_url = href + "/" + count
        let response = await axios.get(pic_parse_url)
        let data = response.data
        let $ = cheerio.load(data)
        let article = $("#content article").eq(0)
        let pic_name = article.find('h2').text()
        let pic_url = article.find('figure a img').attr('src')
        let alt = article.find('figure a img').attr('alt') || ""
        let meta = article.find('.post-meta')
        let pic_views = managePreviw(meta.find('.time').eq(1).text())
        let time = meta.find('.time').eq(0).text()
        let pic_time = new Date(time)

        let pic, pic_query = { pic_name, pic_url },
            pic_doc = {
                pic_name,
                pic_description: pic_name,
                pic_url,
                pic_parse_url,
                pic_origin_web_id: homesite.id,
                pic_views,
                pic_order: count,
                pic_time,
                pic_type: 2
            }

        pic = await uniquSave(pic_query, pic_doc, Pic)
        let pic_id = pic.id;
        let album_pic_query = { pic_id: pic_id, album_id: album_id }
        await uniquSave(album_pic_query, album_pic_query, AlbumPic)

        for (let i = 0, len = categories.length; i < len; i++) {
            let category_id = categories._id;
            let pic_category_query = { pic_id: pic_id, category_id: category_id }
            await uniquSave(pic_category_query, pic_category_query, PicCategory);
        }
        view += pic_views
        if (max_picview < pic_views ) {
            max_picview = pic_views
            hotest_pic_id = pic_id
            hotest_pic_url = pic.url
        }
        count++
        console.log("=============== start ================")
        console.log("pic title", pic_name)
        console.log("origin_url", pic_parse_url)
        console.log("pic max_picview", max_picview)
        console.log("=============== end ================")
        return { href, count, album_id, categories, view, max_picview, hotest_pic_id, hotest_pic_url }
    } catch (err) {
        console.error(err);
    }
}

// 主start程序
const start = async function(ctx) {
    try {
        let meiziall_href = "http://m.mzitu.com/all"
        let response = await axios.get(meiziall_href)
        let data = response.data
        let $ = cheerio.load(data)
        const archive_bricks = $('#post-archives .archive-brick')
        const length = archive_bricks.length
        const query = ctx.query
        let start = (Number(query.start) - 1)
        start = start ? (start < 0 ? 0 : start) : 0
        let end = (Number(query.end) - 1)
        end = (end === 0) ? 0 : (end ? (end < 0 ? 0 : end) : length)
        if (start > end) {
            ctx.throw(422, 'start is bigger than end')
            return
        }
        while (start <= end) {
            manageBricks(archive_bricks.eq(start))
            start++
        }
        return ctx.body = {
            message: 'spider is start'
        }
    } catch (err) {
        console.error(err);
        ctx.throw(422, err.message)
    }
}

export default {
    start,
    name: 'meizi'
}
