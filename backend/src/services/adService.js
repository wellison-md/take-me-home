const adModel = require('../models/adModel');

const getAll = async () => {
  const ads = await adModel.getAll();
  return ads;
}

const getById = async (id) => {
  const ad = await adModel.getById(id);

  if (!ad) {
    return ({ status: 404, payload: 'Ad not found' });
  }

  return ({ status: 200, payload: ad });
}

const getByPetname = async (petname) => {
  const petAd = await adModel.getByPetname(petname);

  if (!petAd) {
    return ({ status: 404, payload: 'Ad not found' });
  }

  return ({ status: 201, payload: petAd });
}

const create = async (ad = {}) => {
  const newAd = await adModel.create(ad);
  return ({ status: 201, payload: newAd });
}

module.exports = {
  getAll,
  getById,
  getByPetname,
  create,
}
