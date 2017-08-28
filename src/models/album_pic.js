'use strict';
import conf from '../../conf'
const db_prefix = conf.db.prefix

export default function(sequelize, DataTypes) {
  const AlbumPic = sequelize.define('AlbumPic', {
    album_id: DataTypes.INTEGER,
    pic_id: DataTypes.INTEGER,
    order: DataTypes.INTEGER
  }, {
    tableName: db_prefix + 'album_pic',
    freezeTableName: true,
    timestamps: false
  })
  
  return AlbumPic
}
