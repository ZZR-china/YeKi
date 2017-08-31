import conf from '../../conf'
const db_prefix = conf.db.prefix

/**
 * [房间model, 每个人同一时间只能创建一个房间]
 * @param  {[type]} sequelize [description]
 * @param  {[type]} DataTypes [description]
 * @return {[type]}           [description]
 */
export default function(sequelize, DataTypes) {
  const Room = sequelize.define('Room', {
    room_name: {
      type: DataTypes.STRING,
      defaultValue: '',
      comment: '房间名字, 不必要，可为空'
    },
    room_password: {
      type: DataTypes.STRING,
      comment: '房间密码'
    },
    room_password_salt: {
      type: DataTypes.STRING,
      comment: '房间密码key值'
    },
    room_max_people: {
      type: DataTypes.INTEGER,
      defaultValue: 3,
      comment: '房间可容纳人数, 创建后不可修改'
    },
    room_type: {
      type: DataTypes.INTEGER(3),
      defaultValue: 1,
      comment: '房间类型: 1.谜语房间、2.休闲房间'
    },
    room_status: {
      type: DataTypes.INTEGER(3),
      defaultValue: 0,
      comment: '房间状态: 0.初始化未使用、1.等待中、2.游戏中、3.暂停中、4.匹配中、5.结算中、6.游戏结束、7.因违规等原因封掉'
    },
    room_puzzle: {
      type: DataTypes.INTEGER,
      comment: '房间关联谜题id'
    },
    room_puzzle_ansower: {
      type: DataTypes.INTEGER,
      comment: '房间关联谜题正确答案id，每个房间的谜题正确答案都是随机的'
    },
    user_id: {
      type: DataTypes.INTEGER,
      comment: '创建人id'
    },
    hide: {
      type: DataTypes.INTEGER(1), 
      defaultValue: 1, 
      comment: '房间是否逻辑删除, 0.删除, 1.未删除'
    },
    update_time: {
      type: DataTypes.DATE,
      comment: '房间信息最近一次修改时间'
    },
    create_time: {
      type: DataTypes.DATE,
      defaultValue: sequelize.NOW,
      comment: '记录创建时间'
    }
  }, {
    tableName: db_prefix + 'room',
    freezeTableName: true,
    timestamps: false,
    getterMethods   : {
    }
  })
  return Room
}
