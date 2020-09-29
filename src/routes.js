const express = require('express');
const ClientController = require('./controllers/ClientControllers')

const routes = express.Router();

routes.post('/clients', ClientController.store)

module.exports = routes;