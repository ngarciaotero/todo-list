import { handleAddTaskBtn } from "../eventHandlers/handleAddTaskBtn.js";

const createAddTaskBtn = (project) => {
  const addTaskContainer = document.createElement("div");
  addTaskContainer.classList.add("add-task-container");
  const addBtn = document.createElement("button");
  addBtn.classList.add("add-task-btn");
  const addText = document.createElement("span");
  addBtn.textContent = "+";
  addText.textContent = "Add New Task";

  addBtn.addEventListener("click", () => {
    handleAddTaskBtn(project);
  });

  addTaskContainer.appendChild(addBtn);
  addTaskContainer.appendChild(addText);

  return addTaskContainer;
};
export { createAddTaskBtn };
