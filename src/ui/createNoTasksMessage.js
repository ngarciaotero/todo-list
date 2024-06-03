const renderNoTasksMessage = (taskTableContainer) => {
  const noTasksMessage = document.createElement("div");
  noTasksMessage.classList.add("no-tasks-message");

  noTasksMessage.appendChild(createImgContainer());
  noTasksMessage.appendChild(createMessageText());

  taskTableContainer.appendChild(noTasksMessage);
};

const createImgContainer = () => {
  const imageContainer = document.createElement("div");
  imageContainer.classList.add("no-tasks-container");

  imageContainer.appendChild(createNoTaskImg());

  return imageContainer;
};

const createMessageText = () => {
  const messageText = document.createElement("p");
  messageText.textContent = "No tasks to do!";
  return messageText;
};

const createNoTaskImg = () => {
  const noTaskImg = document.createElement("img");
  noTaskImg.classList.add("no-tasks-img");
  noTaskImg.src = require("../assets/images/kitten-sleeping.png");
  noTaskImg.alt = "Kitten on moon";
  return noTaskImg;
};

export { renderNoTasksMessage };
