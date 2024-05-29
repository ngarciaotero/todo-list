import { updateTaskElement } from "../ui/updateTaskElement.js";
import { updateTodoItemStorage } from "../services/projectLocalStorage.js";

const handlePrioritySelection = (event, project, taskElement, todoItem) => {
  const selectedOption = event.target.value;
  todoItem.updatePriority(selectedOption);
  updateTodoItemStorage(project);
  updateTaskElement(project, taskElement, todoItem);
};
export { handlePrioritySelection };
