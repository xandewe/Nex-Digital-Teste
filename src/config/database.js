const config = require('./index')

console.log('#######database########')
console.log(config)
console.log('###############')

module.exports = {
    dialect: 'postgres',
    username: config.DATABASE_USERNAME,
    password: config.DATABASE_PASSWORD,
    database: config.DATABASE,
    host: config.DATABASE_HOST,
    port: config.DATABASE_PORT
}