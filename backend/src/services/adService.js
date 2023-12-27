const adModel = require('../models/adModel');

const getAll = async () => {
  const ads = await adModel.getAll();
  return ads;
}

module.exports = {
  getAll,
}
