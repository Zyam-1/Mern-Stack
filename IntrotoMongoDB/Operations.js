const ProductModel = require("./Models");

const createProduct = async (name, price, tags) => {
   let Product = new ProductModel();
   Product.name = name;
   Product.price = price;
   Product.tags = tags;
   await Product.save();
   console.log(Product);
 };

 const deleteProd = async (_id)=>{
  let product = await ProductModel.findByIdAndDelete(_id);
  return product;
 }

 const readProd = async ()=>{
  let products = await ProductModel.find();
  console.log(products);
 }


 const updatePord = async (_id, name, price, tags)=>{
  let product = await ProductModel.findById(_id);
  product.name = name;
  product.price = price;
  product.tags = tags;
  await product.save()
  return product;
 }

 module.exports.createProduct = createProduct;
 module.exports.delProd = deleteProd;
 module.exports.readProd = readProd;
 module.exports.updatePord = updatePord;