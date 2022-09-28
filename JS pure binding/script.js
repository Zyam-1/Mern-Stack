window.onload = function (){
    var uptBtn = document.getElementById("UpdateBtn");
    uptBtn.onclick = HandleUpdate;
}
function HandleUpdate () {
    console.log("Bruh")
     var TextToBeUpdated = document.getElementById("input");
     var UpdatedText = document.getElementById("UpdateText");
     UpdatedText.innerHTML += " "+ TextToBeUpdated.value;

}