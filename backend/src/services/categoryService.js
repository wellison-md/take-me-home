const categoryModel = require('../models/categoryModel');

const getAll = async () => {
  const categories = await categoryModel.getAll();

  if (!categories || categories.length === 0) {
    return ({ status: 404, payload: 'Empty list' });
  }

  return ({ status: 200, payload: categories });
}

module.exports = {
  getAll,
}
