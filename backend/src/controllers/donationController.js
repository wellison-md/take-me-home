const donationService = require('../services/donationService');

const getAll = async (_req, res) => {
  const response = await donationService.getAll();
  return res.status(response.status).json(response.payload);
}

module.exports = {
  getAll,
}
