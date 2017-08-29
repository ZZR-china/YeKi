import conf from '../../conf'
const db_prefix = conf.db.prefix

export default function(sequelize, DataTypes) {
  const CategoryPic = sequelize.define('CategoryPic', {
    category_id: { 
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    pic_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
    tableName: db_prefix + 'category_pic',
    freezeTableName: true,
    timestamps: false
  })
  return CategoryPic
}
