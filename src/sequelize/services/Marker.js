const { Sequelize, DataTypes, Model } = require('sequelize');
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

Marker.sync();

async function getAll() {
  return await Marker.findAll();
}

async function create(marker) {
  return await Marker.create(marker);
}

async function remove(id) {
  return await Marker.destroy({
    where: { id }
  });
}


module.exports = {
  Marker,
  getAll,
  create,
  remove
}