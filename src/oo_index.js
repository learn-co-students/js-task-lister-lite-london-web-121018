
// document.addEventListener("DOMContentLoaded", () => {
//   const taskList = new TaskList();
// });

// <div id="main-content">
//   <h1>Task Lister Lite™️</h1>
//
//   <form id="create-task-form" action="#" method="post">
//     <label for="new-task-description">Task description:</label>
//     <input type="text" id="new-task-description" name="new-task-description" placeholder="description">
//     <input type="submit" value="Create New Task">
//   </form>
//
//   <div id="list">
//     <h2>My Todos</h2>
//     <ul id="tasks">
//     </ul>

const inputEl = document.querySelector('#new-task-description');
const form = document.querySelector('#create-task-form');
const listEl = document.querySelector('#tasks');

const addTask = text => {
  const taskEl = document.createElement('li');
  taskEl.innerText = text;
  listEl.appendChild(taskEl);
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const text = inputEl.value;
  // if (text.length < 2) {
  addTask(text);
  formEl.reset();
  // }
});

document.addEventListener('click', event => {
  if (event.target.className === 'target-button') {
    console.log('whatever');
  }
});


const parentEl = document.querySelector('#parent');
const childEl = document.querySelector('#child');
const grandChildEl = document.querySelector('#grandchild');

parentEl.addEventListener('click', () => {
  console.log("I'm the parent");
});

childEl.addEventListener('click', () => {
  console.log("I'm the child");
});

grandChild.addEventListener('click', () => {
  event.stopPropogation();
  console.log("I'm the grandchild");
});
