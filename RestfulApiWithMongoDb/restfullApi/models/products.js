var mongoose = require("mongoose");
var Joi = require("@hapi/joi")
let productSchema = mongoose.Schema({
    title: String,
    price: Number,
    description: String,
});


const products = mongoose.model("products", productSchema);


function validateProd(data){
    const schema = Joi.object({
        title: Joi.string().min(5).max(20).required(),
        price: Joi.number().min(5).required(),
        description: Joi.string().min(5).required(),
    })
    return schema.validate(data,{abortEarly:false});
}

module.exports.product = products;
module.exports.validateProd = validateProd;