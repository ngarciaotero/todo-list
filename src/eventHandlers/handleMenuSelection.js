import { rearrangeTodoList } from "../helpers/rearrangeTodoList.js";
import { updateTaskTable } from "../ui/updateTaskTable.js";

const handleMenuSelection = (event, project, todoList) => {
  const selectedOption = event.target.value;
  const rearrangedTodoList = rearrangeTodoList(todoList, selectedOption);
  updateTaskTable(project, rearrangedTodoList);
};

export { handleMenuSelection };
