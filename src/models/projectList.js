import { differenceInDays } from "date-fns";
import { sortByDueDate } from "../helpers/sorting.js";

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

  totalNotStartedTasksPercentage() {
    return (this.calculateNotStartedTasks() / this.calculateTotalTasks()) * 100;
  },

  totalInProgressTasksPercentage() {
    return (this.calculateInProgressTasks() / this.calculateTotalTasks()) * 100;
  },

  totalOverdueTasksPercentage() {
    return (this.getOverdueTasks().length / this.calculateTotalTasks()) * 100;
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

  calculateNotStartedTasks() {
    let notStartedTasks = 0;
    this.projectList.forEach((project) => {
      const todoList = project.getTodoList();
      notStartedTasks += todoList.getNotStartedFilteredList().length;
    });
    return notStartedTasks;
  },

  calculateInProgressTasks() {
    let inProgressTasks = 0;
    this.projectList.forEach((project) => {
      const todoList = project.getTodoList();
      inProgressTasks += todoList.getInProgressFilteredList().length;
    });
    return inProgressTasks;
  },

  getTasksByDueDateCondition(condition, daysThreshold = 30) {
    const currentDate = new Date();
    const filteredTasks = [];

    this.projectList.forEach((project) => {
      const todoList = project.getTodoList();
      const notStartedTasks = todoList.getNotStartedFilteredList();
      const inProgressTasks = todoList.getInProgressFilteredList();
      const allRelevantTasks = [...notStartedTasks, ...inProgressTasks];

      const tasksMatchingCondition = allRelevantTasks.filter((task) => {
        const dueDate = task.getDueDate();
        const daysDiff = differenceInDays(dueDate, currentDate);
        return condition(daysDiff, daysThreshold);
      });

      tasksMatchingCondition.forEach((task) => {
        filteredTasks.push({ task, project });
      });
    });
    filteredTasks.sort(this.sortTasksByDueDate);
    return filteredTasks;
  },

  getDueSoonTasks(daysThreshold = 30) {
    return this.getTasksByDueDateCondition(
      (daysDiff, threshold) => daysDiff <= threshold && daysDiff >= 0,
      daysThreshold
    );
  },

  getOverdueTasks() {
    return this.getTasksByDueDateCondition((daysDiff) => daysDiff < 0);
  },

  sortTasksByDueDate(a, b) {
    return sortByDueDate(a.task, b.task);
  },
});

export default projectList;
