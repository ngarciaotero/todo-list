import { createOrganizeByMenu } from "./createOrganizeByMenu.js";
import { createTaskTable } from "./createTaskTable.js";
import { createAddTaskBtn } from "./createAddTaskBtn.js";

const createTodoListContainer = (project, todoList, todoItems) => {
  const todoListContainer = document.createElement("div");
  todoListContainer.classList.add("todo-list-container");

  todoListContainer.appendChild(createOrganizeByMenu(project, todoList));
  todoListContainer.appendChild(createAddTaskBtn(project));
  todoListContainer.appendChild(createTaskTable(project, todoItems));
  return todoListContainer;
};

export { createTodoListContainer };
