import {
  createDueSoonTaskTable,
  createOverdueTaskTable,
} from "./createTaskTable.js";
import { createProjectListFromData } from "../services/projectListFactory.js";

const createDueSoonContainer = () => {
  const dueSoonContainer = document.createElement("div");
  dueSoonContainer.classList.add("due-soon-container");

  const containerHeader = document.createElement("h4");
  containerHeader.textContent = "Tasks Due Soon";
  const projectList = createProjectListFromData();
  const dueSoonTaskList = projectList.getDueSoonTasks();

  const dueSoonTaskTable = createDueSoonTaskTable(dueSoonTaskList);

  dueSoonContainer.appendChild(containerHeader);
  dueSoonContainer.appendChild(dueSoonTaskTable);
  return dueSoonContainer;
};

const createOverdueContainer = () => {
  const overdueContainer = document.createElement("div");
  overdueContainer.classList.add("overdue-container");

  const containerHeader = document.createElement("h4");
  containerHeader.textContent = "Overdue Tasks";
  const projectList = createProjectListFromData();
  const dueSoonTaskList = projectList.getOverdueTasks();

  const overdueTaskTable = createOverdueTaskTable(dueSoonTaskList);

  overdueContainer.appendChild(containerHeader);
  overdueContainer.appendChild(overdueTaskTable);
  return overdueContainer;
};

export { createDueSoonContainer, createOverdueContainer };
