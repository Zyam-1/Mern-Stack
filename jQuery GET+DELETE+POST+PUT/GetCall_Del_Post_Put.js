$(function(){
    loadRecipes();
    $("#cont").on("click", ".btn-danger", handleDelete);
    $("#addRec").click(AddRecipe);
    $("#cont").on("click", ".btn-secondary", handleUpdate);
});

function handleUpdate(){
    $("#modelId").modal("show");
    var UptBtn = $(this);
    var ParentDiv = UptBtn.closest(".border");
    var id_2 = ParentDiv.attr("data-id");
    console.log(id_2);
    $.get("https://usman-recipes.herokuapp.com/api/recipes/" + id_2, function(response){
        console.log(response);

    })
    
}

function AddRecipe(){
    var title = $("#NewTitle").val();
    var body = $("#NewBody").val();
    $.ajax({
        url : "https://usman-recipes.herokuapp.com/api/recipes",
        method : "POST",
        data : {title, body },
        success: function(response){
            loadRecipes()
        }
    })


}

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
                RecList.append(`<div class = "border margin" data-id="${Recipes._id}"><button class = "float-right btn btn-danger margin">Delete</button><button class = "btn btn-secondary float-right mx-1">Edit</button> <h1> ${Recipes.title} </h1><p> ${Recipes.body} </p> </div>`)
            }
        }
    })
}
