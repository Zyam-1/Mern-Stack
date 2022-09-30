// let obj = {
//     x : 10,
//     y : 20
// }

// obj.name = "Zyam"
// obj.name = "Zyam-1"

// console.log

let obj = {
    a : 20,
    b :20
};
let obj_1 = obj;  // this is used to make a shallow copy
let anotherObj = Object.assign({}, obj); //this is used to make a deep copy
let obj_2 = {...obj}  // this is another method to make a deep copy
obj.a = "Zyam";
obj.c = "lmao"

console.log(anotherObj)
console.log(obj_1);
console.log(obj_2)
