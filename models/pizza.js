const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create a Pizza schema for our database
var PizzaSchema = new Schema({
  name: String,
  price: Number,
});

// convert the Pizza, Orders schema into a Model
let Pizza = mongoose.model("Pizza", PizzaSchema);

module.exports = Pizza;
