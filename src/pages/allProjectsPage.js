import { getProjectsData } from "../services/projectLocalStorage.js";
import { createProjectFromData } from "../services/projectFactory.js";
import { createProjectPage } from "./projectPage.js";
import {
  createPageHeader,
  createAllProjectPageHeaderImg,
} from "../ui/createTitle.js";
import { createAddProjectBtn } from "../ui/createAddProjectBtn.js";

const createAllProjectsPage = () => {
  const contentContainer = document.querySelector("#content");
  const titleContainer = document.querySelector(".page-title");

  const dashboardContainer = document.createElement("div");
  dashboardContainer.appendChild(renderProjectList());

  titleContainer.appendChild(createPageHeader("All Projects"));
  titleContainer.appendChild(createAllProjectPageHeaderImg());
  contentContainer.appendChild(dashboardContainer);
};

const renderProjectList = () => {
  const allProjectsContainer = document.createElement("div");
  allProjectsContainer.classList.add("dashboard-all-projects");
  allProjectsContainer.appendChild(createAddProjectBtn());

  const storedData = getProjectsData();

  if (storedData && Array.isArray(storedData)) {
    storedData.forEach((projectData) => {
      const newProject = createProjectFromData(projectData);
      const projectDisplay = createProjectDisplayBox(newProject);
      allProjectsContainer.appendChild(projectDisplay);
    });
  }
  return allProjectsContainer;
};

const createProjectDisplayBox = (project) => {
  const projectContainer = document.createElement("div");
  projectContainer.classList.add("project-box");
  const projectName = project.getName();
  const projectPath = project.getImagePath();
  const projectPercentComplete = project.getTodoList().getCompletedPercentage();

  const projectHeader = document.createElement("h5");
  const projectImage = document.createElement("img");

  projectHeader.textContent = projectName;

  if (projectPath.startsWith("data:image/")) {
    projectImage.src = projectPath;
  } else {
    projectImage.src = require(`../assets/images/${projectPath}`);
  }

  projectContainer.classList.add("project-box");
  projectImage.classList.add("project-img");

  projectContainer.appendChild(projectHeader);
  projectContainer.appendChild(projectImage);
  projectContainer.appendChild(createProgressBar(projectPercentComplete));

  projectContainer.addEventListener("click", () =>
    createProjectPage(project, createAllProjectsPage)
  );

  return projectContainer;
};

const createProgressBar = (percentCompleted) => {
  const progressBar = document.createElement("div");
  const completeBar = document.createElement("div");
  const progressBarText = document.createElement("span");

  progressBar.classList.add("progress-bar");
  completeBar.classList.add("progress-bar-completed");
  progressBarText.classList.add("progress-bar-text");

  progressBar.appendChild(completeBar);
  progressBar.appendChild(progressBarText);

  updateProgressBar(percentCompleted, progressBar);
  return progressBar;
};

const updateProgressBar = (percentCompleted, progressBar) => {
  const progressBarCompleted = progressBar.querySelector(
    ".progress-bar-completed"
  );
  const progressBarText = progressBar.querySelector(".progress-bar-text");

  if (progressBarCompleted) {
    progressBarCompleted.style.width = `${percentCompleted}%`;
    progressBarText.textContent = `${percentCompleted.toFixed(0)}% Completed`;
  }
};

export { createAllProjectsPage, renderProjectList };
