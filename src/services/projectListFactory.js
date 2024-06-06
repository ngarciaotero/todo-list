import { createProjectFromData } from "./projectFactory.js";
import projectList from "../models/projectList.js";
import { getProjectsData } from "./projectLocalStorage.js";

const createProjectListFromData = () => {
  const storedData = getProjectsData();
  const projectListInstance = projectList();

  if (storedData && Array.isArray(storedData)) {
    storedData.forEach((projectData) => {
      const newProject = createProjectFromData(projectData);
      projectListInstance.addProject(newProject);
    });
  }

  return projectListInstance;
};

export { createProjectListFromData };
