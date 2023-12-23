const cityService = require('../services/cityService');

const getAll = async (_req, res) => {
  const response = await cityService.getAll();
  return res.status(response.status).json(response.payload);
}

const getById = async (req, res) => {
  const { id } = req.params;
  const response = await cityService.getById(id);
  return res.status(response.status).json(response.payload);
}

module.exports = {
  getAll,
  getById,
}
