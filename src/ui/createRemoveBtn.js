import { handleRemoveItemBtn } from "../eventHandlers/handleRemoveItemBtn.js";

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

const displayRemoveBtn = (taskElement) => {
  const removeBtn = taskElement.querySelector(".remove-item-btn");
  removeBtn.style.display = "block";
};

const hideRemoveBtn = (taskElement) => {
  const removeBtn = taskElement.querySelector(".remove-item-btn");
  removeBtn.style.display = "none";
};

const createRemoveProjectBtn = () => {};

export {
  createRemoveItemBtn,
  createRemoveProjectBtn,
  displayRemoveBtn,
  hideRemoveBtn,
};
