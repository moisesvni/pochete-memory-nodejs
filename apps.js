const express = require('express');
const app = express();
const router = express.Router();
    
const bodyParser = require('body-parser');
const mysql = require('mysql');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Rotas
const index = require('./routes');
const fornecedorRoute = require('./routes/fornecedorRoute');
app.use('/', index);
app.use('/fornecedor', fornecedorRoute);

module.exports = app;