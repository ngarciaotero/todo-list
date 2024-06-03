import {
  filterByCompleted,
  filterByInProgress,
  filterByNotStarted,
} from "../helpers/filter.js";

import { sortByDueDate, sortByPriority } from "../helpers/sorting.js";

const todoList = () => ({
  todoList: [],
  completedPercentage: 0,
  inProgressPercentage: 0,
  notStartedPercentage: 0,

  addTodoItem(item) {
    this.todoList.push(item);
    this.calculatePercentages();
  },

  addItemToFront(item) {
    this.todoList.unshift(item);
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

  getTodoItems() {
    return this.todoList;
  },

  getDueDateSortedList() {
    return this.sortItems(sortByDueDate);
  },

  getPrioritySortedList() {
    return this.sortItems(sortByPriority);
  },

  getCompletedFilteredList() {
    return this.filterItems(filterByCompleted);
  },

  getInProgressFilteredList() {
    return this.filterItems(filterByInProgress);
  },

  getNotStartedFilteredList() {
    return this.filterItems(filterByNotStarted);
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
