import project from "../models/project.js";
import todoList from "../models/todoList.js";
import todoItem from "../models/todoItem.js";

const createProjectFromData = (projectData) => {
  const projectTodoList = todoList();
  projectData.todoItems.forEach((todoItemData) => {
    const newTodoItem = todoItem(
      todoItemData.title,
      todoItemData.description,
      todoItemData.dueDate,
      todoItemData.priority,
      todoItemData.status
    );
    projectTodoList.addTodoItem(newTodoItem);
  });
  return project(projectData.name, projectData.path, projectTodoList);
};

const createProjectFromInput = (projectName, projectImgPath) => {
  return project(projectName, projectImgPath, todoList());
};
export { createProjectFromData, createProjectFromInput };
