import { createProgressContainer } from "./createProgressContainer.js";
import { createProjectListFromData } from "../services/projectListFactory.js";
import { statusText } from "../helpers/setStatusText.js";

const createFocusProjectsContainer = () => {
  const projectList = createProjectListFromData();

  const notStartedPercentage = projectList.totalNotStartedTasksPercentage();
  const inProgressPercentage = projectList.totalInProgressTasksPercentage();
  const overDuePercentage = projectList.totalOverdueTasksPercentage();

  const focusContainer = createContainer("focus-stats-container");

  const focusHeader = document.createElement("h4");
  focusHeader.textContent = "Stats Zone";

  const statsContainer = createContainer("home-stats-container");

  const inProgressTasksContainer = createContainer("home-in-progress-bar");
  const notStartedTasksContainer = createContainer("home-not-started-bar");
  const overdueTasksContainer = createContainer("home-overdue-bar");

  inProgressTasksContainer.appendChild(
    createProgressContainer(inProgressPercentage, "In Progress")
  );
  inProgressTasksContainer.appendChild(
    statusText(inProgressPercentage, "in progress")
  );

  notStartedTasksContainer.appendChild(
    createProgressContainer(notStartedPercentage, "Not Started")
  );
  notStartedTasksContainer.appendChild(
    statusText(notStartedPercentage, "not started")
  );

  overdueTasksContainer.appendChild(
    createProgressContainer(overDuePercentage, "Overdue")
  );
  overdueTasksContainer.appendChild(statusText(overDuePercentage, "overdue"));

  statsContainer.appendChild(inProgressTasksContainer);
  statsContainer.appendChild(notStartedTasksContainer);
  statsContainer.appendChild(overdueTasksContainer);

  focusContainer.appendChild(focusHeader);
  focusContainer.appendChild(statsContainer);

  return focusContainer;
};

const createContainer = (className) => {
  const container = document.createElement("div");
  container.classList.add(className);
  return container;
};

export { createFocusProjectsContainer };
