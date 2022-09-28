$(function(){
    $("#LoadBtn").click(sendReq);
})

function sendReq(){
    $.get("students.txt", handlereceive);
}

function handlereceive(i){
    console.log(i);
    $("#cont").empty();
    $("#cont").append(i);
}