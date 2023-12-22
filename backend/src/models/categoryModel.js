const connection = require("./connection")

const getAll = async () => {
  const [categories] = await connection.execute(
    'SELECT * FROM `tmh-db`.categories'
  );
  return categories;
}

const getById = async (id) => {
  const [[city]] = await connection.execute(
    'SELECT * FROM `tmh-db`.categories WHERE id = ?', [id]
  );
  return city;
}

module.exports = {
  getAll,
  getById,
}
