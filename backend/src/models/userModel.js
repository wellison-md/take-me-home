const connection = require('./connection');

const getAll = async () => {
  const [users] = await connection.execute(
    'SELECT * FROM `tmh-db`.users;'
  );

  return users;
}

module.exports = {
  getAll,
}
