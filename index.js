"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Product = require("./models/product");
const product = require("./models/product");

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// URL API
const PRODUCT = "/api/product";
const PRODUCT_PRODUCT_ID = "/api/product/:productId";
const CONEXION_MONDO_DB = "mongodb://localhost:27017/shop";

app.get(PRODUCT, (req, res) => {
  Product.find({}, (err, products) => {
    if (err) {
      res.status(500).send(`Error al realizar la petición ${err}`);
    }

    if (!product) {
      res.status(404).send('No existen productos');
    }

    res.status(200).send({ products });
  });
});

app.get(PRODUCT_PRODUCT_ID, (req, res) => {
  let productId = req.params.productId;

  Product.findById(productId, (err, product) => {
    if (err) {
      res.status(500).send(`Error al realizar la petición ${err}`);
    }

    if (!product) {
      res.status(404).send('El producto no existe');
    }

    res.status(200).send({ product });
  });
});

app.post(PRODUCT, (req, res) => {
  let product = new Product();
  product.name = req.body.name;
  product.picture = req.body.picture;
  product.price = req.body.price;
  product.category = req.body.category;
  product.description = req.body.description;

  product.save((err, productStored) => {
    if (err) {
      res.status(500).send(`Error al salvar en la base de datos ${err}`);
    }

    res.status(200).send({ product: productStored });
  });
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
