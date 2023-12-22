const connection = require("./connection")

const getAll = async () => {
  const [categories] = await connection.execute(
    'SELECT * FROM `tmh-db`.categories'
  );
  return categories;
}

module.exports = {
  getAll,
}
