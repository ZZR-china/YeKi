import conf from '../../conf'
const db_prefix = conf.db.prefix

export default function(sequelize, DataTypes) {
  const Category = sequelize.define('Category', {
    category_name: {
      type: DataTypes.STRING(190), 
      unique: true
    },
    category_hot: { 
      type: DataTypes.INTEGER,
      comment: '记录创建时间'
    },
    createtime: { 
      type: DataTypes.DATE,
      defaultValue: sequelize.NOW,
      comment: '记录创建时间'
    }
  }, {
    tableName: db_prefix + 'category',
    freezeTableName: true,
    timestamps: false
  })
  
  return Category
}
