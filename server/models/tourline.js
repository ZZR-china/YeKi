'use strict';

module.exports = function(sequelize, DataTypes) {
  const Tourline = sequelize.define('Tourline', {
    name: DataTypes.STRING,
    short_name: DataTypes.STRING,
    origin_price: DataTypes.DOUBLE,
    price: DataTypes.DOUBLE,
    price_explain: DataTypes.STRING,
  }, {
    tableName: 'fanwe_tourline',
    freezeTableName: true,
    timestamps: false
  });
  
  return Tourline;
};