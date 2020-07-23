const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create a Pizza schema for our database
var MenuSchema = new Schema({
  id: Number,
  name: String,
  category: String,
  description: String,
  price: Number,
});

// convert the Pizza, Orders schema into a Model
let Menu = mongoose.model("Pizza", MenuSchema);

module.exports = Menu;
