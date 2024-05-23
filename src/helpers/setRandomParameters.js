const getRandomDateString = (daysRange) => {
  const today = new Date();
  const randomDays = Math.floor(Math.random() * daysRange + 1);
  const futureDate = new Date(
    today.getTime() + randomDays * 24 * 60 * 60 * 1000
  );
  return futureDate.toISOString().split("T")[0];
};

const setRandomItemStatus = () => {
  const statusOptions = ["pending", "inProgress", "complete"];
  const randomIndex = Math.floor(Math.random() * statusOptions.length);
  return statusOptions[randomIndex];
};

export { getRandomDateString, setRandomItemStatus };
