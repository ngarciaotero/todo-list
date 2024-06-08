const createCircularProgressBar = (percentage, status) => {
  const progressBar = document.createElement("div");
  const className = progressBarConfig[status] || "default-bar-color";
  progressBar.classList.add(className);
  progressBar.role = "progressbar";
  progressBar.ariaValuenow = percentage;
  progressBar.ariaValuemin = "0";
  progressBar.ariaValuemax = "100";
  progressBar.style.setProperty("--value", percentage);
  progressBar.dataset.percentage = percentage.toFixed(0);

  return progressBar;
};

const progressBarConfig = {
  Completed: "completed-bar-color",
  "In Progress": "in-progress-bar-color",
  "Not Started": "not-started-bar-color",
  Overdue: "overdue-bar-color",
};

export { createCircularProgressBar };
