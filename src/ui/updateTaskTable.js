import { createTaskElement } from "./createTaskElement.js";
import { renderNoTasksMessage } from "./createNoTasksMessage.js";

const updateTaskTable = (project, todoList) => {
  const taskTableContainer = document.querySelector(".tasks-table-container");
  taskTableContainer.innerHTML = "";

  if (todoList.length === 0) {
    renderNoTasksMessage(taskTableContainer);
  } else {
    todoList.forEach((todo) => {
      const todoElement = createTaskElement(project, todo);
      taskTableContainer.appendChild(todoElement);
    });
  }
};
export { updateTaskTable };
