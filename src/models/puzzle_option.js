import conf from '../../conf'
const db_prefix = conf.db.prefix

/**
 * [谜题选项model]
 * @param  {[type]} sequelize [description]
 * @param  {[type]} DataTypes [description]
 * @return {[type]}           [description]
 */
export default function(sequelize, DataTypes) {
  const PuzzleOption = sequelize.define('PuzzleOption', {
    puzzle_id: {
      type: DataTypes.INTEGER, 
      allowNull: false,
      comment: '谜题选项关联的id'
    },
    puzzle_option_mark: {
      type: DataTypes.STRING, 
      allowNull: false,
      comment: '谜题选项代号，一般为英文，例如A|B|C|D'
    },
    puzzle_option_content: {
      type: DataTypes.STRING, 
      comment: '谜题选项内容'
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
    tableName: db_prefix + 'puzzle_option',
    freezeTableName: true,
    timestamps: false
  })
  return PuzzleOption
}
