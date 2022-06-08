"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const { engine } = require('express-handlebars');
const app = express();
const api = require("./routes/routes");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine('hbs', engine({
  defaultLayout: 'default',
  extname: 'hbs'
}));
app.set('view engine', '.hbs');

app.use("/api", api);

// Render views
app.get('/', (req, res) => {
  res.render('login');
});
app.get('/product', (req, res) => {
  res.render('product');
});

module.exports = app;