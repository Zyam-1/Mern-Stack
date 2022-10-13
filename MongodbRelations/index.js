console.clear()
const mongoose = require("mongoose");
const express  = require("express");
const app = express()
const {createRecipe, UpdateRec,deleteRec, readRec} = require("./OperationsCollections")

mongoose.connect('mongodb://localhost:27017/MernStack', {useNewUrlParser: true,
useUnifiedTopology: true,
family:4}).then(async()=>{
     console.log("Connection to server successful");
    //  await createRecipe("Pasta", "This is a good pasta", "8/10");
    // await UpdateRec("6346cbd53aa597ec5588718d", "Pasta Updated", "This is a bad pasta", "5/10" );
    // await deleteRec("6346cbd53aa597ec5588718d");
    await readRec();
    
    
}).catch(err=>{
    console.log("error occured");
});

app.listen(3000);