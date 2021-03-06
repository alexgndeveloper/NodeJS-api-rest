"use strict";

// IMPORTS
const mongoose = require("mongoose");
const app = require("./app");
const config = require("./config");

// CONNECTION DB
mongoose.connect(config.db, (err, res) => {
  if (err) {
    return console.log(`Error al conectar a la base de datos ${err}`);
  }

  console.log("Conexion a la base de datos establecida...");

  // RUN APP
  app.listen(config.port, () => {
    console.log(`API REST corriendo correctamente, en el puerto:${config.port}`);
  });
});
