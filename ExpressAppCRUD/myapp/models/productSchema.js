const mongoose = require("mongoose");

let ProductSchema = mongoose.Schema({
    name: String,
    price: Number,
})

let ProductModel = mongoose.model("products", ProductSchema);

module.exports = ProductModel;