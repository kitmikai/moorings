const mongoose = require('mongoose');

const { Schema } = mongoose;

// Create a Pizza schema for our database
const PizzaSchema = new Schema({
  id: Number,
  name: String,
  description: String,
  price: Number,
});

// convert the Pizza schema into a Model
const Pizza = mongoose.model('Pizza', PizzaSchema);

module.exports = Pizza;

