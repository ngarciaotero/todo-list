import todoItem from "../models/todoItem.js";

const createTodoItemFromInput = (title, description, dueDate, priority) => {
  return todoItem(title, description, dueDate, priority);
};

export { createTodoItemFromInput };
