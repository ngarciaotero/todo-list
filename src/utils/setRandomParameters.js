const getRandomDateString = (daysRange) => {
  const today = new Date();
  const randomDays = Math.floor(Math.random() * daysRange + 1);
  const futureDate = new Date(
    today.getTime() + randomDays * 24 * 60 * 60 * 1000
  );
  return futureDate.toISOString().split("T")[0];
};

const setRandomItemStatus = (todoItem) => {
  const statusOptions = [
    { action: () => {} },
    { action: todoItem.toggleInProgress.bind(todoItem) },
    { action: todoItem.toggleComplete.bind(todoItem) },
  ];
  const randomStatus = Math.floor(Math.random() * statusOptions.length);
  const { action } = statusOptions[randomStatus];

  action();

  return todoItem;
};

export { getRandomDateString, setRandomItemStatus };
