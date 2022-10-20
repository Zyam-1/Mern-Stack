var express = require('express');
var router = express.Router();
const {user} = require("../../model/user")
var bcrypt = require('bcryptjs');

router.post("/register", async (req, res)=>{
  let User = new user();
  User.name = req.body.name;
  User.email = req.body.email;
  User.password = req.body.password;
  var salt = await bcrypt.genSalt(10);
  User.password = await bcrypt.hash(User.password, salt);
  await User.save();
  res.send(User)
})

module.exports = router;
