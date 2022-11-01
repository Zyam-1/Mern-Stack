const mongoose = require("mongoose");
const Joi = require("@hapi/joi");
const bcrypt = require("bcryptjs")

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: {
        type: String,
        default: "user",
      },

});

userSchema.methods.generateHashedPassword = async function(){
    var salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
}

function userValidate(data){
    const schema = Joi.object({
        name: Joi.string().min(5).max(12).required(),
        email: Joi.string().min(5).max(20).email().required(),
        password: Joi.string().min(5).max(12).required(),
        });

    return schema.validate(data ,{abortEarly:false});
    }

const User = mongoose.model("users", userSchema);

module.exports.user = User;
module.exports.registerVal = userValidate;

