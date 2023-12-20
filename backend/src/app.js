const express = require('express');
const connection = require('./models/connection');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(express.json());

app.get('/', async (_req, res) => {
  const [[rows]] = await connection.execute(
    'SELECT concat("DB says Hello World at ", now()) as msg '
  )

  return res.status(200).json(rows);
})

app.use(userRoutes);

module.exports = app;
