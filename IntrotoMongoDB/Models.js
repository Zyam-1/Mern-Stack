const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name: String,
    price: Number,
    tags: [String],
  
});
const ProductModel = mongoose.model("Products", productSchema);
module.exports = ProductModel;