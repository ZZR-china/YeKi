import conf from '../../conf'
const db_prefix = conf.db.prefix

/**
 * [文章model, 与章节区分开, 章节必须与书籍相关, 文章是独立的, 但是可以被引入为章节]
 * @param  {[type]} sequelize [description]
 * @param  {[type]} DataTypes [description]
 * @return {[type]}           [description]
 */
export default function(sequelize, DataTypes) {
  const Article = sequelize.define('Article', {
    article_title: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: '文章标题'
    },
    article_description: {
      type: DataTypes.STRING(225), 
      comment: '文章描述'
    },
    article_views: {
      type: DataTypes.INTEGER, 
      defaultValue: 0,
      comment: '文章浏览量'
    },
    article_content: {
      type: DataTypes.TEXT,
      defaultValue: '',
      comment: '文章内容'
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
      comment: '文章是否逻辑删除, 0.删除、1.未删除'
    },
    update_time: {
      type: DataTypes.DATE,
      comment: '文章最近一次修改时间' 
    },
    create_time: {
      type: DataTypes.DATE, 
      defaultValue: sequelize.NOW, 
      comment: '记录创建时间'
    }
  }, {
    tableName: db_prefix + 'article',
    freezeTableName: true,
    timestamps: false
  })
  return Article
}
