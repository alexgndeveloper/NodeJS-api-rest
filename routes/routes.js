"use strict"

const productCtrl = require("../controllers/product-controller");
const express = require("express");
const api = express.Router();

// URL API
const PRODUCT = "/product";
const PRODUCT_PRODUCT_ID = "/product/:productId";

api.get(PRODUCT, productCtrl.getProducts);
api.get(PRODUCT_PRODUCT_ID, productCtrl.getProduct);
api.post(PRODUCT, productCtrl.saveProduct);
api.put(PRODUCT_PRODUCT_ID, productCtrl.updateProduct);
api.delete(PRODUCT_PRODUCT_ID, productCtrl.deleteProduct);

module.exports = api;