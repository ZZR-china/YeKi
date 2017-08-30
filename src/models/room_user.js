import conf from '../../conf'
const db_prefix = conf.db.prefix

/**
 * [房间与用户关系model, 多对多关系]
 * @param  {[type]} sequelize [description]
 * @param  {[type]} DataTypes [description]
 * @return {[type]}           [description]
 */
export default function(sequelize, DataTypes) {
  const RoomUser = sequelize.define('RoomUser', {
    room_id: { 
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: '房间id'
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: '用户id'
    }
  }, {
    tableName: db_prefix + 'room_user',
    freezeTableName: true,
    timestamps: false
  })
  return RoomUser
}
