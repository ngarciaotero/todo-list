import { createBackBtn } from "./createBackBtn.js";
import { createStatsContainer } from "./createStatsContainer.js";
import { createTodoListContainer } from "./createTodoListContainer.js";
import { createBadgesContainer } from "./createBadgesContainer.js";

const createProjectPageDashboard = (project, previousPage) => {
  const dashboardContainer = document.createElement("div");
  dashboardContainer.classList.add("project-dashboard");

  const completedPercentage = project.getTodoList().getCompletedPercentage();
  const inProgressPercentage = project.getTodoList().getInProgressPercentage();
  const notStartedPercentage = project.getTodoList().getNotStartedPercentage();
  const todoList = project.getTodoList();
  const todoItems = project.getTodoList().getTodoItems();

  dashboardContainer.appendChild(createBackBtn(previousPage));
  dashboardContainer.appendChild(
    createStatsContainer(
      completedPercentage,
      inProgressPercentage,
      notStartedPercentage
    )
  );
  dashboardContainer.appendChild(
    createTodoListContainer(project, todoList, todoItems)
  );
  return dashboardContainer;
};

const createHomePageDashboard = () => {
  const dashboardContainer = document.createElement("div");
  dashboardContainer.classList.add("home-dashboard");

  dashboardContainer.appendChild(createBadgesContainer());
  return dashboardContainer;
};

export { createProjectPageDashboard, createHomePageDashboard };
