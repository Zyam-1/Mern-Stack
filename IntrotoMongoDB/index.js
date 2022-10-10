const express = require("express");
const app = express();
const mongoose = require("mongoose");
  

mongoose
  .connect("mongodb://localhost/MernStack", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family:4
  })
  .then(() => {
    console.log("Connection to MongoDB created");
  })

  .catch((err) => {
    console.log("Error Connecting");
    console.log(err);
  });








    