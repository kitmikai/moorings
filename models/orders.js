const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderschema = new Schema({
  orderId: String,
  itemName: String,
  quantity: Number,
  total: Number,
  date: { type: Date, default: Date() },
});

// convert the Orders schema into a Model
const Order = mongoose.model('Order', orderschema);

module.exports = Order;

