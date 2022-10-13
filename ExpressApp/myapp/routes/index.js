var express = require('express');
var router = express.Router();

/* GET home page. */


router.get("/recipes", function(req,res){
  res.render("recipes")
});

router.get("/ContactUs", function(req,res){
  res.render("contactus");
});
module.exports = router;
