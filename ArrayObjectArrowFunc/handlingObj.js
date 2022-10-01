console.clear()
let obj = {
    name : "Zyam",
    age : "20",
    email: "zyamm7@gmail.com"

}
const { name, age, email } = obj; // destructrize the object

function bio( x, y, z){
    console.log("My name is " + x + " and my age is " + y + "." + " My email is " + z );
}

bio(name, age, email);



