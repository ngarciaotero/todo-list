const createProjectPage = (project, previousPage) => {
  clearDisplay();

  const contentContainer = document.querySelector("#content");
  const titleContainer = document.querySelector(".page-title");

  const projectName = project.getName();
  const projectPath = project.getImagePath();

  titleContainer.appendChild(createHeaderTitle(projectName));
  titleContainer.appendChild(createImgTitle(projectPath));
  contentContainer.appendChild(createProjectDashboard(project, previousPage));
};

const createHeaderTitle = (projectName) => {
  const pageHeader = document.createElement("h1");
  pageHeader.textContent = projectName;

  return pageHeader;
};

const createImgTitle = (path) => {
  const cartoonImage = document.createElement("img");
  cartoonImage.classList.add("title-img");
  if (path.startsWith("data:image/")) {
    cartoonImage.src = path;
  } else {
    cartoonImage.src = require(`../assets/images/${path}`);
  }
  return cartoonImage;
};

const createProjectDashboard = (project, previousPage) => {
  const dashboardContainer = document.createElement("div");
  dashboardContainer.classList.add("project-dashboard");

  const completedPercentage = project.getTodoList().getCompletedPercentage();
  const inProgressPercentage = project.getTodoList().getInProgressPercentage();
  const notStartedPercentage = project.getTodoList().getNotStartedPercentage();

  dashboardContainer.appendChild(createBackBtn(previousPage));
  dashboardContainer.appendChild(createBadgesContainer());
  dashboardContainer.appendChild(
    createStatsContainer(
      completedPercentage,
      inProgressPercentage,
      notStartedPercentage
    )
  );
  dashboardContainer.appendChild(createTodoListContainer());
  return dashboardContainer;
};

const createBackBtn = (previousPage) => {
  const backBtn = document.createElement("button");
  backBtn.classList.add("back-button");
  backBtn.textContent = "< Go Back";
  backBtn.addEventListener("click", () => handleBackBtn(previousPage));
  return backBtn;
};

const handleBackBtn = (previousPage) => {
  clearDisplay();
  previousPage();
};

const createBadgesContainer = () => {
  const badgeContainer = document.createElement("div");
  badgeContainer.classList.add("badge-container");
  return badgeContainer;
};

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

const createProgressContainer = (percentage, status) => {
  const progressContainer = document.createElement("div");
  progressContainer.classList.add("progress-container");
  const progressHeader = document.createElement("h4");

  progressHeader.textContent = status;

  progressContainer.appendChild(progressHeader);
  progressContainer.appendChild(createCircularProgressBar(percentage, status));

  return progressContainer;
};

const createCircularProgressBar = (percentage, status) => {
  const progressBar = document.createElement("div");
  progressBar.classList.add(
    `${status.split(" ").join("-").toLowerCase()}-bar-color`
  );
  progressBar.role = "progressbar";
  progressBar.ariaValuenow = percentage;
  progressBar.ariaValuemin = "0";
  progressBar.ariaValuemax = "100";
  progressBar.style.setProperty("--value", percentage);
  progressBar.dataset.percentage = percentage.toFixed(0);

  return progressBar;
};

const createTodoListContainer = () => {
  const todoListContainer = document.createElement("div");
  todoListContainer.classList.add("todo-list-container");
  return todoListContainer;
};

const clearDisplay = () => {
  const contentDiv = document.querySelector("#content");
  const titleDiv = document.querySelector(".page-title");
  contentDiv.innerHTML = "";
  titleDiv.innerHTML = "";
};

export { createProjectPage };
