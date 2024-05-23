import "./assets/styles/main.css";
import createHomePage from "./pages/homePage.js";
import createAllProjectsPage from "./pages/allProjectsPage.js";
import { initializeDefaultProjectData } from "./services/projectLocalStorage.js";

initializeDefaultProjectData();

document.addEventListener("DOMContentLoaded", () => {
  createHomePage();
  const tabs = document.querySelectorAll(".tab");
  let activeTab = tabs[0];
  activeTab.classList.add("active");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      activeTab.classList.remove("active");
      tab.classList.add("active");
      activeTab = tab;
      clearDisplay();
      const tabType = tab.textContent.trim().replace(/\s+/g, "");
      const pageCreator = pageCreators[tabType];
      pageCreator();
    });
  });
});

const pageCreators = {
  Home: createHomePage,
  Projects: createAllProjectsPage,
};
