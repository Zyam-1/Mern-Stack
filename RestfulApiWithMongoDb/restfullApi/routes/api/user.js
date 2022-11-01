const express = require('express');
const router = express.Router();
const {users} = require("../../models/user");
const bcrypt = require("bcrypt");
const _ = require("lodash");
const jwt = require("jsonwebtoken");
const config = require("config");const {valUser} = require("../../middlewares/validateUser")

// Register the users
router.post('/register', async function(req, res, next) {
  let newUser = new users;
  newUser.name = req.body.name
  newUser.email = req.body.email;
  newUser.password = req.body.password;
  if(req.body.role) newUser.role = req.body.role;
  // check it email already registered or not
  let check = await users.findOne({email:req.body.email});
  if (check) return res.send("Email already registered");

  console.log(check)
  
  
  // password encryption
  let salt = await bcrypt.genSalt(10);
  newUser.password = await bcrypt.hash(newUser.password, salt);
  console.log(newUser);
  
  await newUser.save();
  res.send(_.pick(newUser, ["email", "name"]));

});

router.post("/login", async function(req,res,next){
  let user = await users.findOne({email : req.body.email});
  if (!user) return res.send("email not registered");
  let password = await bcrypt.compare(req.body.password, user.password);
  if(!password) return res.status(401).send("Invalid Password");
  
  //it will generate a token that contains user info
  let token = jwt.sign({
  _id: user._id, name: user.name
  }, config.get("pwtKey"));
  res.send(token);
})

module.exports = router;