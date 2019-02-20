class TaskList {

  constructor() {
    this.tasks = [];
  };

  createTask(contents) {
    const newTask = new Task(contents);
    this.tasks.push(newTask);
  };

  renderTasks() {
    let toRender = ""
    for(let i = 0; i < this.tasks.length; i++){
      toRender += `
      <li id="${i}">
        ${this.tasks[i].render()}
        <button>
          X
        </button>
      </li>

      `;
    };
    return toRender;
  };

  deleteTask(taskIndex){
    this.tasks.splice(taskIndex, 1);
  };


};
