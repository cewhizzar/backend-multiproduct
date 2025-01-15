const express = require("express");
const pool = require("./src/config/db")
require("dotenv").config();

// conectar a DB
// require("./src/config/db");


const app = express();
app.use(express.json());

// app.use("/tasks", require("./src/routes/tasks"));
app.use('/api-docs', require('./src/config/swagger'))

app.listen(process.env.APP_PORT, () =>
  console.log("Servidor escuchando en el puerto " + process.env.APP_PORT)
);

module.exports = app;
