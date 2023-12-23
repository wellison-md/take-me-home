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

const getByUserId = async (userId) => {
  const donations = await donationModel.getByUserId(userId);

  if (!donations || donations.length === 0) {
    return ({ status: 404, payload: 'User not found' });
  }

  return ({ status: 200, payload: donations });
}

const makeDonation = async (donation = {}) => {
  const newDonation = await donationModel.makeDonation(donation);

  if (!newDonation || newDonation.status === 404) {
    return ({ status: 404, payload: newDonation.payload });
  }

  return ({ status: 201, payload: 'Donation success' });

}

module.exports = {
  getAll,
  getById,
  getByUserId,
  makeDonation,
}
