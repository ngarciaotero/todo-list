import { createDueSoonTaskTable } from "./createTaskTable.js";
import { createProjectListFromData } from "../services/projectListFactory.js";

const createDueSoonContainer = () => {
  const dueSoonContainer = document.createElement("div");
  const containerHeader = document.createElement("h5");

  containerHeader.textContent = "Tasks Due Soon";
  const projectList = createProjectListFromData();
  const dueSoonTaskList = projectList.getDueSoonTasks();

  const dueSoonTaskTable = createDueSoonTaskTable(dueSoonTaskList);

  dueSoonContainer.appendChild(containerHeader);
  dueSoonContainer.appendChild(dueSoonTaskTable);
  return dueSoonContainer;
};

export { createDueSoonContainer };
