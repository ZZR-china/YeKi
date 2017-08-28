'use strict'

import conf from '../../conf'
const db_prefix = conf.db.prefix

export default function(sequelize, DataTypes) {
  const CategoryPic = sequelize.define('CategoryPic', {
    category_id: DataTypes.INTEGER,
    pic_id: DataTypes.INTEGER
  }, {
    tableName: db_prefix + 'category_pic',
    freezeTableName: true,
    timestamps: false
  })
  
  return CategoryPic
}
