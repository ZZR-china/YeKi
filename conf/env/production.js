const Sequelize = require('sequelize')
const env = process.env.NODE_ENV || 'development'

export default {
	env: process.env.NODE_ENV,
	jwtSecret: process.env.jwtSecret,
	meiziKey: process.env.MEIZI_KEY,
	port: process.env.APP_PORT || 3000,
	prefix: 'yeki_',
	db: {
		prefix: 'yeki_',
		mysql: {
			username: process.env.MYSQL_USERNAME,
			password: process.env.MYSQL_PWD,
			host: process.env.MYSQL_HOST,
			port: process.env.MYSQL_PORT,
			database: process.env.MYSQL_DATABASE,
			dialect: 'mysql',
			timezone: 'Asia/Shanghai',  /* 时区 */
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
