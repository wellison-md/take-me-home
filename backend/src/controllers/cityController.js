const cityService = require('../services/cityService');

const getAll = async (_req, res) => {
  const response = await cityService.getAll();
  return res.status(response.status).json(response.payload);
}

module.exports = {
  getAll,
}
