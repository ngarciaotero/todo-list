import { createAddProjectModal } from "../ui/createModals.js";
import { addOverlay, displayModal } from "../helpers/modalHelpers.js";

const handleAddProjectBtn = () => {
  addOverlay();
  displayModal(createAddProjectModal());
};

export { handleAddProjectBtn };
