const connection = require("./connection")

const getAll = async () => {
  const [cities] = await connection.execute(
    'SELECT * FROM `tmh-db`.cities'
  );

  return cities;
}

const getById = async (id) => {
  const [[cities]] = await connection.execute(
    'SELECT * FROM `tmh-db`.cities WHERE id = ?', [id]
  );

  return cities;
}

module.exports = {
  getAll,
  getById,
}
