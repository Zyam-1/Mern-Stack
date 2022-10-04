console.clear()
const _ = require("underscore"); // not built in function
const os = require("os") //built in function
const calcfuncs = require("zyam-calc");
const add = calcfuncs.add
const multi = calcfuncs.prod
const sub = calcfuncs.sub

console.log(sub(1,9))
console.log(add(2,56))
console.log(multi(2,10))


console.log(os.freemem());
const test = _.contains([1,3,5,7,9], 1); // to check if the former contains the latter
console.log(test)
