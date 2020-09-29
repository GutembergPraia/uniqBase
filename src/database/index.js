const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Client = require('../models/Client')
const Address = require('../models/Address')

const connection = new Sequelize(dbConfig);

Client.init(connection);
Address.init(connection);

Address.associate(connection.models);

module.exports = connection;