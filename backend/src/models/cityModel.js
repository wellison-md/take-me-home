const connection = require("./connection")

const getAll = async () => {
  const [cities] = await connection.execute(
    'SELECT * FROM `tmh-db`.cities'
  );

  return cities;
}

module.exports = {
  getAll,
}
