var jwt = require("jsonwebtoken");
var config = require("config");
var {user} = require("../model/user")

async function auth(req,res, next){
  let token = req.header("x-auth-token");
  if (!token) return res.send("User not logged in");
  try{ 
    //if the token is correct then user will have the user object with id and name
    let verify =  jwt.verify(token, config.get("privateKey")); 
    req.user = await user.findById(verify._id)
    next() 
  } catch (err) {
    res.send("invalid token");
  }
}
module.exports = auth