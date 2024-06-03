import { createTaskElement } from "./createTaskElement.js";
import { renderNoTasksMessage } from "./createNoTasksMessage.js";

const createTaskTable = (project, todoItems) => {
  const taskTableContainer = document.createElement("div");
  taskTableContainer.classList.add("tasks-table-container");

  if (todoItems.length === 0) {
    renderNoTasksMessage(taskTableContainer);
  } else {
    todoItems.forEach((todoItem) => {
      const todoElement = createTaskElement(project, todoItem);
      taskTableContainer.appendChild(todoElement);
    });
  }

  return taskTableContainer;
};

export { createTaskTable };
