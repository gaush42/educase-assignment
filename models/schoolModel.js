const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

//This code defines a Sequelize model named School with columns: id, name, address, latitude, and longitude. 
//The id is an auto-incrementing primary key. The model represents the schools table
const School = sequelize.define('School', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    latitude: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    longitude: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
}, {
    tableName: 'schools',
    timestamps: false
});

module.exports = School