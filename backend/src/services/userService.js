const userModel = require('../models/userModel');

const getAll = async () => {
  const users = await userModel.getAll();

  if (!users || users.length == 0) {
    return ({ status: 404, payload: 'Empty list' });
  }

  return ({ status: 200, payload: users });
}

module.exports = {
  getAll,
}
