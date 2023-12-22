const cityModel = require('../models/cityModel');

const getAll = async () => {
  const cities = await cityModel.getAll();

  if (!cities || cities.length === 0) {
    return ({ status: 404, payload: 'Empty list' });
  }

  return ({ status: 200, payload: cities });
}

module.exports = {
  getAll,
}
