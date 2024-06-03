const clearContentTitleDisplay = () => {
  clearTitleContainer();
  clearContentContainer();
};

const clearTitleContainer = () => {
  const titleDiv = document.querySelector(".page-title");
  titleDiv.innerHTML = "";
};

const clearContentContainer = () => {
  const contentDiv = document.querySelector("#content");
  contentDiv.innerHTML = "";
};

export { clearContentTitleDisplay, clearContentContainer };
