import common from './env/common'

const env = process.env.NODE_ENV || 'development'
// eslint-disable-line import/no-dynamic-require
const config = require(`./env/${env}`).default

export default Object.assign({}, common, config)
