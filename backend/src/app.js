const express = require('express');
const connection = require('./models/connection');

const app = express();
app.use(express.json());

app.get('/', async (_req, res) => {
  const [[rows]] = await connection.execute(
    'SELECT concat("DB says Hello World at ", now()) as msg '
  )

  return res.status(200).json(rows);
})

module.exports = app;
