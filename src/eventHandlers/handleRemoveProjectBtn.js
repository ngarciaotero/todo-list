import { updateDashboardContainer } from "../ui/updateDashboardContainer.js";
import { removeProjectFromStorage } from "../services/projectLocalStorage.js";

const handleRemoveProjectBtn = (project, projectList) => {
  projectList.removeProject(project);
  removeProjectFromStorage(project);
  updateDashboardContainer();
};

export { handleRemoveProjectBtn };
