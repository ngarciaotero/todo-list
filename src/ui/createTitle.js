const createPageHeader = (projectName) => {
  const pageHeader = document.createElement("h1");
  pageHeader.textContent = projectName;

  return pageHeader;
};

const createProjectPageHeaderImg = (path) => {
  const cartoonImage = document.createElement("img");
  cartoonImage.classList.add("title-img");
  if (path.startsWith("data:image/")) {
    cartoonImage.src = path;
  } else {
    cartoonImage.src = require(`../assets/images/${path}`);
  }
  return cartoonImage;
};

const createAllProjectPageHeaderImg = () => {
  const cartoonImage = document.createElement("img");
  cartoonImage.classList.add("title-img");
  cartoonImage.src = require("../assets/images/kitten-in-hole.png");

  return cartoonImage;
};

export {
  createPageHeader,
  createProjectPageHeaderImg,
  createAllProjectPageHeaderImg,
};
