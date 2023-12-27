const adService = require('../services/adService');

const getAll = async (_req, res) => {
  const response = await adService.getAll();
  return res.status(200).json(response);
}

module.exports = {
  getAll,
}
