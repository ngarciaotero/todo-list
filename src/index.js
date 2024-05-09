import "./assets/styles/main.css";
import createHomePage from "./components/homePage.js";
import createAllProjectsPage from "./components/allProjectsPage.js";
import createAchievementsPage from "./components/achievementsPage.js";

document.addEventListener("DOMContentLoaded", () => {
  createHomePage();
  const tabs = document.querySelectorAll(".tab");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const tabType = tab.textContent;
      clearDisplay();
      const pageCreator = pageCreators[tabType];
      pageCreator();
    });
  });
});

const pageCreators = {
  Home: createHomePage,
  Projects: createAllProjectsPage,
  Achievements: createAchievementsPage,
};

const clearDisplay = () => {
  const contentDiv = document.querySelector("#content");
  contentDiv.innerHTML = "";
};
