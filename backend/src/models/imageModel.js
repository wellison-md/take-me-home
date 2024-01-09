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

const getAlbumById = async (id) => {
  const [imgs] = await connection.execute(`
  SELECT
      a.id,
      a.pet_name AS petName,
      a.rescue_date AS rescueDate,
      concat(a.age, " ", a.age_unit) AS age,
      a.gender,
      a.category_id AS categoryId,
      c.category,
      a.city_id AS cityId,
      cy.name AS cityName,
      i.img_url AS imgs
  FROM ads a
    JOIN images i      ON a.id = i.ad_id
    JOIN categories c  ON a.category_id = c.id
    JOIN cities cy     ON a.city_id = cy.id
  WHERE a.id = ?;
  `, [id]);
  return imgs;
}

module.exports = {
  getAll,
  getByAdId,
  getAlbumById,
}
