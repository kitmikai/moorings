const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create a Menu schema for our database
var MenuSchema = new Schema({
  id: Number,
  name: String,
  category: String,
  description: String,
  price: Number,
});

// convert the Menu schema into a Model
let Menu = mongoose.model("Menu", MenuSchema);

module.exports = Menu;
