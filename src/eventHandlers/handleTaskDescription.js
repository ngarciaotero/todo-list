import { updateTaskElement } from "../ui/updateTaskElement.js";
import { updateTodoItemStorage } from "../services/projectLocalStorage.js";

const handleTaskDescriptionBlur = (
  project,
  taskElement,
  todoItem,
  taskDescription
) => {
  const newDescription = taskDescription.textContent.trim();
  if (newDescription !== todoItem.getDescription()) {
    todoItem.updateDescription(newDescription);
    updateTodoItemStorage(project);
    updateTaskElement(project, taskElement, todoItem);
  }
};

const handleTaskDescriptionKeyDown = (event, taskDescription) => {
  if (event.key === "Enter") {
    event.preventDefault();
    taskDescription.blur();
  }
};

export { handleTaskDescriptionBlur, handleTaskDescriptionKeyDown };
