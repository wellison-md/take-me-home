const cityModel = require('../models/cityModel');

const getAll = async () => {
  const cities = await cityModel.getAll();

  if (!cities || cities.length === 0) {
    return ({ status: 404, payload: 'Empty list' });
  }

  return ({ status: 200, payload: cities });
}

const getById = async (id) => {
  const city = await cityModel.getById(id);

  if (!city) {
    return ({ status: 404, payload: 'City not found' });
  }

  return ({ status: 200, payload: city });
}

module.exports = {
  getAll,
  getById,
}
