const connection = require('./connection');

const getAll = async () => {
  const [users] = await connection.execute(
    'SELECT * FROM `tmh-db`.users;'
  );

  return users;
}

const getById = async (id) => {
  const [[user]] = await connection.execute(
    'SELECT * FROM `tmh-db`.users WHERE id = ?', [id]
  );

  return user;
}

module.exports = {
  getAll,
  getById,
}
