import { updateTaskElement } from "../ui/updateTaskElement.js";
import { updateTodoItemStorage } from "../services/projectLocalStorage.js";
import {
  formatDateForInput,
  parseDateFromInput,
  dueOnMonthStringDate,
} from "../helpers/dateFormatter.js";

const showDatePicker = (project, taskElement, todoItem, dateContainer) => {
  const originalDueDate = todoItem.getDueDate();
  const dateInput = createDatePickerInput(originalDueDate);

  dateInput.addEventListener("change", () =>
    handleDueDateChange(
      project,
      taskElement,
      todoItem,
      dateInput,
      originalDueDate
    )
  );
  dateInput.addEventListener("blur", () =>
    handleDueDateBlur(
      project,
      taskElement,
      todoItem,
      originalDueDate,
      dateContainer
    )
  );

  dateContainer.replaceChildren(dateInput);
  dateInput.focus();
};

const createDatePickerInput = (originalDueDate) => {
  const dateInput = document.createElement("input");
  dateInput.type = "date";
  dateInput.value = formatDateForInput(originalDueDate, "yyyy-MM-dd");
  return dateInput;
};

const handleDueDateChange = (
  project,
  taskElement,
  todoItem,
  dateInput,
  originalDueDate
) => {
  const newDueDate = parseDateFromInput(dateInput.value);

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

const handleDueDateBlur = (
  project,
  taskElement,
  todoItem,
  originalDueDate,
  dateContainer
) => {
  const dueDateText = createDueDateText(todoItem, originalDueDate);
  dueDateText.addEventListener("click", () =>
    showDatePicker(project, taskElement, todoItem, dateContainer)
  );
  dateContainer.replaceChildren(dueDateText);
};

const createDueDateText = (todoItem, originalDueDate) => {
  const dueDateText = document.createElement("span");
  dueDateText.textContent = dueOnMonthStringDate(todoItem.getDueDate());
  return dueDateText;
};
export { showDatePicker };
