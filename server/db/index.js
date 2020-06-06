const mysql = require('mysql');

dbConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'S0phieR4ku!',
  database: 'FEC'
});

module.exports = dbConnection;
