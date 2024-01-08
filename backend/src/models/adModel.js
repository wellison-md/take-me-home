const connection = require('./connection');
const { v4: uuidv4 } = require('uuid');
const { compareAd } = require('../utils/ads');

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

const getByPetname = async (petname) => {
  const [[petAd]] = await connection.execute(`
    SELECT * FROM ads WHERE pet_name = ?`, [petname]);
  return petAd;
}

const create = async (ad = {}) => {
  const { pet_name, rescue_date, age, age_unit, gender, category_id, city_id } = ad;
  const existedAd = await getByPetname(pet_name);

  if (existedAd) {
    return ({ status: 422, payload: 'This petname already exist' });
  }

  const id = uuidv4();
  const [{ affectedRows }] = await connection.execute(`
    INSERT INTO ads (id, pet_name, rescue_date, age, age_unit, gender, category_id, city_id)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?);
  `, [id, pet_name, rescue_date, age, age_unit, gender, category_id, city_id]);

  return ({ status: 201, payload: { affectedRows, adId: id } });
}

module.exports = {
  getAll,
  getById,
  getByPetname,
  create,
}
