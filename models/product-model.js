"use strict"

// IMPORTS
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


// SCHEMAS
const ProductSchema = Schema({
  name: String,
  picture: String,
  price: { type: Number, default: 0 },
  category: { type: String, enum: ['computers', 'phones', 'accesories'] },
  description: String
});


// EXPORTS
module.exports = mongoose.model('Product', ProductSchema);