const imageService = require('../services/imageService');

const getAll = async (_req, res) => {
  const response = await imageService.getAll();
  return res.status(200).json(response);
}

const getByAdId = async (req, res) => {
  const response = await imageService.getByAdId(req.params.id);
  return res.status(response.status).json(response.payload);
}

module.exports = {
  getAll,
  getByAdId,
}
