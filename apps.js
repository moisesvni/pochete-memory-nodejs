const express = require('express');
const app = express();
const bodyParser = require('body-parser');

var cors = require('cors')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors())
app.options("*", cors())

//Rotas
const index = require('./routes');
const fornecedorRoute = require('./routes/fornecedorRoute');
app.use('/', index);
app.use('/fornecedor', fornecedorRoute);

module.exports = app;