const connection = require('./connection');

const getAll = async () => {
  const [images] = await connection.execute(`
    SELECT * FROM images
  `);
  return images;
}

const getByAdId = async (id) => {
  const [images] = await connection.execute(
    `SELECT * FROM images WHERE ad_id = ?`, [id]
  );
  return images;
}

module.exports = {
  getAll,
  getByAdId,
}
