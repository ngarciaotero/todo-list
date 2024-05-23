const rearrangeTodoList = (originalTodoList, selectedOption) => {
  if (selectedOption === "priority") {
    return originalTodoList.getPrioritySortedList();
  } else if (selectedOption === "due-date") {
    return originalTodoList.getDueDateSortedList();
  } else if (selectedOption === "completed") {
    return originalTodoList.getCompletedFilteredList();
  } else if (selectedOption === "in-progress") {
    return originalTodoList.getInProgressFilteredList();
  } else if (selectedOption === "not-started") {
    return originalTodoList.getNotStartedFilteredList();
  }
};

export { rearrangeTodoList };
