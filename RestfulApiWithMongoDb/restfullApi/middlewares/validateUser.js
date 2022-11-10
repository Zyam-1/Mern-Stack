//this will validate the user


var {validateUser} = require("../models/user");

function valUser(req,res,next){
    let {error} = validateUser(req.body);
    if({error}) return res.send(error.details[0].message);
    next();
};

module.exports.valUser = valUser;
