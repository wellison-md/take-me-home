const connection = require('./connection');

const getAll = async () => {
  const [ads] = await connection.execute(`
    SELECT * FROM ads
  `);
  return ads;
}

const getById = async (id) => {
  const [[ad]] = await connection.execute(`
    SELECT * FROM ads WHERE id = ?
  `, [id]);
  return ad;
}

module.exports = {
  getAll,
  getById,
}