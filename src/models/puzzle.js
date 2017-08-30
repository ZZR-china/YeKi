import conf from '../../conf'
const db_prefix = conf.db.prefix

/**
 * [谜题model]
 * @param  {[type]} sequelize [description]
 * @param  {[type]} DataTypes [description]
 * @return {[type]}           [description]
 */
export default function(sequelize, DataTypes) {
  const Puzzle = sequelize.define('Puzzle', {
    puzzle_title: {
      type: DataTypes.STRING,
      comment: '谜题标题'
    },
    puzzle_content: {
      type: DataTypes.STRING,
      comment: '谜题内容'
    },
    hide: { 
      type: DataTypes.INTEGER(1), 
      defaultValue: 1,
      comment: '记录是否逻辑删除, 0.删除、1.未删除'
    },
    update_time: {
      type: DataTypes.DATE,
      comment: '记录最近一次修改时间' 
    },
    create_time: {
      type: DataTypes.DATE,
      defaultValue: sequelize.NOW, 
      comment: '记录创建时间'
    }
  }, {
    tableName: db_prefix + 'puzzle',
    freezeTableName: true,
    timestamps: false
  })
  return Puzzle
}
