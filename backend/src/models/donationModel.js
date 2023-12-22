const connection = require('./connection');

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

module.exports = {
  getAll,
  getById,
  getByUserId,
}
