const jwt = require("jsonwebtoken");
const config = require("config");
const {users} = require("../models/user");

async function auth(req,res,next){
    //this will store the token
    let token = req.header("x-auth-token");
    // this will check if token exists in header or not
    if(!token) return res.send("user is not logged in");
    try
        {
        // this will verify the token
        let verify = jwt.verify(token, config.get("pwtKey"));
        //this will get the user for authZ
        
        req.user = await users.findById(verify._id);
        //this will move to next middle or the rout
        next();
        
    }
    // this will throw error if token is fake
    catch (error){
        res.send("Invalid Token");
    }
    
}

module.exports.auth = auth;