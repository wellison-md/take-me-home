const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: process.env.MYSQL_HOSTNAME || 'localhost',
  user: process.env.MYSQL_USER || 'root',
  port: process.env.MYSQL_PORT || 6570,
  password: process.env.MYSQL_ROOT_PASSWORD || 'pswd',
  database: process.env.MYSQL_DATABASE || 'tmh-db',
  waitForConnections: true,
});

module.exports = connection;
