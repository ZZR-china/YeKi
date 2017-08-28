'use strict';
import conf from '../../conf'
const db_prefix = conf.db.prefix

export default function(sequelize, DataTypes) {
  const Category = sequelize.define('Category', {
    category_name: {type: DataTypes.STRING(190), unique: true},
    category_hot: DataTypes.INTEGER,
    createtime: DataTypes.DATE
  }, {
    tableName: db_prefix + 'category',
    freezeTableName: true,
    timestamps: false
  })
  
  return Category
}
