const todoItem = (
  title,
  description,
  dueDate,
  priority,
  status = "pending"
) => ({
  title,
  description,
  dueDate: new Date(dueDate),
  priority: priorityMap[priority.toLowerCase()],
  inProgress: statusMap[status].inProgress,
  completed: statusMap[status].completed,
  status,

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

  updateStatus() {
    const currentStatus = {
      inProgress: this.getInProgressStatus(),
      completed: this.getCompletedStatus(),
    };

    for (const [key, value] of Object.entries(statusMap)) {
      if (
        value.inProgress === currentStatus.inProgress &&
        value.completed === currentStatus.completed
      ) {
        this.status = key;
        return;
      }
    }
  },

  getTitle() {
    return this.title;
  },

  getDescription() {
    return this.description;
  },

  getDueDate() {
    return this.dueDate;
  },

  getPriorityStatus() {
    return this.priority;
  },

  getInProgressStatus() {
    return this.inProgress;
  },

  getCompletedStatus() {
    return this.completed;
  },

  getStatus() {
    return this.status;
  },
});

const priorityMap = {
  low: 1,
  medium: 2,
  high: 3,
};

const statusMap = {
  pending: { inProgress: false, completed: false },
  inProgress: { inProgress: true, completed: false },
  complete: { inProgress: false, completed: true },
};

export default todoItem;
