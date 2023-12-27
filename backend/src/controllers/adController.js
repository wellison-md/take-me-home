const adService = require('../services/adService');

const getAll = async (_req, res) => {
  const response = await adService.getAll();
  return res.status(200).json(response);
}

const getById = async (req, res) => {
  const { id } = req.params;
  const response = await adService.getById(id);
  return res.status(response.status).json(response.payload);
}

module.exports = {
  getAll,
  getById,
}
