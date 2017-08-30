import conf from '../../conf'
const db_prefix = conf.db.prefix

/**
 * [游戏规则]
 * @param  {[type]} sequelize [description]
 * @param  {[type]} DataTypes [description]
 * @return {[type]}           [description]
 */
export default function(sequelize, DataTypes) {
  const Rule = sequelize.define('Rule', {
    rule_name: { 
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: '游戏规则名字'
    },
    update_time: {
      type: DataTypes.INTEGER,
      comment: '最后一次修改时间'
    },
    create_user_id: {
      type: DataTypes.INTEGER,
      defaultValue: sequelize.NOW,
      comment: '创建者id'
    }
  }, {
    tableName: db_prefix + 'rule',
    freezeTableName: true,
    timestamps: false
  })
  return Rule
}
