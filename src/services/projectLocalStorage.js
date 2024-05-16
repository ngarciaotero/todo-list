import projectList from "../models/projectList.js";
import project from "../models/project.js";
import todoList from "../models/todoList.js";
import todoItem from "../models/todoItem.js";
import {
  getRandomDateString,
  setRandomItemStatus,
} from "../utils/setRandomParameters.js";
import defaultProjectData from "../data/defaultProjectData.json";

const initializeDefaultProjects = () => {
  // check if there is already data stored in localStorage
  const existingProjectList = JSON.parse(localStorage.getItem("projectList"));
  const projectListInstance = existingProjectList || projectList();

  if (!existingProjectList) {
    defaultProjectData.forEach((projectData) => {
      const projectTodoList = todoList();
      projectData.todoItems.forEach((todoItemData) => {
        const newTodoItem = todoItem(
          todoItemData.title,
          todoItemData.description,
          getRandomDateString(todoItemData.daysRange),
          todoItemData.priority
        );
        setRandomItemStatus(newTodoItem);
        projectTodoList.addTodoItem(newTodoItem);
      });
      const newProject = project(
        projectData.name,
        projectData.path,
        projectTodoList
      );
      projectListInstance.addProject(newProject);
    });
    localStorage.setItem("projectList", JSON.stringify(projectListInstance));
  }
};

export default initializeDefaultProjects;
