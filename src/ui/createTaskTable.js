import { createTaskElement } from "./createTaskElement.js";
import { createTimeSensitiveTaskElement } from "./createDueSoonTaskElement.js";
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

const createDueSoonTaskTable = (dueSoonTaskList) => {
  const taskTableContainer = document.createElement("div");
  taskTableContainer.classList.add("due-soon-table-container");
  dueSoonTaskList.forEach(({ task, project }) => {
    const dueSoonElement = createTimeSensitiveTaskElement(
      task,
      project,
      "due-soon-list-item"
    );
    taskTableContainer.appendChild(dueSoonElement);
  });
  return taskTableContainer;
};

export { createTaskTable, createDueSoonTaskTable };
