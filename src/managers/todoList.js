const todoList = () => ({
  todoList: [],

  addTodoItem(item) {
    this.todoList.push(item);
  },

  removeTodoItem(item) {
    const index = this.todoList.indexOf(item);
    this.todoList.splice(index, 1);
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
});

export default todoList;
