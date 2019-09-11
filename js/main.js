const listTodos = document.getElementById("listOfTodos");

//----------------------------------------------------------
todoForm.addEventListener(
    //Checks if the form has been submitted and its correct
    'submit', (event) => {
   event.preventDefault();
   if(newTodo.value === "") {
       alert("You cannot create an empty todo");
   } else {
       _createNewItemInList(newTodo.value);
   }
});

//----------------------------------------------------------
clearButton.addEventListener('click', function (event) {

    for(let item of listTodos.childNodes) {
        item.childNodes[1].checked = false;
    }
});

//----------------------------------------------------------
markAllButton.addEventListener('click', function (event) {

    for(let item of listTodos.childNodes) {
        item.childNodes[1].checked = true;
    }

});

//---------------------------------------------------------
deleteButton.addEventListener('click', function (event) {

    while(listTodos.firstChild) {
        listTodos.removeChild(listTodos.firstChild);
    }
});

//----------------------------------------------------------
function _createNewItemInList(
    //Creates a new div and adds it to the list of todos
    strItem
) {

    var newRow = document.createElement('div');
    var newP = document.createElement("p");
    var newCheckBox = document.createElement("input");
    var newItemText = document.createTextNode(strItem);
    newP.appendChild(newItemText);
    newP.style.width = "70%";
    newCheckBox.type = "checkbox";
    newRow.style.display = "flex";
    newRow.style.flexDirection = "row";
    newP.style.paddingTop = "8px";
    newRow.appendChild(newP);
    newRow.appendChild(newCheckBox);
    listTodos.appendChild(newRow);
}
