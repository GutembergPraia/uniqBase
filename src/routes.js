const express = require('express');
const ClientController = require('./controllers/ClientController');
const AddressController = require('./controllers/AddressController');

const routes = express.Router();

routes.get('/clients', ClientController.index)
routes.post('/clients', ClientController.store)

routes.get('/clients/:client_id/addresses', AddressController.index);
routes.post('/clients/:client_id/addresses', AddressController.store);

routes.post('/addresses', ClientController.store)

module.exports = routes;