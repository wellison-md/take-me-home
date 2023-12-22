const categoryService = require('../services/categoryService');

const getAll = async (_req, res) => {
  const response = await categoryService.getAll();
  return res.status(response.status).json(response.payload);
}

const getById = async (req, res) => {
  const { id } = req.params;
  const response = await categoryService.getById(id);
  return res.status(response.status).json(response.payload);
}

module.exports = {
  getAll,
  getById,
}
