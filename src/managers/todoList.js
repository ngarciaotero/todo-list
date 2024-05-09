import {
  filterByCompleted,
  filterByInProgress,
  filterByNotStarted,
} from "../utils/filter";

const todoList = () => ({
  todoList: [],
  completedPercentage: 0,
  inProgressPercentage: 0,
  notStartedPercentage: 0,

  addTodoItem(item) {
    this.todoList.push(item);
    this.calculatePercentages();
  },

  removeTodoItem(item) {
    const index = this.todoList.indexOf(item);
    this.todoList.splice(index, 1);
    this.calculatePercentages();
  },

  sortItems(sortFunction) {
    const sortedList = [...this.todoList];
    sortedList.sort(sortFunction);
    return sortedList;
  },

  filterItems(filterFunction) {
    const filteredList = this.todoList.filter(filterFunction);
    return filteredList;
  },

  getCompletedPercentage() {
    return this.completedPercentage;
  },

  getInProgressPercentage() {
    return this.inProgressPercentage;
  },

  getNotStartedPercentage() {
    return this.notStartedPercentage;
  },

  calculatePercentages() {
    const completedItems = this.filterItems(filterByCompleted);
    const inProgressItems = this.filterItems(filterByInProgress);
    const notStartedItems = this.filterItems(filterByNotStarted);

    const totalItems = this.todoList.length;
    const calculatePercent = (count) =>
      totalItems === 0 ? 0 : (count / totalItems) * 100;

    this.completedPercentage = calculatePercent(completedItems.length);
    this.inProgressPercentage = calculatePercent(inProgressItems.length);
    this.notStartedPercentage = calculatePercent(notStartedItems.length);
  },
});

export default todoList;
