//to do list code
const todoList = document.querySelector('#todo-list');
const form = document.querySelector('#add-todo');
const input = document.querySelector('#todo');
const newTodo = document.createElement("li");

// retrieve from localStorage
let todoArray = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];
localStorage.setItem('todos', JSON.stringify(todoArray))
for (let i = 0; i < todoArray.length; i++) {
    let newTodo = document.createElement("li");
    newTodo.innerText = todoArray[i];
    todoList.appendChild(newTodo);
    const removeButton = document.createElement('button')
    removeButton.innerText = 'Remove';
    newTodo.appendChild(removeButton);
}



//submission 
form.addEventListener('submit', function(e) {
    e.preventDefault();
    //storage
    todoArray.push(input.value);
    localStorage.setItem('todos', JSON.stringify(todoArray));
    // creation
    let newTodo = document.createElement("li");
    console.log(input.value + " has been added to your To-Do List!")
    const removeButton = document.createElement('button')
    removeButton.innerText = 'Remove';
    newTodo.innerText = input.value;
    newTodo.appendChild(removeButton);
    input.value = '';
    todoList.appendChild(newTodo);
});
//list modification
todoList.addEventListener('click', function(e) {
    if (e.target.tagName === 'BUTTON') {
        e.target.parentElement.remove();
        console.log(e.target.parentElement.innerText + ' deleted!')
        const start = todoArray.indexOf(e.target.parentElement + 'Remove')
        console.log(start);
        const deleteCount = 1
        todoArray.splice(start, deleteCount);
        console.log(todoArray);
        localStorage.setItem('todos', JSON.stringify(todoArray))
    } else if (e.target.tagName === 'LI') {
        if (e.target.classList.contains('done')) {
            e.target.classList.remove('done');
        } else {
            e.target.classList.add('done');
        };

    }
    //code to append checkmarks upon completion of task----------------------------------
    // const checkmark = document.createElement('span');
    // checkmark.innerHTML = '&#10004;';
    // e.target.append(checkmark);
});

// save to localStorage