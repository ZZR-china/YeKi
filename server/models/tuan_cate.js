'use strict';

module.exports = function(sequelize, DataTypes) {
  const TuanCate = sequelize.define('TuanCate', {
    name: DataTypes.STRING,
    count: DataTypes.INTEGER,
    sort: DataTypes.INTEGER,
    type: DataTypes.INTEGER,
  }, {
    tableName: 'fanwe_tuan_cate',
    freezeTableName: true,
    timestamps: false,
  });
  
  return TuanCate;
};