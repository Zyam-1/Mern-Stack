console.clear()
let array = ["zyam", "arsam", "ayesha"];
let array2 = [1321,456,234,754,123,7856,1239,123456,34];

let anotherArray = array.find(function(response){
    if (response == "ayesha") return true;
    else return false;
 
})

let mapArray = array.map(function(x){
    return x + " is a human";

})

array.splice(0,0, "bruh", "xD");

// console.log(anotherArray);
// console.log(mapArray)

console.log(array2.sort((a,b) => {
    if (a > b) return 1;
    else if (b > a) return -1;
    else return 0;
})
)




