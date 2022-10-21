const mongoose = require("mongoose");
const Joi = require("@hapi/joi")

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: {
        "type": String,
        default: "user"
    }

})

function userValidate(data){
    const schema = Joi.object({
        name: Joi.string().min(5).max(12).required(),
        email: Joi.string().min(5).max(12).required(),
        password: Joi.string().min(5).max(12).required(),
        });

    return schema.validate(data ,{abortEarly:false});
    }''

const User = mongoose.model("users", userSchema);

module.exports.user = User;

