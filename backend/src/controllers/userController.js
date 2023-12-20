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

module.exports = {
  getAll,
  getById,
}
