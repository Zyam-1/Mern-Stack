console.clear()
const http = require("http");

http.createServer((req,res)=>{
    console.log(req);
    switch(req.url){
        case "/":
           res.write("<h1>this is a page</h1>");
           break;

        case "/Recipes":
           res.write( "<h1>These are recipes</h1>");
           break;

           case "/Products":
            res.write( "<h1>These are Products</h1>");
            break;
 

        default:
            res.write("<h1>This is a page</h1>");
            break;
    } 

 }).listen(8080);