'use strict';

module.exports = function(sequelize, DataTypes) {
  const Tourline = sequelize.define('Tourline', {
    name: DataTypes.STRING,
    short_name: DataTypes.STRING,
    city_id: DataTypes.STRING,
    city_match: DataTypes.STRING,
    city_match_row: DataTypes.STRING,
    around_city_match: DataTypes.STRING,
    brief: DataTypes.STRING,
    tour_desc: DataTypes.STRING
  }, {
    tableName: 'fanwe_tourline',
    freezeTableName: true,
    timestamps: false
  });
  
  return Tourline;
};