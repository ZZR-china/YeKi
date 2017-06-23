const env = process.env.NODE_ENV || 'development';

const port = {
    development: 3000,
    production: process.env.PORT || 80
}

module.exports = port[env];