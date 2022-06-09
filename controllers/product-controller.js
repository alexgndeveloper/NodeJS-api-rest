"use strict"

// IMPORTS
const Product = require("../models/product-model");


// FUNCTIONS
function getProduct(req, res) {
  let productId = req.params.productId;

  Product.findById(productId, (err, product) => {
    if (err) {
      res.status(500).send({ message: `Error al realizar la petición ${err}` });
    }

    if (!product) {
      res.status(404).send({ message: 'El producto no existe' });
    }

    res.status(200).send({ product });
  });
}

function getProducts(req, res) {
  Product.find({}, (err, products) => {
    if (err) {
      res.status(500).send({ message: `Error al realizar la petición ${err}` });
    }

    if (!products) {
      res.status(404).send({ message: 'No existen productos' });
    }

    res.status(200).send({ products });
  });
}

function saveProduct(req, res) {
  let product = new Product({
    name: req.body.name,
    picture: req.body.picture,
    price: req.body.price,
    category: req.body.category,
    description: req.body.description
  });

  product.save((err, productStored) => {
    if (err) {
      res.status(500).send({ message: `Error al salvar en la base de datos ${err}` });
    }

    res.status(200).send({ product: productStored });
  });
}

function updateProduct(req, res) {
  let productId = req.params.productId;
  let productUpdate = req.body;

  Product.findByIdAndUpdate(productId, productUpdate, (err, productUpdated) => {
    if (err) {
      res.status(500).send({ message: `Error al actualizar el producto: ${productUpdated}` });
    }

    res.status(200).send({ product: productUpdated });
  });
}

function deleteProduct(req, res) {
  let productId = req.params.productId;

  Product.findById(productId, (err, product) => {
    if (err) {
      res.status(500).send({ message: `Error al borrar el producto: ${product}` });
    }

    product.remove(err => {
      if (err) {
        res.status(500).send({ message: `Error al borrar el producto: ${product}` });
      }

      res.status(200).send({ message: 'El producto ha sido eliminado' });
    });
  });
}


// EXPORTS
module.exports = {
  getProduct,
  getProducts,
  saveProduct,
  updateProduct,
  deleteProduct
};