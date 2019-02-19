
document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();
  const taskForm = document.getElementById("create-task-form");
  const taskDescription = document.getElementById("new-task-description");

  const taskUl = document.getElementById("tasks");

  const renderPage = function () {
    return taskUl.innerHTML = taskList.renderTasks();
  };

  taskForm.addEventListener('submit', function(e) {
    e.preventDefault();
    taskList.createTask(taskDescription.value);
    e.target.reset();
    return renderPage();
  });

  taskUl.addEventListener('click', function(e) {
    taskList.deleteTask(e.target.getAttribute('data-contents'));
    //console.log(e.target.getAttribute('data-contents'));
    renderPage();
  });

});
