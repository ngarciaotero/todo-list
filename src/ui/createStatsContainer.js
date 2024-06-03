import { createProgressContainer } from "./createProgressContainer.js";

const createStatsContainer = (
  completedPercentage,
  inProgressPercentage,
  notStartedPercentage
) => {
  const statsContainer = document.createElement("div");
  statsContainer.classList.add("stats-container");

  statsContainer.appendChild(
    createProgressContainer(completedPercentage, "Completed")
  );
  statsContainer.appendChild(
    createProgressContainer(inProgressPercentage, "In Progress")
  );
  statsContainer.appendChild(
    createProgressContainer(notStartedPercentage, "Not Started")
  );

  return statsContainer;
};

export { createStatsContainer };
