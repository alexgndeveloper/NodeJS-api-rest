"use strict"

// IMPORTS
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt-nodejs");

// SCHEMAS
const UserSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  displayName: String,
  password: { type: String, select: false },
  // TODO Revisar fecha y hora
  signupDate: { type: Date, default: Date.now() },
  lastLogin: Date
});


// FUNCTIONS
UserSchema.pre('save', function (next) {
  let user = this;

  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next();
    }

    bcrypt.hash(user.password, salt, null, (err, hash) => {
      if (err) {
        return next();
      }

      user.password = hash;
      next();
    });
  });
});


// EXPORTS
module.exports = mongoose.model("User", UserSchema);