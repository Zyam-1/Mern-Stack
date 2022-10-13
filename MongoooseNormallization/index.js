const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/MernStack",{ useNewUrlParser: true,
useUnifiedTopology: true,
family:4,})
.then(()=>{
    console.log("Connected")
}).
catch(err =>{
    console.log("Not connected")
});