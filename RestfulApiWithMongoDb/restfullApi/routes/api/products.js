const express = require('express');
const router = express.Router();
const {product} = require("../../models/products");
const {validate} =require("../../middlewares/validateProd");
const {auth} = require("../../middlewares/authN");
const admin = require("../../middlewares/authZ");

// This will list the products
router.get('/',auth, admin,async function(req, res, next) {
    //pagination
    let page = Number(req.query.page ? req.query.page : 1);
    let perPage = Number(req.query.perPage ? req.query.perPage : 10);
    let skipRecords = perPage * (page - 1);
    let products = await product.find().skip(skipRecords).limit(perPage);
    res.send(products);
});
// This will get a single record
router.get("/:id", async function(req, res, next){
    let Product = await product.findById(req.params.id);
    res.send(Product);
});

//This will update a record

router.put("/:id",validate, async function(req,res,next){
    let Product = await product.findById(req.params.id);
    Product.title = req.body.title;
    Product.price = req.body.price;
    Product.description = req.body.description;
    await Product.save();
    res.send(Product);     
});

// this will delete a record

router.delete("/:id", async function(req,res, next){
    let Product = await product.findByIdAndDelete(req.params.id);
    res.send(Product);

});

// this will make a new record

router.post("/",validate, async function(req,res,next){
    let Product = new product();
    Product.title = req.body.title;
    Product.price = req.body.price;
    Product.description = req.body.description;
    await Product.save();
    res.send(Product);
    

});

module.exports = router;