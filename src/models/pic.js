'use strict'

import conf from '../../conf'
const db_prefix = conf.db.prefix

export default function(sequelize, DataTypes) {
  const Pic = sequelize.define('Pic', {
    pic_name: {type: DataTypes.STRING(190), unique: true, comment: '图片名字' },
    pic_description: { type: DataTypes.STRING(225), comment: '图片描述' },
    pic_url: { type: DataTypes.STRING, comment: '图片网址' },
    pic_views: { type: DataTypes.INTEGER, comment: '图片浏览量' },
    pic_origin_web_id: { type: DataTypes.INTEGER, comment: '图册来源网站id' },
    pic_parse_url: { type: DataTypes.STRING, comment: '爬虫解析地址' },
    pic_type: { type: DataTypes.INTEGER(1), comment: '图片类型: 1.用户创建、2.爬虫创建、3.后台创建' },
    pic_time: { type: DataTypes.DATE, comment: '图片创建时间，与createtime区分开' },
    user_id: { type: DataTypes.INTEGER, comment: '创建人id, 当pic_type为1时存在' },
    isopen: { type: DataTypes.INTEGER(1), comment: '是否公开, 0.不公开、1.公开' },
    hide: { type: DataTypes.INTEGER(1), comment: '图片是否逻辑删除, 0.删除, 1.未删除'},
    createtime: { type: DataTypes.DATE, comment: '记录创建时间' }
  }, {
    tableName: db_prefix + 'pic',
    freezeTableName: true,
    timestamps: false
  })
  
  return Pic
}
