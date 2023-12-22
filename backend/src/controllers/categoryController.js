const categoryService = require('../services/categoryService');

const getAll = async (_req, res) => {
  const response = await categoryService.getAll();
  return res.status(response.status).json(response.payload);
}

module.exports = {
  getAll,
}
