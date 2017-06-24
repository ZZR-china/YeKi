const Sequelize = require('sequelize')
const env = process.env.NODE_ENV || 'development';

// 数据库

// 地址：bdm248477122.my3w.com

// 数据库名：bdm248477122_db

// 数据库帐号：bdm248477122

// 数据库密码：zhulyl520

const db = {
    development: {
        mysql: {
            username: 'root',
            password: '123',
            host: 'localhost',
            port: 3306,
            dialect: 'mysql',
            database: 'iyouyou',
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
    },
    production: {
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
            host: process.env.REDIS_HOST,
            port: process.env.REDIS_PORT,
            password: 'ssl_redis'
        }
    }
}

module.exports = db[env];