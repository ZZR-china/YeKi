import conf from '../../conf'
const db_prefix = conf.db.prefix

/**
 * [标签与图片关系model, 多对多关系]
 * @param  {[type]} sequelize [description]
 * @param  {[type]} DataTypes [description]
 * @return {[type]}           [description]
 */
export default function(sequelize, DataTypes) {
  const LabelAlbum = sequelize.define('LabelAlbum', {
    label_id: { 
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: '标签id'
    },
    album_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: '图册id'
    }
  }, {
    tableName: db_prefix + 'label_album',
    freezeTableName: true,
    timestamps: false
  })
  return LabelAlbum
}
