const Sequelize = require('sequelize')

const sequelize = new Sequelize(process.env.DB_URL);

try {
    const conn = sequelize.sync();
} catch(error) {
    console.log(error);
}

module.exports = sequelize;