$(function(){
    loadRecipes()
    $("#AddPro").click(AddProduct);
    $("#main-cont").on("click", "#DelBtn", handleDel);
    $("#main-cont").on("click", "#EditBtn", handleEdit);
    $("#UpdProduct").click(function(){
        var UpdatedName = $("#UpdateName").val();
        var UpdatedPrice = $("#UpdatePrice").val();
        var UpdatedColor = $("#UpdateColor").val();
        var UpdatedDep = $("#UpdateDep").val();
        var UpdatedDescr = $("#UpdateDescr").val();
        var UpdatedId =  $("#id-2").val();


        $.ajax({       
            url : "https://usman-recipes.herokuapp.com/api/products/" + UpdatedId,
            method: "PUT",
            data: {name : UpdatedName, price: UpdatedPrice, color: UpdatedColor, department: UpdatedDep, description: UpdatedDescr },
            success: function( response){
                loadRecipes()
                $("#EditModal").modal("hide");


            }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      

        })

    })


})

function handleEdit(){
    $("#EditModal").modal("show");
    var EditBtn = $(this);
    var ParentDiv = EditBtn.closest(".border");
    var id = ParentDiv.attr("data-id");
    $.ajax ({
        url: "https://usman-recipes.herokuapp.com/api/products/" + id,
        method: "GET",
        success: function(response){

            console.log(response)
             $("#UpdateName").val(response.name);
             $("#UpdatePrice").val(response.price);
             $("#UpdateColor").val(response.color);
             $("#UpdateDep").val(response.department);
             $("#UpdateDescr").val(response.description);
             $("#id-2").val(response._id);

             loadRecipes()
            
        }
    })

}

function handleDel(){
    var DeleteBtn = $(this);
    var ParentDiv = DeleteBtn.closest(".border");
    var id = ParentDiv.attr("data-id");
    $.ajax ({
        url : "https://usman-recipes.herokuapp.com/api/products/" + id,
        method : "DELETE",
        success: function(response){
            loadRecipes()
        }
    })
}

function AddProduct(){
      var NewProName = $("#NewName").val();
      var NewProPrice = $("#NewPrice").val();
      var NewProColor = $("#NewColor").val();
      var NewProDep = $("#NewDep").val();
      var NewDescriptionPro = $("#NewDescription").val();

      $.ajax ({
        url : "https://usman-recipes.herokuapp.com/api/products",
        method: "POST",
        data: {name: NewProName, price: NewProPrice, color: NewProColor, department: NewProDep, description: NewDescriptionPro},
        success: function(response){
            loadRecipes();
            $("#AddProductmodel").modal("hide");

        }
      })
      
      



    
}

function loadRecipes(){
    var MainCont = $("#main-cont");
    
    $.ajax({
        url : "https://usman-recipes.herokuapp.com/api/products",
        method: "GET",
        success: function(response){
            MainCont.empty();
            for ( var i = 0; i < response.length; i++){
                var Product = response[i];
                MainCont.append(`<div class = "border p-1" data-id = "${Product._id}"><button class = "btn btn-secondary float-right" id = "EditBtn">Edit</button><button class = "btn btn-primary float-right" id = "DelBtn">Delete</button><h3>Name: ${Product.name}</h3><h4>Price: $${Product.price}</h4><h5>Product Color: ${Product.color}</h5><h6>Department: ${Product.department}</h6><p>Description: ${Product.description}</p<</div>`)
            }

        }
    }) 
}