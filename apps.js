const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const whitelist = ["https://account.dwoom.com", "http://localhost"]

var cors = require('cors')

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
    

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors(corsOptions))
app.options("*", cors(corsOptions))

//Rotas
const index = require('./routes');
const fornecedorRoute = require('./routes/fornecedorRoute');
app.use('/', index);
app.use('/fornecedor', fornecedorRoute);



module.exports = app;