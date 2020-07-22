const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create a Pizza schema for our database
var PizzaSchema = new Schema({
  id: Number,
  name: String,
  price: Number,
});

// convert the Pizza, Orders schema into a Model
let Pizza = mongoose.model("Pizza", PizzaSchema);

module.exports = Pizza;
