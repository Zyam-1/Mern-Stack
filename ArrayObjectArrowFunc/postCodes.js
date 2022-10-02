
let posts = require("./postcodes.json");

let FindIndex = posts.findIndex(findAberdeen) // thi will find the index of the object that has the Postcodes == 661

function findAberdeen(post){
    if (post.Postcodes == 661) return true;
    else return false;
}

let FindObj = posts.find(findRegion);  //this will console.log that specific object

function findRegion(post){
    if (post.Region == "South Ayrshire") return true;
    else return false
}

// console.log(FindIndex)

// console.log(FindObj)

console.log(posts.splice(0, 5))