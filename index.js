"use strict";

import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// URL API
const PRODUCT = "/api/product";
const PRODUCT_PRODUCT_ID = "/api/product/:productId";
const CONEXION_MONDO_DB = "mongodb://localhost:27017/shop";

app.get(PRODUCT, (req, res) => {
  res.send(200, { products: [] });
});

app.get(PRODUCT_PRODUCT_ID, (req, res) => { });

app.post(PRODUCT, (req, res) => {
  console.log(req.body);
  res.status(200).send({ message: "El producto se ha recibido" });
});

app.put(PRODUCT_PRODUCT_ID, (req, res) => { });

app.delete(PRODUCT_PRODUCT_ID, (req, res) => { });

mongoose.connect(CONEXION_MONDO_DB, (err, res) => {
  if (err) {
    return console.log(`Error al conectar a la base de datos ${err}`);
  }

  console.log("Conexion a la base de datos establecida...");

  app.listen(port, () => {
    console.log(`API REST corriendo en http://localhost:${port}`);
  });
});
