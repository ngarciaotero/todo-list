import {
  getRandomDateString,
  setRandomItemStatus,
} from "../helpers/setRandomParameters.js";
import defaultProjectData from "../data/defaultProjectData.json";

const convertDefaultProjectData = () => {
  return defaultProjectData.map((projectData) => {
    const todoItems = projectData.todoItems.map((todoItemData) => ({
      title: todoItemData.title,
      description: todoItemData.description,
      dueDate: getRandomDateString(todoItemData.daysRange),
      priority: todoItemData.priority,
      status: setRandomItemStatus(),
    }));
    return {
      name: projectData.name,
      path: projectData.path,
      todoItems,
    };
  });
};

const convertUserProjectData = (project) => {
  const todoItems = project
    .getTodoList()
    .getTodoItems()
    .map((todoItem) => {
      const priorityValue = todoItem.getPriorityStatus();
      const priorityString = todoItem.getPriorityStringStatus(priorityValue);

      return {
        title: todoItem.getTitle(),
        description: todoItem.getDescription(),
        dueDate: todoItem.getDueDate(),
        priority: priorityString,
        status: todoItem.getStatus(),
      };
    });

  return {
    name: project.getName(),
    path: project.getImagePath(),
    todoItems,
  };
};

const initializeDefaultProjectData = () => {
  const existingProjectData = getProjectsData();
  if (!existingProjectData) {
    const convertedData = convertDefaultProjectData();
    storeProjectsData(convertedData);
  }
};

const saveUserProjectData = (newProject) => {
  const existingProjectsData = getProjectsData();
  const newProjectData = convertUserProjectData(newProject);
  const updatedProjectsData = mergeExistingData(existingProjectsData, [
    newProjectData,
  ]);
  storeProjectsData(updatedProjectsData);
};

const mergeExistingData = (existingData, newData) => {
  return [...newData, ...existingData];
};

const storeProjectsData = (projectsData) => {
  try {
    localStorage.setItem("projectList", JSON.stringify(projectsData));
  } catch (error) {
    console.error("Error storing data in localStorage", error);
  }
};

const getProjectsData = () => {
  try {
    return JSON.parse(localStorage.getItem("projectList"));
  } catch (error) {
    console.error("Error retrieving data from localStorage:", error);
    return null;
  }
};

const updateTodoItemStorage = (updatedProject) => {
  const existingProjectsData = getProjectsData();
  const updatedProjectsData = existingProjectsData.map((projectData) => {
    if (projectData.name === updatedProject.getName()) {
      return convertUserProjectData(updatedProject);
    }
    return projectData;
  });
  storeProjectsData(updatedProjectsData);
};

const removeTodoItemFromStorage = (project, todoItem) => {
  const existingProjectsData = getProjectsData();
  const updatedProjectsData = existingProjectsData.map((projectData) => {
    if (projectData.name === project.getName()) {
      const updateTodoItems = projectData.todoItems.filter(
        (item) => item.title !== todoItem.getTitle()
      );
      return { ...projectData, todoItems: updateTodoItems };
    }
    return projectData;
  });
  storeProjectsData(updatedProjectsData);
};

export {
  initializeDefaultProjectData,
  saveUserProjectData,
  getProjectsData,
  updateTodoItemStorage,
  removeTodoItemFromStorage,
};
