document.addEventListener("DOMContentLoaded", () => {
 const taskList = new TaskList();
});

const button = document.querySelector('#create-task-form #new-task-button');
const input = document.querySelector('#create-task-form #new-task-description');
const unList = document.querySelector('#main-content #list ul#tasks');

button.addEventListener('click', (event) => {
 const task = new Task(input.value);

 const listItem = document.createElement(‘li’);
   listItem.className = `task-${task.id}`;
   listItem.innerText = `${task.content}`;
   unList.append(listItem);
 const deleteButton = document.createElement(‘button’);
   deleteButton.className = `button-${task.id}`;
   deleteButton.innerText = ' X ' ;
   listItem.append(deleteButton);

 deleteButton.onclick = (event) => {
   unList.removeChild(listItem);
 }

 event.preventDefault();
});
