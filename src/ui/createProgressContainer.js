import { createCircularProgressBar } from "./createCircularProgressBar.js";

const createProgressContainer = (percentage, status) => {
  const progressContainer = document.createElement("div");
  const progressHeader = document.createElement("h3");

  progressContainer.classList.add("progress-container");
  progressHeader.textContent = status;

  progressContainer.appendChild(progressHeader);
  progressContainer.appendChild(createCircularProgressBar(percentage, status));

  return progressContainer;
};

export { createProgressContainer };
