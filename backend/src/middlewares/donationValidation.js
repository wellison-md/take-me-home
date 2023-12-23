module.exports = (req, res, next) => {
  const { uuid, amount } = req.body;

  if (!uuid || !amount) {
    return res.status(404).json({
      msg: 'uuid and amount are required',
    });
  }

  if (uuid.length !== 36) {
    return res.status(422).json({
      msg: 'uuid is not valid'
    });
  }

  if (typeof amount !== 'number') {
    return res.status(422).json({
      msg: 'the amount must be a valid number',
    });
  }

  if (amount <= 0) {
    return res.status(422).json({
      msg: 'the amount must be greater than zero',
    });
  }

  next();
}
