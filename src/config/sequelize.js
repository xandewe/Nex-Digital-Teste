const Sequelize = require('sequelize')
const dbConfig = require('./database')

const sequelize = new Sequelize(dbConfig);

module.exports = sequelize;