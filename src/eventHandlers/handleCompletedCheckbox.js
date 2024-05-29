import { updateTaskElement } from "../ui/updateTaskElement.js";
import { updateTodoItemStorage } from "../services/projectLocalStorage.js";
import { updateStatsContainer } from "../ui/updateStatsContainer.js";

const handleCompletedCheckbox = (project, taskElement, todoItem) => {
  todoItem.toggleComplete();
  todoItem.updateStatus();
  updateTodoItemStorage(project);
  updateTaskElement(project, taskElement, todoItem);
  updateStatsContainer(project);
};

export { handleCompletedCheckbox };
