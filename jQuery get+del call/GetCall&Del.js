$(function(){
    loadRecipes();
    $("#cont").on("click", ".btn-danger", handleDelete);
});

function handleDelete(){
    var DelBtn = $(this);
    var MainDiv = DelBtn.closest(".border");
    var id = MainDiv.attr("data-id");
    console.log(id);
    $.ajax({
        url : "https://usman-recipes.herokuapp.com/api/recipes/" + id,
        method : "DELETE",
        success : function(){
            loadRecipes()
        }
    })


}

function loadRecipes(){
    $.ajax({
        url: "https://usman-recipes.herokuapp.com/api/recipes",
        method: "GET",
        success: function(response){
            var RecList = $("#cont");
            RecList.empty(); 
            for ( var i = 0 ; i < response.length; i++){
                var Recipes = response[i];
                RecList.append(`<div class = "border margin" data-id="${Recipes._id}"><button class = "float-right btn btn-danger margin">Delete</button> <h1> ${Recipes.title} </h1><p> ${Recipes.body} </p> </div>`)
            }
        }
    })
}
