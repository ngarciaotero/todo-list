import { handleBackBtn } from "../eventHandlers/handleBackBtn.js";

const createBackBtn = (previousPage) => {
  const backBtn = document.createElement("button");
  backBtn.classList.add("back-button");
  backBtn.textContent = "< Go Back";
  backBtn.addEventListener("click", () => handleBackBtn(previousPage));
  return backBtn;
};

export { createBackBtn };
