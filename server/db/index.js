const mysql = require('mysql');

dbConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'FEC'
});

module.exports = dbConnection;
