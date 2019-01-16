const mysql = require('mysql');

exports.execSQLQuery = (sqlQry, res) => {
    const connection = mysql.createConnection({
      host     : 'hserv16.homehost.com.br',
      port     : 3306,
      user     : 'softdsc2_fae',
      password : '[]1Q2w3e4r',
      database : 'softdsc2_pochete_memory'
    });
    connection.query(sqlQry, function(error, results, fields){
        if(error) 
          res.json(error);
        else
          res.json(results);
        connection.end();
        console.log('executou!');
    });
}