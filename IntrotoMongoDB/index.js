const express = require("express");
const app = express();
const mongoose = require("mongoose");
const {createProduct, delProd, readProd, updatePord} = require("./Operations");
app.use(express.json());


mongoose
  .connect("mongodb://localhost/MernStack", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family:4
  })
  .then(async() => {
    console.log("Connection to MongoDB created");
    // await createProduct ('Dell', 299,['Laptop', 'Black'] );
    // await delProd("634535cc7c87faf76d8ea2c8");
     await readProd();
    // await updatePord("634535a0f07b7333f8addbab", "HP updated", 299, ["Laptop, 6th Generation"])
    
  })

  .catch((err) => {
    console.log("Error Connecting");
    console.log(err);
  });








    