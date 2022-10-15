console.clear()
var express = require('express');
const prod = require('zyam-calc/product');
var router = express.Router();
var productModel = require("../models/productSchema")

/* GET home page. */
router.get('/', async function(req, res, next) {
    let products = await productModel.find();
    res.render('products/list',{ title: "Products", productList: products} );
  
});

router.get('/add', async function(req, res, next) {
    res.render("products/add")
}
    );

    router.post('/add', async function(req, res, next) {
        console.log(res.body)
        res.render("products/add")
    }
        );
    


module.exports = router;
