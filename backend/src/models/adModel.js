const connection = require('./connection');

const getAll = async () => {
  const [ads] = await connection.execute(`
    SELECT * FROM ads
  `);
  return ads;
}

module.exports = {
  getAll,
}