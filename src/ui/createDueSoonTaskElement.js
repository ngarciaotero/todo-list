import { dueInDaysString } from "../helpers/dateFormatter.js";
import { createProjectPage } from "../pages/projectPage.js";
import createHomePage from "../pages/homePage.js";

const createTimeSensitiveTaskElement = (task, project, className) => {
  const taskElement = document.createElement("div");
  taskElement.classList.add(className);
  const taskTitle = task.getTitle();
  const taskDueDate = task.getDueDate();

  const titleText = createTaskTitle(taskTitle);
  const dueDateText = createDueDateText(taskDueDate);
  taskElement.appendChild(titleText);
  taskElement.appendChild(dueDateText);

  taskElement.addEventListener("click", () => {
    createProjectPage(project, createHomePage);
  });
  return taskElement;
};

const createTaskTitle = (taskTitle) => {
  const titleTextContainer = document.createElement("div");
  titleTextContainer.textContent = taskTitle;
  return titleTextContainer;
};

const createDueDateText = (taskDueDate) => {
  const dateTextContainer = document.createElement("div");
  dateTextContainer.textContent = dueInDaysString(taskDueDate);
  return dateTextContainer;
};

export { createTimeSensitiveTaskElement };
