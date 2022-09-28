$(function(){
    $("#Add-Btn").click(handleAdd);
    $("#todoList").on("click" , "li", handlerem);
})

function handleAdd(){
    var textInput = $("#textToBeAdded").val()
    if (!textInput) {
        $("#textToBeAdded").addClass("error");
        return;
    }
    $("#todoList").append("<li>" + textInput + "</li>");
    $("#textToBeAdded").val("");

}
function handlerem(){
    $(this).fadeOut();
}

