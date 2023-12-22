const connection = require('./connection');

const getAll = async () => {
  const [donations] = await connection.execute(
    'SELECT * FROM donations',
  );

  return donations;
}

const getById = async (id) => {
  const [[donation]] = await connection.execute(
    'SELECT * FROM donations WHERE id = ?', [id],
  );

  return donation;
}

module.exports = {
  getAll,
  getById,
}
