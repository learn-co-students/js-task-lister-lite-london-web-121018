// get everything I need that's alredy on the page
const inputEl = document.querySelector('#new-task-description')
const formEl = document.querySelector('#create-task-form')
const listEl = document.querySelector('#tasks')

// add a single ask on the page
const addTask = text => {
    const taskEl = document.createElement('li')
	   taskEl.innerText = text
    listEl.appendChild(taskEl)
}

// listen for button clicks, when user clicks  the  button (or presses enter on input),
// get the value of the input and give that to addTask.

formEl.addEventListener('submit', (event) => {
	event.preventDefault()
	const text = inputEl.value
	if (text.length > 0) {
		addTask(text)
		formEl.reset()
    }
})

//Event Delegation:
document.addEventListener('click', event => {
	if (event.target.className === 'target-button') {
		console.log("Eureka, you found it ;)!")
    }
})

//Event Bubbling
const parentEl = document.querySelector('#parent')
const childEl = document.querySelector('#child')
const grandChildEl = document.querySelector('#grandchild')

// parentEl.addEventListener('click', () => {
//   console.log("I'm the parent!")
// })
//
// childEl.addEventListener('click', () => {
//   console.log("I'm the child!")
// })
//
// grandChildEl.addEventListener('click', () => {
//   console.log("I'm the grandChild!")
// })

//WE CAN ALSO PREVENT BUBBLING WITH STOP PROPOGATION\\

parentEl.addEventListener('click', (event) => {
  event.stopPropagation()
  console.log("I'm the parent!")
})

childEl.addEventListener('click', (event) => {
  event.stopPropagation()
  console.log("I'm the child!")
})

grandChildEl.addEventListener('click', (event) => {
  event.stopPropagation()
  console.log("I'm the grandChild!")
})















// <div id="main-content">
//   <h1>Task Lister Lite™️</h1>
//
//   <form id="create-task-form" action="#" method="post">
//     <label for="new-task-description">Task description:</label>
//     <input type="text" id="new-task-description" name="new-task-description" placeholder="description">
//     <input type="submit" id="new-task-button" value="Create New Task">
//   </form>
//
//   <div id="list">
//     <h2>My Todos</h2>
//     <ul id="tasks">
//     </ul>
//   </div>
//
// </div>
