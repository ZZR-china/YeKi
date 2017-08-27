const Sequelize = require('sequelize')
const env = process.env.NODE_ENV || 'development'

export default {
	env: 'development',
	meiziKey: '1949',
	jwtSecret: '0a6b944d-d2db-46fc-a85e-0295c986cd9f',
	port: 3000,
	prefix: 'yeki_',
	db: {
		prefix: 'yeki_',
		mysql: {
		  username: 'root',
		  password: '123',
		  host: 'localhost',
		  port: 3306,
		  dialect: 'mysql',
		  database: 'yeki',
		  timezone: 'Asia/Shanghai',/* 时区 */
		  logging: false,
		  pool: {
		      max: 5,
		      min: 0,
		      idle: 10000
		  },
		  /* 事务隔离级别为最高 */
		  isolationLevel: Sequelize.Transaction.ISOLATION_LEVELS.SERIALIZABLE
		},
		redis: {
		  host: 'localhost',
		  port: 6379,
		  password: 'ssl_redis'
		}
	}
}
