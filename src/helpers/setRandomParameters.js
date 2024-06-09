const getRandomDateString = (daysRange) => {
  const today = new Date();
  const randomDays = Math.floor(Math.random() * daysRange + 1);
  const isFuture = getRandomBoolean();
  const multiplier = isFuture ? 1 : -1;
  const targetDate = new Date(
    today.getTime() + multiplier * randomDays * 24 * 60 * 60 * 1000
  );
  return targetDate.toISOString().split("T")[0];
};

const getRandomBoolean = () => {
  return Math.random() < 0.5;
};

const setRandomItemStatus = () => {
  const statusOptions = ["pending", "inProgress", "complete"];
  const randomIndex = Math.floor(Math.random() * statusOptions.length);
  return statusOptions[randomIndex];
};

export { getRandomDateString, setRandomItemStatus };
