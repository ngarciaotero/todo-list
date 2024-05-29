import { updateTaskElement } from "../ui/updateTaskElement.js";
import { updateTodoItemStorage } from "../services/projectLocalStorage.js";
import {
  formatDateForInput,
  parseDateFromInput,
  dueOnMonthStringDate,
} from "../helpers/dateFormatter.js";

const showDatePicker = (project, taskElement, todoItem, dateContainer) => {
  const dateInput = createDatePickerInput(todoItem.getDueDate());

  dateInput.addEventListener("change", () =>
    handleDueDateChange(project, taskElement, todoItem, dateInput)
  );
  dateInput.addEventListener("blur", () =>
    handleDueDateBlur(project, taskElement, todoItem, dateContainer)
  );

  dateContainer.replaceChildren(dateInput);
  dateInput.focus();
};

const createDatePickerInput = (dueDate) => {
  const dateInput = document.createElement("input");
  dateInput.type = "date";
  dateInput.value = formatDateForInput(dueDate, "yyyy-MM-dd");
  return dateInput;
};

const handleDueDateChange = (project, taskElement, todoItem, dateInput) => {
  const newDueDate = parseDateFromInput(dateInput.value);
  const originalDueDate = todoItem.getDueDate();

  if (
    !isNaN(newDueDate.getTime()) &&
    newDueDate.getTime() !== originalDueDate.getTime()
  ) {
    todoItem.updateDueDate(newDueDate);
    updateTodoItemStorage(project);
    updateTaskElement(project, taskElement, todoItem);
  } else {
    console.error("Invalid date format");
  }
};

const handleDueDateBlur = (project, taskElement, todoItem, dateContainer) => {
  const dueDateText = createDueDateText(todoItem);
  dueDateText.addEventListener("click", () =>
    showDatePicker(project, taskElement, todoItem, dateContainer)
  );
  dateContainer.replaceChildren(dueDateText);
};

const createDueDateText = (todoItem) => {
  const dueDateText = document.createElement("span");
  dueDateText.textContent = dueOnMonthStringDate(todoItem.getDueDate());
  return dueDateText;
};
export { showDatePicker };
