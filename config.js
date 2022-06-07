"use strict"

module.exports = {
  port: process.env.PORT || 3001,
  db: process.env.MONGO_DB || "mongodb://localhost:27017/shop"
};