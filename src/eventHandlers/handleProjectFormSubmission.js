import { createProjectFromInput } from "../services/projectFactory.js";
import { saveUserProjectData } from "../services/projectLocalStorage.js";
import { updateDashboardContainer } from "../ui/updateDashboardContainer.js";
import { closeModal } from "../helpers/modalHelpers.js";

const handleProjectFormSubmission = (
  event,
  projectNameInput,
  projectImgInput
) => {
  event.preventDefault();

  const projectName = projectNameInput.value;
  const projectImgFile = projectImgInput.files[0];

  if (projectImgFile) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const projectImgPath = e.target.result;
      const newProject = createProjectFromInput(projectName, projectImgPath);
      saveUserProjectData(newProject);
      updateDashboardContainer();
      closeModal(".add-project-modal");
    };
    reader.readAsDataURL(projectImgFile);
  } else {
    const projectImgPath = "no-image.png";
    const newProject = createProjectFromInput(projectName, projectImgPath);
    saveUserProjectData(newProject);
    updateDashboardContainer();
    closeModal(".add-project-modal");
  }
};

export { handleProjectFormSubmission };
