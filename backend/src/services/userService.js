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

const create = async(user = {}) => {
  const createdUser = await userModel.create(user);

  if (createdUser.status === 422) {
    return ({ status: 422, payload: createdUser.payload });
  }

  return ({ status: 201, payload: createdUser.payload.user });
}

const deleteById = async (id) => {
  const deletedUser = await userModel.deleteById(id);

  if (deletedUser === 0) {
    return ({ status: 404, payload: 'Something went wrong' });
  }

return ({ status: 200, payload: deletedUser });
}

module.exports = {
  getAll,
  getById,
  create,
  deleteById,
}
