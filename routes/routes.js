"use strict"

// IMPORTS
const express = require("express");
const productCtrl = require("../controllers/product-controller");
const userCtrl = require("../controllers/user-controller");
const auth = require("../middlewares/auth-middleware");
const api = express.Router();


// URL API
const PRODUCT = "/product";
const PRODUCT_PRODUCT_ID = "/product/:productId";
const SIGN_UP = "/signup";
const SIGN_IN = "/signin";
const PRIVATE = "/private";


// API
api.get(PRODUCT, productCtrl.getProducts);
api.get(PRODUCT_PRODUCT_ID, productCtrl.getProduct);
api.post(PRODUCT, auth, productCtrl.saveProduct);
api.put(PRODUCT_PRODUCT_ID, auth, productCtrl.updateProduct);
api.delete(PRODUCT_PRODUCT_ID, auth, productCtrl.deleteProduct);
api.post(SIGN_UP, userCtrl.signUp);
api.post(SIGN_IN, userCtrl.signIn);
api.get(PRIVATE, auth, (req, res) => {
  res.status(200).send({ message: 'Tienes acceso' });
});


// EXPORTS
module.exports = api;