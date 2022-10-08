const express = require("express");
const app = express();
let array = ["Laptop", "Computer"];

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(3000);

app.get("/api/Recipes", (req, res) => {
  res.send(array);
});
