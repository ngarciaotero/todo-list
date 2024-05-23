export const sortByDueDate = (a, b) => {
  return a.dueDate - b.dueDate;
};

export const sortByPriority = (a, b) => {
  return b.priority - a.priority;
};
