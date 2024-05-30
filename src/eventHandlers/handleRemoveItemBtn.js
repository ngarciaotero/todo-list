import { removeTodoItemFromStorage } from "../services/projectLocalStorage.js";
import { updateTaskTable } from "../ui/updateTaskTable.js";
import { updateStatsContainer } from "../ui/updateStatsContainer.js";

const handleRemoveItemBtn = (project, todoItem) => {
  const todoListItems = project.getTodoList().getTodoItems();
  const todoList = project.getTodoList();
  todoList.removeTodoItem(todoItem);
  removeTodoItemFromStorage(project, todoItem);
  updateTaskTable(project, todoListItems);
  updateStatsContainer(project);
};

export { handleRemoveItemBtn };
