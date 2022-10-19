var express = require("express");
var router = express.Router();
var product = require("../../model/productModel");

// this will get the product
router.get("/", async (req, res) => {
  let products = await product.find();
  res.send(products);
});

//this will get a single record

router.get("/:id", async (req, res) => {
  try {
    let Product = await product.findById(req.params.id);
    res.send(Product);
    if (!Product) return res.send("Product not available");
    else res.send(Product);
  } catch (err) {
    res.status(400).send("Invalid ID");
  }
});

module.exports = router;
