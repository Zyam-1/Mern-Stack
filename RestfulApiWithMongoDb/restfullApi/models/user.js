const mongoose = require("mongoose");
const Joi = require("@hapi/joi");

// this will declare schema for user
let userSchema = mongoose.Schema({
    name:String,
    email:String,
    password:String,
    role: {
        type: String,
        default: "user",
      },
    
})
// this will declare the model for user
let users = mongoose.model('users', userSchema);
// this will be used to validate the user afterwards
function validateUser(data){
    let schema = Joi.object({
        name: Joi.string().required().min(5).max(15),
        email: Joi.string().email().required(),
        password: Joi.string().min(8).required(),
    });
    return schema.validate(data);
}
// this is used to encrypt the password
userSchema.methods.generateHashedPassword = async function(){
    
}

module.exports.users = users;
module.exports.validateUser = validateUser;