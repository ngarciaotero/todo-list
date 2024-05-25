export const filterByCompleted = (item) => item.getCompletedStatus();

export const filterByInProgress = (item) => item.getInProgressStatus();

export const filterByNotStarted = (item) =>
  !item.getInProgressStatus() && !item.getCompletedStatus();
