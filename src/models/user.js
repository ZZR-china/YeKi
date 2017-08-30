import conf from '../../conf'
const db_prefix = conf.db.prefix

/**
 * [用户model]
 * @param  {[type]} sequelize [description]
 * @param  {[type]} DataTypes [description]
 * @return {[type]}           [description]
 */
export default function(sequelize, DataTypes) {
  const User = sequelize.define('User', {
    user_name: {
      type: DataTypes.STRING(190), 
      unique: true, 
      allowNull: false,
      comment: '用户名字'
    },
    user_password: {
      type: DataTypes.STRING,
      comment: '用户密码'
    },
    user_password_salt: {
      type: DataTypes.STRING,
      comment: '用户密码key值'
    },
    user_nickname: {
      type: DataTypes.STRING,
      comment: '用户昵称'
    },
    user_email: {
      type: DataTypes.STRING,
      comment: '用户邮箱',
      validate: {
        isEmail: true
      }
    },
    hide: { 
      type: DataTypes.INTEGER(1), 
      defaultValue: 1, 
      comment: '用户是否逻辑删除, 0.删除, 1.未删除'
    },
    update_time: {
      type: DataTypes.DATE,
      comment: '用户信息最近一次修改时间' 
    },
    create_time: { 
      type: DataTypes.DATE,
      defaultValue: sequelize.NOW, 
      comment: '记录创建时间'
    }
  }, {
    tableName: db_prefix + 'user',
    freezeTableName: true,
    timestamps: false,
    getterMethods   : {
    }
  })
  return User
}
