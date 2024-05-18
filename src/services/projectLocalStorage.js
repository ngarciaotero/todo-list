import {
  getRandomDateString,
  setRandomItemStatus,
} from "../utils/setRandomParameters.js";
import defaultProjectData from "../data/defaultProjectData.json";

const dataToStore = defaultProjectData.map((projectData) => {
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

localStorage.setItem("projectList", JSON.stringify(dataToStore));

export default dataToStore;
