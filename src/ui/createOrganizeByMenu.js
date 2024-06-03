import { handleMenuSelection } from "../eventHandlers/handleMenuSelection.js";

const createOrganizeByMenu = (project, todoList) => {
  const organizeMenu = document.createElement("div");
  organizeMenu.classList.add("organize-menu");

  organizeMenu.appendChild(createMenuLabel());
  organizeMenu.appendChild(createMenuSelect(project, todoList));

  return organizeMenu;
};

const createMenuLabel = () => {
  const menuLabel = document.createElement("label");
  menuLabel.textContent = "Organize by";
  menuLabel.for = "organize";
  return menuLabel;
};

const createMenuSelect = (project, todoList) => {
  const customSelect = document.createElement("div");
  customSelect.classList.add("custom-select");

  const menuSelect = document.createElement("select");
  menuSelect.id = "organize";
  menuSelect.classList.add("menu-select");

  menuSelect.addEventListener("change", (event) =>
    handleMenuSelection(event, project, todoList)
  );

  menuSelect.appendChild(createSelectPromptOption());
  menuSelect.appendChild(createSortOptgroup());
  menuSelect.appendChild(createFilterOptgroup());
  customSelect.appendChild(menuSelect);
  return customSelect;
};

const createSelectPromptOption = () => {
  const selectPrompt = document.createElement("option");
  selectPrompt.value = "";
  selectPrompt.disabled = true;
  selectPrompt.selected = true;
  selectPrompt.textContent = "Select an option";
  return selectPrompt;
};

const createPriorityOption = () => {
  const priorityOption = document.createElement("option");
  priorityOption.value = "priority";
  priorityOption.textContent = "Priority";
  return priorityOption;
};

const createDueDateOption = () => {
  const dueDateOption = document.createElement("option");
  dueDateOption.value = "due-date";
  dueDateOption.textContent = "Due Date";
  return dueDateOption;
};

const createCompleteOption = () => {
  const completeOption = document.createElement("option");
  completeOption.value = "completed";
  completeOption.textContent = "Completed";
  return completeOption;
};

const createInProgressOption = () => {
  const inProgressOption = document.createElement("option");
  inProgressOption.value = "in-progress";
  inProgressOption.textContent = "In Progress";
  return inProgressOption;
};

const createNotStartedOption = () => {
  const notStartedOption = document.createElement("option");
  notStartedOption.value = "not-started";
  notStartedOption.textContent = "Not Started";
  return notStartedOption;
};

const createSortOptgroup = () => {
  const sortOptgroup = document.createElement("optgroup");
  sortOptgroup.label = "Sort";

  sortOptgroup.appendChild(createPriorityOption());
  sortOptgroup.appendChild(createDueDateOption());

  return sortOptgroup;
};

const createFilterOptgroup = () => {
  const filterOptgroup = document.createElement("optgroup");
  filterOptgroup.label = "Filter";

  filterOptgroup.appendChild(createCompleteOption());
  filterOptgroup.appendChild(createInProgressOption());
  filterOptgroup.appendChild(createNotStartedOption());

  return filterOptgroup;
};

export { createOrganizeByMenu };
