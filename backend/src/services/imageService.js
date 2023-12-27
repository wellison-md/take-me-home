const imageModel = require('../models/imageModel');

const getAll = async () => {
  const images = await imageModel.getAll();
  return images;
}

module.exports = {
  getAll,
}
