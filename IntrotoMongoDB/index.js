const express = require("express");
const app = express();
const mongoose = require("mongoose");
const createProduct = require("./Operations");
app.use(express.json());


mongoose
  .connect("mongodb://localhost/MernStackn", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family:4
  })
  .then(async() => {
    console.log("Connection to MongoDB created");
    await createProduct ('Hp', 200,['laptop', 'green'] );
    
  })

  .catch((err) => {
    console.log("Error Connecting");
    console.log(err);
  });








    