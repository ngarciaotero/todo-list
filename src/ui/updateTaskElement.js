import { createTaskElement } from "./createTaskElement.js";

const updateTaskElement = (project, taskElement, todoItem) => {
  const newTaskElement = createTaskElement(project, todoItem);
  taskElement.parentNode.replaceChild(newTaskElement, taskElement);
};

export { updateTaskElement };
