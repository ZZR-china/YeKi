'use strict'

import conf from '../../conf'
const db_prefix = conf.db.prefix

export default function(sequelize, DataTypes) {
  const Album = sequelize.define('Album', {
    album_name: { type: DataTypes.STRING(190), unique: true, comment: '图册名字' },
    album_description: { type: DataTypes.STRING(225), comment: '图册描述' },
    album_views: { type: DataTypes.INTEGER(11), comment: '图册浏览量' },
    album_cover_url: { type: DataTypes.STRING(255), comment: '图册封面图片url' },
    album_type: { type: DataTypes.INTEGER(1), comment: '图册类型: 1.用户创建、2.爬虫创建、3.后台创建' },
    album_origin_web_id: { type: DataTypes.INTEGER, comment: '图册来源网站id' },
    album_time: { type: DataTypes.DATE, comment: '图册创建时间，与createtime区分开' },
    user_id: { type: DataTypes.INTEGER, comment: '创建人id, 当album_type为1时存在' },
    isopen: { type: DataTypes.INTEGER(1), comment: '是否公开, 0.不公开、1.公开' },
    hide: { type: DataTypes.INTEGER(1), comment: '图册是否逻辑删除, 0.删除, 1.未删除'},
    createtime: { type: DataTypes.DATE, comment: '记录创建时间' }
  }, {
    tableName: db_prefix + 'album',
    freezeTableName: true,
    timestamps: false,
    getterMethods   : {
      _discount: function()  { return Number(this.album_views).toFixed(1) }
    }
  })
  return Album
}
