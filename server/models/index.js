const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

const env = process.env.NODE_ENV || 'development';
const config = require(path.resolve(__dirname, '../config/config.js'))[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config,
  );
}

// Manually require models instead of dynamic loading
db.TrafficByCountry = require('./trafficByCountry')(
  sequelize,
  Sequelize.DataTypes,
);
db.VehicleDistribution = require('./vehicleDistribution')(
  sequelize,
  Sequelize.DataTypes,
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
