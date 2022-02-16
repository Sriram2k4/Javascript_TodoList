const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const todoFilter = document.querySelector('#todoFilter');

document.addEventListener('DOMContentLoaded',getTodos)
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
    saveToLocalStorage(todoInput.value);
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
            removeFromLocalStorage(item.parentElement);
        }, 1000);
    }
}

function filterTodo(e){
    let todos = todoList.children;
    let value = e.target.value;
    todos = Object.values(todos);

     console.log(todos);

    todos.forEach(function(todo){
        switch(value){
            case "all":
                todo.classList.remove("d-none")
                break;
            case "completed":
                if(todo.classList.contains('Done')){
                    todo.classList.remove("d-none")
                    todo.classList.add('d-flex');
                }else{
                    todo.classList.add('d-none');
                }
                break;
            case "uncompleted":
                if(!todo.classList.contains('Done')){
                    todo.classList.remove("d-none")
                    todo.classList.add('d-flex');
                }else{
                    todo.classList.add('d-none');
                }
                break;
        }
    });
}

function saveToLocalStorage(value){
    let List;
    if(localStorage.getItem('todos') === null){
        List = [];
    }else{
        List = JSON.parse(localStorage.getItem('todos'));
    }
    List.push(value);
    localStorage.setItem('todos', JSON.stringify(List));

}

function removeFromLocalStorage(value){
    let List;
    if(localStorage.getItem('todos') === null){
        List = [];
    }else{
        List = JSON.parse(localStorage.getItem('todos'));
    }
    todo = value.children[0].innerHTML;
    List.splice(List.indexOf(todo), 1);
    localStorage.setItem('todos', JSON.stringify(List));
}

function getTodos(){
    let List;
    if(localStorage.getItem('todos') === null){
        List = [];
    }else{
        List = JSON.parse(localStorage.getItem('todos'));
    }

    List.forEach(function(todo){
        console.log(todo);
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
        liTodo.innerHTML = todo;
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
    });
}


