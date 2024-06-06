import {
  createPageHeader,
  createProjectPageHeaderImg,
} from "../ui/createTitle.js";
import { createHomePageDashboard } from "../ui/createContent.js";

const createHomePage = () => {
  const contentContainer = document.querySelector("#content");
  const titleContainer = document.querySelector(".page-title");
  const dashboardContainer = document.createElement("div");

  dashboardContainer.appendChild(createHomePageDashboard());
  titleContainer.appendChild(createPageHeader("Home"));
  titleContainer.appendChild(
    createProjectPageHeaderImg("kitten-scribbles.png")
  );
  contentContainer.appendChild(dashboardContainer);
};

export default createHomePage;
