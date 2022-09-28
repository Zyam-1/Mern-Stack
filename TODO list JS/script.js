window.onload = function() {
    var addBtn = document.getElementById("Add-Btn");
    addBtn.onclick = HandleAdd;

    
};

function HandleAdd(){
    var TextToBeAdded = document.getElementById("inputText").value;
    var todo = document.getElementById("todoList");
    var newTodoText = document.createTextNode(TextToBeAdded);
    var newLi = document.createElement("li");
    var newDelBtn = document.createElement("button");
    var delBtnTextNode = document.createTextNode("Delete")
    newDelBtn.appendChild(delBtnTextNode)
    newLi.appendChild(newDelBtn);
    newLi.appendChild(newTodoText);
    todo.appendChild(newLi);
    newDelBtn.onclick=  HandleDel;
    

    
};

function HandleDel(x){
    var targetBtn = x.target;
    var li = targetBtn.parentNode;
    li.parentNode.removeChild(li);
}
