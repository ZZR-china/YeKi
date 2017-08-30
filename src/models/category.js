import conf from '../../conf'
const db_prefix = conf.db.prefix

/**
 * [分类model, 分类比较笼统相对较少, 细分化可以用label]
 * @param  {[type]} sequelize [description]
 * @param  {[type]} DataTypes [description]
 * @return {[type]}           [description]
 */
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
    category_type: {
      type: DataTypes.INTEGER(1),
      comment: '分类的种类: 1.图册和图片分类、2.小说分类、3.问题分类'
    },
    create_time: { 
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
