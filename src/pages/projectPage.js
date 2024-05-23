import { clearContentTitleDisplay } from "../ui/clearDisplay.js";
import {
  createProjectPageHeader,
  createProjectPageHeaderImg,
} from "../ui/createTitle.js";
import { createProjectPageDashboard } from "../ui/createContent.js";

const createProjectPage = (project, previousPage) => {
  clearContentTitleDisplay();

  const contentContainer = document.querySelector("#content");
  const titleContainer = document.querySelector(".page-title");

  const projectName = project.getName();
  const projectPath = project.getImagePath();

  titleContainer.appendChild(createProjectPageHeader(projectName));
  titleContainer.appendChild(createProjectPageHeaderImg(projectPath));
  contentContainer.appendChild(
    createProjectPageDashboard(project, previousPage)
  );
};

export { createProjectPage };
