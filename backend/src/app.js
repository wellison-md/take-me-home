const express = require('express');
const connection = require('./models/connection');
const userRoutes = require('./routes/userRoutes');
const cityRoutes = require('./routes/cityRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const donationRoutes = require('./routes/donationRoutes');
const imageRoutes = require('./routes/imageRoutes');
const adRoutes = require('./routes/adRoutes');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

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
app.use(imageRoutes);
app.use(adRoutes);

module.exports = app;
