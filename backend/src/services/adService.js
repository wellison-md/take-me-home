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

module.exports = {
  getAll,
  getById,
}
