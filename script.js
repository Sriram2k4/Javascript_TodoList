const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const todoFilter = document.querySelector('#todoFilter');

todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteCheck);
todoFilter.addEventListener('click',filterTodo);

function addTodo(e){
    // Prevent Reloading
    e.preventDefault();

    // Creating Div
    const divTodo = document.createElement('div');
    divTodo.classList.add('d-flex');
    divTodo.classList.add('justify-content-center');
    divTodo.classList.add('mb-2');
    // Creadting li
    const liTodo = document.createElement('li');
    liTodo.classList.add('list-group-item');
    liTodo.classList.add('rounded');
    liTodo.classList.add('w-50');
    liTodo.innerHTML = todoInput.value;
    // Creating Completed Button
    const completedButton = document.createElement('button');
    completedButton.classList.add('completed-btn');
    completedButton.classList.add('btn');
    completedButton.classList.add('btn-success');
    completedButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    // Creating Delete Button
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-btn');
    deleteButton.classList.add('btn');
    deleteButton.classList.add('btn-danger');
    deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    //Appending
    todoList.appendChild(divTodo);
    divTodo.appendChild(liTodo);
    todoInput.value = "";
    divTodo.appendChild(completedButton);
    divTodo.appendChild(deleteButton);
}

function deleteCheck(e){
    const item = e.target;
    if(item.classList[0] === 'completed-btn'){
        item.parentElement.classList.toggle('Done');
    } else if(item.classList[0] === 'delete-btn'){
        item.parentElement.classList.add('animate__animated');
        item.parentElement.classList.add('animate__fadeOutDown');
        setTimeout(function() {
            item.parentElement.remove();
        }, 1000);
    }
}

function filterTodo(e){
    const todos = todoList.childNodes;
    const value = e.target.value;

    console.log(todos);
    console.log(todos.length);

    // console.log(todos[1].classList.contains('Done'));

    for(let x=1;x<todos.length;x++){
        switch(value){
            case "all":
                todos[x].classList.remove("d-none")
                todos[x].classList.add('d-flex');
                break;
            case "completed":
                if(todos[x].classList.contains('Done')){
                    todos[x].classList.remove("d-none")
                    todos[x].classList.add('d-flex');
                }else{
                    todos[x].classList.add('d-none');
                }
                break;
            case "uncompleted":
                if(!todos[x].classList.contains('Done')){
                    todos[x].classList.remove("d-none")
                    todos[x].classList.add('d-flex');
                }else{
                    todos[x].classList.add('d-none');
                }
                break;
        }

    }
}

// function filterTodo(e) {
//     const target = e.target.value;
//     const todoListItem = todoList.childNodes;
//     todoListItem.forEach(function(variable){
//     console.log(variable);
//     if(variable.classList.contains("Done")){
//         console.log("Atlast");
//     }
//     console.log(target);
//     });
// }