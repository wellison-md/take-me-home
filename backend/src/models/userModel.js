const connection = require('./connection');
const { v4: uuidv4 } = require('uuid');
const Bcrypt = require('bcrypt');
const saltRounds = 10;

const getAll = async () => {
  const [users] = await connection.execute(
    'SELECT * FROM `tmh-db`.users;'
  );

  return users;
}

const getById = async (id) => {
  const [[user]] = await connection.execute(
    'SELECT * FROM `tmh-db`.users WHERE id = ?', [id]
  );

  return user;
}

const getByEmail = async (email) => {
  const [[user]] = await connection.execute(
    'SELECT * FROM `tmh-db`.users WHERE email = ?', [email]
  )

  return user;
}

const create = async (user = {}) => {
  const { fname, lname, email, pswd } = user;
  const existingUser = await getByEmail(email);

  if (existingUser) {
    return ({ status: 422, payload: 'This email already exist' });
  }

  const encryptedPswd = Bcrypt.hashSync(pswd, saltRounds);
  const uuid = uuidv4();

  const [{ affectedRows }] = await connection.execute(
    'INSERT INTO `tmh-db`.users (id, fname, lname, email, pswd) VALUES (?, ?, ?, ?, ?)',
    [uuid, fname, lname, email, encryptedPswd]
  );

  return ({ status: 201, payload: { affectedRows, user: { uuid, fname, lname, email } } });
}

const deleteById = async (id) => {
  const [{ affectedRows }] = await connection.execute(
    'DELETE FROM `tmh-db`.users WHERE id = ?', [id]
  );

  return affectedRows;
}

module.exports = {
  getAll,
  getById,
  create,
  deleteById,
}
