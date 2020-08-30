const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create a Pizza schema for our database
var pizzaschema = new Schema({
  imagePath: String,
  name: String,
  description: String,
  price: Number,
});

// convert the Pizza schema into a Model
let Pizza = mongoose.model("Pizza", pizzaschema);

module.exports = Pizza;
