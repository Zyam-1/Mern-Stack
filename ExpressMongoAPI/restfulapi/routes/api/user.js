var express = require("express");
var router = express.Router();
const { user } = require("../../model/user");
var bcrypt = require("bcryptjs");
const e = require("express");
const _ = require("lodash");
var jwt = require("jsonwebtoken");
var config = require("config")

router.post("/register", async (req, res) => {
  let User = new user();
  User.name = req.body.name;
  User.email = req.body.email;
  User.password = req.body.password;
  User.role = req.body.role;
  let val = await user.findOne({ email: req.body.email });
  if (val) return res.send("Exists");
  var salt = await bcrypt.genSalt(10);
  User.password = await bcrypt.hash(User.password, salt);
  User.save();
  res.send(_.pick(User, ["email", "name"]));
});

router.post("/login", async (req, res) => {
  let email = await user.findOne({email: req.body.email});
  if(!email) return res.send("Email not registered");
  let password = await bcrypt.compare(req.body.password, email.password);
  if (!password) return res.status(401).send("invalid password");
  let token = jwt.sign({
    _id: email._id, name: email.name
  },config.get("privateKey"))
  res.send(token)

});

module.exports = router;
