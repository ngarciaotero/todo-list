import { clearContentContainer } from "../ui/clearDisplay.js";
import { renderProjectList } from "../pages/allProjectsPage.js";

const updateDashboardContainer = () => {
  clearContentContainer();
  const contentContainer = document.querySelector("#content");
  const dashboardContainer = document.createElement("div");

  dashboardContainer.appendChild(renderProjectList());
  contentContainer.appendChild(dashboardContainer);
};

export { updateDashboardContainer };
