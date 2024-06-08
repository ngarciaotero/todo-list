import { handleCompletedCheckbox } from "../eventHandlers/handleCompletedCheckbox.js";
import { handleInProgressRadioBox } from "../eventHandlers/handleInProgressRadioBox.js";
import { handlePrioritySelection } from "../eventHandlers/handlePrioritySelection.js";
import {
  handleTaskTitleBlur,
  handleTaskTitleKeyDown,
} from "../eventHandlers/handleTaskTitle.js";
import {
  handleTaskDescriptionBlur,
  handleTaskDescriptionKeyDown,
} from "../eventHandlers/handleTaskDescription.js";
import { showDatePicker } from "../eventHandlers/handleDueDateChange.js";
import { dueOnMonthStringDate } from "../helpers/dateFormatter.js";
import {
  createRemoveItemBtn,
  displayRemoveBtn,
  hideRemoveBtn,
} from "./createRemoveBtn.js";
import { dueInDaysString } from "../helpers/dateFormatter.js";
import { createProjectPage } from "../pages/projectPage.js";
import createHomePage from "../pages/homePage.js";

const createTaskElement = (project, todoItem) => {
  const taskElement = document.createElement("div");
  taskElement.classList.add("todo-list-item");

  taskElement.appendChild(
    createCompletedCheckbox(project, taskElement, todoItem)
  );
  taskElement.appendChild(
    createTaskInfoContainer(project, taskElement, todoItem)
  );
  taskElement.appendChild(createDueDateText(project, taskElement, todoItem));
  taskElement.appendChild(createPrioritySelect(project, taskElement, todoItem));
  taskElement.appendChild(
    createInProgressRadioBox(project, taskElement, todoItem)
  );
  taskElement.appendChild(createRemoveItemBtn(project, todoItem));

  taskElement.addEventListener("mouseover", () => {
    displayRemoveBtn(taskElement);
  });

  taskElement.addEventListener("mouseout", () => {
    hideRemoveBtn(taskElement);
  });

  return taskElement;
};

const createTaskInfoContainer = (project, taskElement, todoItem) => {
  const taskInfoContainer = document.createElement("div");
  taskInfoContainer.classList.add("task-info-container");
  taskInfoContainer.appendChild(
    createTaskTitle(project, taskElement, todoItem)
  );
  taskInfoContainer.appendChild(
    createTaskDescription(project, taskElement, todoItem)
  );

  return taskInfoContainer;
};

const createCompletedCheckbox = (project, taskElement, todoItem) => {
  const label = document.createElement("label");
  label.classList.add("custom-checkbox");

  const completedCheckbox = document.createElement("input");
  completedCheckbox.type = "checkbox";
  completedCheckbox.checked = todoItem.getCompletedStatus();

  applyCompletedClass(taskElement, todoItem);

  completedCheckbox.addEventListener("click", () => {
    handleCompletedCheckbox(project, taskElement, todoItem);
  });

  const span = document.createElement("span");
  span.classList.add("checkmark");

  label.appendChild(completedCheckbox);
  label.appendChild(span);

  return label;
};

const applyCompletedClass = (taskElement, todoItem) => {
  if (todoItem.getCompletedStatus()) {
    taskElement.classList.add("completed-checked");
  } else {
    taskElement.classList.remove("completed-checked");
  }
};

const createTaskTitle = (project, taskElement, todoItem) => {
  const taskTitle = document.createElement("h4");
  taskTitle.classList.add("task-title");
  taskTitle.textContent = todoItem.getTitle();
  taskTitle.contentEditable = true;
  taskTitle.addEventListener("blur", () =>
    handleTaskTitleBlur(project, taskElement, todoItem, taskTitle)
  );
  taskTitle.addEventListener("keydown", (event) =>
    handleTaskTitleKeyDown(event, taskTitle)
  );

  taskTitle.addEventListener("click", () => {
    taskTitle.classList.toggle("expanded");
  });

  return taskTitle;
};

const createTaskDescription = (project, taskElement, todoItem) => {
  const taskDescription = document.createElement("div");
  taskDescription.classList.add("task-description");
  taskDescription.textContent = todoItem.getDescription();
  taskDescription.contentEditable = true;
  taskDescription.addEventListener("blur", () =>
    handleTaskDescriptionBlur(project, taskElement, todoItem, taskDescription)
  );

  taskDescription.addEventListener("keydown", (event) =>
    handleTaskDescriptionKeyDown(event, taskDescription)
  );

  taskDescription.addEventListener("click", () => {
    taskDescription.classList.toggle("expanded");
  });

  return taskDescription;
};

const createDueDateText = (project, taskElement, todoItem) => {
  const dateContainer = document.createElement("div");
  const dueDateText = document.createElement("span");

  dateContainer.classList.add("due-date-container");
  dueDateText.textContent = dueOnMonthStringDate(todoItem.getDueDate());

  dueDateText.addEventListener("click", () =>
    showDatePicker(project, taskElement, todoItem, dateContainer)
  );
  dateContainer.appendChild(dueDateText);
  return dateContainer;
};

