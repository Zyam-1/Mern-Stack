const ProductModel = require("./Models");

const createProduct = async (name, price, tags) => {
   let Product = new ProductModel();
   Product.name = name;
   Product.price = price;
   Product.tags = tags;
   await Product.save();
   console.log(Product);
 };
 module.exports = createProduct;