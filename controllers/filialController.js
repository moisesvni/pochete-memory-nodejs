const db = require('../bin/db');

exports.list = (req, res, next) => {
    db.execSQLQuery('SELECT * FROM filial', res);
};
exports.get = (req, res, next) => {
    let id = parseInt(req.params.id);
    db.execSQLQuery(`SELECT * FROM filial WHERE id = ${id}`, res);
};
exports.post = (req, res, next) => {
    let nome = req.body.nome ? req.body.nome : '';
    let abreviacao = req.body.abreviacao ? req.body.abreviacao : '';
    let cidade = req.body.cidade ? req.body.cidade : '';
    let endereco = req.body.endereco ? req.body.endereco : '';
    db.execSQLQuery(`INSERT INTO filial (nome, abreviacao, endereco, cidade) VALUES('${nome}','${abreviacao}', '${endereco}', '${cidade}')`, res);
};
exports.put = (req, res, next) => {
    let id = parseInt(req.params.id);
    let nome = req.body.nome ? req.body.nome : '';
    let abreviacao = req.body.abreviacao ? req.body.abreviacao : '';
    let cidade = req.body.cidade ? req.body.cidade : '';
    let endereco = req.body.endereco ? req.body.endereco : '';
    db.execSQLQuery(`UPDATE filial SET nome='${nome}', abreviacao='${abreviacao}', endereco='${endereco}', cidade='${cidade}' WHERE id=${id}`, res);
};
exports.delete = (req, res, next) => {
    let id = parseInt(req.params.id);
    db.execSQLQuery(`DELETE FROM filial WHERE id = ${id}`, res);
};