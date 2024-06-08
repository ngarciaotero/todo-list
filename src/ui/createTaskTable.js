import {
  createTaskElement,
  createTimeSensitiveTaskElement,
} from "./createTaskElement.js";
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

const createOverdueTaskTable = (overdueTaskList) => {
  const taskTableContainer = document.createElement("div");
  taskTableContainer.classList.add("overdue-table-container");
  overdueTaskList.forEach(({ task, project }) => {
    const overdueElement = createTimeSensitiveTaskElement(
      task,
      project,
      "overdue-list-item"
    );
    taskTableContainer.appendChild(overdueElement);
  });
  return taskTableContainer;
};

export { createTaskTable, createDueSoonTaskTable, createOverdueTaskTable };
