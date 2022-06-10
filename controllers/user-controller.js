"use strict"

// IMPORTS
const User = require("../models/user-model");
const service = require("../services/services");

// FUNCTIONS
function signUp(req, res) {
  // TODO Controlar que el usuario no exista ya
  const user = new User({
    email: req.body.email,
    displayName: req.body.displayName
  });

  user.save((err) => {
    if (err) {
      res.status(500).send({ message: `Error al crear el usuario ${err}` });
    }

    return res.status(200).send({ token: service.createToken(user) });
  });
}

function signIn(req, res) {
  User.find({ email: req.body.email }, (err, response) => {
    var user = response[0];

    if (err) {
      return res.status(500).send({ message: err });
    }

    if (!user || user.length === 0) {
      return res.status(404).send({ message: 'No existe el usuario' });
    }

    // TODO Revisar fecha y hora
    user.lastLogin = Date.now();

    User.findByIdAndUpdate(user._id, user, (err, userUpdated) => {
      if (err) {
        res.status(500).send({ message: `Error al actualizar el usuario: ${userUpdated}` });
      }

      res.status(200).send({
        message: 'Te has logueado correctamente',
        token: service.createToken(user)
      });
    });
  });
}


// EXPORTS
module.exports = {
  signUp,
  signIn
};