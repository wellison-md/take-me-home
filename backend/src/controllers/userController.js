const userService = require('../services/userService');

const getAll = async (_req, res) => {
  const request = await userService.getAll();
  return res.status(request.status).json(request.payload);
}

module.exports = {
  getAll,
}
