import { handleAddProjectBtn } from "../eventHandlers/handleAddProjectBtn.js";

const createAddProjectBtn = () => {
  const addProjectBtn = document.createElement("button");
  const btnImage = document.createElement("img");
  addProjectBtn.classList.add("add-project-btn");
  btnImage.classList.add("add-project-btn-img");
  btnImage.src = require("../assets/images/add-project-btn-2.png");
  addProjectBtn.addEventListener("click", handleAddProjectBtn);
  addProjectBtn.appendChild(btnImage);
  return addProjectBtn;
};

export { createAddProjectBtn };
