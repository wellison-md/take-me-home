const imageService = require('../services/imageService');

const getAll = async (_req, res) => {
  const response = await imageService.getAll();
  return res.status(200).json(response);
}

const getByAdId = async (req, res) => {
  const response = await imageService.getByAdId(req.params.id);
  return res.status(response.status).json(response.payload);
}

const getAlbumById = async (req, res) => {
  const { id } = req.params;
  const response = await imageService.getAlbumById(id);
  return res.status(response.status).json(response.payload);
}

const getAdsAlbums = async (_req, res) => {
  const response = await imageService.getAdsAlbums();
  return res.status(200).json(response);
}

module.exports = {
  getAll,
  getByAdId,
  getAlbumById,
  getAdsAlbums,
}
