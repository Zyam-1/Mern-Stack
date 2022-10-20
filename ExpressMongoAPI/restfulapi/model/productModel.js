const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: String,
  price: Number,
  description: String,
});

const product = mongoose.model("products", productSchema);



module.exports = product;
