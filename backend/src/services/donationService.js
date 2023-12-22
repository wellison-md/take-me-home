const donationModel = require('../models/donationModel');

const getAll = async () => {
  const donations = await donationModel.getAll();

  if (!donations) {
    return ({ status: 404, payload: 'Empty list' });
  }

  return ({ status: 200, payload: donations });
}

module.exports = {
  getAll,
}
