const imageService = require('../services/imageService');

const getAll = async (_req, res) => {
  const response = await imageService.getAll();
  return res.status(200).json(response);
}

module.exports = {
  getAll,
}
