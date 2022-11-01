var {validateProd} = require("../models/products");

function validate(req,res,next){
    let {error} = validateProd(req.body);
    if({error}) return res.status(400).send(error.details[0].message);
    next();
}

module.exports.validate = validate;