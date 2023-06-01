const { DataTypes } = require('sequelize');
const { sequelize } = require('../db');


const Marker = sequelize.define('Marker', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING
  },
  latitude: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  longitude: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
}, {});

module.exports = {
  Marker,
}