const fs = require("fs");

console.log("Sending Request")
// let response = fs.readFileSync("read.txt", "utf-8") //Sync means it will block the thread
let response = fs.readFile("read.txt", "utf-8", function(err,data){
    console.log(data);

}) // Async or without sync mean it won't block the processing and run in future at a specific time.

console.log("Request Sent")