const createInProgressRadioBox = (project, taskElement, todoItem) => {
  const inProgressWrapper = document.createElement("div");
  inProgressWrapper.classList.add("in-progress-radio-container");

  const label = document.createElement("label");
  label.classList.add("custom-radio-box");

  const inProgressRadioBox = document.createElement("input");
  inProgressRadioBox.type = "radio";
  inProgressRadioBox.checked = todoItem.getInProgressStatus();

  applyInProgressClass(taskElement, todoItem);

  const inProgressText = document.createElement("span");
  inProgressText.textContent = "In Progress";
  inProgressText.classList.add("in-progress-text");

  updateInProgressText(inProgressRadioBox.checked, inProgressText);

  const span = document.createElement("span");
  span.classList.add("checkdot");

  inProgressRadioBox.addEventListener("click", () => {
    handleInProgressRadioBox(project, taskElement, todoItem);
    updateInProgressText(inProgressRadioBox.checked, inProgressText);
  });

  label.appendChild(inProgressRadioBox);
  label.appendChild(span);

  inProgressWrapper.appendChild(label);
  inProgressWrapper.appendChild(inProgressText);

  return inProgressWrapper;
};

const applyInProgressClass = (taskElement, todoItem) => {
  if (todoItem.getInProgressStatus()) {
    taskElement.classList.add("in-progress-checked");
  } else {
    taskElement.classList.remove("in-progress-checked");
  }
};

const updateInProgressText = (boxCheckedStatus, inProgressText) => {
  if (boxCheckedStatus) {
    inProgressText.style.display = "inline";
  } else {
    inProgressText.style.display = "none";
  }
};

const createPrioritySelect = (project, taskElement, todoItem) => {
  const itemPriorityWrapper = document.createElement("div");
  const prioritySelect = document.createElement("select");

  itemPriorityWrapper.classList.add("priority-container");
  prioritySelect.classList.add("priority-select");

  const priorityValue = todoItem.getPriorityStatus();
  const selectedString = todoItem.getPriorityStringStatus(priorityValue);
  applyPriorityClass(taskElement, todoItem);

  prioritySelect.addEventListener("change", (event) =>
    handlePrioritySelection(event, project, taskElement, todoItem)
  );

  prioritySelect.appendChild(createLowOption(selectedString));
  prioritySelect.appendChild(createMediumOption(selectedString));
  prioritySelect.appendChild(createHighOption(selectedString));
  itemPriorityWrapper.appendChild(prioritySelect);

  return itemPriorityWrapper;
};

const applySelected = (selectedString, lowOption) => {
  return selectedString === lowOption;
};

const createLowOption = (selectedString) => {
  const lowOption = document.createElement("option");
  lowOption.textContent = "Low";
  const optionString = lowOption.textContent.toLowerCase();
  lowOption.selected = applySelected(selectedString, optionString);
  return lowOption;
};

const createMediumOption = (selectedString) => {
  const mediumOption = document.createElement("option");
  mediumOption.textContent = "Medium";
  const optionString = mediumOption.textContent.toLowerCase();
  mediumOption.selected = applySelected(selectedString, optionString);
  return mediumOption;
};

const createHighOption = (selectedString) => {
  const highOption = document.createElement("option");
  highOption.textContent = "High";
  const optionString = highOption.textContent.toLowerCase();
  highOption.selected = applySelected(selectedString, optionString);
  return highOption;
};

const applyPriorityClass = (taskElement, todoItem) => {
  taskElement.classList.add(`priority-${todoItem.getPriorityStatus()}`);
};

const createTimeSensitiveTaskElement = (task, project, className) => {
  const taskElement = document.createElement("div");
  applyPriorityClass(taskElement, task);
  taskElement.classList.add(className);
  const taskTitle = task.getTitle();
  const taskDueDate = task.getDueDate();

  const titleText = createSensitiveTaskTitle(taskTitle);
  const dueDateText = createSensitiveDueDateText(taskDueDate);
  taskElement.appendChild(titleText);
  taskElement.appendChild(dueDateText);

  taskElement.addEventListener("click", () => {
    createProjectPage(project, createHomePage);
  });
  return taskElement;
};

const createSensitiveTaskTitle = (taskTitle) => {
  const titleTextContainer = document.createElement("div");
  titleTextContainer.textContent = taskTitle;
  return titleTextContainer;
};

const createSensitiveDueDateText = (taskDueDate) => {
  const dateTextContainer = document.createElement("div");
  dateTextContainer.textContent = dueInDaysString(taskDueDate);
  return dateTextContainer;
};

export { createTaskElement, createTimeSensitiveTaskElement };
