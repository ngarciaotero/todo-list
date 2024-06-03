import { createAddTaskModal } from "../ui/createModals.js";
import { addOverlay, displayModal } from "../helpers/modalHelpers.js";

const handleAddTaskBtn = (project) => {
  addOverlay();
  const taskModal = createAddTaskModal(project);
  displayModal(taskModal);
};

export { handleAddTaskBtn };
