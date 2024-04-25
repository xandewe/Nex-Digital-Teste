const sequelizePaginate = require('sequelize-paginate')

const product = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
        id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
        },
        name: {
        type: DataTypes.STRING,
        allowNull: false
        },
        value: {
        type: DataTypes.DECIMAL,
        allowNull: false
        },
        valuePer: {
        type: DataTypes.ENUM('kg', 'unit'),
        allowNull: false
        },
        createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
        },
        deletedAt: {
        type: DataTypes.DATE,
        allowNull: true
        },
        updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
        }
    }, {
        tableName: 'products'
    });

    sequelizePaginate.paginate(Product)
    return Product
};

module.exports = product;