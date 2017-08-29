import conf from '../../conf'
const db_prefix = conf.db.prefix

export default function(sequelize, DataTypes) {
  const CategoryAlbum = sequelize.define('CategoryAlbum', {
    category_id: { 
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    album_id: { 
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
    tableName: db_prefix + 'category_album',
    freezeTableName: true,
    timestamps: false
  })
  return CategoryAlbum
}
