import { createStatsContainer } from "./createStatsContainer.js";

const updateStatsContainer = (project) => {
  const todoList = project.getTodoList();
  todoList.calculatePercentages();
  const completedPercentage = todoList.getCompletedPercentage();
  const inProgressPercentage = todoList.getInProgressPercentage();
  const notStartedPercentage = todoList.getNotStartedPercentage();
  const statsContainer = document.querySelector(".stats-container");
  statsContainer.replaceWith(
    createStatsContainer(
      completedPercentage,
      inProgressPercentage,
      notStartedPercentage
    )
  );
};
export { updateStatsContainer };
