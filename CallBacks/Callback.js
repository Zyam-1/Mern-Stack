let array = [
  {title: "Zyam",
  body: "Lorem"
  }
]


let handleNewobj = (newObj, callback)=> {

  setTimeout(() => {
    array.push(newObj);
    callback()
    console.log(array)
  }, 5000);
  
}

let FetchArray = ()=>{
  setTimeout(function(){
    
  },2000)
}

handleNewobj({title: "Bruh", body: "Lorem"}, FetchArray)
FetchArray()