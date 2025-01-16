const express = require('express');
const dotenv = require('dotenv');
const productRoutes = require('./src/routes/productRoutes');

dotenv.config();

const app = express();
app.use(express.json());

require("./src/config/db");

app.use('/api/products', productRoutes);

app.use('/api-docs', require('./src/config/swagger'))

app.listen(process.env.APP_PORT, () =>
  console.log("Servidor escuchando en el puerto " + process.env.APP_PORT)
);

module.exports = app;


