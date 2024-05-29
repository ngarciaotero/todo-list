import { updateTaskElement } from "../ui/updateTaskElement.js";
import { updateTodoItemStorage } from "../services/projectLocalStorage.js";

const handleTaskTitleBlur = (project, taskElement, todoItem, taskTitle) => {
  const newTitle = taskTitle.textContent.trim();
  if (newTitle !== todoItem.getTitle()) {
    todoItem.updateTitle(newTitle);
    updateTodoItemStorage(project);
    updateTaskElement(project, taskElement, todoItem);
  }
};

const handleTaskTitleKeyDown = (event, taskTitle) => {
  if (event.key === "Enter") {
    event.preventDefault();
    taskTitle.blur();
  }
};

export { handleTaskTitleBlur, handleTaskTitleKeyDown };
