const db = require('../bin/db');

exports.list = (req, res, next) => {
    db.execSQLQuery('SELECT * FROM fornecedor', res);
};
exports.get = (req, res, next) => {
    let id = parseInt(req.params.id);
    db.execSQLQuery(`SELECT * FROM fornecedor WHERE id = ${id}`, res);
};
exports.post = (req, res, next) => {
    const idFilial = req.body.idFilial;
    const nome = req.body.nome.substring(0,64);
    const vendedor = req.body.vendedor.substring(0,64);
    db.execSQLQuery(`INSERT INTO fornecedor (idFilial, nome, vendedor) VALUES('${idFilial}','${nome}','${vendedor}')`, res);
};
exports.put = (req, res, next) => {
    let idFilial = req.body.idFilial;
    let id = parseInt(req.params.id);
    let nome = req.body.nome.substring(0,64);
    db.execSQLQuery(`UPDATE fornecedor SET idFilial='${idFilial}', nome='${nome}', vendedor='${vendedor}' WHERE id=${id}`, res);
};
exports.delete = (req, res, next) => {
    let id = parseInt(req.params.id);
    db.execSQLQuery(`DELETE FROM fornecedor WHERE id = ${id}`, res);
};