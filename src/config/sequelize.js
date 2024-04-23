const Sequelize = require('sequelize')

const user = process.env.DATABASE_USERNAME
const password = process.env.DATABASE_PASSWORD
const database = process.env.DATABASE
const host = process.env.DATABASE_HOST

const sequelize = new Sequelize((`postgres://${user}:${password}@${host}:5432/${database}`));

try {
    const conn = sequelize.sync();
} catch(error) {
    console.log(error);
}

module.exports = sequelize;