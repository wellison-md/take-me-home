const categoryModel = require('../models/categoryModel');

const getAll = async () => {
  const categories = await categoryModel.getAll();

  if (!categories || categories.length === 0) {
    return ({ status: 404, payload: 'Empty list' });
  }

  return ({ status: 200, payload: categories });
}

const getById = async (id) => {
  const category = await categoryModel.getById(id);

  if (!category) {
    return ({ status: 404, payload: 'Category not found' });
  }

  return ({ status: 200, payload: category });
}

module.exports = {
  getAll,
  getById,
}
