import { createProjectListFromData } from "../services/projectListFactory.js";
import { createBadge } from "./createBadge.js";

const createBadgesContainer = () => {
  const badgeContainer = document.createElement("div");
  badgeContainer.classList.add("badge-container");

  const badgeHeader = createBadgeHeader();

  const allBadgesContainer = createAllBadgesContainer();

  badgeContainer.appendChild(badgeHeader);
  badgeContainer.appendChild(allBadgesContainer);

  return badgeContainer;
};

const createBadgeHeader = () => {
  const badgeHeader = document.createElement("h4");
  badgeHeader.textContent = "Milestone Badges";
  return badgeHeader;
};

const createAllBadgesContainer = () => {
  const allBadgesContainer = document.createElement("div");
  allBadgesContainer.classList.add("all-badges");

  const badgeLevels = [20, 40, 60, 80, 100];
  const projectList = createProjectListFromData();

  badgeLevels.forEach((level) => {
    const badge = createBadge(
      projectList.totalCompletedTasksPercentage(),
      level
    );
    allBadgesContainer.appendChild(badge);
  });
  return allBadgesContainer;
};

export { createBadgesContainer };
