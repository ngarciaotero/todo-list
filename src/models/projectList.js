const projectList = () => ({
  projectList: [],

  addProject(project) {
    this.projectList.push(project);
  },

  removeProject(project) {
    const index = this.projectList.indexOf(project);
    this.projectList.splice(index, 1);
  },

  getProjects() {
    return this.projectList;
  },

  totalCompletedTasksPercentage() {
    return (this.calculateCompletedTasks() / this.calculateTotalTasks()) * 100;
  },

  calculateTotalTasks() {
    let totalTasks = 0;
    this.projectList.forEach((project) => {
      const todoList = project.getTodoList();
      totalTasks += todoList.getTodoItems().length;
    });
    return totalTasks;
  },

  calculateCompletedTasks() {
    let completedTasks = 0;
    this.projectList.forEach((project) => {
      const todoList = project.getTodoList();
      completedTasks += todoList.getCompletedFilteredList().length;
    });
    return completedTasks;
  },
});

export default projectList;
