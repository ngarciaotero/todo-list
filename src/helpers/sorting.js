export const sortByDueDate = (a, b) => {
  return a.getDueDate() - b.getDueDate();
};

export const sortByPriority = (a, b) => {
  return b.getPriorityStatus() - a.getPriorityStatus();
};
