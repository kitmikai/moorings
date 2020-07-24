const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Create a Menu schema for our database
const menuschema = new Schema({
  id: Number,
  name: String,
  category: String,
  description: String,
  price: Number,
});

// convert the Menu schema into a Model
const Menu = mongoose.model('Menu', menuschema);

module.exports = Menu;

