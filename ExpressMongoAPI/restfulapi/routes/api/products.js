var express = require("express");
var router = express.Router();
var {product, validate} = require("../../model/productModel");
var validateProd = require("../../middlewares/ValidateProd")


// this will get the product
router.get("/", async (req, res) => {
  let products = await product.find();
  res.send(products);
});

//this will get a single record

router.get("/:id", async (req, res) => {
  try {
    let Product = await product.findById(req.params.id);
    if (!Product) return res.send("Product not available");
    else res.send(Product);
  } catch (err) {
    res.status(400).send("Invalid ID");
  }
});

//this will delete a record

router.delete("/:id", async (req,res)=>{
  let Product = await product.findByIdAndDelete(req.params.id);
  res.send(Product);
});


//this will update a single record

router.put("/:id",validateProd, async (req, res)=>{
  let Product = await product.findByIdAndUpdate(req.params.id);
  Product.name = req.body.name;
  Product.price = req.body.price;
  Product.description = req.body.description;
  await Product.save()
  res.send(Product)
})


//this will make a new record

router.post("/", validateProd,  async (req,res)=>{
  let Product = new product;
  Product.name = req.body.name;
  Product.price = req.body.price;
  Product.description = req.body.description;
  await Product.save()
  res.send(Product);

})
module.exports = router;
