console.clear()
var express = require('express');
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

router.post("/add", async function(req, res, next) {
        let product = new productModel(req.body)
        await product.save()
        res.redirect("/products")

    }
        );


router.get("/delete/:id", async function(req, res, next) {
            let product = await productModel.findByIdAndDelete(req.params.id)
            res.redirect("/products")
    
        }
            );

            router.get("/edit/:id", async function(req, res, next) {
                let product = await productModel.findById(req.params.id)
                res.render("products/edit", { product })
            }
                );

                router.post("/edit/:id", async function(req, res, next) {
                    let product = await productModel.findById(req.params.id)
                    product.name = req.body.name
                    product.price= req.body.price
                    await product.save()
                    res.redirect("/products")
                }
                    );


    


module.exports = router;
