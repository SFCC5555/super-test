const express = require('express');
const { Sequelize } = require('sequelize');

const app = express();
const port = 3000;

// Configurar Sequelize
const sequelize = new Sequelize(process.env.POSTGRES_DB, process.env.POSTGRES_USER, process.env.POSTGRES_PASSWORD, {
  host: process.env.POSTGRES_HOST,
  dialect: 'postgres',
  port: process.env.POSTGRES_PORT,
});

app.get('/', async (req, res) => {
  try {
    await sequelize.authenticate();
    const [results, metadata] = await sequelize.query('SELECT NOW()');
    res.send(results[0]);
  } catch (err) {
    console.error(err);
    res.send('Error');
  }
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});