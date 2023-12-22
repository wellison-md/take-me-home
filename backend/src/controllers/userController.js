const userService = require('../services/userService');

const getAll = async (_req, res) => {
  const response = await userService.getAll();
  return res.status(response.status).json(response.payload);
}

const getById = async (req, res) => {
  const { id } = req.params;
  const response = await userService.getById(id);
  return res.status(response.status).json(response.payload);
}

const create = async (req, res) => {
  const response = await userService.create(req.body);
  return res.status(response.status).json(response.payload);
}

const deleteById = async (req, res) => {
  const { id } = req.params;
  const response = await userService.deleteById(id);
  return res.status(response.status).json(response.payload);
}

module.exports = {
  getAll,
  getById,
  create,
  deleteById,
}
