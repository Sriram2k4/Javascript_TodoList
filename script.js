const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

todoButton.addEventListener('click',addTodo);

function addTodo(e){
    // Prevent Reloading
    e.preventDefault();
    const newItem = document.createElement('li');

}
