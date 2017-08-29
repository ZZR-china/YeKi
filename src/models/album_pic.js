import conf from '../../conf'
const db_prefix = conf.db.prefix

export default function(sequelize, DataTypes) {
  const AlbumPic = sequelize.define('AlbumPic', {
    album_id: { 
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    pic_id: { 
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    order: {
      type: DataTypes.INTEGER,
      defaultValue: 1
    }
  }, {
    tableName: db_prefix + 'album_pic',
    freezeTableName: true,
    timestamps: false
  })
  
  return AlbumPic
}
