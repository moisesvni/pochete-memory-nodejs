const express = require('express');
const app = express();
var cors = require('cors')

const whitelist = ["https://account.dwoom.com", "http://localhost"]
const corsOptions = {
    origin: function (origin, callback) {
        console.log(origin)
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    },
    credentials: true,
    enablePreflight: true
}
    
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Rotas
const index = require('./routes');
const fornecedorRoute = require('./routes/fornecedorRoute');
app.use('/', index);
app.use('/fornecedor', fornecedorRoute);


app.use(cors(corsOptions))
app.options("*", cors(corsOptions))

module.exports = app;