const Sequelize = require('sequelize')
const dbConfig = require('./database')

const sequelize = new Sequelize(dbConfig);

try {
    const conn = sequelize.sync();
} catch(error) {
    console.log(error);
}

module.exports = sequelize;