const donationService = require('../services/donationService');

const getAll = async (_req, res) => {
  const response = await donationService.getAll();
  return res.status(response.status).json(response.payload);
}

const getById = async (req, res) => {
  const { id } = req.params;
  const response = await donationService.getById(id);
  return res.status(response.status).json(response.payload);
}

const getByUserId = async (req, res) => {
  const { id } = req.params;
  const response = await donationService.getByUserId(id);
  return res.status(response.status).json(response.payload);
}

const makeDonation = async (req, res) => {
  const response = await donationService.makeDonation(req.body);
  return res.status(response.status).json(response.payload);
}

const getRanking = async (_req, res) => {
  const response = await donationService.getRanking();
  return res.status(200).json(response);
}

module.exports = {
  getAll,
  getById,
  getByUserId,
  makeDonation,
  getRanking,
}
