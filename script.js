const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

todoButton.addEventListener('click',addTodo);

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
    liTodo.innerHTML = todoInput.value;
    // Creating Completed Button
    const completedButton = document.createElement('input');
    completedButton.classList.add('btn');
    completedButton.classList.add('btn-success');
    completedButton.type = 'submit';
    completedButton.value = 'Completed';
    // Creating Delete Button
    const deleteButton = document.createElement('input');
    deleteButton.classList.add('btn');
    deleteButton.classList.add('btn-danger');
    deleteButton.type = 'submit';
    deleteButton.value = 'Delete';
    //Appending
    todoList.appendChild(divTodo);
    divTodo.appendChild(liTodo);
    divTodo.appendChild(completedButton);
    divTodo.appendChild(deleteButton);

}
