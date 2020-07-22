const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var OrderSchema = new Schema({
  orderId: String,
  itemName: String,
  total: Number,
  date: { type: Date, default: Date() },
});

// convert the Pizza, Orders schema into a Model
let Order = mongoose.model("Order", OrderSchema);

module.exports = Order;
