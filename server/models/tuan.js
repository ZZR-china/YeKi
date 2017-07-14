'use strict';

module.exports = function(sequelize, DataTypes) {
  const Tuan = sequelize.define('Tuan', {
    name: DataTypes.STRING,
    origin_price: DataTypes.DOUBLE, // 原价
    sale_price: DataTypes.DOUBLE, // 销售价
    current_price: DataTypes.DOUBLE,
    discount: DataTypes.INTEGER,
    image: DataTypes.STRING,
    cate_id: DataTypes.INTEGER,
  }, {
    tableName: 'fanwe_tuan',
    freezeTableName: true,
    timestamps: false,
    getterMethods   : {
      _discount: function()  { return Number(this.sale_price/this.origin_price*10).toFixed(1) }
    }
  });
  
  return Tuan;
};