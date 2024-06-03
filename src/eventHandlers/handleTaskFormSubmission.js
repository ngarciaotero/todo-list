import { updateTodoItemStorage } from "../services/projectLocalStorage.js";
import { formatDateForInput } from "../helpers/dateFormatter.js";
import { createTodoItemFromInput } from "../services/todoItemFactory.js";
import { updateTaskTable } from "../ui/updateTaskTable.js";
import { updateStatsContainer } from "../ui/updateStatsContainer.js";
import { closeModal } from "../helpers/modalHelpers.js";

const handleTaskFormSubmission = (
  event,
  itemTitleInput,
  itemDescriptionInput,
  itemDueDateInput,
  selectedPriority,
  project
) => {
  event.preventDefault();
  const todoList = project.getTodoList();
  const todoListItems = project.getTodoList().getTodoItems();

  const title = itemTitleInput.value;
  const description = processDescription(itemDescriptionInput);
  const dueDate = processDate(itemDueDateInput);
  const priority = processPriority(selectedPriority);

  const newTodoItem = createTodoItemFromInput(
    title,
    description,
    dueDate,
    priority
  );
  todoList.addItemToFront(newTodoItem);
  updateTodoItemStorage(project);
  updateTaskTable(project, todoListItems);
  updateStatsContainer(project);
  closeModal(".add-task-modal");
};

const processDescription = (descriptionInput) => {
  if (!descriptionInput.value) {
    descriptionInput.value = " ";
  }
  return descriptionInput.value;
};

const processDate = (dateInput) => {
  if (!dateInput.value) {
    dateInput.value = formatDateForInput(new Date());
  }
  return dateInput.value;
};

const processPriority = (priorityValue) => {
  if (priorityValue === null) {
    return "Low";
  }
  return priorityValue;
};

export { handleTaskFormSubmission };
