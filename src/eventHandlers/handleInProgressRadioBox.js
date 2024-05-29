import { updateTaskElement } from "../ui/updateTaskElement.js";
import { updateTodoItemStorage } from "../services/projectLocalStorage.js";
import { updateStatsContainer } from "../ui/updateStatsContainer.js";

const handleInProgressRadioBox = (project, taskElement, todoItem) => {
  todoItem.toggleInProgress();
  todoItem.updateStatus();
  updateTodoItemStorage(project);
  updateTaskElement(project, taskElement, todoItem);
  updateStatsContainer(project);
};

export { handleInProgressRadioBox };
