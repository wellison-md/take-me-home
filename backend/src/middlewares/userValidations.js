const validator = require('validator');

module.exports = (req, res, next) => {
  const { fname, lname, email, pswd } = req.body;

  if (!fname || !lname || !email || !pswd) {
    return res.status(404).json({
      msg: 'fname, lname, email and pswd are required',
    });
  }

  if (fname.length < 3 || lname.length < 3) {
    return res.status(422).json({
      msg: 'fname and lname must be at least 3 characters',
    });
  }

  if (!validator.isEmail(email)) {
    return res.status(422).json({
      msg: 'email is not valid',
    });
  }

  const optionsPwsd = {
    minLength: 6,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 1,
    returnScore: false,
    pointsPerUnique: 1,
    pointsPerRepeat: 0.5,
    pointsForContainingLower: 10,
    pointsForContainingUpper: 10,
    pointsForContainingNumber: 10,
    pointsForContainingSymbol: 10
  };

  if (!validator.isStrongPassword(pswd, optionsPwsd)) {
    return res.status(422).json({
      msg: 'the password must be contain at least: 6char-length; 1char lowercase; 1 char uppercase; 1 char number; 1symbol'
    });
  }

  next();
}
