const express = require('express');
const routes = require('./routes');

require('./database');

const app = express();

app.use(express.json());//remover depois
app.use(routes);

app.listen(3333);