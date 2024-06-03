import {
  createModalHeader,
  createCloseModalBtn,
  createModalFormElement,
} from "../helpers/modalHelpers.js";
import { handleProjectFormSubmission } from "../eventHandlers/handleProjectFormSubmission.js";
import { handleTaskFormSubmission } from "../eventHandlers/handleTaskFormSubmission.js";
import kittenOnMoon from "../assets/images/kitten-on-moon.png";
import kittenYarnPlay from "../assets/images/playing-yarn.png";

const createAddTaskModal = (project) => {
  const newTodoTaskModal = document.createElement("div");
  newTodoTaskModal.classList.add("add-task-modal");

  newTodoTaskModal.appendChild(createCloseModalBtn(".add-task-modal"));
  newTodoTaskModal.appendChild(
    createModalHeader(
      "Create A New Task",
      kittenOnMoon,
      "Great job! You're making progress with every task. Let's keep the momentum going!"
    )
  );
  newTodoTaskModal.appendChild(createTaskForm(project));

  return newTodoTaskModal;
};

const createTaskForm = (project) => {
  const itemForm = document.createElement("form");
  const submitBtn = document.createElement("button");

  itemForm.classList.add("add-task-form");
  submitBtn.classList.add("add-task-submit-btn");
  submitBtn.textContent = "Create Project";

  submitBtn.textContent = "Add Task";

  const { wrapper: itemTitleWrapper, input: itemTitleInput } =
    createModalFormElement(
      "text",
      "itemTitle",
      "Title:",
      true,
      "What will you conquer next?"
    );
  const { wrapper: itemDescriptionWrapper, input: itemDescriptionInput } =
    createModalFormElement(
      "text",
      "itemDescription",
      "Description:",
      false,
      "(Optional)"
    );
  const { wrapper: itemDateWrapper, input: itemDateInput } =
    createModalFormElement("date", "itemDate", "Due Date:", false);

  let selectedPriority = null;

  const itemPriorityWrapper = priorityWrapper((priority) => {
    selectedPriority = priority;
  });

  itemForm.addEventListener("submit", (event) =>
    handleTaskFormSubmission(
      event,
      itemTitleInput,
      itemDescriptionInput,
      itemDateInput,
      selectedPriority,
      project
    )
  );

  itemForm.appendChild(itemTitleWrapper);
  itemForm.appendChild(itemDescriptionWrapper);
  itemForm.appendChild(itemDateWrapper);
  itemForm.appendChild(itemPriorityWrapper);
  itemForm.appendChild(submitBtn);
  return itemForm;
};

const priorityWrapper = (setPriority) => {
  const buttonsContainer = document.createElement("div");
  const wrapper = document.createElement("div");
  const label = document.createElement("label");

  label.textContent = "Priority: ";

  const priorityValues = ["Low", "Medium", "High"];
  for (let priority of priorityValues) {
    const button = document.createElement("button");
    button.textContent = priority;
    button.value = priority;
    button.addEventListener("click", () => {
      setPriority(priority);
    });
    buttonsContainer.appendChild(button);
  }

  wrapper.appendChild(label);
  wrapper.appendChild(buttonsContainer);
  return wrapper;
};

const createAddProjectModal = () => {
  const newProjectModal = document.createElement("div");
  newProjectModal.classList.add("add-project-modal");

  newProjectModal.appendChild(createCloseModalBtn(".add-project-modal"));
  newProjectModal.appendChild(
    createModalHeader(
      "Create A New Project",
      kittenYarnPlay,
      "Hooray! You're starting a new project! Let's unravel this together, one thread at a time!"
    )
  );
  newProjectModal.appendChild(createProjectForm());

  return newProjectModal;
};

const createProjectForm = () => {
  const projectForm = document.createElement("form");
  const submitBtn = document.createElement("button");

  projectForm.classList.add("add-project-form");
  submitBtn.classList.add("add-project-submit-btn");
  submitBtn.textContent = "Create Project";

  const { wrapper: projectNameWrapper, input: projectNameInput } =
    createModalFormElement(
      "text",
      "projectName",
      "Project Name:",
      true,
      "Start unraveling! Enter your project name."
    );
  const { wrapper: projectImgWrapper, input: projectImgInput } =
    createModalFormElement("file", "projectImg", "Add Project Image:", false);

  projectForm.appendChild(projectNameWrapper);
  projectForm.appendChild(projectImgWrapper);
  projectForm.appendChild(submitBtn);

  projectForm.addEventListener("submit", (event) =>
    handleProjectFormSubmission(event, projectNameInput, projectImgInput)
  );

  return projectForm;
};

export { createAddTaskModal, createAddProjectModal, createProjectForm };
