import glob from 'glob'
import config from '../../../conf'

let spiderCtrl = {}
let spiders = glob.sync(config.rootPath + '/src/utils/spiders/**.spider.js')

spiders.forEach(function(spiderpath) {
    console.log('Loading spiders ' + spiderpath)
    let spider = require(spiderpath).default
    spiderCtrl[spider.name] = {}
    spiderCtrl[spider.name].start = spider.start
})

export default spiderCtrl