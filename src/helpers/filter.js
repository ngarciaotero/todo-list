export const filterByCompleted = (item) => item.completed;

export const filterByInProgress = (item) => item.inProgress;

export const filterByNotStarted = (item) => !item.inProgress && !item.completed;