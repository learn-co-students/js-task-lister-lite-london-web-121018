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
      <div id="task-${i}">
        ${this.tasks[i].render()}
      </div>
      `;
    };
    return toRender;
  };

  deleteTask(contents){
    let toFind = this.tasks.find(task => task.contents == contents);

    let indexToDelete = this.tasks.indexOf(toFind);


    this.tasks.splice(indexToDelete, 1);
  };


};
