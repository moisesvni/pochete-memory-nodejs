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
app.use('/', index);

const filialRoute = require('./routes/filial');
app.use('/filial', filialRoute);
const fornecedorRoute = require('./routes/fornecedor');
app.use('/fornecedor', fornecedorRoute);

module.exports = app;