const mysql = require('mysql2');
const fs = require('fs')
const Sequelize = require('sequelize')
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
    dialectOptions: {
        ssl: {
            require: true,
            ca: fs.readFileSync(__dirname + '/ca.pem'),
            rejectUnauthorized: true
        }
    }
});

module.exports = sequelize;