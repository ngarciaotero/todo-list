const todoItem = (title, description, dueDate, priority) => ({
  title,
  description,
  dueDate: new Date(dueDate),
  priority: priorityMap[priority.toLowerCase()],
  inProgress: false,
  completed: false,

  toggleComplete() {
    if (this.inProgress) {
      this.inProgress = false;
      this.completed = true;
    } else {
      this.completed = !this.completed;
    }
  },

  toggleInProgress() {
    if (this.completed) {
      this.completed = false;
      this.inProgress = true;
    } else {
      this.inProgress = !this.inProgress;
    }
  },

  updateTitle(newTitle) {
    this.title = newTitle;
  },

  updateDescription(newDescription) {
    this.description = newDescription;
  },

  updatePriority(newPriority) {
    this.priority = priorityMap[newPriority.toLowerCase()];
  },

  updateDueDate(newDueDate) {
    this.dueDate = newDueDate;
  },
});

const priorityMap = {
  low: 1,
  medium: 2,
  high: 3,
};

export default todoItem;
