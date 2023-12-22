const donationModel = require('../models/donationModel');

const getAll = async () => {
  const donations = await donationModel.getAll();

  if (!donations) {
    return ({ status: 404, payload: 'Empty list' });
  }

  return ({ status: 200, payload: donations });
}

const getById = async (id) => {
  const donation = await donationModel.getById(id);

  if (!donation) {
    return ({ status: 404, payload: 'Donation not found' });
  }

  return ({ status: 200, payload: donation });
}

module.exports = {
  getAll,
  getById,
}
