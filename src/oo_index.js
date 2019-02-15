
document.addEventListener("DOMContentLoaded", () => {
  
});

const form = document.getElementById("create-task-form");
const newTask = document.getElementById('new-task-description');
const tasks = document.getElementById('tasks');

tasks.addEventListener('click', function(e){
  if (e.target && e.target.matches('li button')){
      deleteTask(e.target);
  }
});


newTask.addEventListener("blur",function(){
	createTask(newTask.value);
});

form.addEventListener("submit",function(e){
  e.preventDefault();
});

function createTask(thing){
  const delBtn = document.createElement("button");
  delBtn.setAttribute('data-description', thing);
  delBtn.innerHTML = 'X';
  let li = document.createElement('li');
      li.innerHTML = thing;
      tasks.appendChild(li).appendChild(delBtn);
}

function deleteTask(tskBtn){
  tskBtn.parentNode.remove();
  tskBtn.remove();
}


// taskButton.addEventListener('click', function(event){
//   event.preventDefault();
// });

// document.getElementById("name");
//   name.addEventListener("blur", alertVal);
//   function alertVal(){
//   alert(name.value);

// //the specific input
// var inputID = document.getElementById('inputID');

// //add a listener to the object for blur
// inputID.addEventListener('blur',function(){
//     //the value attribute is the way to get what the user entered.
//     console.log(inputID.value);
// });