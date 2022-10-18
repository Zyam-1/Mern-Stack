var express = require("express");
var router = express.Router();
const userModel = require("../models/userSchema");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/signup", function (req, res, next) {
  res.render("users/signup")
});

router.post("/signup", async function(req, res, next){
  let user = new userModel(req.body);
  await user.save();
  res.redirect("/")

})
//this will open then form
router.get("/login", function(req, res, next){
  res.render("users/login")
})
//this will submit the form
router.post("/login", async function(req, res, next){
  let user = await userModel.findOne({email:req.body.email, password: req.body.password });
  console.log(user)
  if( !user) return res.redirect("/users/signup");
  req.session.user = user;
  return res.redirect("/");
})

router.get("/logout", function(req, res, next){
  req.session.user = null;
  res.redirect("/")
})


module.exports = router;
