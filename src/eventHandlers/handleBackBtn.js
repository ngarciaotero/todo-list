import { clearContentTitleDisplay } from "../ui/clearDisplay.js";

const handleBackBtn = (previousPage) => {
  clearContentTitleDisplay();
  previousPage();
};

export { handleBackBtn };
