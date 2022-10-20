const mongoose = require("mongoose");
const Joi = require('@hapi/joi')


const productSchema = mongoose.Schema({
  name: String,
  price: Number,
  description: String,
});

const product = mongoose.model("products", productSchema);

function validateProduct(data){
  const schema = Joi.object({
    name: Joi.string(). min(5).max(15).required(),
    price: Joi.number(). min(0).required(),
    description: Joi.string(). min(10).required(),
  });
  return schema.validate(data ,{abortEarly:false});

}


module.exports.product = product;
module.exports.validate = validateProduct;

