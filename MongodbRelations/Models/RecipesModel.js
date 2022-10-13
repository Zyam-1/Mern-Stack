const mongoose = require("mongoose");

let arraySchema = mongoose.Schema({
    title: String,
    decription : String,
    rating: String,
})

const TableModel = mongoose.model("recipes", arraySchema);

module.exports = TableModel;
