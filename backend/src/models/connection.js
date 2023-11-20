const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  port: 6570,
  password: 'pswd',
  database: 'tmh-db',
  waitForConnections: true,
});

module.exports = connection;
