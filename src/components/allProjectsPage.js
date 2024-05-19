import {
  getProjectsData,
  saveUserProjectData,
} from "../services/projectLocalStorage.js";
import {
  createProjectFromData,
  createProjectFromInput,
} from "../services/projectFactory.js";

const createAllProjectsPage = () => {
  const contentContainer = document.querySelector("#content");
  const titleContainer = document.querySelector(".page-title");

  const dashboardContainer = document.createElement("div");
  dashboardContainer.appendChild(renderProjectList());

  titleContainer.appendChild(createHeaderTitle());
  titleContainer.appendChild(createImgTitle());
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

  return projectContainer;
};

const createHeaderTitle = () => {
  const pageHeader = document.createElement("h1");
  pageHeader.textContent = "All Projects";

  return pageHeader;
};

const createImgTitle = () => {
  const cartoonImage = document.createElement("img");
  cartoonImage.classList.add("title-img");
  cartoonImage.src = require("../assets/images/kitten-in-hole.png");

  return cartoonImage;
};

const createAddProjectBtn = () => {
  const addProjectBtn = document.createElement("button");
  const btnImage = document.createElement("img");
  addProjectBtn.classList.add("add-project-btn");
  btnImage.classList.add("add-project-btn-img");
  btnImage.src = require("../assets/images/add-project-btn-2.png");
  addProjectBtn.addEventListener("click", handleAddProjectClick);
  addProjectBtn.appendChild(btnImage);
  return addProjectBtn;
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

const handleAddProjectClick = () => {
  addOverlay();
  displayAddProjectModule();
};

const displayAddProjectModule = () => {
  const contentContainer = document.querySelector("#content");
  contentContainer.appendChild(createAddProjectModule());
};

const removeAddProjectModule = () => {
  const contentContainer = document.querySelector("#content");
  const addProjectModule = document.querySelector(".add-project-module");
  if (addProjectModule) {
    contentContainer.removeChild(addProjectModule);
  }
};

const createAddProjectModule = () => {
  const newProjectModule = document.createElement("div");
  newProjectModule.classList.add("add-project-module");

  newProjectModule.appendChild(createCloseModuleBtn());
  newProjectModule.appendChild(createAddProjectModuleHeader());
  newProjectModule.appendChild(createProjectForm());

  return newProjectModule;
};

const createCloseModuleBtn = () => {
  const closeModuleBtn = document.createElement("button");
  closeModuleBtn.classList.add("close-btn");
  closeModuleBtn.innerHTML = "&times;";
  closeModuleBtn.addEventListener("click", closeModule);
  return closeModuleBtn;
};

const createProjectForm = () => {
  const projectForm = document.createElement("form");
  const submitBtn = document.createElement("button");

  projectForm.classList.add("add-project-form");
  submitBtn.classList.add("add-project-submit-btn");
  submitBtn.textContent = "Create Project";

  const { wrapper: projectNameWrapper, input: projectNameInput } =
    createFormElement("text", "projectName", "Project Name:", true);
  const { wrapper: projectImgWrapper, input: projectImgInput } =
    createFormElement("file", "projectImg", "Add Project Image:");

  projectForm.appendChild(projectNameWrapper);
  projectForm.appendChild(projectImgWrapper);
  projectForm.appendChild(submitBtn);

  projectForm.addEventListener("submit", (event) =>
    handleFormSubmission(event, projectNameInput, projectImgInput)
  );

  return projectForm;
};

const createFormElement = (type, id, labelText, isRequired = false) => {
  const wrapper = document.createElement("div");
  wrapper.classList.add("add-project-form-elements");
  const label = document.createElement("label");
  const input = document.createElement("input");

  label.for = id;
  label.textContent = labelText;
  input.type = type;
  input.id = id;
  if (isRequired) input.required = true;

  wrapper.appendChild(label);
  wrapper.appendChild(input);
  return { wrapper, input };
};

const handleFormSubmission = (event, projectNameInput, projectImgInput) => {
  event.preventDefault();

  const projectName = projectNameInput.value;
  const projectImgFile = projectImgInput.files[0];

  if (projectImgFile) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const projectImgPath = e.target.result;
      const newProject = createProjectFromInput(projectName, projectImgPath);
      saveUserProjectData(newProject);
      updateDashboardContainer();
      closeModule();
    };
    reader.readAsDataURL(projectImgFile);
  } else {
    const projectImgPath = "no-image.png";
    const newProject = createProjectFromInput(projectName, projectImgPath);
    saveUserProjectData(newProject);
    updateDashboardContainer();
    closeModule();
  }
};

const updateDashboardContainer = () => {
  const contentContainer = document.querySelector("#content");
  const dashboardContainer = document.createElement("div");
  contentContainer.innerHTML = "";

  dashboardContainer.appendChild(renderProjectList());
  contentContainer.appendChild(dashboardContainer);
};

const createAddProjectModuleHeader = () => {
  const moduleHeaderContainer = document.createElement("div");
  const header = document.createElement("h1");
  const moduleIntro = document.createElement("div");
  const moduleCartoonImage = document.createElement("img");
  const moduleText = document.createElement("p");

  moduleIntro.classList.add("module-intro");
  moduleText.classList.add("module-text");

  header.textContent = "Create A New Project";
  moduleCartoonImage.classList.add("module-img");
  moduleCartoonImage.src = require("../assets/images/playing-yarn.png");
  moduleText.textContent =
    "Hooray! You're starting a new project! Let's unravel this together, one thread at a time!";

  moduleIntro.appendChild(moduleCartoonImage);
  moduleIntro.appendChild(moduleText);

  moduleHeaderContainer.appendChild(header);
  moduleHeaderContainer.appendChild(moduleIntro);

  return moduleHeaderContainer;
};

const addOverlay = () => {
  const overlay = document.createElement("div");
  overlay.classList.add("overlay");
  document.body.appendChild(overlay);
};

const removeOverlay = () => {
  const overlay = document.querySelector(".overlay");
  if (overlay) {
    overlay.remove();
  }
};

const closeModule = () => {
  removeAddProjectModule();
  removeOverlay();
};

export default createAllProjectsPage;
