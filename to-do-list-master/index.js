const form = document.getElementById("addtodoform");
const todoAdd = document.getElementById("addtodo");
const todoList = document.getElementById("todolist");
const rightSideAdd = document.getElementById("right-side-add");
const rightSideSearch = document.getElementById("right-side-search");
const todoSearch = document.getElementById("searchtodo")

listTodos();

function listTodos() {
    form.addEventListener("submit", addTodo);
}

function addTodo(e) {
    const newTodo = todoAdd.value.trim();

    addtodoToUI(newTodo);


    e.preventDefault();    
}
 
function addtodoToUI(newTodo) {

    const newListItem = document.createElement("li");
    const newLinkItem = document.createElement("a");
    newListItem.className = "to-do-list-item";
    newLinkItem.href = "#";
    newLinkItem.className = "to-do-list-item-icon";
    newLinkItem.innerHTML = `<i class ='fas fa-trash'></i>`;

    newListItem.appendChild(document.createTextNode(newTodo));
    newListItem.appendChild(newLinkItem);

    todoList.appendChild(newListItem);
    todoAdd.value = "";
    /**
    <li class="to-do-list-item">
        todoTest 
        <a href="#" class="to-do-list-item-icon"><i class="fas fa-trash"></i></a>
    </li>
    */	
}

