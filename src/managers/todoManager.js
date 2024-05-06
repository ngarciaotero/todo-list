const createTodoItem = (title, description, dueDate, priority) => ({
  title,
  description,
  dueDate,
  priority,
  inProgress: false,
  completed: false,

  toggleComplete() {
    this.completed = !this.completed;
  },

  toggleProgress() {
    this.progress = !this.progress;
  },

  updateTitle(newTitle) {
    this.title = newTitle;
  },

  updateDescription(newDescription) {
    this.description = newDescription;
  },

  updatePriority(newPriority) {
    this.priority = newPriority;
  },

  updateDueDate(newDueDate) {
    this.dueDate = newDueDate;
  },
});

export default createTodoItem;
