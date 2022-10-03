console.clear()


let array = [
    {
        title: "KeyBoard",
        description: "TypeWriter Keyboard",
    
    }

    ,{
        title: "Keyboard",
        description: "Simple KeyBoard"
    }
]

function func(){
 return new Promise(function(resolve, reject){
    setTimeout(() => {
        array.push({
            title: "Keyboard1",
            description: "Simple KeyBoard1"
        })
        

        let error = true;
        if( error == true){
        resolve(
            
        )}
        else{
        reject()}
        
    }, 3000);})
    
}
function func2(){
    console.log(array)
}



func().then(function(){
    func2()
}).catch(function(){console.log("a")});
