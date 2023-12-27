const connection = require('./connection');
const userModel = require('../models/userModel');

const getAll = async () => {
  const [donations] = await connection.execute(
    'SELECT * FROM donations',
  );

  return donations;
}

const getById = async (id) => {
  const [[donation]] = await connection.execute(
    'SELECT * FROM donations WHERE id = ?', [id],
  );

  return donation;
}

const getByUserId = async (userId) => {
  const [donations] = await connection.execute(
    `SELECT
        usr.fname AS 'donor',
        dnt.user_id AS id,
        dnt.amount,
        dnt.donation_date 'date'

     FROM donations AS dnt
     INNER JOIN users AS usr
        ON usr.id = dnt.user_id

     WHERE user_id = ?`,
    [userId],
  );

  return donations;
}

const makeDonation = async (donation = {}) => {
  const { uuid, amount } = donation;
  const user = await userModel.getById(uuid);

  if (!user) {
    return ({ status: 404, payload: 'User not found' });
  }

  const [{ affectedRows }] = await connection.execute(
    'INSERT INTO donations (user_id, amount) VALUES (?, ?)',
    [uuid, amount],
  )

  return ({ status: 201, payload: affectedRows });
}

const getRanking = async () => {
  const [ranking] = await connection.execute(`
  SELECT
      u.fname,
      SUM(d.amount) AS total

  FROM users u
  JOIN donations d
      ON u.id = d.user_id

  GROUP BY u.fname
  ORDER BY total DESC;
`);
  console.log(ranking)
  return ranking;
}

module.exports = {
  getAll,
  getById,
  getByUserId,
  makeDonation,
  getRanking,
}
