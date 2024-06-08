const statusText = (percentage, status) => {
  const textContainer = document.createElement("div");
  const roundedPercentage = Math.round(percentage);

  if (roundedPercentage === 0) {
    textContainer.textContent = `🎉 Hooray! You have no tasks ${status}.`;
  } else if (roundedPercentage > 0 && roundedPercentage <= 20) {
    textContainer.textContent = `👌 Just ${roundedPercentage}% of your tasks are ${status}. Let's fix that!`;
  } else if (roundedPercentage > 20 && roundedPercentage <= 40) {
    textContainer.textContent = `🧐 ${roundedPercentage}% of your tasks are ${status}. A little focus and you'll clear them up!`;
  } else if (roundedPercentage > 40 && roundedPercentage <= 60) {
    textContainer.textContent = `😅 ${roundedPercentage}% of your tasks are ${status}. Time to work hard!`;
  } else if (roundedPercentage > 60 && roundedPercentage <= 80) {
    textContainer.textContent = `😟 ${roundedPercentage}% of your tasks are ${status}. Let's tackle them one by one!`;
  } else if (roundedPercentage > 80 && roundedPercentage < 100) {
    textContainer.textContent = `😰 ${roundedPercentage}% of your tasks are ${status}. Almost everything is ${status}, let's get cracking!`;
  } else if (roundedPercentage === 100) {
    textContainer.textContent = `🚨 Yikes! All your tasks are ${status}. Let's dive in and start knocking them out!`;
  }

  return textContainer;
};
export { statusText };
