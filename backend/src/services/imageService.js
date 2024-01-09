const imageModel = require('../models/imageModel');

const getAll = async () => {
  const images = await imageModel.getAll();
  return images;
}

const getByAdId = async (id) => {
  const images = await imageModel.getByAdId(id);

  if (!images || images.length === 0) {
    return ({ status: 404, payload: 'Ad not found' });
  }
  return ({ status: 200, payload: images });
}

const getAlbumById = async (id) => {
  const imgs = await imageModel.getAlbumById(id);

  if (imgs.length === 0) {
    return ({ status: 404, payload: 'Id not found or empty album' })
  }
  return ({ status: 200, payload: imgs });
}

module.exports = {
  getAll,
  getByAdId,
  getAlbumById,
}
