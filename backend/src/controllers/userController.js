const userService = require('../services/userService');

const getAll = async (_req, res) => {
  const request = await userService.getAll();
  return res.status(request.status).json(request.payload);
}

const getById = async (req, res) => {
  const { id } = req.params;
  const request = await userService.getById(id);
  return res.status(request.status).json(request.payload);
}

const create = async (req, res) => {
  const request = await userService.create(req.body);
  return res.status(request.status).json(request.payload);
}

const deleteById = async (req, res) => {
  const { id } = req.params;
  const request = await userService.deleteById(id);
  return res.status(request.status).json(request.payload);
}

module.exports = {
  getAll,
  getById,
  create,
  deleteById,
}
