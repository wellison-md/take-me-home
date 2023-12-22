const express = require('express');
const connection = require('./models/connection');
const userRoutes = require('./routes/userRoutes');
const cityRoutes = require('./routes/cityRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const donationRoutes = require('./routes/donationRoutes');

const app = express();
app.use(express.json());

app.get('/', async (_req, res) => {
  const [[rows]] = await connection.execute(
    'SELECT concat("DB says Hello World at ", now()) as msg '
  )

  return res.status(200).json(rows);
})

app.use(userRoutes);
app.use(cityRoutes);
app.use(categoryRoutes);
app.use(donationRoutes);

module.exports = app;
