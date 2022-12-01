

function todoList(){
    function deleteParent() {
        deleteButton.parentElement.remove();
    } 

    var item = document.getElementById("newTodoInput").value
    var text = document.createTextNode(item)
    var newItem = document.createElement("li")
    var deleteButton = document.createElement("button")

    deleteButton.innerHTML = "Delete"

    newItem.appendChild(text)

    newItem.appendChild(deleteButton)

    document.getElementById("todoList").appendChild(newItem)

    deleteButton.addEventListener("click", deleteParent)

}


