import conf from '../../conf'
const db_prefix = conf.db.prefix

/**
 * [帖子model]
 * @param  {[type]} sequelize [description]
 * @param  {[type]} DataTypes [description]
 * @return {[type]}           [description]
 */
export default function(sequelize, DataTypes) {
  const Post = sequelize.define('Post', {
    post_title: {
      type: DataTypes.STRING(190), 
      allowNull: false,
      unique: true,
      comment: '帖子标题'
    },
    post_description: { 
      type: DataTypes.STRING(225), 
      comment: '帖子描述'
    },
    post_views: {
      type: DataTypes.INTEGER, 
      defaultValue: 0, 
      comment: '帖子浏览量'
    },
    user_id: { 
      type: DataTypes.INTEGER,
      comment: '创建人id'
    },
    isopen: {
      type: DataTypes.INTEGER(1), 
      defaultValue: 1, 
      comment: '是否公开, 0.不公开、1.公开' 
    },
    hide: { 
      type: DataTypes.INTEGER(1), 
      defaultValue: 1,
      comment: '图片是否逻辑删除, 0.删除、1.未删除'
    },
    update_time: {
      type: DataTypes.DATE,
      comment: '帖子最近一次修改时间' 
    },
    create_time: {
      type: DataTypes.DATE, 
      defaultValue: sequelize.NOW, 
      comment: '记录创建时间'
    }
  }, {
    tableName: db_prefix + 'post',
    freezeTableName: true,
    timestamps: false
  })
  return Post
}
