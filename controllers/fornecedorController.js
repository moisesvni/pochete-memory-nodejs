const db = require('../bin/db');

exports.list = (req, res, next) => {
    db.execSQLQuery('SELECT * FROM fornecedor', res);
};
exports.get = (req, res, next) => {
    let id = req.params.id;
    db.execSQLQuery(`SELECT * FROM fornecedor where idfornecedor = ${id}`, res);
};
exports.post = (req, res, next) => {
    res.status(201).send('Requisição recebida com sucesso!');
};
exports.put = (req, res, next) => {
    let id = req.params.id;
    res.status(201).send(`Requisição recebida com sucesso! ${id}`);
};
exports.delete = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Requisição recebida com sucesso! ${id}`);
};