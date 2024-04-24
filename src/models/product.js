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
        value_per: {
        type: DataTypes.ENUM('kg', 'unit'),
        allowNull: false
        },
        created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
        },
        deleted_at: {
        type: DataTypes.DATE,
        allowNull: true
        },
        updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
        }
    }, {
        tableName: 'products'
    });

    return Product
};

module.exports = product;