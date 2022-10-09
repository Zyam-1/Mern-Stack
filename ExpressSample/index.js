const express = require("express");
const app = express();
app.use(express.json());
let array = ["Laptop", "Computer", "Mobile", "TV", "KeyBoard", "Mouse" ];

app.get("/", function (req, res) {
  res.send("Hello World");
});// TO get the entire array


app.get("/api/Products", (req, res) => {
  res.send(array);
});// to get a single objet in array

app.get("/api/Products/:index", (req,res)=>{

  if(!array[req.params.index]) return res.status(400).send("The Product isn't available");
  res.send(array[req.params.index]);

});

app.put("/api/Products/:index", (req,res)=>{
  
  array[req.params.index] = req.body.name;
  res.send(array[req.params.index]);
}
);// to update an array

app.delete("/api/Products/:index", (req,res)=> {
array.splice(req.params.index, 1);
res.send(array);
});// to delete a object in an array

app.post("/api/Products/", (req,res)=>{
array.push(req.body.name);
res.send(array);
})//  to put  a new object in an array

app.listen(3000);
