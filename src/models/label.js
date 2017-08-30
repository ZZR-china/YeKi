import conf from '../../conf'
const db_prefix = conf.db.prefix

/**
 * [标签model, 标签分类比较细微相对较多， 笼统化分类可以用category]
 * @param  {[type]} sequelize [description]
 * @param  {[type]} DataTypes [description]
 * @return {[type]}           [description]
 */
export default function(sequelize, DataTypes) {
  const Label = sequelize.define('Label', {
    label_name: {
      type: DataTypes.STRING(100), 
      unique: true
    },
    createtime: {
      type: DataTypes.DATE,
      defaultValue: sequelize.NOW,
      comment: '记录创建时间'
    }
  }, {
    tableName: db_prefix + 'label',
    freezeTableName: true,
    timestamps: false
  })  
  return Label
}
