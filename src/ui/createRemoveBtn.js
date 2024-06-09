import { handleRemoveItemBtn } from "../eventHandlers/handleRemoveItemBtn.js";
import { handleRemoveProjectBtn } from "../eventHandlers/handleRemoveProjectBtn.js";

const createRemoveItemBtn = (project, todoItem) => {
  const removeBtn = document.createElement("button");
  removeBtn.style.display = "none";
  removeBtn.textContent = "x";
  removeBtn.classList.add("remove-item-btn");
  removeBtn.addEventListener("click", () => {
    handleRemoveItemBtn(project, todoItem);
  });

  return removeBtn;
};

const displayRemoveBtn = (taskElement, className) => {
  const removeBtn = taskElement.querySelector(`.${className}`);
  removeBtn.style.display = "block";
};

const hideRemoveBtn = (taskElement, className) => {
  const removeBtn = taskElement.querySelector(`.${className}`);
  removeBtn.style.display = "none";
};

const createRemoveProjectBtn = (project, projectList) => {
  const removeBtn = document.createElement("button");
  removeBtn.style.display = "none";
  removeBtn.textContent = "x";
  removeBtn.classList.add("remove-project-btn");
  removeBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    handleRemoveProjectBtn(project, projectList);
  });

  return removeBtn;
};

export {
  createRemoveItemBtn,
  createRemoveProjectBtn,
  displayRemoveBtn,
  hideRemoveBtn,
};
