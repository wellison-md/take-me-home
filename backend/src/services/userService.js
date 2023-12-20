const userModel = require('../models/userModel');

const getAll = async () => {
  const users = await userModel.getAll();

  if (!users || users.length == 0) {
    return ({ status: 404, payload: 'Empty list' });
  }

  return ({ status: 200, payload: users });
}

const getById = async (id) => {
  const user = await userModel.getById(id);

  if (!user) {
    return ({ status: 404, payload: 'User not found' });
  }

  return ({ status: 200, payload: user });
}

module.exports = {
  getAll,
  getById,
}
