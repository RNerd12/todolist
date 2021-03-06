//Selectors
const todoInput = document.querySelector('.todo-input');
const todoList = document.querySelector('.todo-list');
const todoButton = document.querySelector('.todo-button');

//Event listeners
todoButton.addEventListener('click', addTodo);

//Functions
function addTodo(event) {
	event.preventDefault();
	//Create Todo div
	const todoDiv = document.createElement('div');
	todoDiv.classList.add('todo');
	//Create Li
	const newTodo = document.createElement('li');
	newTodo.innerText = 'hey';
	newTodo.classList.add('todo-item');
	todoDiv.appendChild(newTodo);
	//Check mark button
	const completedButton = document.createElement('button');
	completedButton.innerHTML = '<i class="fas fa-check"></i>';
	completedButton.classList.add('complete-btn');
	todoDiv.appendChild(completedButton);
	//Check trash button
	const trashButton = document.createElement('button');
	trashButton.innerHTML = '<i class="fas fa-trash"></i>';
	trashButton.classList.add('trash-btn');
	todoDiv.appendChild(trashButton);

	//Append To list
	todoList.appendChild(todoDiv);
}
