const connection = require('./connection');

const getAll = async () => {
  const [donations] = await connection.execute(
    'SELECT * FROM donations',
  );

  return donations;
}

module.exports = {
  getAll,
}
