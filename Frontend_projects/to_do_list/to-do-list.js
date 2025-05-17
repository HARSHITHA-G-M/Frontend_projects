const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');

addBtn.addEventListener('click', addTask);
todoInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTask();
  }
});

function addTask() {
  const taskText = todoInput.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');

  const taskSpan = document.createElement('span');
  taskSpan.textContent = taskText;
  taskSpan.style.flex = '1';
  taskSpan.style.cursor = 'pointer';

  taskSpan.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '×';
  deleteBtn.className = 'delete-btn';

  deleteBtn.addEventListener('click', () => {
    todoList.removeChild(li);
  });

  li.appendChild(taskSpan);
  li.appendChild(deleteBtn);

  todoList.appendChild(li);

  todoInput.value = '';
  todoInput.focus();
}
