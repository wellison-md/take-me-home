const validator = require('validator');

module.exports = (req, res, next) => {
  const { pet_name, rescue_date, age, age_unit, gender, category_id, city_id } = req.body;

  if (!pet_name || !rescue_date || !age || !age_unit || !gender || !category_id || !city_id) {
    return res.status(422).json({
      msg: 'Missing fields!',
    });
  }

  if (pet_name.length <= 3) {
    return res.status(422).json({
      msg: 'pet_name must be at least 3 characters long!',
    });
  }

  if (!validator.isDate(rescue_date, ['YYYY-MM-DD'])) {
    return res.status(422).json({
      msg: 'Invalid Date. correct format [YYYY-MM-DD]',
    });
  }

  if (gender !== 'male' && gender !== 'female') {
    return res.status(422).send(
      'gender only can be "male" or "female"',
    );
  }

  if (typeof category_id !== 'number' || category_id < 0) {
    return res.status(422).json({
      msg: 'invalid category id',
    });
  }

  if (typeof city_id !== 'number' || city_id < 0) {
    return res.status(422).json({
      msg: 'invalid city id',
    });
  }

  if (age <= 0) {
    return res.status(422).json({
      msg: 'age must be greater than 0',
    });
  }

  if (age_unit !== 'month' && age_unit !== 'year') {
    return res.status(422).json({
      msg: 'age-unit must be "month" or either "year" '
    });
  }

  next();
}
