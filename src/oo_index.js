
document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();
});

let form = document.getElementById("create-task-form")
let tasklist = document.getElementById('tasks')
const allTasks = []
let i = 0


// let newTask = form.addEventListener("submit", taskCreator(document.getElementById('new-task-description').value))

function taskCreator(event) {
  event.preventDefault()
  let taskDescription = document.getElementById('new-task-description').value
  let newTask = new Task(taskDescription)
  console.log(newTask)
  allTasks.push(newTask)
  i++
  taskitem = document.createElement('li')
  button = `<button id="delete-${i}" class="btn">Delete</button>`
  taskitem.innerHTML = `${newTask.description} ${button} `
  taskitem.querySelector('button').addEventListener('click', deleteEvent, i)
  tasklist.append(taskitem)
  //tasklist.innerHTML += `< li > ${ newTask.description } <button id="delete-${i}" class="btn">Delete</button></li > `
  //addTasks()
}

deleteButton = document.querySelector('.btn')

console.log(allTasks)

form.addEventListener('submit', taskCreator)
//deleteButton.addEventListener('click', deleteEvent)

function deleteEvent() {
  task = document.getElementById(`delete-${i}`)
  task.parentElement.parentNode.removeChild(task.parentElement)


}


function addTasks() {
  allTasks.forEach(function (task) {

    tasklist.innerHTML += `< li > ${task.description} <button id="delete-${task.index}">Delete</button></li > `

  })
}