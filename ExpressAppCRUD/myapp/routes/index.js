var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/ShoppingCart', function(req, res, next) {
  let cart = req.cookies.cart;
  if(!cart) cart = []
  res.render('cart',{ cart });
});

router.get('/ShoppingCart/delete/:id', function(req, res, next) {
  let cart = [];
  if(req.cookies.cart) cart = req.cookies.cart;
  cart.splice(cart.findIndex(c=>{c._id == req.params.id}), 1)
  res.cookie("cart", cart);
  res.redirect("/ShoppingCart")
  

});



module.exports = router;
