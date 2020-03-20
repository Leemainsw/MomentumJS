const toDoForm = document.querySelector(".js-toDoForm"),
      toDoInput = toDoForm.querySelector("input"),
      toDoList = document.querySelector(".js-todo-list");

const TODOS_LS = 'toDos';

function paintTodo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerHTML = "❌";
    const span = document.createElement("span");
    span.innerHTML = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    toDoList.appendChild(li);
}

function handleSubmit(){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintTodo(currentValue);
    toDoInput.value = "";
}

function loadToDos(){
    const toDos = localStorage.getItem(TODOS_LS);
    if(toDos !== null){

    } 
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit",handleSubmit);
}

init();