/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/styles/main.css":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/styles/main.css ***!
  \**************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../src/assets/images/ball.png */ "./src/assets/images/ball.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../src/assets/images/home-white.png */ "./src/assets/images/home-white.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../../src/assets/images/projects-white.png */ "./src/assets/images/projects-white.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../../../src/assets/images/home-blue.png */ "./src/assets/images/home-blue.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../../../src/assets/images/projects-blue.png */ "./src/assets/images/projects-blue.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml;utf8,<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="%233f72af" d="M7 10l5 5 5-5z"/></svg> */ "data:image/svg+xml;utf8,<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"%233f72af\" d=\"M7 10l5 5 5-5z\"/></svg>"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../../../src/assets/images/lock.png */ "./src/assets/images/lock.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Grandstander:ital,wght@0,100..900;1,100..900&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --dark-blue: rgb(17, 45, 78);
  --mid-blue: rgb(63, 114, 175);
  --light-blue: rgb(219, 226, 239);
  --cream: rgb(252, 248, 236);
  --green: rgb(76, 175, 80);
}

body {
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-template-rows: 120px 1fr;
  grid-template-areas: "sidebar title" "sidebar content";
  margin: 10px 10px;
  height: calc(100vh - (10px + 10px));
  font-family: "Grandstander", Arial, Helvetica, sans-serif;
}

.sidebar {
  grid-area: sidebar;
  display: grid;
  grid-template-rows: 100px 1fr;
  background-color: var(--dark-blue);
  color: var(--cream);
  overflow: auto;
  border-radius: 30px 1px 1px 30px;
  padding: 20px 0 0 15px;
}

#content {
  grid-area: content;
  box-shadow: inset 0 10px 20px rgba(0, 0, 0, 0.257);
  border-bottom-right-radius: 30px;
  background-color: var(--cream);
}

.page-title {
  display: flex;
  grid-area: title;
  background-color: whitesmoke;
  padding: 30px;
  color: var(--dark-blue);
  justify-content: space-between;
  border-top-right-radius: 30px;
  box-shadow: inset 10px 1px 20px rgba(0, 0, 0, 0.257);
}

.tab {
  display: flex;
  cursor: pointer;
  padding: 16px;
  list-style-type: none;
  border-radius: 50px 1px 1px 50px;
  align-items: center;
  gap: 20px;
}

.tab:hover:not(.active) {
  background-color: var(--light-blue);
  color: var(--dark-blue);
}

.active {
  background-color: var(--cream);
  color: var(--dark-blue);
}

.sidebar ul {
  padding: 0;
}

.logo-img {
  content: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  width: 100px;
  height: 100px;
}

.logo {
  display: flex;
  padding: 20px;
  gap: 20px;
  align-items: center;
}

.home-icon {
  content: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  width: 10%;
}

.projects-icon {
  content: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
  width: 10%;
}

.active .home-icon,
.tab:hover .home-icon {
  content: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
}

.active .projects-icon,
.tab:hover .projects-icon {
  content: url(${___CSS_LOADER_URL_REPLACEMENT_4___});
}

.title-img {
  height: 80px;
}

.dashboard-all-projects {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 50px;
  overflow-x: hidden;
  overflow-y: auto;
  max-height: calc(715px - (35px + 40px));
  margin: 30px 30px 0px 30px;
  padding: 25px 25px 20px 25px;
}

.project-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 20px;
  border: 6px dashed var(--light-blue);
  box-shadow: 0px 10px 10px var(--light-blue);
  background-color: whitesmoke;
  color: var(--dark-blue);
  transition: transform 0.3s ease;
}

.project-box:hover {
  cursor: pointer;
  transform: scale(1.05);
  box-shadow: 0px 10px 10px var(--dark-blue);
}

.project-img {
  width: 80px;
  height: 80px;
}

.add-project-btn-img {
  width: 100px;
  height: 100px;
}

.add-project-btn {
  border: 0;
  background: none;
  transition: transform 0.3s ease;
}

.add-project-btn:hover {
  transform: scale(1.2);
}

.progress-bar {
  width: 90%;
  height: 20px;
  background-color: #ddd;
  position: relative;
  border-radius: 40px;
  margin: 20px 0;
}

.progress-bar-completed {
  height: 100%;
  background-color: var(--green);
  text-align: center;
  border-radius: 40px;
}

.progress-bar-text {
  position: absolute;
  left: 20%;
  transform: translateY(-100%);
  color: rgb(255, 255, 255);
}

.add-project-modal,
.add-task-modal,
.attribution-modal {
  display: flex;
  flex-direction: column;
  color: var(--dark-blue);
  padding: 10px 30px 20px 30px;
  background-color: var(--light-blue);
  border: 8px dashed whitesmoke;
  z-index: 2;
  position: fixed;
  max-width: 30%;
  min-width: 30%;
  top: 20%;
  left: 45%;
}

.add-project-form-elements {
  display: flex;
  flex-direction: column;
}

.close-btn {
  border-radius: 60px;
  border: none;
  padding: 6px 10px 1px 10px;
  font-size: 30px;
  background-color: rgba(255, 0, 0, 0.246);
  color: grey;
  align-self: flex-end;
}

.close-btn:hover {
  background-color: rgba(255, 0, 0, 0.649);
  color: white;
}

.modal-img {
  height: 130px;
}

.modal-intro {
  display: flex;
}

.modal-text {
  color: grey;
  border: 5px dotted rgb(236, 236, 236);
  border-radius: 10px;
  background-color: rgb(255, 247, 237);
  padding: 10px;
  align-self: center;
}

.add-project-form,
.add-task-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.add-project-form input[type="text"],
.add-task-form input[type="text"] {
  padding: 10px;
  font-size: 20px;
  border: 3px dotted var(--light-blue);
  border-bottom: 5px solid var(--dark-blue);
}

.add-project-submit-btn,
.add-task-submit-btn {
  font-weight: 600;
  border: 3px dotted rgb(205, 205, 205);
  box-shadow: inset 0 10px 15px rgba(0, 0, 0, 0.575);
  color: rgb(227, 227, 227);
  background-color: #3a3a3a5b;
  align-self: center;
  padding: 25px 15px;
  width: min-content;
  border-radius: 50px;
}

.add-project-submit-btn:hover,
.add-task-submit-btn:hover {
  border-color: rgb(203, 239, 185);
  background-color: #72c074cf;
  color: var(--cream);
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.843);
  z-index: 1;
}

button,
input[type="file"] {
  cursor: pointer;
}

button,
input[type="file"],
input[type="text"] {
  font-family: "Grandstander", Arial, Helvetica, sans-serif;
}

.project-dashboard {
  display: grid;
  margin: 25px;
  grid-template-columns: minmax(min-content, max-content) minmax(
      min-content,
      max-content
    );
  grid-template-rows: minmax(min-content, max-content) 1fr;
  grid-template-areas: "back-button todo-list" "stats todo-list";
  gap: 30px;
}

.back-button {
  grid-area: back-button;
  font-size: 19px;
  color: var(--mid-blue);
  padding: 7px;
  border-radius: 10px;
  border: 2px solid var(--light-blue);
  box-shadow: 0px 5px 5px rgb(193, 193, 193);
  align-self: flex-start;
}

.back-button:hover {
  color: var(--mid-blue);
  background-color: var(--light-blue);
}

.stats-container {
  grid-area: stats;
  color: var(--mid-blue);
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 10px;
  border: 3px solid var(--light-blue);
  padding: 5px;
  gap: 50px;
  width: min-content;
  height: min-content;
  align-self: center;
  justify-content: center;
  box-shadow: 0px 5px 5px rgb(193, 193, 193);
}

.todo-list-container {
  grid-area: todo-list;
}

.progress-container {
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
}

@keyframes progress {
  0% {
    --percentage: 0;
  }
  100% {
    --percentage: var(--value);
  }
}

@property --percentage {
  syntax: "<number>";
  inherits: true;
  initial-value: 0;
}

[role="progressbar"] {
  --percentage: var(--value);
  --secondary: rgba(214, 214, 214, 0.567);
  --size: 150px;
  animation: progress 2s 0.5s forwards;
  width: var(--size);
  aspect-ratio: 2 / 1;
  border-radius: 50% / 100% 100% 0 0;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

[role="progressbar"].completed-bar-color {
  --primary: var(--green);
  color: var(--green);
}

[role="progressbar"].in-progress-bar-color {
  --primary: rgb(0, 113, 206);
  color: rgb(0, 113, 206);
}

[role="progressbar"].not-started-bar-color {
  --primary: grey;
  color: grey;
}

[role="progressbar"].overdue-bar-color {
  --primary: rgb(255, 86, 86);
  color: rgb(250, 109, 109);
}

.default-bar-color {
  --primary: black;
}

[role="progressbar"]::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: conic-gradient(
    from 0.75turn at 50% 100%,
    var(--primary) calc(var(--percentage) * 1% / 2),
    var(--secondary) calc(var(--percentage) * 1% / 2 + 0.9%)
  );
  mask: radial-gradient(at 50% 100%, white 55%, transparent 55.5%);
  -webkit-mask: radial-gradient(at 50% 100%, #0000 60%, #000 75%);
}

[role="progressbar"]::after {
  counter-reset: percentage var(--value);
  content: attr(data-percentage) "%";
  font-size: calc(var(--size) / 5);
}

.todo-list-container {
  background-color: #ffffff;
  box-shadow: 0px 5px 5px rgb(193, 193, 193);
  display: flex;
  flex-direction: column;
  padding: 10px 25px 5px 25px;
  border-radius: 10px;
  border: 3px solid var(--light-blue);
  align-self: flex-start;
  color: var(--mid-blue);
}

.organize-menu {
  display: flex;
  align-self: flex-end;
  align-items: center;
  gap: 10px;
  font-weight: 500;
  font-size: 18px;
}

.custom-select {
  position: relative;
  width: 180px;
}

.menu-select,
.priority-select {
  width: 100%;
  padding: 10px 30px 10px 15px;
  border: 2px solid var(--light-blue);
  border-radius: 4px;
  font-size: 15px;
  appearance: none;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_5___});
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 30px;
  cursor: pointer;
  color: var(--mid-blue);
  font-family: "Grandstander", Arial, Helvetica, sans-serif;
}

.menu-select:hover,
.menu-select:focus {
  outline: none;
  background-color: var(--light-blue);
}

.tasks-table-container {
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  overflow-x: hidden;
  overflow-y: auto;
  max-height: calc(560px - (45px));
  min-height: calc(560px - (45px));
  max-width: calc(900px - (10px));
  min-width: calc(900px - (10px));
}

.todo-list-item {
  display: flex;
  border-radius: 10px;
  box-shadow: 0px 5px 2px rgb(127, 127, 127);
  margin: 0 10px 10px 10px;
  padding: 10px;
  background-color: #ffffff;
  gap: 15px;
  align-items: center;
  position: relative;
  flex-wrap: wrap;
}

.custom-checkbox {
  flex-basis: 40px;
}

.task-info-container {
  flex-basis: 350px;
  overflow: hidden;
}

.due-date-container {
  flex-basis: 220px;
  align-items: center;
  justify-items: center;
}

.in-progress-radio-container {
  flex-basis: 60px;
  padding-top: 25px;
  display: flex;
  flex-direction: column;
  align-self: flex-start;
}

.priority-container {
  flex-basis: 110px;
  position: relative;
  width: 180px;
}

.remove-item-btn,
.remove-project-btn {
  position: absolute;
  top: -5px;
  right: -5px;
  display: none;
  border-radius: 50px;
  border: none;
  padding: 4px 7px 4px 7px;
  font-size: 18px;
  font-weight: 700;
  background-color: rgba(255, 0, 0, 0.246);
  color: grey;
}

.remove-item-btn:hover,
.remove-project-btn:hover {
  background-color: rgba(255, 0, 0, 0.649);
  color: white;
}

.task-title,
.task-description {
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}

.task-title.expanded,
.task-description.expanded {
  white-space: normal;
  overflow: visible;
  max-width: none;
}

.task-title:hover,
.task-description:hover {
  color: #0084ff;
}

.priority-1 {
  background-color: rgba(213, 255, 215, 0.272);
}

.priority-2 {
  background-color: rgba(254, 216, 102, 0.167);
}

.priority-3 {
  background-color: rgba(255, 167, 167, 0.303);
}

.completed-checked {
  text-decoration: line-through;
  color: #0000005b;
}

.add-task-container {
  display: flex;
  gap: 20px;
  align-items: center;
  margin-bottom: 10px;
  font-weight: 500;
}

.add-task-btn {
  font-size: 30px;
  border-radius: 50px;
  background-color: var(--cream);
  color: var(--green);
  border: 1px solid var(--green);
  padding: 8px 11px 0 11px;
}

.add-task-btn:hover {
  background-color: var(--green);
  color: var(--cream);
}

.custom-checkbox input[type="checkbox"],
.custom-radio-box input[type="radio"] {
  display: none;
}

.custom-checkbox,
.custom-radio-box {
  display: flex;
  align-items: center;
  position: relative;
  align-self: center;
  width: 30px;
  height: 30px;
  cursor: pointer;
}

.checkmark,
.checkdot {
  position: absolute;
  top: 0;
  left: 0;
  height: 30px;
  width: 30px;
  background-color: #ccc;
  border-radius: 20px;
  margin-right: 10px;
}

.checkdot {
  height: 16px;
  width: 16px;
}

input[type="radio"]:hover + .checkdot {
  background-color: rgba(0, 113, 206, 0.5);
}

input[type="checkbox"]:hover + .checkmark {
  background-color: rgba(76, 175, 79, 0.5);
}

input[type="checkbox"]:checked + .checkmark:after,
input[type="radio"]:checked + .checkdot:after {
  display: block;
}

input[type="checkbox"]:checked + .checkmark {
  background-color: var(--green);
}

input[type="radio"]:checked + .checkdot {
  background-color: rgb(0, 113, 206);
}

.checkmark:after,
.checkdot:after {
  content: "";
  position: absolute;
  display: none;
}

.checkmark:after {
  left: 11px;
  top: 6px;
  width: 5px;
  height: 13px;
  border: solid var(--cream);
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.checkdot:after {
  left: 5px;
  top: 5px;
  width: 6px;
  height: 6px;
  border-radius: 10px;
  background-color: var(--cream);
}

.in-progress-text {
  display: none;
  font-size: 10px;
  color: #666;
  margin-top: 5px;
}

.no-tasks-message {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 600;
  font-size: 25px;
  color: rgb(255, 220, 161);
  background-color: var(--mid-blue);
  border-radius: 10px;
}

.no-tasks-img {
  height: 300px;
}

.home-dashboard {
  display: grid;
  grid-template-areas: "badges badges" "due-soon-table overdue-table" "progress-bars progress-bars";
  grid-template-columns: 1fr 1fr;
  padding: 45px 25px 20px 25px;
  gap: 20px;
  color: var(--mid-blue);
}

.badge-container {
  grid-area: badges;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-self: center;
  padding: 0 10px;
}

.badge-container h4:first-child {
  color: rgb(28, 73, 126);
}

.all-badges {
  display: flex;
  flex-direction: row;
  gap: 30px;
}

.badge-img {
  width: 45px;
}

.badge {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 6px;
}

.badge h6 {
  margin: 10px 0;
}

.badge-overlay {
  position: absolute;
  border-radius: 35px;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_6___});
  background-repeat: no-repeat;
  background-position: top 10px center;
  background-size: 45px;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(245, 245, 245, 0.819);
}

.due-soon-list-item,
.overdue-list-item {
  display: flex;
  justify-content: space-between;
  flex-basis: 10px;
  padding: 6px 15px;
  border-bottom: 3px solid var(--cream);
  cursor: pointer;
}

.due-soon-container {
  grid-area: due-soon-table;
}
.overdue-container {
  grid-area: overdue-table;
}

.due-soon-container,
.overdue-container,
.badge-container,
.focus-stats-container {
  border-radius: 5px;
  background-color: whitesmoke;
  border: 3px solid var(--light-blue);
}

.due-soon-table-container,
.overdue-table-container {
  max-height: 150px;
  overflow: auto;
}

.due-soon-container h4,
.overdue-container h4 {
  margin-left: 15px;
  color: rgb(28, 73, 126);
}

.overdue-list-item div:last-child {
  color: rgb(228, 92, 92);
}

.due-soon-list-item div:last-child {
  color: rgb(90, 139, 90);
}

.home-stats-container {
  display: flex;
  gap: 130px;
  justify-content: center;
}

.focus-stats-container {
  grid-area: progress-bars;
  align-items: center;
  justify-self: center;
  display: flex;
  padding: 0 50px;
}

.focus-stats-container h4:first-child {
  color: rgb(28, 73, 126);
  border-right: 1px solid var(--mid-blue);
  font-size: 20px;
}

.home-in-progress-bar,
.home-not-started-bar,
.home-overdue-bar {
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 20px;
  flex-basis: 185px;
  color: var(--mid-blue);
}

.sidebar-footer {
  text-align: center;
}

.sidebar-footer a {
  color: whitesmoke;
  font-weight: 600;
}
`, "",{"version":3,"sources":["webpack://./src/assets/styles/main.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Grandstander:ital,wght@0,100..900;1,100..900&display=swap\");\n\n:root {\n  --dark-blue: rgb(17, 45, 78);\n  --mid-blue: rgb(63, 114, 175);\n  --light-blue: rgb(219, 226, 239);\n  --cream: rgb(252, 248, 236);\n  --green: rgb(76, 175, 80);\n}\n\nbody {\n  display: grid;\n  grid-template-columns: 300px 1fr;\n  grid-template-rows: 120px 1fr;\n  grid-template-areas: \"sidebar title\" \"sidebar content\";\n  margin: 10px 10px;\n  height: calc(100vh - (10px + 10px));\n  font-family: \"Grandstander\", Arial, Helvetica, sans-serif;\n}\n\n.sidebar {\n  grid-area: sidebar;\n  display: grid;\n  grid-template-rows: 100px 1fr;\n  background-color: var(--dark-blue);\n  color: var(--cream);\n  overflow: auto;\n  border-radius: 30px 1px 1px 30px;\n  padding: 20px 0 0 15px;\n}\n\n#content {\n  grid-area: content;\n  box-shadow: inset 0 10px 20px rgba(0, 0, 0, 0.257);\n  border-bottom-right-radius: 30px;\n  background-color: var(--cream);\n}\n\n.page-title {\n  display: flex;\n  grid-area: title;\n  background-color: whitesmoke;\n  padding: 30px;\n  color: var(--dark-blue);\n  justify-content: space-between;\n  border-top-right-radius: 30px;\n  box-shadow: inset 10px 1px 20px rgba(0, 0, 0, 0.257);\n}\n\n.tab {\n  display: flex;\n  cursor: pointer;\n  padding: 16px;\n  list-style-type: none;\n  border-radius: 50px 1px 1px 50px;\n  align-items: center;\n  gap: 20px;\n}\n\n.tab:hover:not(.active) {\n  background-color: var(--light-blue);\n  color: var(--dark-blue);\n}\n\n.active {\n  background-color: var(--cream);\n  color: var(--dark-blue);\n}\n\n.sidebar ul {\n  padding: 0;\n}\n\n.logo-img {\n  content: url(\"/src/assets/images/ball.png\");\n  width: 100px;\n  height: 100px;\n}\n\n.logo {\n  display: flex;\n  padding: 20px;\n  gap: 20px;\n  align-items: center;\n}\n\n.home-icon {\n  content: url(\"/src/assets/images/home-white.png\");\n  width: 10%;\n}\n\n.projects-icon {\n  content: url(\"/src/assets/images/projects-white.png\");\n  width: 10%;\n}\n\n.active .home-icon,\n.tab:hover .home-icon {\n  content: url(\"/src/assets/images/home-blue.png\");\n}\n\n.active .projects-icon,\n.tab:hover .projects-icon {\n  content: url(\"/src/assets/images/projects-blue.png\");\n}\n\n.title-img {\n  height: 80px;\n}\n\n.dashboard-all-projects {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 50px;\n  overflow-x: hidden;\n  overflow-y: auto;\n  max-height: calc(715px - (35px + 40px));\n  margin: 30px 30px 0px 30px;\n  padding: 25px 25px 20px 25px;\n}\n\n.project-box {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  border-radius: 20px;\n  border: 6px dashed var(--light-blue);\n  box-shadow: 0px 10px 10px var(--light-blue);\n  background-color: whitesmoke;\n  color: var(--dark-blue);\n  transition: transform 0.3s ease;\n}\n\n.project-box:hover {\n  cursor: pointer;\n  transform: scale(1.05);\n  box-shadow: 0px 10px 10px var(--dark-blue);\n}\n\n.project-img {\n  width: 80px;\n  height: 80px;\n}\n\n.add-project-btn-img {\n  width: 100px;\n  height: 100px;\n}\n\n.add-project-btn {\n  border: 0;\n  background: none;\n  transition: transform 0.3s ease;\n}\n\n.add-project-btn:hover {\n  transform: scale(1.2);\n}\n\n.progress-bar {\n  width: 90%;\n  height: 20px;\n  background-color: #ddd;\n  position: relative;\n  border-radius: 40px;\n  margin: 20px 0;\n}\n\n.progress-bar-completed {\n  height: 100%;\n  background-color: var(--green);\n  text-align: center;\n  border-radius: 40px;\n}\n\n.progress-bar-text {\n  position: absolute;\n  left: 20%;\n  transform: translateY(-100%);\n  color: rgb(255, 255, 255);\n}\n\n.add-project-modal,\n.add-task-modal,\n.attribution-modal {\n  display: flex;\n  flex-direction: column;\n  color: var(--dark-blue);\n  padding: 10px 30px 20px 30px;\n  background-color: var(--light-blue);\n  border: 8px dashed whitesmoke;\n  z-index: 2;\n  position: fixed;\n  max-width: 30%;\n  min-width: 30%;\n  top: 20%;\n  left: 45%;\n}\n\n.add-project-form-elements {\n  display: flex;\n  flex-direction: column;\n}\n\n.close-btn {\n  border-radius: 60px;\n  border: none;\n  padding: 6px 10px 1px 10px;\n  font-size: 30px;\n  background-color: rgba(255, 0, 0, 0.246);\n  color: grey;\n  align-self: flex-end;\n}\n\n.close-btn:hover {\n  background-color: rgba(255, 0, 0, 0.649);\n  color: white;\n}\n\n.modal-img {\n  height: 130px;\n}\n\n.modal-intro {\n  display: flex;\n}\n\n.modal-text {\n  color: grey;\n  border: 5px dotted rgb(236, 236, 236);\n  border-radius: 10px;\n  background-color: rgb(255, 247, 237);\n  padding: 10px;\n  align-self: center;\n}\n\n.add-project-form,\n.add-task-form {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n}\n\n.add-project-form input[type=\"text\"],\n.add-task-form input[type=\"text\"] {\n  padding: 10px;\n  font-size: 20px;\n  border: 3px dotted var(--light-blue);\n  border-bottom: 5px solid var(--dark-blue);\n}\n\n.add-project-submit-btn,\n.add-task-submit-btn {\n  font-weight: 600;\n  border: 3px dotted rgb(205, 205, 205);\n  box-shadow: inset 0 10px 15px rgba(0, 0, 0, 0.575);\n  color: rgb(227, 227, 227);\n  background-color: #3a3a3a5b;\n  align-self: center;\n  padding: 25px 15px;\n  width: min-content;\n  border-radius: 50px;\n}\n\n.add-project-submit-btn:hover,\n.add-task-submit-btn:hover {\n  border-color: rgb(203, 239, 185);\n  background-color: #72c074cf;\n  color: var(--cream);\n}\n\n.overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.843);\n  z-index: 1;\n}\n\nbutton,\ninput[type=\"file\"] {\n  cursor: pointer;\n}\n\nbutton,\ninput[type=\"file\"],\ninput[type=\"text\"] {\n  font-family: \"Grandstander\", Arial, Helvetica, sans-serif;\n}\n\n.project-dashboard {\n  display: grid;\n  margin: 25px;\n  grid-template-columns: minmax(min-content, max-content) minmax(\n      min-content,\n      max-content\n    );\n  grid-template-rows: minmax(min-content, max-content) 1fr;\n  grid-template-areas: \"back-button todo-list\" \"stats todo-list\";\n  gap: 30px;\n}\n\n.back-button {\n  grid-area: back-button;\n  font-size: 19px;\n  color: var(--mid-blue);\n  padding: 7px;\n  border-radius: 10px;\n  border: 2px solid var(--light-blue);\n  box-shadow: 0px 5px 5px rgb(193, 193, 193);\n  align-self: flex-start;\n}\n\n.back-button:hover {\n  color: var(--mid-blue);\n  background-color: var(--light-blue);\n}\n\n.stats-container {\n  grid-area: stats;\n  color: var(--mid-blue);\n  display: flex;\n  flex-direction: column;\n  background-color: #ffffff;\n  border-radius: 10px;\n  border: 3px solid var(--light-blue);\n  padding: 5px;\n  gap: 50px;\n  width: min-content;\n  height: min-content;\n  align-self: center;\n  justify-content: center;\n  box-shadow: 0px 5px 5px rgb(193, 193, 193);\n}\n\n.todo-list-container {\n  grid-area: todo-list;\n}\n\n.progress-container {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  align-items: center;\n}\n\n@keyframes progress {\n  0% {\n    --percentage: 0;\n  }\n  100% {\n    --percentage: var(--value);\n  }\n}\n\n@property --percentage {\n  syntax: \"<number>\";\n  inherits: true;\n  initial-value: 0;\n}\n\n[role=\"progressbar\"] {\n  --percentage: var(--value);\n  --secondary: rgba(214, 214, 214, 0.567);\n  --size: 150px;\n  animation: progress 2s 0.5s forwards;\n  width: var(--size);\n  aspect-ratio: 2 / 1;\n  border-radius: 50% / 100% 100% 0 0;\n  position: relative;\n  overflow: hidden;\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n}\n\n[role=\"progressbar\"].completed-bar-color {\n  --primary: var(--green);\n  color: var(--green);\n}\n\n[role=\"progressbar\"].in-progress-bar-color {\n  --primary: rgb(0, 113, 206);\n  color: rgb(0, 113, 206);\n}\n\n[role=\"progressbar\"].not-started-bar-color {\n  --primary: grey;\n  color: grey;\n}\n\n[role=\"progressbar\"].overdue-bar-color {\n  --primary: rgb(255, 86, 86);\n  color: rgb(250, 109, 109);\n}\n\n.default-bar-color {\n  --primary: black;\n}\n\n[role=\"progressbar\"]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: conic-gradient(\n    from 0.75turn at 50% 100%,\n    var(--primary) calc(var(--percentage) * 1% / 2),\n    var(--secondary) calc(var(--percentage) * 1% / 2 + 0.9%)\n  );\n  mask: radial-gradient(at 50% 100%, white 55%, transparent 55.5%);\n  -webkit-mask: radial-gradient(at 50% 100%, #0000 60%, #000 75%);\n}\n\n[role=\"progressbar\"]::after {\n  counter-reset: percentage var(--value);\n  content: attr(data-percentage) \"%\";\n  font-size: calc(var(--size) / 5);\n}\n\n.todo-list-container {\n  background-color: #ffffff;\n  box-shadow: 0px 5px 5px rgb(193, 193, 193);\n  display: flex;\n  flex-direction: column;\n  padding: 10px 25px 5px 25px;\n  border-radius: 10px;\n  border: 3px solid var(--light-blue);\n  align-self: flex-start;\n  color: var(--mid-blue);\n}\n\n.organize-menu {\n  display: flex;\n  align-self: flex-end;\n  align-items: center;\n  gap: 10px;\n  font-weight: 500;\n  font-size: 18px;\n}\n\n.custom-select {\n  position: relative;\n  width: 180px;\n}\n\n.menu-select,\n.priority-select {\n  width: 100%;\n  padding: 10px 30px 10px 15px;\n  border: 2px solid var(--light-blue);\n  border-radius: 4px;\n  font-size: 15px;\n  appearance: none;\n  background-image: url('data:image/svg+xml;utf8,<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"%233f72af\" d=\"M7 10l5 5 5-5z\"/></svg>');\n  background-repeat: no-repeat;\n  background-position: right 10px center;\n  background-size: 30px;\n  cursor: pointer;\n  color: var(--mid-blue);\n  font-family: \"Grandstander\", Arial, Helvetica, sans-serif;\n}\n\n.menu-select:hover,\n.menu-select:focus {\n  outline: none;\n  background-color: var(--light-blue);\n}\n\n.tasks-table-container {\n  display: flex;\n  flex-direction: column;\n  padding: 20px 0;\n  overflow-x: hidden;\n  overflow-y: auto;\n  max-height: calc(560px - (45px));\n  min-height: calc(560px - (45px));\n  max-width: calc(900px - (10px));\n  min-width: calc(900px - (10px));\n}\n\n.todo-list-item {\n  display: flex;\n  border-radius: 10px;\n  box-shadow: 0px 5px 2px rgb(127, 127, 127);\n  margin: 0 10px 10px 10px;\n  padding: 10px;\n  background-color: #ffffff;\n  gap: 15px;\n  align-items: center;\n  position: relative;\n  flex-wrap: wrap;\n}\n\n.custom-checkbox {\n  flex-basis: 40px;\n}\n\n.task-info-container {\n  flex-basis: 350px;\n  overflow: hidden;\n}\n\n.due-date-container {\n  flex-basis: 220px;\n  align-items: center;\n  justify-items: center;\n}\n\n.in-progress-radio-container {\n  flex-basis: 60px;\n  padding-top: 25px;\n  display: flex;\n  flex-direction: column;\n  align-self: flex-start;\n}\n\n.priority-container {\n  flex-basis: 110px;\n  position: relative;\n  width: 180px;\n}\n\n.remove-item-btn,\n.remove-project-btn {\n  position: absolute;\n  top: -5px;\n  right: -5px;\n  display: none;\n  border-radius: 50px;\n  border: none;\n  padding: 4px 7px 4px 7px;\n  font-size: 18px;\n  font-weight: 700;\n  background-color: rgba(255, 0, 0, 0.246);\n  color: grey;\n}\n\n.remove-item-btn:hover,\n.remove-project-btn:hover {\n  background-color: rgba(255, 0, 0, 0.649);\n  color: white;\n}\n\n.task-title,\n.task-description {\n  cursor: pointer;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 100%;\n}\n\n.task-title.expanded,\n.task-description.expanded {\n  white-space: normal;\n  overflow: visible;\n  max-width: none;\n}\n\n.task-title:hover,\n.task-description:hover {\n  color: #0084ff;\n}\n\n.priority-1 {\n  background-color: rgba(213, 255, 215, 0.272);\n}\n\n.priority-2 {\n  background-color: rgba(254, 216, 102, 0.167);\n}\n\n.priority-3 {\n  background-color: rgba(255, 167, 167, 0.303);\n}\n\n.completed-checked {\n  text-decoration: line-through;\n  color: #0000005b;\n}\n\n.add-task-container {\n  display: flex;\n  gap: 20px;\n  align-items: center;\n  margin-bottom: 10px;\n  font-weight: 500;\n}\n\n.add-task-btn {\n  font-size: 30px;\n  border-radius: 50px;\n  background-color: var(--cream);\n  color: var(--green);\n  border: 1px solid var(--green);\n  padding: 8px 11px 0 11px;\n}\n\n.add-task-btn:hover {\n  background-color: var(--green);\n  color: var(--cream);\n}\n\n.custom-checkbox input[type=\"checkbox\"],\n.custom-radio-box input[type=\"radio\"] {\n  display: none;\n}\n\n.custom-checkbox,\n.custom-radio-box {\n  display: flex;\n  align-items: center;\n  position: relative;\n  align-self: center;\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n}\n\n.checkmark,\n.checkdot {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 30px;\n  width: 30px;\n  background-color: #ccc;\n  border-radius: 20px;\n  margin-right: 10px;\n}\n\n.checkdot {\n  height: 16px;\n  width: 16px;\n}\n\ninput[type=\"radio\"]:hover + .checkdot {\n  background-color: rgba(0, 113, 206, 0.5);\n}\n\ninput[type=\"checkbox\"]:hover + .checkmark {\n  background-color: rgba(76, 175, 79, 0.5);\n}\n\ninput[type=\"checkbox\"]:checked + .checkmark:after,\ninput[type=\"radio\"]:checked + .checkdot:after {\n  display: block;\n}\n\ninput[type=\"checkbox\"]:checked + .checkmark {\n  background-color: var(--green);\n}\n\ninput[type=\"radio\"]:checked + .checkdot {\n  background-color: rgb(0, 113, 206);\n}\n\n.checkmark:after,\n.checkdot:after {\n  content: \"\";\n  position: absolute;\n  display: none;\n}\n\n.checkmark:after {\n  left: 11px;\n  top: 6px;\n  width: 5px;\n  height: 13px;\n  border: solid var(--cream);\n  border-width: 0 2px 2px 0;\n  transform: rotate(45deg);\n}\n\n.checkdot:after {\n  left: 5px;\n  top: 5px;\n  width: 6px;\n  height: 6px;\n  border-radius: 10px;\n  background-color: var(--cream);\n}\n\n.in-progress-text {\n  display: none;\n  font-size: 10px;\n  color: #666;\n  margin-top: 5px;\n}\n\n.no-tasks-message {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-weight: 600;\n  font-size: 25px;\n  color: rgb(255, 220, 161);\n  background-color: var(--mid-blue);\n  border-radius: 10px;\n}\n\n.no-tasks-img {\n  height: 300px;\n}\n\n.home-dashboard {\n  display: grid;\n  grid-template-areas: \"badges badges\" \"due-soon-table overdue-table\" \"progress-bars progress-bars\";\n  grid-template-columns: 1fr 1fr;\n  padding: 45px 25px 20px 25px;\n  gap: 20px;\n  color: var(--mid-blue);\n}\n\n.badge-container {\n  grid-area: badges;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-self: center;\n  padding: 0 10px;\n}\n\n.badge-container h4:first-child {\n  color: rgb(28, 73, 126);\n}\n\n.all-badges {\n  display: flex;\n  flex-direction: row;\n  gap: 30px;\n}\n\n.badge-img {\n  width: 45px;\n}\n\n.badge {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: relative;\n  padding: 6px;\n}\n\n.badge h6 {\n  margin: 10px 0;\n}\n\n.badge-overlay {\n  position: absolute;\n  border-radius: 35px;\n  background-image: url(\"/src/assets/images/lock.png\");\n  background-repeat: no-repeat;\n  background-position: top 10px center;\n  background-size: 45px;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(245, 245, 245, 0.819);\n}\n\n.due-soon-list-item,\n.overdue-list-item {\n  display: flex;\n  justify-content: space-between;\n  flex-basis: 10px;\n  padding: 6px 15px;\n  border-bottom: 3px solid var(--cream);\n  cursor: pointer;\n}\n\n.due-soon-container {\n  grid-area: due-soon-table;\n}\n.overdue-container {\n  grid-area: overdue-table;\n}\n\n.due-soon-container,\n.overdue-container,\n.badge-container,\n.focus-stats-container {\n  border-radius: 5px;\n  background-color: whitesmoke;\n  border: 3px solid var(--light-blue);\n}\n\n.due-soon-table-container,\n.overdue-table-container {\n  max-height: 150px;\n  overflow: auto;\n}\n\n.due-soon-container h4,\n.overdue-container h4 {\n  margin-left: 15px;\n  color: rgb(28, 73, 126);\n}\n\n.overdue-list-item div:last-child {\n  color: rgb(228, 92, 92);\n}\n\n.due-soon-list-item div:last-child {\n  color: rgb(90, 139, 90);\n}\n\n.home-stats-container {\n  display: flex;\n  gap: 130px;\n  justify-content: center;\n}\n\n.focus-stats-container {\n  grid-area: progress-bars;\n  align-items: center;\n  justify-self: center;\n  display: flex;\n  padding: 0 50px;\n}\n\n.focus-stats-container h4:first-child {\n  color: rgb(28, 73, 126);\n  border-right: 1px solid var(--mid-blue);\n  font-size: 20px;\n}\n\n.home-in-progress-bar,\n.home-not-started-bar,\n.home-overdue-bar {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  gap: 20px;\n  flex-basis: 185px;\n  color: var(--mid-blue);\n}\n\n.sidebar-footer {\n  text-align: center;\n}\n\n.sidebar-footer a {\n  color: whitesmoke;\n  font-weight: 600;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/assets/styles/main.css":
/*!************************************!*\
  !*** ./src/assets/styles/main.css ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/styles/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/images/badges sync recursive ^\\.\\/lvl\\-.*\\.png$":
/*!***********************************************************!*\
  !*** ./src/assets/images/badges/ sync ^\.\/lvl\-.*\.png$ ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./lvl-1.png": "./src/assets/images/badges/lvl-1.png",
	"./lvl-2.png": "./src/assets/images/badges/lvl-2.png",
	"./lvl-3.png": "./src/assets/images/badges/lvl-3.png",
	"./lvl-4.png": "./src/assets/images/badges/lvl-4.png",
	"./lvl-5.png": "./src/assets/images/badges/lvl-5.png"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/assets/images/badges sync recursive ^\\.\\/lvl\\-.*\\.png$";

/***/ }),

/***/ "./src/assets/images sync recursive ^\\.\\/.*$":
/*!******************************************!*\
  !*** ./src/assets/images/ sync ^\.\/.*$ ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./add-project-btn-2.png": "./src/assets/images/add-project-btn-2.png",
	"./badges/lvl-1.png": "./src/assets/images/badges/lvl-1.png",
	"./badges/lvl-2.png": "./src/assets/images/badges/lvl-2.png",
	"./badges/lvl-3.png": "./src/assets/images/badges/lvl-3.png",
	"./badges/lvl-4.png": "./src/assets/images/badges/lvl-4.png",
	"./badges/lvl-5.png": "./src/assets/images/badges/lvl-5.png",
	"./ball.png": "./src/assets/images/ball.png",
	"./budget.png": "./src/assets/images/budget.png",
	"./cooking.png": "./src/assets/images/cooking.png",
	"./dumbbell.png": "./src/assets/images/dumbbell.png",
	"./gardening.png": "./src/assets/images/gardening.png",
	"./home-blue.png": "./src/assets/images/home-blue.png",
	"./home-white.png": "./src/assets/images/home-white.png",
	"./kitten-in-hole.png": "./src/assets/images/kitten-in-hole.png",
	"./kitten-on-moon.png": "./src/assets/images/kitten-on-moon.png",
	"./kitten-sitting.png": "./src/assets/images/kitten-sitting.png",
	"./kitten-sleeping.png": "./src/assets/images/kitten-sleeping.png",
	"./languages.png": "./src/assets/images/languages.png",
	"./lock.png": "./src/assets/images/lock.png",
	"./luggage.png": "./src/assets/images/luggage.png",
	"./no-image.png": "./src/assets/images/no-image.png",
	"./paint.png": "./src/assets/images/paint.png",
	"./playing-yarn.png": "./src/assets/images/playing-yarn.png",
	"./presentation.png": "./src/assets/images/presentation.png",
	"./projects-blue.png": "./src/assets/images/projects-blue.png",
	"./projects-white.png": "./src/assets/images/projects-white.png",
	"./renovation.png": "./src/assets/images/renovation.png",
	"./script.png": "./src/assets/images/script.png",
	"./writing.png": "./src/assets/images/writing.png"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/assets/images sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./src/eventHandlers/handleAddProjectBtn.js":
/*!**************************************************!*\
  !*** ./src/eventHandlers/handleAddProjectBtn.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleAddProjectBtn: () => (/* binding */ handleAddProjectBtn)
/* harmony export */ });
/* harmony import */ var _ui_createModals_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/createModals.js */ "./src/ui/createModals.js");
/* harmony import */ var _helpers_modalHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/modalHelpers.js */ "./src/helpers/modalHelpers.js");



const handleAddProjectBtn = () => {
  (0,_helpers_modalHelpers_js__WEBPACK_IMPORTED_MODULE_1__.addOverlay)();
  (0,_helpers_modalHelpers_js__WEBPACK_IMPORTED_MODULE_1__.displayModal)((0,_ui_createModals_js__WEBPACK_IMPORTED_MODULE_0__.createAddProjectModal)());
};




/***/ }),

/***/ "./src/eventHandlers/handleAddTaskBtn.js":
/*!***********************************************!*\
  !*** ./src/eventHandlers/handleAddTaskBtn.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleAddTaskBtn: () => (/* binding */ handleAddTaskBtn)
/* harmony export */ });
/* harmony import */ var _ui_createModals_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/createModals.js */ "./src/ui/createModals.js");
/* harmony import */ var _helpers_modalHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/modalHelpers.js */ "./src/helpers/modalHelpers.js");



const handleAddTaskBtn = (project) => {
  (0,_helpers_modalHelpers_js__WEBPACK_IMPORTED_MODULE_1__.addOverlay)();
  const taskModal = (0,_ui_createModals_js__WEBPACK_IMPORTED_MODULE_0__.createAddTaskModal)(project);
  (0,_helpers_modalHelpers_js__WEBPACK_IMPORTED_MODULE_1__.displayModal)(taskModal);
};




/***/ }),

/***/ "./src/eventHandlers/handleBackBtn.js":
/*!********************************************!*\
  !*** ./src/eventHandlers/handleBackBtn.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleBackBtn: () => (/* binding */ handleBackBtn)
/* harmony export */ });
/* harmony import */ var _ui_clearDisplay_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/clearDisplay.js */ "./src/ui/clearDisplay.js");


const handleBackBtn = (previousPage) => {
  (0,_ui_clearDisplay_js__WEBPACK_IMPORTED_MODULE_0__.clearContentTitleDisplay)();
  previousPage();
};




/***/ }),

/***/ "./src/eventHandlers/handleCompletedCheckbox.js":
/*!******************************************************!*\
  !*** ./src/eventHandlers/handleCompletedCheckbox.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleCompletedCheckbox: () => (/* binding */ handleCompletedCheckbox)
/* harmony export */ });
/* harmony import */ var _ui_updateTaskElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/updateTaskElement.js */ "./src/ui/updateTaskElement.js");
/* harmony import */ var _services_projectLocalStorage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/projectLocalStorage.js */ "./src/services/projectLocalStorage.js");
/* harmony import */ var _ui_updateStatsContainer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/updateStatsContainer.js */ "./src/ui/updateStatsContainer.js");




const handleCompletedCheckbox = (project, taskElement, todoItem) => {
  todoItem.toggleComplete();
  todoItem.updateStatus();
  (0,_services_projectLocalStorage_js__WEBPACK_IMPORTED_MODULE_1__.updateTodoItemStorage)(project);
  (0,_ui_updateTaskElement_js__WEBPACK_IMPORTED_MODULE_0__.updateTaskElement)(project, taskElement, todoItem);
  (0,_ui_updateStatsContainer_js__WEBPACK_IMPORTED_MODULE_2__.updateStatsContainer)(project);
};




/***/ }),

/***/ "./src/eventHandlers/handleDueDateChange.js":
/*!**************************************************!*\
  !*** ./src/eventHandlers/handleDueDateChange.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   showDatePicker: () => (/* binding */ showDatePicker)
/* harmony export */ });
/* harmony import */ var _ui_updateTaskElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/updateTaskElement.js */ "./src/ui/updateTaskElement.js");
/* harmony import */ var _services_projectLocalStorage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/projectLocalStorage.js */ "./src/services/projectLocalStorage.js");
/* harmony import */ var _helpers_dateFormatter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/dateFormatter.js */ "./src/helpers/dateFormatter.js");




const showDatePicker = (project, taskElement, todoItem, dateContainer) => {
  const dateInput = createDatePickerInput(todoItem.getDueDate());

  dateInput.addEventListener("change", () =>
    handleDueDateChange(project, taskElement, todoItem, dateInput)
  );
  dateInput.addEventListener("blur", () =>
    handleDueDateBlur(project, taskElement, todoItem, dateContainer)
  );

  dateContainer.replaceChildren(dateInput);
  dateInput.focus();
};

const createDatePickerInput = (dueDate) => {
  const dateInput = document.createElement("input");
  dateInput.type = "date";
  dateInput.value = (0,_helpers_dateFormatter_js__WEBPACK_IMPORTED_MODULE_2__.formatDateForInput)(dueDate);
  return dateInput;
};

const handleDueDateChange = (project, taskElement, todoItem, dateInput) => {
  const newDueDate = (0,_helpers_dateFormatter_js__WEBPACK_IMPORTED_MODULE_2__.parseDateFromInput)(dateInput.value);
  const originalDueDate = todoItem.getDueDate();

  if (
    !isNaN(newDueDate.getTime()) &&
    newDueDate.getTime() !== originalDueDate.getTime()
  ) {
    todoItem.updateDueDate(newDueDate);
    (0,_services_projectLocalStorage_js__WEBPACK_IMPORTED_MODULE_1__.updateTodoItemStorage)(project);
    (0,_ui_updateTaskElement_js__WEBPACK_IMPORTED_MODULE_0__.updateTaskElement)(project, taskElement, todoItem);
  } else {
    console.error("Invalid date format");
  }
};

const handleDueDateBlur = (project, taskElement, todoItem, dateContainer) => {
  const dueDateText = createDueDateText(todoItem);
  dueDateText.addEventListener("click", () =>
    showDatePicker(project, taskElement, todoItem, dateContainer)
  );
  dateContainer.replaceChildren(dueDateText);
};

const createDueDateText = (todoItem) => {
  const dueDateText = document.createElement("span");
  dueDateText.textContent = (0,_helpers_dateFormatter_js__WEBPACK_IMPORTED_MODULE_2__.dueOnMonthStringDate)(todoItem.getDueDate());
  return dueDateText;
};



/***/ }),

/***/ "./src/eventHandlers/handleInProgressRadioBox.js":
/*!*******************************************************!*\
  !*** ./src/eventHandlers/handleInProgressRadioBox.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleInProgressRadioBox: () => (/* binding */ handleInProgressRadioBox)
/* harmony export */ });
/* harmony import */ var _ui_updateTaskElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/updateTaskElement.js */ "./src/ui/updateTaskElement.js");
/* harmony import */ var _services_projectLocalStorage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/projectLocalStorage.js */ "./src/services/projectLocalStorage.js");
/* harmony import */ var _ui_updateStatsContainer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/updateStatsContainer.js */ "./src/ui/updateStatsContainer.js");




const handleInProgressRadioBox = (project, taskElement, todoItem) => {
  todoItem.toggleInProgress();
  todoItem.updateStatus();
  (0,_services_projectLocalStorage_js__WEBPACK_IMPORTED_MODULE_1__.updateTodoItemStorage)(project);
  (0,_ui_updateTaskElement_js__WEBPACK_IMPORTED_MODULE_0__.updateTaskElement)(project, taskElement, todoItem);
  (0,_ui_updateStatsContainer_js__WEBPACK_IMPORTED_MODULE_2__.updateStatsContainer)(project);
};




/***/ }),

/***/ "./src/eventHandlers/handleMenuSelection.js":
/*!**************************************************!*\
  !*** ./src/eventHandlers/handleMenuSelection.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleMenuSelection: () => (/* binding */ handleMenuSelection)
/* harmony export */ });
/* harmony import */ var _helpers_rearrangeTodoList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/rearrangeTodoList.js */ "./src/helpers/rearrangeTodoList.js");
/* harmony import */ var _ui_updateTaskTable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/updateTaskTable.js */ "./src/ui/updateTaskTable.js");



const handleMenuSelection = (event, project, todoList) => {
  const selectedOption = event.target.value;
  const rearrangedTodoList = (0,_helpers_rearrangeTodoList_js__WEBPACK_IMPORTED_MODULE_0__.rearrangeTodoList)(todoList, selectedOption);
  (0,_ui_updateTaskTable_js__WEBPACK_IMPORTED_MODULE_1__.updateTaskTable)(project, rearrangedTodoList);
};




/***/ }),

/***/ "./src/eventHandlers/handlePrioritySelection.js":
/*!******************************************************!*\
  !*** ./src/eventHandlers/handlePrioritySelection.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handlePrioritySelection: () => (/* binding */ handlePrioritySelection)
/* harmony export */ });
/* harmony import */ var _ui_updateTaskElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/updateTaskElement.js */ "./src/ui/updateTaskElement.js");
/* harmony import */ var _services_projectLocalStorage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/projectLocalStorage.js */ "./src/services/projectLocalStorage.js");



const handlePrioritySelection = (event, project, taskElement, todoItem) => {
  const selectedOption = event.target.value;
  todoItem.updatePriority(selectedOption);
  (0,_services_projectLocalStorage_js__WEBPACK_IMPORTED_MODULE_1__.updateTodoItemStorage)(project);
  (0,_ui_updateTaskElement_js__WEBPACK_IMPORTED_MODULE_0__.updateTaskElement)(project, taskElement, todoItem);
};



/***/ }),

/***/ "./src/eventHandlers/handleProjectFormSubmission.js":
/*!**********************************************************!*\
  !*** ./src/eventHandlers/handleProjectFormSubmission.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleProjectFormSubmission: () => (/* binding */ handleProjectFormSubmission)
/* harmony export */ });
/* harmony import */ var _services_projectFactory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/projectFactory.js */ "./src/services/projectFactory.js");
/* harmony import */ var _services_projectLocalStorage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/projectLocalStorage.js */ "./src/services/projectLocalStorage.js");
/* harmony import */ var _ui_updateDashboardContainer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/updateDashboardContainer.js */ "./src/ui/updateDashboardContainer.js");
/* harmony import */ var _helpers_modalHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/modalHelpers.js */ "./src/helpers/modalHelpers.js");





const handleProjectFormSubmission = (
  event,
  projectNameInput,
  projectImgInput
) => {
  event.preventDefault();

  const projectName = projectNameInput.value;
  const projectImgFile = projectImgInput.files[0];

  if (projectImgFile) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const projectImgPath = e.target.result;
      const newProject = (0,_services_projectFactory_js__WEBPACK_IMPORTED_MODULE_0__.createProjectFromInput)(projectName, projectImgPath);
      (0,_services_projectLocalStorage_js__WEBPACK_IMPORTED_MODULE_1__.saveUserProjectData)(newProject);
      (0,_ui_updateDashboardContainer_js__WEBPACK_IMPORTED_MODULE_2__.updateDashboardContainer)();
      (0,_helpers_modalHelpers_js__WEBPACK_IMPORTED_MODULE_3__.closeModal)(".add-project-modal");
    };
    reader.readAsDataURL(projectImgFile);
  } else {
    const projectImgPath = "no-image.png";
    const newProject = (0,_services_projectFactory_js__WEBPACK_IMPORTED_MODULE_0__.createProjectFromInput)(projectName, projectImgPath);
    (0,_services_projectLocalStorage_js__WEBPACK_IMPORTED_MODULE_1__.saveUserProjectData)(newProject);
    (0,_ui_updateDashboardContainer_js__WEBPACK_IMPORTED_MODULE_2__.updateDashboardContainer)();
    (0,_helpers_modalHelpers_js__WEBPACK_IMPORTED_MODULE_3__.closeModal)(".add-project-modal");
  }
};




/***/ }),

/***/ "./src/eventHandlers/handleRemoveItemBtn.js":
/*!**************************************************!*\
  !*** ./src/eventHandlers/handleRemoveItemBtn.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleRemoveItemBtn: () => (/* binding */ handleRemoveItemBtn)
/* harmony export */ });
/* harmony import */ var _services_projectLocalStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/projectLocalStorage.js */ "./src/services/projectLocalStorage.js");
/* harmony import */ var _ui_updateTaskTable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/updateTaskTable.js */ "./src/ui/updateTaskTable.js");
/* harmony import */ var _ui_updateStatsContainer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/updateStatsContainer.js */ "./src/ui/updateStatsContainer.js");




const handleRemoveItemBtn = (project, todoItem) => {
  const todoListItems = project.getTodoList().getTodoItems();
  const todoList = project.getTodoList();
  todoList.removeTodoItem(todoItem);
  (0,_services_projectLocalStorage_js__WEBPACK_IMPORTED_MODULE_0__.removeTodoItemFromStorage)(project, todoItem);
  (0,_ui_updateTaskTable_js__WEBPACK_IMPORTED_MODULE_1__.updateTaskTable)(project, todoListItems);
  (0,_ui_updateStatsContainer_js__WEBPACK_IMPORTED_MODULE_2__.updateStatsContainer)(project);
};




/***/ }),

/***/ "./src/eventHandlers/handleRemoveProjectBtn.js":
/*!*****************************************************!*\
  !*** ./src/eventHandlers/handleRemoveProjectBtn.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleRemoveProjectBtn: () => (/* binding */ handleRemoveProjectBtn)
/* harmony export */ });
/* harmony import */ var _ui_updateDashboardContainer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/updateDashboardContainer.js */ "./src/ui/updateDashboardContainer.js");
/* harmony import */ var _services_projectLocalStorage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/projectLocalStorage.js */ "./src/services/projectLocalStorage.js");



const handleRemoveProjectBtn = (project, projectList) => {
  projectList.removeProject(project);
  (0,_services_projectLocalStorage_js__WEBPACK_IMPORTED_MODULE_1__.removeProjectFromStorage)(project);
  (0,_ui_updateDashboardContainer_js__WEBPACK_IMPORTED_MODULE_0__.updateDashboardContainer)();
};




/***/ }),

/***/ "./src/eventHandlers/handleTaskDescription.js":
/*!****************************************************!*\
  !*** ./src/eventHandlers/handleTaskDescription.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleTaskDescriptionBlur: () => (/* binding */ handleTaskDescriptionBlur),
/* harmony export */   handleTaskDescriptionKeyDown: () => (/* binding */ handleTaskDescriptionKeyDown)
/* harmony export */ });
/* harmony import */ var _ui_updateTaskElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/updateTaskElement.js */ "./src/ui/updateTaskElement.js");
/* harmony import */ var _services_projectLocalStorage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/projectLocalStorage.js */ "./src/services/projectLocalStorage.js");



const handleTaskDescriptionBlur = (
  project,
  taskElement,
  todoItem,
  taskDescription
) => {
  const newDescription = taskDescription.textContent.trim();
  if (newDescription !== todoItem.getDescription()) {
    todoItem.updateDescription(newDescription);
    (0,_services_projectLocalStorage_js__WEBPACK_IMPORTED_MODULE_1__.updateTodoItemStorage)(project);
    (0,_ui_updateTaskElement_js__WEBPACK_IMPORTED_MODULE_0__.updateTaskElement)(project, taskElement, todoItem);
  }
};

const handleTaskDescriptionKeyDown = (event, taskDescription) => {
  if (event.key === "Enter") {
    event.preventDefault();
    taskDescription.blur();
  }
};




/***/ }),

/***/ "./src/eventHandlers/handleTaskFormSubmission.js":
/*!*******************************************************!*\
  !*** ./src/eventHandlers/handleTaskFormSubmission.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleTaskFormSubmission: () => (/* binding */ handleTaskFormSubmission)
/* harmony export */ });
/* harmony import */ var _services_projectLocalStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/projectLocalStorage.js */ "./src/services/projectLocalStorage.js");
/* harmony import */ var _helpers_dateFormatter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/dateFormatter.js */ "./src/helpers/dateFormatter.js");
/* harmony import */ var _services_todoItemFactory_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/todoItemFactory.js */ "./src/services/todoItemFactory.js");
/* harmony import */ var _ui_updateTaskTable_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/updateTaskTable.js */ "./src/ui/updateTaskTable.js");
/* harmony import */ var _ui_updateStatsContainer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/updateStatsContainer.js */ "./src/ui/updateStatsContainer.js");
/* harmony import */ var _helpers_modalHelpers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/modalHelpers.js */ "./src/helpers/modalHelpers.js");







const handleTaskFormSubmission = (
  event,
  itemTitleInput,
  itemDescriptionInput,
  itemDueDateInput,
  selectedPriority,
  project
) => {
  event.preventDefault();
  const todoList = project.getTodoList();
  const todoListItems = project.getTodoList().getTodoItems();

  const title = itemTitleInput.value;
  const description = processDescription(itemDescriptionInput);
  const dueDate = processDate(itemDueDateInput);
  const priority = processPriority(selectedPriority);

  const newTodoItem = (0,_services_todoItemFactory_js__WEBPACK_IMPORTED_MODULE_2__.createTodoItemFromInput)(
    title,
    description,
    dueDate,
    priority
  );
  todoList.addItemToFront(newTodoItem);
  (0,_services_projectLocalStorage_js__WEBPACK_IMPORTED_MODULE_0__.updateTodoItemStorage)(project);
  (0,_ui_updateTaskTable_js__WEBPACK_IMPORTED_MODULE_3__.updateTaskTable)(project, todoListItems);
  (0,_ui_updateStatsContainer_js__WEBPACK_IMPORTED_MODULE_4__.updateStatsContainer)(project);
  (0,_helpers_modalHelpers_js__WEBPACK_IMPORTED_MODULE_5__.closeModal)(".add-task-modal");
};

const processDescription = (descriptionInput) => {
  if (!descriptionInput.value) {
    descriptionInput.value = " ";
  }
  return descriptionInput.value;
};

const processDate = (dateInput) => {
  if (!dateInput.value) {
    dateInput.value = (0,_helpers_dateFormatter_js__WEBPACK_IMPORTED_MODULE_1__.formatDateForInput)(new Date());
  }
  return dateInput.value;
};

const processPriority = (priorityValue) => {
  if (priorityValue === null) {
    return "Low";
  }
  return priorityValue;
};




/***/ }),

/***/ "./src/eventHandlers/handleTaskTitle.js":
/*!**********************************************!*\
  !*** ./src/eventHandlers/handleTaskTitle.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleTaskTitleBlur: () => (/* binding */ handleTaskTitleBlur),
/* harmony export */   handleTaskTitleKeyDown: () => (/* binding */ handleTaskTitleKeyDown)
/* harmony export */ });
/* harmony import */ var _ui_updateTaskElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/updateTaskElement.js */ "./src/ui/updateTaskElement.js");
/* harmony import */ var _services_projectLocalStorage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/projectLocalStorage.js */ "./src/services/projectLocalStorage.js");



const handleTaskTitleBlur = (project, taskElement, todoItem, taskTitle) => {
  const newTitle = taskTitle.textContent.trim();
  if (newTitle !== todoItem.getTitle()) {
    todoItem.updateTitle(newTitle);
    (0,_services_projectLocalStorage_js__WEBPACK_IMPORTED_MODULE_1__.updateTodoItemStorage)(project);
    (0,_ui_updateTaskElement_js__WEBPACK_IMPORTED_MODULE_0__.updateTaskElement)(project, taskElement, todoItem);
  }
};

const handleTaskTitleKeyDown = (event, taskTitle) => {
  if (event.key === "Enter") {
    event.preventDefault();
    taskTitle.blur();
  }
};




/***/ }),

/***/ "./src/helpers/dateFormatter.js":
/*!**************************************!*\
  !*** ./src/helpers/dateFormatter.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dueInDaysString: () => (/* binding */ dueInDaysString),
/* harmony export */   dueOnMonthStringDate: () => (/* binding */ dueOnMonthStringDate),
/* harmony export */   formatDateForInput: () => (/* binding */ formatDateForInput),
/* harmony export */   parseDateFromInput: () => (/* binding */ parseDateFromInput)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/format.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/parseISO.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/differenceInDays.mjs");


const formatDateForInput = (date) => {
  return (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.format)(date, "yyyy-MM-dd");
};

const parseDateFromInput = (dateString) => {
  return (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.parseISO)(dateString);
};

const dueOnMonthStringDate = (date) => {
  return `Due on ${(0,date_fns__WEBPACK_IMPORTED_MODULE_0__.format)(date, "MMMM do, yyyy")}`;
};

const dueInDaysString = (dueDate) => {
  const today = new Date();
  const daysUntilDue = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.differenceInDays)(dueDate, today);

  if (daysUntilDue > 0) {
    return `Due in ${daysUntilDue} days`;
  } else if (daysUntilDue === 0) {
    return `Due today`;
  } else {
    return `Overdue by ${Math.abs(daysUntilDue)} days`;
  }
};




/***/ }),

/***/ "./src/helpers/filter.js":
/*!*******************************!*\
  !*** ./src/helpers/filter.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   filterByCompleted: () => (/* binding */ filterByCompleted),
/* harmony export */   filterByInProgress: () => (/* binding */ filterByInProgress),
/* harmony export */   filterByNotStarted: () => (/* binding */ filterByNotStarted)
/* harmony export */ });
const filterByCompleted = (item) => item.getCompletedStatus();

const filterByInProgress = (item) => item.getInProgressStatus();

const filterByNotStarted = (item) =>
  !item.getInProgressStatus() && !item.getCompletedStatus();


/***/ }),

/***/ "./src/helpers/modalHelpers.js":
/*!*************************************!*\
  !*** ./src/helpers/modalHelpers.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addOverlay: () => (/* binding */ addOverlay),
/* harmony export */   closeModal: () => (/* binding */ closeModal),
/* harmony export */   createCloseModalBtn: () => (/* binding */ createCloseModalBtn),
/* harmony export */   createModalFormElement: () => (/* binding */ createModalFormElement),
/* harmony export */   createModalHeader: () => (/* binding */ createModalHeader),
/* harmony export */   displayModal: () => (/* binding */ displayModal),
/* harmony export */   removeOverlay: () => (/* binding */ removeOverlay)
/* harmony export */ });
const createModalHeader = (headerText, introImgPath, introText) => {
  const modalHeaderContainer = document.createElement("div");
  const header = document.createElement("h1");
  const modalIntro = document.createElement("div");
  const modalCartoonImage = document.createElement("img");
  const modalText = document.createElement("p");

  modalIntro.classList.add("modal-intro");
  modalText.classList.add("modal-text");

  header.textContent = headerText;
  modalCartoonImage.classList.add("modal-img");
  modalCartoonImage.src = introImgPath;
  modalText.textContent = introText;

  modalIntro.appendChild(modalCartoonImage);
  modalIntro.appendChild(modalText);

  modalHeaderContainer.appendChild(header);
  modalHeaderContainer.appendChild(modalIntro);

  return modalHeaderContainer;
};

const createModalFormElement = (
  type,
  id,
  labelText,
  isRequired,
  placeHolder = false
) => {
  const wrapper = document.createElement("div");
  const label = document.createElement("label");
  const input = document.createElement("input");

  label.for = id;
  label.textContent = labelText;
  input.type = type;
  input.id = id;
  if (placeHolder) input.placeholder = placeHolder;
  if (isRequired) input.required = true;

  wrapper.appendChild(label);
  wrapper.appendChild(input);
  return { wrapper, input };
};

const createCloseModalBtn = (modalType) => {
  const closeModalBtn = document.createElement("button");
  closeModalBtn.classList.add("close-btn");
  closeModalBtn.innerHTML = "&times;";
  closeModalBtn.addEventListener("click", () => closeModal(modalType));
  return closeModalBtn;
};

const closeModal = (modalType) => {
  removeModal(modalType);
  removeOverlay();
};

const displayModal = (modal) => {
  const contentContainer = document.querySelector("#content");
  contentContainer.appendChild(modal);
};

const removeModal = (modalTypeClass) => {
  const contentContainer = document.querySelector("#content");
  const modal = document.querySelector(modalTypeClass);
  if (modal) {
    contentContainer.removeChild(modal);
  }
};

const addOverlay = () => {
  const overlay = document.createElement("div");
  overlay.classList.add("overlay");

  overlay.addEventListener("click", () => {
    closeModal(".add-task-modal");
    closeModal(".add-project-modal");
    closeModal(".attribution-modal");
  });

  document.body.appendChild(overlay);
};

const removeOverlay = () => {
  const overlay = document.querySelector(".overlay");
  if (overlay) {
    overlay.remove();
  }
};



/***/ }),

/***/ "./src/helpers/rearrangeTodoList.js":
/*!******************************************!*\
  !*** ./src/helpers/rearrangeTodoList.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   rearrangeTodoList: () => (/* binding */ rearrangeTodoList)
/* harmony export */ });
const rearrangeTodoList = (originalTodoList, selectedOption) => {
  if (selectedOption === "priority") {
    return originalTodoList.getPrioritySortedList();
  } else if (selectedOption === "due-date") {
    return originalTodoList.getDueDateSortedList();
  } else if (selectedOption === "completed") {
    return originalTodoList.getCompletedFilteredList();
  } else if (selectedOption === "in-progress") {
    return originalTodoList.getInProgressFilteredList();
  } else if (selectedOption === "not-started") {
    return originalTodoList.getNotStartedFilteredList();
  }
};




/***/ }),

/***/ "./src/helpers/setRandomParameters.js":
/*!********************************************!*\
  !*** ./src/helpers/setRandomParameters.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getRandomDateString: () => (/* binding */ getRandomDateString),
/* harmony export */   setRandomItemStatus: () => (/* binding */ setRandomItemStatus)
/* harmony export */ });
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




/***/ }),

/***/ "./src/helpers/setStatusText.js":
/*!**************************************!*\
  !*** ./src/helpers/setStatusText.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   statusText: () => (/* binding */ statusText)
/* harmony export */ });
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



/***/ }),

/***/ "./src/helpers/sorting.js":
/*!********************************!*\
  !*** ./src/helpers/sorting.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sortByDueDate: () => (/* binding */ sortByDueDate),
/* harmony export */   sortByPriority: () => (/* binding */ sortByPriority)
/* harmony export */ });
const sortByDueDate = (a, b) => {
  return a.getDueDate() - b.getDueDate();
};

const sortByPriority = (a, b) => {
  return b.getPriorityStatus() - a.getPriorityStatus();
};


/***/ }),

/***/ "./src/models/project.js":
/*!*******************************!*\
  !*** ./src/models/project.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const project = (name, imagePath, todoList) => ({
  name,
  imagePath,
  todoList,

  updateName(newName) {
    this.name = newName;
  },

  updateImage(newImage) {
    this.imagePath = newImage;
  },

  getName() {
    return this.name;
  },

  getImagePath() {
    return this.imagePath;
  },

  getTodoList() {
    return this.todoList;
  },
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (project);


/***/ }),

/***/ "./src/models/projectList.js":
/*!***********************************!*\
  !*** ./src/models/projectList.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/differenceInDays.mjs");
/* harmony import */ var _helpers_sorting_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/sorting.js */ "./src/helpers/sorting.js");



const projectList = () => ({
  projectList: [],

  addProject(project) {
    this.projectList.push(project);
  },

  removeProject(project) {
    const index = this.projectList.indexOf(project);
    this.projectList.splice(index, 1);
  },

  getProjects() {
    return this.projectList;
  },

  totalCompletedTasksPercentage() {
    return (this.calculateCompletedTasks() / this.calculateTotalTasks()) * 100;
  },

  totalNotStartedTasksPercentage() {
    return (this.calculateNotStartedTasks() / this.calculateTotalTasks()) * 100;
  },

  totalInProgressTasksPercentage() {
    return (this.calculateInProgressTasks() / this.calculateTotalTasks()) * 100;
  },

  totalOverdueTasksPercentage() {
    return (this.getOverdueTasks().length / this.calculateTotalTasks()) * 100;
  },

  calculateTotalTasks() {
    let totalTasks = 0;
    this.projectList.forEach((project) => {
      const todoList = project.getTodoList();
      totalTasks += todoList.getTodoItems().length;
    });
    return totalTasks;
  },

  calculateCompletedTasks() {
    let completedTasks = 0;
    this.projectList.forEach((project) => {
      const todoList = project.getTodoList();
      completedTasks += todoList.getCompletedFilteredList().length;
    });
    return completedTasks;
  },

  calculateNotStartedTasks() {
    let notStartedTasks = 0;
    this.projectList.forEach((project) => {
      const todoList = project.getTodoList();
      notStartedTasks += todoList.getNotStartedFilteredList().length;
    });
    return notStartedTasks;
  },

  calculateInProgressTasks() {
    let inProgressTasks = 0;
    this.projectList.forEach((project) => {
      const todoList = project.getTodoList();
      inProgressTasks += todoList.getInProgressFilteredList().length;
    });
    return inProgressTasks;
  },

  getTasksByDueDateCondition(condition, daysThreshold = 30) {
    const currentDate = new Date();
    const filteredTasks = [];

    this.projectList.forEach((project) => {
      const todoList = project.getTodoList();
      const notStartedTasks = todoList.getNotStartedFilteredList();
      const inProgressTasks = todoList.getInProgressFilteredList();
      const allRelevantTasks = [...notStartedTasks, ...inProgressTasks];

      const tasksMatchingCondition = allRelevantTasks.filter((task) => {
        const dueDate = task.getDueDate();
        const daysDiff = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.differenceInDays)(dueDate, currentDate);
        return condition(daysDiff, daysThreshold);
      });

      tasksMatchingCondition.forEach((task) => {
        filteredTasks.push({ task, project });
      });
    });
    filteredTasks.sort(this.sortTasksByDueDate);
    return filteredTasks;
  },

  getDueSoonTasks(daysThreshold = 30) {
    return this.getTasksByDueDateCondition(
      (daysDiff, threshold) => daysDiff <= threshold && daysDiff >= 0,
      daysThreshold
    );
  },

  getOverdueTasks() {
    return this.getTasksByDueDateCondition((daysDiff) => daysDiff < 0);
  },

  sortTasksByDueDate(a, b) {
    return (0,_helpers_sorting_js__WEBPACK_IMPORTED_MODULE_0__.sortByDueDate)(a.task, b.task);
  },
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectList);


/***/ }),

/***/ "./src/models/todoItem.js":
/*!********************************!*\
  !*** ./src/models/todoItem.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const todoItem = (
  title,
  description,
  dueDate,
  priority,
  status = "pending"
) => ({
  title,
  description,
  dueDate: new Date(dueDate),
  priority: priorityMap[priority.toLowerCase()],
  inProgress: statusMap[status].inProgress,
  completed: statusMap[status].completed,
  status,

  toggleComplete() {
    this.completed = !this.completed;

    if (this.completed && this.inProgress) {
      this.inProgress = false;
    }
  },

  toggleInProgress() {
    this.inProgress = !this.inProgress;

    if (this.inProgress && this.completed) {
      this.completed = false;
    }
  },

  updateTitle(newTitle) {
    this.title = newTitle;
  },

  updateDescription(newDescription) {
    this.description = newDescription;
  },

  updatePriority(newPriority) {
    this.priority = priorityMap[newPriority.toLowerCase()];
  },

  updateDueDate(newDueDate) {
    this.dueDate = newDueDate;
  },

  updateStatus() {
    const currentStatus = {
      inProgress: this.getInProgressStatus(),
      completed: this.getCompletedStatus(),
    };

    for (const [key, value] of Object.entries(statusMap)) {
      if (
        value.inProgress === currentStatus.inProgress &&
        value.completed === currentStatus.completed
      ) {
        this.status = key;
        return;
      }
    }
  },

  getTitle() {
    return this.title;
  },

  getDescription() {
    return this.description;
  },

  getDueDate() {
    return this.dueDate;
  },

  getPriorityStatus() {
    return this.priority;
  },

  getPriorityStringStatus(intValue) {
    for (const [priorityStringValue, priorityIntValue] of Object.entries(
      priorityMap
    )) {
      if (priorityIntValue === intValue) {
        return priorityStringValue;
      }
    }
  },

  getInProgressStatus() {
    return this.inProgress;
  },

  getCompletedStatus() {
    return this.completed;
  },

  getStatus() {
    return this.status;
  },
});

const priorityMap = {
  low: 1,
  medium: 2,
  high: 3,
};

const statusMap = {
  pending: { inProgress: false, completed: false },
  inProgress: { inProgress: true, completed: false },
  complete: { inProgress: false, completed: true },
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todoItem);


/***/ }),

/***/ "./src/models/todoList.js":
/*!********************************!*\
  !*** ./src/models/todoList.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/filter.js */ "./src/helpers/filter.js");
/* harmony import */ var _helpers_sorting_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/sorting.js */ "./src/helpers/sorting.js");




const todoList = () => ({
  todoList: [],
  completedPercentage: 0,
  inProgressPercentage: 0,
  notStartedPercentage: 0,

  addTodoItem(item) {
    this.todoList.push(item);
    this.calculatePercentages();
  },

  addItemToFront(item) {
    this.todoList.unshift(item);
    this.calculatePercentages();
  },

  removeTodoItem(item) {
    const index = this.todoList.indexOf(item);
    this.todoList.splice(index, 1);
    this.calculatePercentages();
  },

  sortItems(sortFunction) {
    const sortedList = [...this.todoList];
    sortedList.sort(sortFunction);
    return sortedList;
  },

  filterItems(filterFunction) {
    const filteredList = this.todoList.filter(filterFunction);
    return filteredList;
  },

  getTodoItems() {
    return this.todoList;
  },

  getDueDateSortedList() {
    return this.sortItems(_helpers_sorting_js__WEBPACK_IMPORTED_MODULE_1__.sortByDueDate);
  },

  getPrioritySortedList() {
    return this.sortItems(_helpers_sorting_js__WEBPACK_IMPORTED_MODULE_1__.sortByPriority);
  },

  getCompletedFilteredList() {
    return this.filterItems(_helpers_filter_js__WEBPACK_IMPORTED_MODULE_0__.filterByCompleted);
  },

  getInProgressFilteredList() {
    return this.filterItems(_helpers_filter_js__WEBPACK_IMPORTED_MODULE_0__.filterByInProgress);
  },

  getNotStartedFilteredList() {
    return this.filterItems(_helpers_filter_js__WEBPACK_IMPORTED_MODULE_0__.filterByNotStarted);
  },

  getCompletedPercentage() {
    return this.completedPercentage;
  },

  getInProgressPercentage() {
    return this.inProgressPercentage;
  },

  getNotStartedPercentage() {
    return this.notStartedPercentage;
  },

  calculatePercentages() {
    const completedItems = this.filterItems(_helpers_filter_js__WEBPACK_IMPORTED_MODULE_0__.filterByCompleted);
    const inProgressItems = this.filterItems(_helpers_filter_js__WEBPACK_IMPORTED_MODULE_0__.filterByInProgress);
    const notStartedItems = this.filterItems(_helpers_filter_js__WEBPACK_IMPORTED_MODULE_0__.filterByNotStarted);

    const totalItems = this.todoList.length;
    const calculatePercent = (count) =>
      totalItems === 0 ? 0 : (count / totalItems) * 100;

    this.completedPercentage = calculatePercent(completedItems.length);
    this.inProgressPercentage = calculatePercent(inProgressItems.length);
    this.notStartedPercentage = calculatePercent(notStartedItems.length);
  },
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todoList);


/***/ }),

/***/ "./src/pages/allProjectsPage.js":
/*!**************************************!*\
  !*** ./src/pages/allProjectsPage.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createAllProjectsPage: () => (/* binding */ createAllProjectsPage),
/* harmony export */   renderProjectList: () => (/* binding */ renderProjectList)
/* harmony export */ });
/* harmony import */ var _projectPage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectPage.js */ "./src/pages/projectPage.js");
/* harmony import */ var _ui_createTitle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/createTitle.js */ "./src/ui/createTitle.js");
/* harmony import */ var _ui_createAddProjectBtn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/createAddProjectBtn.js */ "./src/ui/createAddProjectBtn.js");
/* harmony import */ var _services_projectListFactory_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/projectListFactory.js */ "./src/services/projectListFactory.js");
/* harmony import */ var _ui_createRemoveBtn_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/createRemoveBtn.js */ "./src/ui/createRemoveBtn.js");






const createAllProjectsPage = () => {
  const contentContainer = document.querySelector("#content");
  const titleContainer = document.querySelector(".page-title");

  const dashboardContainer = document.createElement("div");
  dashboardContainer.appendChild(renderProjectList());

  titleContainer.appendChild((0,_ui_createTitle_js__WEBPACK_IMPORTED_MODULE_1__.createPageHeader)("All Projects"));
  titleContainer.appendChild((0,_ui_createTitle_js__WEBPACK_IMPORTED_MODULE_1__.createAllProjectPageHeaderImg)());
  contentContainer.appendChild(dashboardContainer);
};

const renderProjectList = () => {
  const allProjectsContainer = document.createElement("div");
  allProjectsContainer.classList.add("dashboard-all-projects");
  allProjectsContainer.appendChild((0,_ui_createAddProjectBtn_js__WEBPACK_IMPORTED_MODULE_2__.createAddProjectBtn)());

  const projectList = (0,_services_projectListFactory_js__WEBPACK_IMPORTED_MODULE_3__.createProjectListFromData)();
  const projects = (0,_services_projectListFactory_js__WEBPACK_IMPORTED_MODULE_3__.createProjectListFromData)().getProjects();

  projects.forEach((projectData) => {
    const projectDisplay = createProjectDisplayBox(projectData, projectList);
    allProjectsContainer.appendChild(projectDisplay);
  });

  return allProjectsContainer;
};

const createProjectDisplayBox = (project, projectList) => {
  const projectContainer = document.createElement("div");
  projectContainer.classList.add("project-box");
  const projectName = project.getName();
  const projectPath = project.getImagePath();
  const projectPercentComplete = project.getTodoList().getCompletedPercentage();

  const projectHeader = document.createElement("h5");
  const projectImage = document.createElement("img");

  projectHeader.textContent = projectName;

  if (projectPath.startsWith("data:image/")) {
    projectImage.src = projectPath;
  } else {
    projectImage.src = __webpack_require__("./src/assets/images sync recursive ^\\.\\/.*$")(`./${projectPath}`);
  }

  projectContainer.classList.add("project-box");
  projectImage.classList.add("project-img");

  projectContainer.appendChild((0,_ui_createRemoveBtn_js__WEBPACK_IMPORTED_MODULE_4__.createRemoveProjectBtn)(project, projectList));
  projectContainer.appendChild(projectHeader);
  projectContainer.appendChild(projectImage);
  projectContainer.appendChild(createProgressBar(projectPercentComplete));

  projectContainer.addEventListener("mouseover", () => {
    (0,_ui_createRemoveBtn_js__WEBPACK_IMPORTED_MODULE_4__.displayRemoveBtn)(projectContainer, "remove-project-btn");
  });

  projectContainer.addEventListener("mouseout", () => {
    (0,_ui_createRemoveBtn_js__WEBPACK_IMPORTED_MODULE_4__.hideRemoveBtn)(projectContainer, "remove-project-btn");
  });

  projectContainer.addEventListener("click", () =>
    (0,_projectPage_js__WEBPACK_IMPORTED_MODULE_0__.createProjectPage)(project, createAllProjectsPage)
  );

  return projectContainer;
};

const createProgressBar = (percentCompleted) => {
  const progressBar = document.createElement("div");
  const completeBar = document.createElement("div");
  const progressBarText = document.createElement("span");

  progressBar.classList.add("progress-bar");
  completeBar.classList.add("progress-bar-completed");
  progressBarText.classList.add("progress-bar-text");

  progressBar.appendChild(completeBar);
  progressBar.appendChild(progressBarText);

  updateProgressBar(percentCompleted, progressBar);
  return progressBar;
};

const updateProgressBar = (percentCompleted, progressBar) => {
  const progressBarCompleted = progressBar.querySelector(
    ".progress-bar-completed"
  );
  const progressBarText = progressBar.querySelector(".progress-bar-text");

  if (progressBarCompleted) {
    progressBarCompleted.style.width = `${percentCompleted}%`;
    progressBarText.textContent = `${percentCompleted.toFixed(0)}% Completed`;
  }
};




/***/ }),

/***/ "./src/pages/homePage.js":
/*!*******************************!*\
  !*** ./src/pages/homePage.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ui_createTitle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/createTitle.js */ "./src/ui/createTitle.js");
/* harmony import */ var _ui_createContent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/createContent.js */ "./src/ui/createContent.js");



const createHomePage = () => {
  const contentContainer = document.querySelector("#content");
  const titleContainer = document.querySelector(".page-title");
  const dashboardContainer = document.createElement("div");

  dashboardContainer.appendChild((0,_ui_createContent_js__WEBPACK_IMPORTED_MODULE_1__.createHomePageDashboard)());
  titleContainer.appendChild((0,_ui_createTitle_js__WEBPACK_IMPORTED_MODULE_0__.createPageHeader)("Home"));
  titleContainer.appendChild((0,_ui_createTitle_js__WEBPACK_IMPORTED_MODULE_0__.createProjectPageHeaderImg)("kitten-sitting.png"));
  contentContainer.appendChild(dashboardContainer);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHomePage);


/***/ }),

/***/ "./src/pages/projectPage.js":
/*!**********************************!*\
  !*** ./src/pages/projectPage.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createProjectPage: () => (/* binding */ createProjectPage)
/* harmony export */ });
/* harmony import */ var _ui_clearDisplay_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/clearDisplay.js */ "./src/ui/clearDisplay.js");
/* harmony import */ var _ui_createTitle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/createTitle.js */ "./src/ui/createTitle.js");
/* harmony import */ var _ui_createContent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/createContent.js */ "./src/ui/createContent.js");




const createProjectPage = (project, previousPage) => {
  (0,_ui_clearDisplay_js__WEBPACK_IMPORTED_MODULE_0__.clearContentTitleDisplay)();

  const contentContainer = document.querySelector("#content");
  const titleContainer = document.querySelector(".page-title");

  const projectName = project.getName();
  const projectPath = project.getImagePath();

  titleContainer.appendChild((0,_ui_createTitle_js__WEBPACK_IMPORTED_MODULE_1__.createPageHeader)(projectName));
  titleContainer.appendChild((0,_ui_createTitle_js__WEBPACK_IMPORTED_MODULE_1__.createProjectPageHeaderImg)(projectPath));
  contentContainer.appendChild(
    (0,_ui_createContent_js__WEBPACK_IMPORTED_MODULE_2__.createProjectPageDashboard)(project, previousPage)
  );
};




/***/ }),

/***/ "./src/services/projectFactory.js":
/*!****************************************!*\
  !*** ./src/services/projectFactory.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createProjectFromData: () => (/* binding */ createProjectFromData),
/* harmony export */   createProjectFromInput: () => (/* binding */ createProjectFromInput)
/* harmony export */ });
/* harmony import */ var _models_project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/project.js */ "./src/models/project.js");
/* harmony import */ var _models_todoList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/todoList.js */ "./src/models/todoList.js");
/* harmony import */ var _models_todoItem_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/todoItem.js */ "./src/models/todoItem.js");




const createProjectFromData = (projectData) => {
  const projectTodoList = (0,_models_todoList_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  projectData.todoItems.forEach((todoItemData) => {
    const newTodoItem = (0,_models_todoItem_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
      todoItemData.title,
      todoItemData.description,
      todoItemData.dueDate,
      todoItemData.priority,
      todoItemData.status
    );
    projectTodoList.addTodoItem(newTodoItem);
  });
  return (0,_models_project_js__WEBPACK_IMPORTED_MODULE_0__["default"])(projectData.name, projectData.path, projectTodoList);
};

const createProjectFromInput = (projectName, projectImgPath) => {
  return (0,_models_project_js__WEBPACK_IMPORTED_MODULE_0__["default"])(projectName, projectImgPath, (0,_models_todoList_js__WEBPACK_IMPORTED_MODULE_1__["default"])());
};



/***/ }),

/***/ "./src/services/projectListFactory.js":
/*!********************************************!*\
  !*** ./src/services/projectListFactory.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createProjectListFromData: () => (/* binding */ createProjectListFromData)
/* harmony export */ });
/* harmony import */ var _projectFactory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectFactory.js */ "./src/services/projectFactory.js");
/* harmony import */ var _models_projectList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/projectList.js */ "./src/models/projectList.js");
/* harmony import */ var _projectLocalStorage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectLocalStorage.js */ "./src/services/projectLocalStorage.js");




const createProjectListFromData = () => {
  const storedData = (0,_projectLocalStorage_js__WEBPACK_IMPORTED_MODULE_2__.getProjectsData)();
  const projectListInstance = (0,_models_projectList_js__WEBPACK_IMPORTED_MODULE_1__["default"])();

  if (storedData && Array.isArray(storedData)) {
    storedData.forEach((projectData) => {
      const newProject = (0,_projectFactory_js__WEBPACK_IMPORTED_MODULE_0__.createProjectFromData)(projectData);
      projectListInstance.addProject(newProject);
    });
  }

  return projectListInstance;
};




/***/ }),

/***/ "./src/services/projectLocalStorage.js":
/*!*********************************************!*\
  !*** ./src/services/projectLocalStorage.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getProjectsData: () => (/* binding */ getProjectsData),
/* harmony export */   initializeDefaultProjectData: () => (/* binding */ initializeDefaultProjectData),
/* harmony export */   removeProjectFromStorage: () => (/* binding */ removeProjectFromStorage),
/* harmony export */   removeTodoItemFromStorage: () => (/* binding */ removeTodoItemFromStorage),
/* harmony export */   saveUserProjectData: () => (/* binding */ saveUserProjectData),
/* harmony export */   updateTodoItemStorage: () => (/* binding */ updateTodoItemStorage)
/* harmony export */ });
/* harmony import */ var _helpers_setRandomParameters_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/setRandomParameters.js */ "./src/helpers/setRandomParameters.js");
/* harmony import */ var _data_defaultProjectData_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/defaultProjectData.json */ "./src/data/defaultProjectData.json");



const convertDefaultProjectData = () => {
  return _data_defaultProjectData_json__WEBPACK_IMPORTED_MODULE_1__.map((projectData) => {
    const todoItems = projectData.todoItems.map((todoItemData) => ({
      title: todoItemData.title,
      description: todoItemData.description,
      dueDate: (0,_helpers_setRandomParameters_js__WEBPACK_IMPORTED_MODULE_0__.getRandomDateString)(todoItemData.daysRange),
      priority: todoItemData.priority,
      status: (0,_helpers_setRandomParameters_js__WEBPACK_IMPORTED_MODULE_0__.setRandomItemStatus)(),
    }));
    return {
      name: projectData.name,
      path: projectData.path,
      todoItems,
    };
  });
};

const convertUserProjectData = (project) => {
  const todoItems = project
    .getTodoList()
    .getTodoItems()
    .map((todoItem) => {
      const priorityValue = todoItem.getPriorityStatus();
      const priorityString = todoItem.getPriorityStringStatus(priorityValue);

      return {
        title: todoItem.getTitle(),
        description: todoItem.getDescription(),
        dueDate: todoItem.getDueDate(),
        priority: priorityString,
        status: todoItem.getStatus(),
      };
    });

  return {
    name: project.getName(),
    path: project.getImagePath(),
    todoItems,
  };
};

const initializeDefaultProjectData = () => {
  const existingProjectsData = getProjectsData();
  if (!existingProjectsData) {
    const convertedData = convertDefaultProjectData();
    storeProjectsData(convertedData);
  }
};

const saveUserProjectData = (newProject) => {
  const existingProjectsData = getProjectsData();
  const newProjectData = convertUserProjectData(newProject);
  const updatedProjectsData = mergeExistingData(existingProjectsData, [
    newProjectData,
  ]);
  storeProjectsData(updatedProjectsData);
};

const mergeExistingData = (existingData, newData) => {
  return [...newData, ...existingData];
};

const storeProjectsData = (projectsData) => {
  try {
    localStorage.setItem("projectList", JSON.stringify(projectsData));
  } catch (error) {
    console.error("Error storing data in localStorage", error);
  }
};

const getProjectsData = () => {
  try {
    return JSON.parse(localStorage.getItem("projectList"));
  } catch (error) {
    console.error("Error retrieving data from localStorage:", error);
    return null;
  }
};

const updateTodoItemStorage = (updatedProject) => {
  const existingProjectsData = getProjectsData();
  const updatedProjectsData = existingProjectsData.map((projectData) => {
    if (projectData.name === updatedProject.getName()) {
      return convertUserProjectData(updatedProject);
    }
    return projectData;
  });
  storeProjectsData(updatedProjectsData);
};

const removeTodoItemFromStorage = (project, todoItem) => {
  const existingProjectsData = getProjectsData();
  const updatedProjectsData = existingProjectsData.map((projectData) => {
    if (projectData.name === project.getName()) {
      const updateTodoItems = projectData.todoItems.filter(
        (item) => item.title !== todoItem.getTitle()
      );
      return { ...projectData, todoItems: updateTodoItems };
    }
    return projectData;
  });
  storeProjectsData(updatedProjectsData);
};

const removeProjectFromStorage = (projectToRemove) => {
  const existingProjectsData = getProjectsData();
  if (!existingProjectsData) {
    console.warn("No projects found in localStorage");
    return;
  }
  const updatedProjectsData = existingProjectsData.filter(
    (projectData) => projectData.name !== projectToRemove.getName()
  );

  storeProjectsData(updatedProjectsData);
};




/***/ }),

/***/ "./src/services/todoItemFactory.js":
/*!*****************************************!*\
  !*** ./src/services/todoItemFactory.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTodoItemFromInput: () => (/* binding */ createTodoItemFromInput)
/* harmony export */ });
/* harmony import */ var _models_todoItem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/todoItem.js */ "./src/models/todoItem.js");


const createTodoItemFromInput = (title, description, dueDate, priority) => {
  return (0,_models_todoItem_js__WEBPACK_IMPORTED_MODULE_0__["default"])(title, description, dueDate, priority);
};




/***/ }),

/***/ "./src/ui/clearDisplay.js":
/*!********************************!*\
  !*** ./src/ui/clearDisplay.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearContentContainer: () => (/* binding */ clearContentContainer),
/* harmony export */   clearContentTitleDisplay: () => (/* binding */ clearContentTitleDisplay)
/* harmony export */ });
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




/***/ }),

/***/ "./src/ui/createAddProjectBtn.js":
/*!***************************************!*\
  !*** ./src/ui/createAddProjectBtn.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createAddProjectBtn: () => (/* binding */ createAddProjectBtn)
/* harmony export */ });
/* harmony import */ var _eventHandlers_handleAddProjectBtn_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../eventHandlers/handleAddProjectBtn.js */ "./src/eventHandlers/handleAddProjectBtn.js");


const createAddProjectBtn = () => {
  const addProjectBtn = document.createElement("button");
  const btnImage = document.createElement("img");
  addProjectBtn.classList.add("add-project-btn");
  btnImage.classList.add("add-project-btn-img");
  btnImage.src = __webpack_require__(/*! ../assets/images/add-project-btn-2.png */ "./src/assets/images/add-project-btn-2.png");
  addProjectBtn.addEventListener("click", _eventHandlers_handleAddProjectBtn_js__WEBPACK_IMPORTED_MODULE_0__.handleAddProjectBtn);
  addProjectBtn.appendChild(btnImage);
  return addProjectBtn;
};




/***/ }),

/***/ "./src/ui/createAddTaskBtn.js":
/*!************************************!*\
  !*** ./src/ui/createAddTaskBtn.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createAddTaskBtn: () => (/* binding */ createAddTaskBtn)
/* harmony export */ });
/* harmony import */ var _eventHandlers_handleAddTaskBtn_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../eventHandlers/handleAddTaskBtn.js */ "./src/eventHandlers/handleAddTaskBtn.js");


const createAddTaskBtn = (project) => {
  const addTaskContainer = document.createElement("div");
  addTaskContainer.classList.add("add-task-container");
  const addBtn = document.createElement("button");
  addBtn.classList.add("add-task-btn");
  const addText = document.createElement("span");
  addBtn.textContent = "+";
  addText.textContent = "Add New Task";

  addBtn.addEventListener("click", () => {
    (0,_eventHandlers_handleAddTaskBtn_js__WEBPACK_IMPORTED_MODULE_0__.handleAddTaskBtn)(project);
  });

  addTaskContainer.appendChild(addBtn);
  addTaskContainer.appendChild(addText);

  return addTaskContainer;
};



/***/ }),

/***/ "./src/ui/createBackBtn.js":
/*!*********************************!*\
  !*** ./src/ui/createBackBtn.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createBackBtn: () => (/* binding */ createBackBtn)
/* harmony export */ });
/* harmony import */ var _eventHandlers_handleBackBtn_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../eventHandlers/handleBackBtn.js */ "./src/eventHandlers/handleBackBtn.js");


const createBackBtn = (previousPage) => {
  const backBtn = document.createElement("button");
  backBtn.classList.add("back-button");
  backBtn.textContent = "< Go Back";
  backBtn.addEventListener("click", () => (0,_eventHandlers_handleBackBtn_js__WEBPACK_IMPORTED_MODULE_0__.handleBackBtn)(previousPage));
  return backBtn;
};




/***/ }),

/***/ "./src/ui/createBadge.js":
/*!*******************************!*\
  !*** ./src/ui/createBadge.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createBadge: () => (/* binding */ createBadge)
/* harmony export */ });
const createBadge = (percentage, level) => {
  const badge = document.createElement("div");
  badge.classList.add("badge");

  const img = createBadgeImage(level);
  const percentText = createBadgeText(level);

  addOverlay(percentage, level, badge);

  badge.appendChild(img);
  badge.appendChild(percentText);
  return badge;
};

const createBadgeImage = (level) => {
  const img = document.createElement("img");
  img.classList.add("badge-img");
  img.src = __webpack_require__("./src/assets/images/badges sync recursive ^\\.\\/lvl\\-.*\\.png$")(`./lvl-${level / 20}.png`);
  img.alt = `Level ${level}%`;
  return img;
};

const createBadgeText = (level) => {
  const percentText = document.createElement("h6");
  percentText.textContent = levelName(level / 20);
  return percentText;
};

const levelName = (level) => {
  const levelNames = [
    "Thread Finder",
    "Unraveling Apprentice",
    "Diligent De-tangler",
    "Focused Weaver",
    "Yarn Yoda",
  ];
  return levelNames[level - 1];
};

const addOverlay = (percentage, level, badge) => {
  const levelMet = percentage >= level;
  if (percentage === 0 || !levelMet) {
    const overlay = document.createElement("div");
    overlay.classList.add("badge-overlay");
    badge.appendChild(overlay);
  }
};




/***/ }),

/***/ "./src/ui/createBadgesContainer.js":
/*!*****************************************!*\
  !*** ./src/ui/createBadgesContainer.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createBadgesContainer: () => (/* binding */ createBadgesContainer)
/* harmony export */ });
/* harmony import */ var _services_projectListFactory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/projectListFactory.js */ "./src/services/projectListFactory.js");
/* harmony import */ var _createBadge_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createBadge.js */ "./src/ui/createBadge.js");



const createBadgesContainer = () => {
  const badgeContainer = document.createElement("div");
  badgeContainer.classList.add("badge-container");

  const badgeHeader = createBadgeHeader();

  const allBadgesContainer = createAllBadgesContainer();

  badgeContainer.appendChild(badgeHeader);
  badgeContainer.appendChild(allBadgesContainer);

  return badgeContainer;
};

const createBadgeHeader = () => {
  const badgeHeader = document.createElement("h4");
  badgeHeader.textContent = "Milestone Badges";
  return badgeHeader;
};

const createAllBadgesContainer = () => {
  const allBadgesContainer = document.createElement("div");
  allBadgesContainer.classList.add("all-badges");

  const badgeLevels = [20, 40, 60, 80, 100];
  const projectList = (0,_services_projectListFactory_js__WEBPACK_IMPORTED_MODULE_0__.createProjectListFromData)();

  badgeLevels.forEach((level) => {
    const badge = (0,_createBadge_js__WEBPACK_IMPORTED_MODULE_1__.createBadge)(
      projectList.totalCompletedTasksPercentage(),
      level
    );
    allBadgesContainer.appendChild(badge);
  });
  return allBadgesContainer;
};




/***/ }),

/***/ "./src/ui/createCircularProgressBar.js":
/*!*********************************************!*\
  !*** ./src/ui/createCircularProgressBar.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createCircularProgressBar: () => (/* binding */ createCircularProgressBar)
/* harmony export */ });
const createCircularProgressBar = (percentage, status) => {
  const progressBar = document.createElement("div");
  const className = progressBarConfig[status] || "default-bar-color";
  progressBar.classList.add(className);
  progressBar.role = "progressbar";
  progressBar.ariaValuenow = percentage;
  progressBar.ariaValuemin = "0";
  progressBar.ariaValuemax = "100";
  progressBar.style.setProperty("--value", percentage);
  progressBar.dataset.percentage = percentage.toFixed(0);

  return progressBar;
};

const progressBarConfig = {
  Completed: "completed-bar-color",
  "In Progress": "in-progress-bar-color",
  "Not Started": "not-started-bar-color",
  Overdue: "overdue-bar-color",
};




/***/ }),

/***/ "./src/ui/createContent.js":
/*!*********************************!*\
  !*** ./src/ui/createContent.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createHomePageDashboard: () => (/* binding */ createHomePageDashboard),
/* harmony export */   createProjectPageDashboard: () => (/* binding */ createProjectPageDashboard)
/* harmony export */ });
/* harmony import */ var _createBackBtn_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createBackBtn.js */ "./src/ui/createBackBtn.js");
/* harmony import */ var _createStatsContainer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createStatsContainer.js */ "./src/ui/createStatsContainer.js");
/* harmony import */ var _createTodoListContainer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createTodoListContainer.js */ "./src/ui/createTodoListContainer.js");
/* harmony import */ var _createBadgesContainer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createBadgesContainer.js */ "./src/ui/createBadgesContainer.js");
/* harmony import */ var _createTimeSensitiveContainer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createTimeSensitiveContainer.js */ "./src/ui/createTimeSensitiveContainer.js");
/* harmony import */ var _createFocusProjectsContainer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./createFocusProjectsContainer.js */ "./src/ui/createFocusProjectsContainer.js");







const createProjectPageDashboard = (project, previousPage) => {
  const dashboardContainer = document.createElement("div");
  dashboardContainer.classList.add("project-dashboard");

  const completedPercentage = project.getTodoList().getCompletedPercentage();
  const inProgressPercentage = project.getTodoList().getInProgressPercentage();
  const notStartedPercentage = project.getTodoList().getNotStartedPercentage();
  const todoList = project.getTodoList();
  const todoItems = project.getTodoList().getTodoItems();

  dashboardContainer.appendChild((0,_createBackBtn_js__WEBPACK_IMPORTED_MODULE_0__.createBackBtn)(previousPage));
  dashboardContainer.appendChild(
    (0,_createStatsContainer_js__WEBPACK_IMPORTED_MODULE_1__.createStatsContainer)(
      completedPercentage,
      inProgressPercentage,
      notStartedPercentage
    )
  );
  dashboardContainer.appendChild(
    (0,_createTodoListContainer_js__WEBPACK_IMPORTED_MODULE_2__.createTodoListContainer)(project, todoList, todoItems)
  );
  return dashboardContainer;
};

const createHomePageDashboard = () => {
  const dashboardContainer = document.createElement("div");
  dashboardContainer.classList.add("home-dashboard");

  dashboardContainer.appendChild((0,_createBadgesContainer_js__WEBPACK_IMPORTED_MODULE_3__.createBadgesContainer)());
  dashboardContainer.appendChild((0,_createTimeSensitiveContainer_js__WEBPACK_IMPORTED_MODULE_4__.createDueSoonContainer)());
  dashboardContainer.appendChild((0,_createTimeSensitiveContainer_js__WEBPACK_IMPORTED_MODULE_4__.createOverdueContainer)());
  dashboardContainer.appendChild((0,_createFocusProjectsContainer_js__WEBPACK_IMPORTED_MODULE_5__.createFocusProjectsContainer)());
  return dashboardContainer;
};




/***/ }),

/***/ "./src/ui/createFocusProjectsContainer.js":
/*!************************************************!*\
  !*** ./src/ui/createFocusProjectsContainer.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createFocusProjectsContainer: () => (/* binding */ createFocusProjectsContainer)
/* harmony export */ });
/* harmony import */ var _createProgressContainer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createProgressContainer.js */ "./src/ui/createProgressContainer.js");
/* harmony import */ var _services_projectListFactory_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/projectListFactory.js */ "./src/services/projectListFactory.js");
/* harmony import */ var _helpers_setStatusText_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/setStatusText.js */ "./src/helpers/setStatusText.js");




const createFocusProjectsContainer = () => {
  const projectList = (0,_services_projectListFactory_js__WEBPACK_IMPORTED_MODULE_1__.createProjectListFromData)();

  const notStartedPercentage = projectList.totalNotStartedTasksPercentage();
  const inProgressPercentage = projectList.totalInProgressTasksPercentage();
  const overDuePercentage = projectList.totalOverdueTasksPercentage();

  const focusContainer = createContainer("focus-stats-container");

  const focusHeader = document.createElement("h4");
  focusHeader.textContent = "Stats Zone";

  const statsContainer = createContainer("home-stats-container");

  const inProgressTasksContainer = createContainer("home-in-progress-bar");
  const notStartedTasksContainer = createContainer("home-not-started-bar");
  const overdueTasksContainer = createContainer("home-overdue-bar");

  inProgressTasksContainer.appendChild(
    (0,_createProgressContainer_js__WEBPACK_IMPORTED_MODULE_0__.createProgressContainer)(inProgressPercentage, "In Progress")
  );
  inProgressTasksContainer.appendChild(
    (0,_helpers_setStatusText_js__WEBPACK_IMPORTED_MODULE_2__.statusText)(inProgressPercentage, "in progress")
  );

  notStartedTasksContainer.appendChild(
    (0,_createProgressContainer_js__WEBPACK_IMPORTED_MODULE_0__.createProgressContainer)(notStartedPercentage, "Not Started")
  );
  notStartedTasksContainer.appendChild(
    (0,_helpers_setStatusText_js__WEBPACK_IMPORTED_MODULE_2__.statusText)(notStartedPercentage, "not started")
  );

  overdueTasksContainer.appendChild(
    (0,_createProgressContainer_js__WEBPACK_IMPORTED_MODULE_0__.createProgressContainer)(overDuePercentage, "Overdue")
  );
  overdueTasksContainer.appendChild((0,_helpers_setStatusText_js__WEBPACK_IMPORTED_MODULE_2__.statusText)(overDuePercentage, "overdue"));

  statsContainer.appendChild(inProgressTasksContainer);
  statsContainer.appendChild(notStartedTasksContainer);
  statsContainer.appendChild(overdueTasksContainer);

  focusContainer.appendChild(focusHeader);
  focusContainer.appendChild(statsContainer);

  return focusContainer;
};

const createContainer = (className) => {
  const container = document.createElement("div");
  container.classList.add(className);
  return container;
};




/***/ }),

/***/ "./src/ui/createModals.js":
/*!********************************!*\
  !*** ./src/ui/createModals.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createAddProjectModal: () => (/* binding */ createAddProjectModal),
/* harmony export */   createAddTaskModal: () => (/* binding */ createAddTaskModal),
/* harmony export */   createProjectForm: () => (/* binding */ createProjectForm)
/* harmony export */ });
/* harmony import */ var _helpers_modalHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/modalHelpers.js */ "./src/helpers/modalHelpers.js");
/* harmony import */ var _eventHandlers_handleProjectFormSubmission_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../eventHandlers/handleProjectFormSubmission.js */ "./src/eventHandlers/handleProjectFormSubmission.js");
/* harmony import */ var _eventHandlers_handleTaskFormSubmission_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../eventHandlers/handleTaskFormSubmission.js */ "./src/eventHandlers/handleTaskFormSubmission.js");
/* harmony import */ var _assets_images_kitten_on_moon_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/images/kitten-on-moon.png */ "./src/assets/images/kitten-on-moon.png");
/* harmony import */ var _assets_images_playing_yarn_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/images/playing-yarn.png */ "./src/assets/images/playing-yarn.png");






const createAddTaskModal = (project) => {
  const newTodoTaskModal = document.createElement("div");
  newTodoTaskModal.classList.add("add-task-modal");

  newTodoTaskModal.appendChild((0,_helpers_modalHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createCloseModalBtn)(".add-task-modal"));
  newTodoTaskModal.appendChild(
    (0,_helpers_modalHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createModalHeader)(
      "Create A New Task",
      _assets_images_kitten_on_moon_png__WEBPACK_IMPORTED_MODULE_3__,
      "Great job! You're making progress with every task. Let's keep the momentum going!"
    )
  );
  newTodoTaskModal.appendChild(createTaskForm(project));

  return newTodoTaskModal;
};

const createTaskForm = (project) => {
  const itemForm = document.createElement("form");
  const submitBtn = document.createElement("button");

  itemForm.classList.add("add-task-form");
  submitBtn.classList.add("add-task-submit-btn");
  submitBtn.textContent = "Create Project";

  submitBtn.textContent = "Add Task";

  const { wrapper: itemTitleWrapper, input: itemTitleInput } =
    (0,_helpers_modalHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createModalFormElement)(
      "text",
      "itemTitle",
      "Title:",
      true,
      "What will you conquer next?"
    );
  const { wrapper: itemDescriptionWrapper, input: itemDescriptionInput } =
    (0,_helpers_modalHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createModalFormElement)(
      "text",
      "itemDescription",
      "Description:",
      false,
      "(Optional)"
    );
  const { wrapper: itemDateWrapper, input: itemDateInput } =
    (0,_helpers_modalHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createModalFormElement)("date", "itemDate", "Due Date:", false);

  let selectedPriority = null;

  const itemPriorityWrapper = priorityWrapper((priority) => {
    selectedPriority = priority;
  });

  itemForm.addEventListener("submit", (event) =>
    (0,_eventHandlers_handleTaskFormSubmission_js__WEBPACK_IMPORTED_MODULE_2__.handleTaskFormSubmission)(
      event,
      itemTitleInput,
      itemDescriptionInput,
      itemDateInput,
      selectedPriority,
      project
    )
  );

  itemForm.appendChild(itemTitleWrapper);
  itemForm.appendChild(itemDescriptionWrapper);
  itemForm.appendChild(itemDateWrapper);
  itemForm.appendChild(itemPriorityWrapper);
  itemForm.appendChild(submitBtn);
  return itemForm;
};

const priorityWrapper = (setPriority) => {
  const buttonsContainer = document.createElement("div");
  const wrapper = document.createElement("div");
  const label = document.createElement("label");

  label.textContent = "Priority: ";

  const priorityValues = ["Low", "Medium", "High"];
  for (let priority of priorityValues) {
    const button = document.createElement("button");
    button.textContent = priority;
    button.value = priority;
    button.addEventListener("click", () => {
      setPriority(priority);
    });
    buttonsContainer.appendChild(button);
  }

  wrapper.appendChild(label);
  wrapper.appendChild(buttonsContainer);
  return wrapper;
};

const createAddProjectModal = () => {
  const newProjectModal = document.createElement("div");
  newProjectModal.classList.add("add-project-modal");

  newProjectModal.appendChild((0,_helpers_modalHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createCloseModalBtn)(".add-project-modal"));
  newProjectModal.appendChild(
    (0,_helpers_modalHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createModalHeader)(
      "Create A New Project",
      _assets_images_playing_yarn_png__WEBPACK_IMPORTED_MODULE_4__,
      "Hooray! You're starting a new project! Let's unravel this together, one thread at a time!"
    )
  );
  newProjectModal.appendChild(createProjectForm());

  return newProjectModal;
};

const createProjectForm = () => {
  const projectForm = document.createElement("form");
  const submitBtn = document.createElement("button");

  projectForm.classList.add("add-project-form");
  submitBtn.classList.add("add-project-submit-btn");
  submitBtn.textContent = "Create Project";

  const { wrapper: projectNameWrapper, input: projectNameInput } =
    (0,_helpers_modalHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createModalFormElement)(
      "text",
      "projectName",
      "Project Name:",
      true,
      "Start unraveling! Enter your project name."
    );
  const { wrapper: projectImgWrapper, input: projectImgInput } =
    (0,_helpers_modalHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createModalFormElement)("file", "projectImg", "Add Project Image:", false);

  projectForm.appendChild(projectNameWrapper);
  projectForm.appendChild(projectImgWrapper);
  projectForm.appendChild(submitBtn);

  projectForm.addEventListener("submit", (event) =>
    (0,_eventHandlers_handleProjectFormSubmission_js__WEBPACK_IMPORTED_MODULE_1__.handleProjectFormSubmission)(event, projectNameInput, projectImgInput)
  );

  return projectForm;
};




/***/ }),

/***/ "./src/ui/createNoTasksMessage.js":
/*!****************************************!*\
  !*** ./src/ui/createNoTasksMessage.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderNoTasksMessage: () => (/* binding */ renderNoTasksMessage)
/* harmony export */ });
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
  noTaskImg.src = __webpack_require__(/*! ../assets/images/kitten-sleeping.png */ "./src/assets/images/kitten-sleeping.png");
  noTaskImg.alt = "Kitten on moon";
  return noTaskImg;
};




/***/ }),

/***/ "./src/ui/createOrganizeByMenu.js":
/*!****************************************!*\
  !*** ./src/ui/createOrganizeByMenu.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createOrganizeByMenu: () => (/* binding */ createOrganizeByMenu)
/* harmony export */ });
/* harmony import */ var _eventHandlers_handleMenuSelection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../eventHandlers/handleMenuSelection.js */ "./src/eventHandlers/handleMenuSelection.js");


const createOrganizeByMenu = (project, todoList) => {
  const organizeMenu = document.createElement("div");
  organizeMenu.classList.add("organize-menu");

  organizeMenu.appendChild(createMenuLabel());
  organizeMenu.appendChild(createMenuSelect(project, todoList));

  return organizeMenu;
};

const createMenuLabel = () => {
  const menuLabel = document.createElement("label");
  menuLabel.textContent = "Organize by";
  menuLabel.for = "organize";
  return menuLabel;
};

const createMenuSelect = (project, todoList) => {
  const customSelect = document.createElement("div");
  customSelect.classList.add("custom-select");

  const menuSelect = document.createElement("select");
  menuSelect.id = "organize";
  menuSelect.classList.add("menu-select");

  menuSelect.addEventListener("change", (event) =>
    (0,_eventHandlers_handleMenuSelection_js__WEBPACK_IMPORTED_MODULE_0__.handleMenuSelection)(event, project, todoList)
  );

  menuSelect.appendChild(createSelectPromptOption());
  menuSelect.appendChild(createSortOptgroup());
  menuSelect.appendChild(createFilterOptgroup());
  customSelect.appendChild(menuSelect);
  return customSelect;
};

const createSelectPromptOption = () => {
  const selectPrompt = document.createElement("option");
  selectPrompt.value = "";
  selectPrompt.disabled = true;
  selectPrompt.selected = true;
  selectPrompt.textContent = "Select an option";
  return selectPrompt;
};

const createPriorityOption = () => {
  const priorityOption = document.createElement("option");
  priorityOption.value = "priority";
  priorityOption.textContent = "Priority";
  return priorityOption;
};

const createDueDateOption = () => {
  const dueDateOption = document.createElement("option");
  dueDateOption.value = "due-date";
  dueDateOption.textContent = "Due Date";
  return dueDateOption;
};

const createCompleteOption = () => {
  const completeOption = document.createElement("option");
  completeOption.value = "completed";
  completeOption.textContent = "Completed";
  return completeOption;
};

const createInProgressOption = () => {
  const inProgressOption = document.createElement("option");
  inProgressOption.value = "in-progress";
  inProgressOption.textContent = "In Progress";
  return inProgressOption;
};

const createNotStartedOption = () => {
  const notStartedOption = document.createElement("option");
  notStartedOption.value = "not-started";
  notStartedOption.textContent = "Not Started";
  return notStartedOption;
};

const createSortOptgroup = () => {
  const sortOptgroup = document.createElement("optgroup");
  sortOptgroup.label = "Sort";

  sortOptgroup.appendChild(createPriorityOption());
  sortOptgroup.appendChild(createDueDateOption());

  return sortOptgroup;
};

const createFilterOptgroup = () => {
  const filterOptgroup = document.createElement("optgroup");
  filterOptgroup.label = "Filter";

  filterOptgroup.appendChild(createCompleteOption());
  filterOptgroup.appendChild(createInProgressOption());
  filterOptgroup.appendChild(createNotStartedOption());

  return filterOptgroup;
};




/***/ }),

/***/ "./src/ui/createProgressContainer.js":
/*!*******************************************!*\
  !*** ./src/ui/createProgressContainer.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createProgressContainer: () => (/* binding */ createProgressContainer)
/* harmony export */ });
/* harmony import */ var _createCircularProgressBar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createCircularProgressBar.js */ "./src/ui/createCircularProgressBar.js");


const createProgressContainer = (percentage, status) => {
  const progressContainer = document.createElement("div");
  const progressHeader = document.createElement("h3");

  progressContainer.classList.add("progress-container");
  progressHeader.textContent = status;

  progressContainer.appendChild(progressHeader);
  progressContainer.appendChild((0,_createCircularProgressBar_js__WEBPACK_IMPORTED_MODULE_0__.createCircularProgressBar)(percentage, status));

  return progressContainer;
};




/***/ }),

/***/ "./src/ui/createRemoveBtn.js":
/*!***********************************!*\
  !*** ./src/ui/createRemoveBtn.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createRemoveItemBtn: () => (/* binding */ createRemoveItemBtn),
/* harmony export */   createRemoveProjectBtn: () => (/* binding */ createRemoveProjectBtn),
/* harmony export */   displayRemoveBtn: () => (/* binding */ displayRemoveBtn),
/* harmony export */   hideRemoveBtn: () => (/* binding */ hideRemoveBtn)
/* harmony export */ });
/* harmony import */ var _eventHandlers_handleRemoveItemBtn_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../eventHandlers/handleRemoveItemBtn.js */ "./src/eventHandlers/handleRemoveItemBtn.js");
/* harmony import */ var _eventHandlers_handleRemoveProjectBtn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../eventHandlers/handleRemoveProjectBtn.js */ "./src/eventHandlers/handleRemoveProjectBtn.js");



const createRemoveItemBtn = (project, todoItem) => {
  const removeBtn = document.createElement("button");
  removeBtn.style.display = "none";
  removeBtn.textContent = "x";
  removeBtn.classList.add("remove-item-btn");
  removeBtn.addEventListener("click", () => {
    (0,_eventHandlers_handleRemoveItemBtn_js__WEBPACK_IMPORTED_MODULE_0__.handleRemoveItemBtn)(project, todoItem);
  });

  return removeBtn;
};

const displayRemoveBtn = (taskElement, className) => {
  const removeBtn = taskElement.querySelector(`.${className}`);
  removeBtn.style.display = "block";
};

const hideRemoveBtn = (taskElement, className) => {
  const removeBtn = taskElement.querySelector(`.${className}`);
  removeBtn.style.display = "none";
};

const createRemoveProjectBtn = (project, projectList) => {
  const removeBtn = document.createElement("button");
  removeBtn.style.display = "none";
  removeBtn.textContent = "x";
  removeBtn.classList.add("remove-project-btn");
  removeBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    (0,_eventHandlers_handleRemoveProjectBtn_js__WEBPACK_IMPORTED_MODULE_1__.handleRemoveProjectBtn)(project, projectList);
  });

  return removeBtn;
};




/***/ }),

/***/ "./src/ui/createStatsContainer.js":
/*!****************************************!*\
  !*** ./src/ui/createStatsContainer.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createStatsContainer: () => (/* binding */ createStatsContainer)
/* harmony export */ });
/* harmony import */ var _createProgressContainer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createProgressContainer.js */ "./src/ui/createProgressContainer.js");


const createStatsContainer = (
  completedPercentage,
  inProgressPercentage,
  notStartedPercentage
) => {
  const statsContainer = document.createElement("div");
  statsContainer.classList.add("stats-container");

  statsContainer.appendChild(
    (0,_createProgressContainer_js__WEBPACK_IMPORTED_MODULE_0__.createProgressContainer)(completedPercentage, "Completed")
  );
  statsContainer.appendChild(
    (0,_createProgressContainer_js__WEBPACK_IMPORTED_MODULE_0__.createProgressContainer)(inProgressPercentage, "In Progress")
  );
  statsContainer.appendChild(
    (0,_createProgressContainer_js__WEBPACK_IMPORTED_MODULE_0__.createProgressContainer)(notStartedPercentage, "Not Started")
  );

  return statsContainer;
};




/***/ }),

/***/ "./src/ui/createTaskElement.js":
/*!*************************************!*\
  !*** ./src/ui/createTaskElement.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTaskElement: () => (/* binding */ createTaskElement),
/* harmony export */   createTimeSensitiveTaskElement: () => (/* binding */ createTimeSensitiveTaskElement)
/* harmony export */ });
/* harmony import */ var _eventHandlers_handleCompletedCheckbox_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../eventHandlers/handleCompletedCheckbox.js */ "./src/eventHandlers/handleCompletedCheckbox.js");
/* harmony import */ var _eventHandlers_handleInProgressRadioBox_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../eventHandlers/handleInProgressRadioBox.js */ "./src/eventHandlers/handleInProgressRadioBox.js");
/* harmony import */ var _eventHandlers_handlePrioritySelection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../eventHandlers/handlePrioritySelection.js */ "./src/eventHandlers/handlePrioritySelection.js");
/* harmony import */ var _eventHandlers_handleTaskTitle_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../eventHandlers/handleTaskTitle.js */ "./src/eventHandlers/handleTaskTitle.js");
/* harmony import */ var _eventHandlers_handleTaskDescription_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../eventHandlers/handleTaskDescription.js */ "./src/eventHandlers/handleTaskDescription.js");
/* harmony import */ var _eventHandlers_handleDueDateChange_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../eventHandlers/handleDueDateChange.js */ "./src/eventHandlers/handleDueDateChange.js");
/* harmony import */ var _helpers_dateFormatter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/dateFormatter.js */ "./src/helpers/dateFormatter.js");
/* harmony import */ var _createRemoveBtn_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./createRemoveBtn.js */ "./src/ui/createRemoveBtn.js");
/* harmony import */ var _pages_projectPage_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pages/projectPage.js */ "./src/pages/projectPage.js");
/* harmony import */ var _pages_homePage_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../pages/homePage.js */ "./src/pages/homePage.js");












const createTaskElement = (project, todoItem) => {
  const taskElement = document.createElement("div");
  taskElement.classList.add("todo-list-item");

  taskElement.appendChild(
    createCompletedCheckbox(project, taskElement, todoItem)
  );
  taskElement.appendChild(
    createTaskInfoContainer(project, taskElement, todoItem)
  );
  taskElement.appendChild(createDueDateText(project, taskElement, todoItem));
  taskElement.appendChild(createPrioritySelect(project, taskElement, todoItem));
  taskElement.appendChild(
    createInProgressRadioBox(project, taskElement, todoItem)
  );
  taskElement.appendChild((0,_createRemoveBtn_js__WEBPACK_IMPORTED_MODULE_7__.createRemoveItemBtn)(project, todoItem));

  taskElement.addEventListener("mouseover", () => {
    (0,_createRemoveBtn_js__WEBPACK_IMPORTED_MODULE_7__.displayRemoveBtn)(taskElement, "remove-item-btn");
  });

  taskElement.addEventListener("mouseout", () => {
    (0,_createRemoveBtn_js__WEBPACK_IMPORTED_MODULE_7__.hideRemoveBtn)(taskElement, "remove-item-btn");
  });

  return taskElement;
};

const createTaskInfoContainer = (project, taskElement, todoItem) => {
  const taskInfoContainer = document.createElement("div");
  taskInfoContainer.classList.add("task-info-container");
  taskInfoContainer.appendChild(
    createTaskTitle(project, taskElement, todoItem)
  );
  taskInfoContainer.appendChild(
    createTaskDescription(project, taskElement, todoItem)
  );

  return taskInfoContainer;
};

const createCompletedCheckbox = (project, taskElement, todoItem) => {
  const label = document.createElement("label");
  label.classList.add("custom-checkbox");

  const completedCheckbox = document.createElement("input");
  completedCheckbox.type = "checkbox";
  completedCheckbox.checked = todoItem.getCompletedStatus();

  applyCompletedClass(taskElement, todoItem);

  completedCheckbox.addEventListener("click", () => {
    (0,_eventHandlers_handleCompletedCheckbox_js__WEBPACK_IMPORTED_MODULE_0__.handleCompletedCheckbox)(project, taskElement, todoItem);
  });

  const span = document.createElement("span");
  span.classList.add("checkmark");

  label.appendChild(completedCheckbox);
  label.appendChild(span);

  return label;
};

const applyCompletedClass = (taskElement, todoItem) => {
  if (todoItem.getCompletedStatus()) {
    taskElement.classList.add("completed-checked");
  } else {
    taskElement.classList.remove("completed-checked");
  }
};

const createTaskTitle = (project, taskElement, todoItem) => {
  const taskTitle = document.createElement("h4");
  taskTitle.classList.add("task-title");
  taskTitle.textContent = todoItem.getTitle();
  taskTitle.contentEditable = true;
  taskTitle.addEventListener("blur", () =>
    (0,_eventHandlers_handleTaskTitle_js__WEBPACK_IMPORTED_MODULE_3__.handleTaskTitleBlur)(project, taskElement, todoItem, taskTitle)
  );
  taskTitle.addEventListener("keydown", (event) =>
    (0,_eventHandlers_handleTaskTitle_js__WEBPACK_IMPORTED_MODULE_3__.handleTaskTitleKeyDown)(event, taskTitle)
  );

  taskTitle.addEventListener("click", () => {
    taskTitle.classList.toggle("expanded");
  });

  return taskTitle;
};

const createTaskDescription = (project, taskElement, todoItem) => {
  const taskDescription = document.createElement("div");
  taskDescription.classList.add("task-description");
  taskDescription.textContent = todoItem.getDescription();
  taskDescription.contentEditable = true;
  taskDescription.addEventListener("blur", () =>
    (0,_eventHandlers_handleTaskDescription_js__WEBPACK_IMPORTED_MODULE_4__.handleTaskDescriptionBlur)(project, taskElement, todoItem, taskDescription)
  );

  taskDescription.addEventListener("keydown", (event) =>
    (0,_eventHandlers_handleTaskDescription_js__WEBPACK_IMPORTED_MODULE_4__.handleTaskDescriptionKeyDown)(event, taskDescription)
  );

  taskDescription.addEventListener("click", () => {
    taskDescription.classList.toggle("expanded");
  });

  return taskDescription;
};

const createDueDateText = (project, taskElement, todoItem) => {
  const dateContainer = document.createElement("div");
  const dueDateText = document.createElement("span");

  dateContainer.classList.add("due-date-container");
  dueDateText.textContent = (0,_helpers_dateFormatter_js__WEBPACK_IMPORTED_MODULE_6__.dueOnMonthStringDate)(todoItem.getDueDate());

  dueDateText.addEventListener("click", () =>
    (0,_eventHandlers_handleDueDateChange_js__WEBPACK_IMPORTED_MODULE_5__.showDatePicker)(project, taskElement, todoItem, dateContainer)
  );
  dateContainer.appendChild(dueDateText);
  return dateContainer;
};

const createInProgressRadioBox = (project, taskElement, todoItem) => {
  const inProgressWrapper = document.createElement("div");
  inProgressWrapper.classList.add("in-progress-radio-container");

  const label = document.createElement("label");
  label.classList.add("custom-radio-box");

  const inProgressRadioBox = document.createElement("input");
  inProgressRadioBox.type = "radio";
  inProgressRadioBox.checked = todoItem.getInProgressStatus();

  applyInProgressClass(taskElement, todoItem);

  const inProgressText = document.createElement("span");
  inProgressText.textContent = "In Progress";
  inProgressText.classList.add("in-progress-text");

  updateInProgressText(inProgressRadioBox.checked, inProgressText);

  const span = document.createElement("span");
  span.classList.add("checkdot");

  inProgressRadioBox.addEventListener("click", () => {
    (0,_eventHandlers_handleInProgressRadioBox_js__WEBPACK_IMPORTED_MODULE_1__.handleInProgressRadioBox)(project, taskElement, todoItem);
    updateInProgressText(inProgressRadioBox.checked, inProgressText);
  });

  label.appendChild(inProgressRadioBox);
  label.appendChild(span);

  inProgressWrapper.appendChild(label);
  inProgressWrapper.appendChild(inProgressText);

  return inProgressWrapper;
};

const applyInProgressClass = (taskElement, todoItem) => {
  if (todoItem.getInProgressStatus()) {
    taskElement.classList.add("in-progress-checked");
  } else {
    taskElement.classList.remove("in-progress-checked");
  }
};

const updateInProgressText = (boxCheckedStatus, inProgressText) => {
  if (boxCheckedStatus) {
    inProgressText.style.display = "inline";
  } else {
    inProgressText.style.display = "none";
  }
};

const createPrioritySelect = (project, taskElement, todoItem) => {
  const itemPriorityWrapper = document.createElement("div");
  const prioritySelect = document.createElement("select");

  itemPriorityWrapper.classList.add("priority-container");
  prioritySelect.classList.add("priority-select");

  const priorityValue = todoItem.getPriorityStatus();
  const selectedString = todoItem.getPriorityStringStatus(priorityValue);
  applyPriorityClass(taskElement, todoItem);

  prioritySelect.addEventListener("change", (event) =>
    (0,_eventHandlers_handlePrioritySelection_js__WEBPACK_IMPORTED_MODULE_2__.handlePrioritySelection)(event, project, taskElement, todoItem)
  );

  prioritySelect.appendChild(createLowOption(selectedString));
  prioritySelect.appendChild(createMediumOption(selectedString));
  prioritySelect.appendChild(createHighOption(selectedString));
  itemPriorityWrapper.appendChild(prioritySelect);

  return itemPriorityWrapper;
};

const applySelected = (selectedString, lowOption) => {
  return selectedString === lowOption;
};

const createLowOption = (selectedString) => {
  const lowOption = document.createElement("option");
  lowOption.textContent = "Low";
  const optionString = lowOption.textContent.toLowerCase();
  lowOption.selected = applySelected(selectedString, optionString);
  return lowOption;
};

const createMediumOption = (selectedString) => {
  const mediumOption = document.createElement("option");
  mediumOption.textContent = "Medium";
  const optionString = mediumOption.textContent.toLowerCase();
  mediumOption.selected = applySelected(selectedString, optionString);
  return mediumOption;
};

const createHighOption = (selectedString) => {
  const highOption = document.createElement("option");
  highOption.textContent = "High";
  const optionString = highOption.textContent.toLowerCase();
  highOption.selected = applySelected(selectedString, optionString);
  return highOption;
};

const applyPriorityClass = (taskElement, todoItem) => {
  taskElement.classList.add(`priority-${todoItem.getPriorityStatus()}`);
};

const createTimeSensitiveTaskElement = (task, project, className) => {
  const taskElement = document.createElement("div");
  applyPriorityClass(taskElement, task);
  taskElement.classList.add(className);
  const taskTitle = task.getTitle();
  const taskDueDate = task.getDueDate();

  const titleText = createSensitiveTaskTitle(taskTitle);
  const dueDateText = createSensitiveDueDateText(taskDueDate);
  taskElement.appendChild(titleText);
  taskElement.appendChild(dueDateText);

  taskElement.addEventListener("click", () => {
    (0,_pages_projectPage_js__WEBPACK_IMPORTED_MODULE_8__.createProjectPage)(project, _pages_homePage_js__WEBPACK_IMPORTED_MODULE_9__["default"]);
  });
  return taskElement;
};

const createSensitiveTaskTitle = (taskTitle) => {
  const titleTextContainer = document.createElement("div");
  titleTextContainer.textContent = taskTitle;
  return titleTextContainer;
};

const createSensitiveDueDateText = (taskDueDate) => {
  const dateTextContainer = document.createElement("div");
  dateTextContainer.textContent = (0,_helpers_dateFormatter_js__WEBPACK_IMPORTED_MODULE_6__.dueInDaysString)(taskDueDate);
  return dateTextContainer;
};




/***/ }),

/***/ "./src/ui/createTaskTable.js":
/*!***********************************!*\
  !*** ./src/ui/createTaskTable.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createDueSoonTaskTable: () => (/* binding */ createDueSoonTaskTable),
/* harmony export */   createOverdueTaskTable: () => (/* binding */ createOverdueTaskTable),
/* harmony export */   createTaskTable: () => (/* binding */ createTaskTable)
/* harmony export */ });
/* harmony import */ var _createTaskElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTaskElement.js */ "./src/ui/createTaskElement.js");
/* harmony import */ var _createNoTasksMessage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createNoTasksMessage.js */ "./src/ui/createNoTasksMessage.js");



const createTaskTable = (project, todoItems) => {
  const taskTableContainer = document.createElement("div");
  taskTableContainer.classList.add("tasks-table-container");

  if (todoItems.length === 0) {
    (0,_createNoTasksMessage_js__WEBPACK_IMPORTED_MODULE_1__.renderNoTasksMessage)(taskTableContainer);
  } else {
    todoItems.forEach((todoItem) => {
      const todoElement = (0,_createTaskElement_js__WEBPACK_IMPORTED_MODULE_0__.createTaskElement)(project, todoItem);
      taskTableContainer.appendChild(todoElement);
    });
  }

  return taskTableContainer;
};

const createDueSoonTaskTable = (dueSoonTaskList) => {
  const taskTableContainer = document.createElement("div");
  taskTableContainer.classList.add("due-soon-table-container");
  dueSoonTaskList.forEach(({ task, project }) => {
    const dueSoonElement = (0,_createTaskElement_js__WEBPACK_IMPORTED_MODULE_0__.createTimeSensitiveTaskElement)(
      task,
      project,
      "due-soon-list-item"
    );
    taskTableContainer.appendChild(dueSoonElement);
  });
  return taskTableContainer;
};

const createOverdueTaskTable = (overdueTaskList) => {
  const taskTableContainer = document.createElement("div");
  taskTableContainer.classList.add("overdue-table-container");
  overdueTaskList.forEach(({ task, project }) => {
    const overdueElement = (0,_createTaskElement_js__WEBPACK_IMPORTED_MODULE_0__.createTimeSensitiveTaskElement)(
      task,
      project,
      "overdue-list-item"
    );
    taskTableContainer.appendChild(overdueElement);
  });
  return taskTableContainer;
};




/***/ }),

/***/ "./src/ui/createTimeSensitiveContainer.js":
/*!************************************************!*\
  !*** ./src/ui/createTimeSensitiveContainer.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createDueSoonContainer: () => (/* binding */ createDueSoonContainer),
/* harmony export */   createOverdueContainer: () => (/* binding */ createOverdueContainer)
/* harmony export */ });
/* harmony import */ var _createTaskTable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTaskTable.js */ "./src/ui/createTaskTable.js");
/* harmony import */ var _services_projectListFactory_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/projectListFactory.js */ "./src/services/projectListFactory.js");



const createDueSoonContainer = () => {
  const dueSoonContainer = document.createElement("div");
  dueSoonContainer.classList.add("due-soon-container");

  const containerHeader = document.createElement("h4");
  containerHeader.textContent = "Tasks Due Soon";
  const projectList = (0,_services_projectListFactory_js__WEBPACK_IMPORTED_MODULE_1__.createProjectListFromData)();
  const dueSoonTaskList = projectList.getDueSoonTasks();

  const dueSoonTaskTable = (0,_createTaskTable_js__WEBPACK_IMPORTED_MODULE_0__.createDueSoonTaskTable)(dueSoonTaskList);

  dueSoonContainer.appendChild(containerHeader);
  dueSoonContainer.appendChild(dueSoonTaskTable);
  return dueSoonContainer;
};

const createOverdueContainer = () => {
  const overdueContainer = document.createElement("div");
  overdueContainer.classList.add("overdue-container");

  const containerHeader = document.createElement("h4");
  containerHeader.textContent = "Overdue Tasks";
  const projectList = (0,_services_projectListFactory_js__WEBPACK_IMPORTED_MODULE_1__.createProjectListFromData)();
  const dueSoonTaskList = projectList.getOverdueTasks();

  const overdueTaskTable = (0,_createTaskTable_js__WEBPACK_IMPORTED_MODULE_0__.createOverdueTaskTable)(dueSoonTaskList);

  overdueContainer.appendChild(containerHeader);
  overdueContainer.appendChild(overdueTaskTable);
  return overdueContainer;
};




/***/ }),

/***/ "./src/ui/createTitle.js":
/*!*******************************!*\
  !*** ./src/ui/createTitle.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createAllProjectPageHeaderImg: () => (/* binding */ createAllProjectPageHeaderImg),
/* harmony export */   createPageHeader: () => (/* binding */ createPageHeader),
/* harmony export */   createProjectPageHeaderImg: () => (/* binding */ createProjectPageHeaderImg)
/* harmony export */ });
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
    cartoonImage.src = __webpack_require__("./src/assets/images sync recursive ^\\.\\/.*$")(`./${path}`);
  }
  return cartoonImage;
};

const createAllProjectPageHeaderImg = () => {
  const cartoonImage = document.createElement("img");
  cartoonImage.classList.add("title-img");
  cartoonImage.src = __webpack_require__(/*! ../assets/images/kitten-in-hole.png */ "./src/assets/images/kitten-in-hole.png");

  return cartoonImage;
};




/***/ }),

/***/ "./src/ui/createTodoListContainer.js":
/*!*******************************************!*\
  !*** ./src/ui/createTodoListContainer.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTodoListContainer: () => (/* binding */ createTodoListContainer)
/* harmony export */ });
/* harmony import */ var _createOrganizeByMenu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createOrganizeByMenu.js */ "./src/ui/createOrganizeByMenu.js");
/* harmony import */ var _createTaskTable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createTaskTable.js */ "./src/ui/createTaskTable.js");
/* harmony import */ var _createAddTaskBtn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createAddTaskBtn.js */ "./src/ui/createAddTaskBtn.js");




const createTodoListContainer = (project, todoList, todoItems) => {
  const todoListContainer = document.createElement("div");
  todoListContainer.classList.add("todo-list-container");

  todoListContainer.appendChild((0,_createOrganizeByMenu_js__WEBPACK_IMPORTED_MODULE_0__.createOrganizeByMenu)(project, todoList));
  todoListContainer.appendChild((0,_createAddTaskBtn_js__WEBPACK_IMPORTED_MODULE_2__.createAddTaskBtn)(project));
  todoListContainer.appendChild((0,_createTaskTable_js__WEBPACK_IMPORTED_MODULE_1__.createTaskTable)(project, todoItems));
  return todoListContainer;
};




/***/ }),

/***/ "./src/ui/renderAttributionsModal.js":
/*!*******************************************!*\
  !*** ./src/ui/renderAttributionsModal.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderAttributionsModal: () => (/* binding */ renderAttributionsModal)
/* harmony export */ });
/* harmony import */ var _helpers_modalHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/modalHelpers.js */ "./src/helpers/modalHelpers.js");


const createAttributionsModal = () => {
  const attributionModal = document.createElement("div");
  const attributionTitle = document.createElement("h3");
  const attributionList = attributionsUnorderedList();

  attributionTitle.textContent = "Image Attributions";

  attributionModal.classList.add("attribution-modal");

  attributionModal.appendChild(attributionTitle);
  attributionModal.appendChild(attributionList);

  return attributionModal;
};

const renderAttributionsModal = () => {
  const sidebarFooter = document.querySelector(".sidebar-footer");
  sidebarFooter.addEventListener("click", () => {
    (0,_helpers_modalHelpers_js__WEBPACK_IMPORTED_MODULE_0__.displayModal)(createAttributionsModal());
    (0,_helpers_modalHelpers_js__WEBPACK_IMPORTED_MODULE_0__.addOverlay)();
  });
};

const attributionsUnorderedList = () => {
  const attributionList = document.createElement("ul");
  attributionList.classList.add("attributions-list");

  attributions.forEach((attribution) => {
    const attributionItem = document.createElement("li");
    attributionItem.innerHTML = `<a href="${attribution.link}" target="_blank" title="${attribution.title}">${attribution.title} by ${attribution.creator}</a>`;
    attributionList.appendChild(attributionItem);
  });
  return attributionList;
};

const attributions = [
  // Logo
  {
    title: "Logo",
    link: "https://www.flaticon.com/free-icons/yarn",
    creator: "Ylivdesign - Flaticon",
  },

  // Tab Icons
  {
    title: "Home Icon",
    link: "https://www.freepik.com/icon/home_1946436#fromView=search&page=1&position=0&uuid=251fcafe-c6cb-4d50-b08b-4bb2f7efd7f5",
    creator: "Freepik",
  },
  {
    title: "Projects Icon",
    link: "https://www.freepik.com/icon/files-copy-interface-symbol_54853#fromView=search&page=1&position=39&uuid=e60388c9-f5c6-4be0-befd-83388e4b25ed",
    creator: "Catalin Fertu",
  },

  // Project Images
  {
    title: "Kitchen Icon",
    link: "https://www.flaticon.com/free-icons/kitchen",
    creator: "Freepik - Flaticon",
  },
  {
    title: "Travel Bag Icon",
    link: "https://www.flaticon.com/free-icons/travel-bag",
    creator: "photo3idea_studio - Flaticon",
  },
  {
    title: "Budget Icon",
    link: "https://www.flaticon.com/free-icons/budget",
    creator: "Freepik - Flaticon",
  },
  {
    title: "Code Icon",
    link: "https://www.flaticon.com/free-icons/code",
    creator: "Smashicons - Flaticon",
  },
  {
    title: "Strong Icon",
    link: "https://www.flaticon.com/free-icons/strong",
    creator: "Freepik - Flaticon",
  },
  {
    title: "Renovation Icon",
    link: "https://www.flaticon.com/free-icons/renovation",
    creator: "Taufik Ramadhan - Flaticon",
  },
  {
    title: "Gardening Icon",
    link: "https://www.flaticon.com/free-icons/gardening",
    creator: "Freepik - Flaticon",
  },
  {
    title: "Languages Icon",
    link: "https://www.flaticon.com/free-icons/languages",
    creator: "Freepik - Flaticon",
  },
  {
    title: "Startup Icon",
    link: "https://www.flaticon.com/free-icons/startup",
    creator: "Smashicons - Flaticon",
  },
  {
    title: "Writing Icon",
    link: "https://www.flaticon.com/free-icons/writing",
    creator: "Smashicons - Flaticon",
  },
  {
    title: "Artist Icon",
    link: "https://www.flaticon.com/free-icons/artist",
    creator: "justicon - Flaticon",
  },
  {
    title: "Insert Icon",
    link: "https://www.flaticon.com/free-icons/insert",
    creator: "Smashicons - Flaticon",
  },

  // Cartoon Icons
  {
    title: "Cat in Hole Icon",
    link: "https://www.freepik.com/free-vector/cute-cat-hole-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-premium-vector-flat-cartoon-style_23006709.htm#query=cat&position=29&from_view=author&uuid=7c731064-de29-4c3d-b39d-10d774bf6fb1",
    creator: "catalyststuff on Freepik",
  },
  {
    title: "Cat Playing with Yarn Ball Icon 1",
    link: "https://www.freepik.com/free-vector/cute-cat-playing-yarn-ball-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated_65096468.htm#page=6&query=cat&position=16&from_view=author&uuid=abd4f7c3-df9b-4116-b154-e8e8832e17e6",
    creator: "catalyststuff on Freepik",
  },
  {
    title: "Cat Fishing Icon",
    link: "https://www.freepik.com/free-vector/cute-cat-fishing-fish-moon-cartoon-vector-icon-illustration-animal-sport-icon-concept-isolated_66606156.htm#page=5&query=cat&position=2&from_view=author&uuid=abd4f7c3-df9b-4116-b154-e8e8832e17e6",
    creator: "catalyststuff on Freepik",
  },
  {
    title: "Cat Playing with Yarn Ball Icon 2",
    link: "https://www.freepik.com/free-vector/cute-cat-playing-yarn-ball-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated_29289567.htm#page=2&query=cat&position=18&from_view=author&uuid=abd4f7c3-df9b-4116-b154-e8e8832e17e6",
    creator: "catalyststuff on Freepik",
  },
  {
    title: "Cat Sleeping on Tree Icon",
    link: "https://www.freepik.com/free-vector/cute-cat-sleeping-tree-with-wool-ball-cartoon-vector-icon-illustration-animal-nature-isolated_36440838.htm#page=2&query=cat&position=16&from_view=author&uuid=abd4f7c3-df9b-4116-b154-e8e8832e17e6",
    creator: "catalyststuff on Freepik",
  },

  // Add Icon
  {
    title: "Add Button Icon",
    link: "https://www.flaticon.com/free-icons/add-button",
    creator: "Smashicons - Flaticon",
  },

  // Achievement Badges
  {
    title: "Reward Icon 1",
    link: "https://www.flaticon.com/free-icons/reward",
    creator: "Vectors Market - Flaticon",
  },
  {
    title: "Reward Icon 2",
    link: "https://www.flaticon.com/free-icons/reward",
    creator: "Vectors Market - Flaticon",
  },
  {
    title: "Medal Icon",
    link: "https://www.flaticon.com/free-icons/medal",
    creator: "Vectors Market - Flaticon",
  },
  {
    title: "Champion Icon",
    link: "https://www.flaticon.com/free-icons/champion",
    creator: "Vectors Market - Flaticon",
  },

  // Lock
  {
    title: "Lock Icon",
    link: "https://www.flaticon.com/free-icons/lock",
    creator: "Freepik - Flaticon",
  },
];




/***/ }),

/***/ "./src/ui/updateDashboardContainer.js":
/*!********************************************!*\
  !*** ./src/ui/updateDashboardContainer.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updateDashboardContainer: () => (/* binding */ updateDashboardContainer)
/* harmony export */ });
/* harmony import */ var _ui_clearDisplay_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/clearDisplay.js */ "./src/ui/clearDisplay.js");
/* harmony import */ var _pages_allProjectsPage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/allProjectsPage.js */ "./src/pages/allProjectsPage.js");



const updateDashboardContainer = () => {
  (0,_ui_clearDisplay_js__WEBPACK_IMPORTED_MODULE_0__.clearContentContainer)();
  const contentContainer = document.querySelector("#content");
  const dashboardContainer = document.createElement("div");

  dashboardContainer.appendChild((0,_pages_allProjectsPage_js__WEBPACK_IMPORTED_MODULE_1__.renderProjectList)());
  contentContainer.appendChild(dashboardContainer);
};




/***/ }),

/***/ "./src/ui/updateStatsContainer.js":
/*!****************************************!*\
  !*** ./src/ui/updateStatsContainer.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updateStatsContainer: () => (/* binding */ updateStatsContainer)
/* harmony export */ });
/* harmony import */ var _createStatsContainer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createStatsContainer.js */ "./src/ui/createStatsContainer.js");


const updateStatsContainer = (project) => {
  const todoList = project.getTodoList();
  todoList.calculatePercentages();
  const completedPercentage = todoList.getCompletedPercentage();
  const inProgressPercentage = todoList.getInProgressPercentage();
  const notStartedPercentage = todoList.getNotStartedPercentage();
  const statsContainer = document.querySelector(".stats-container");
  statsContainer.replaceWith(
    (0,_createStatsContainer_js__WEBPACK_IMPORTED_MODULE_0__.createStatsContainer)(
      completedPercentage,
      inProgressPercentage,
      notStartedPercentage
    )
  );
};



/***/ }),

/***/ "./src/ui/updateTaskElement.js":
/*!*************************************!*\
  !*** ./src/ui/updateTaskElement.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updateTaskElement: () => (/* binding */ updateTaskElement)
/* harmony export */ });
/* harmony import */ var _createTaskElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTaskElement.js */ "./src/ui/createTaskElement.js");


const updateTaskElement = (project, taskElement, todoItem) => {
  const newTaskElement = (0,_createTaskElement_js__WEBPACK_IMPORTED_MODULE_0__.createTaskElement)(project, todoItem);
  taskElement.parentNode.replaceChild(newTaskElement, taskElement);
};




/***/ }),

/***/ "./src/ui/updateTaskTable.js":
/*!***********************************!*\
  !*** ./src/ui/updateTaskTable.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updateTaskTable: () => (/* binding */ updateTaskTable)
/* harmony export */ });
/* harmony import */ var _createTaskElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTaskElement.js */ "./src/ui/createTaskElement.js");
/* harmony import */ var _createNoTasksMessage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createNoTasksMessage.js */ "./src/ui/createNoTasksMessage.js");



const updateTaskTable = (project, todoList) => {
  const taskTableContainer = document.querySelector(".tasks-table-container");
  taskTableContainer.innerHTML = "";

  if (todoList.length === 0) {
    (0,_createNoTasksMessage_js__WEBPACK_IMPORTED_MODULE_1__.renderNoTasksMessage)(taskTableContainer);
  } else {
    todoList.forEach((todo) => {
      const todoElement = (0,_createTaskElement_js__WEBPACK_IMPORTED_MODULE_0__.createTaskElement)(project, todo);
      taskTableContainer.appendChild(todoElement);
    });
  }
};



/***/ }),

/***/ "data:image/svg+xml;utf8,<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"%233f72af\" d=\"M7 10l5 5 5-5z\"/></svg>":
/*!*********************************************************************************************************************************************!*\
  !*** data:image/svg+xml;utf8,<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="%233f72af" d="M7 10l5 5 5-5z"/></svg> ***!
  \*********************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;utf8,<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"%233f72af\" d=\"M7 10l5 5 5-5z\"/></svg>";

/***/ }),

/***/ "./src/assets/images/add-project-btn-2.png":
/*!*************************************************!*\
  !*** ./src/assets/images/add-project-btn-2.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "1621036096813b470545.png";

/***/ }),

/***/ "./src/assets/images/badges/lvl-1.png":
/*!********************************************!*\
  !*** ./src/assets/images/badges/lvl-1.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "60a50868fd2f0f139ceb.png";

/***/ }),

/***/ "./src/assets/images/badges/lvl-2.png":
/*!********************************************!*\
  !*** ./src/assets/images/badges/lvl-2.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "e357e69f4699f6af6cf7.png";

/***/ }),

/***/ "./src/assets/images/badges/lvl-3.png":
/*!********************************************!*\
  !*** ./src/assets/images/badges/lvl-3.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "5b94c67810909bb09300.png";

/***/ }),

/***/ "./src/assets/images/badges/lvl-4.png":
/*!********************************************!*\
  !*** ./src/assets/images/badges/lvl-4.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "83ea6726c5f28139c7bc.png";

/***/ }),

/***/ "./src/assets/images/badges/lvl-5.png":
/*!********************************************!*\
  !*** ./src/assets/images/badges/lvl-5.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f3071f3007b0cfe6e162.png";

/***/ }),

/***/ "./src/assets/images/ball.png":
/*!************************************!*\
  !*** ./src/assets/images/ball.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "4f43442143ca7ee0322f.png";

/***/ }),

/***/ "./src/assets/images/budget.png":
/*!**************************************!*\
  !*** ./src/assets/images/budget.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "e6d2f3cb1246cd54688d.png";

/***/ }),

/***/ "./src/assets/images/cooking.png":
/*!***************************************!*\
  !*** ./src/assets/images/cooking.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "676fc116ae815d244e6e.png";

/***/ }),

/***/ "./src/assets/images/dumbbell.png":
/*!****************************************!*\
  !*** ./src/assets/images/dumbbell.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "6cf9472aa18230b30e5b.png";

/***/ }),

/***/ "./src/assets/images/gardening.png":
/*!*****************************************!*\
  !*** ./src/assets/images/gardening.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "84ddc4b652ffb68f8381.png";

/***/ }),

/***/ "./src/assets/images/home-blue.png":
/*!*****************************************!*\
  !*** ./src/assets/images/home-blue.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d9140afccd3ef7569f8c.png";

/***/ }),

/***/ "./src/assets/images/home-white.png":
/*!******************************************!*\
  !*** ./src/assets/images/home-white.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ee4b9cc3d2fd5a448502.png";

/***/ }),

/***/ "./src/assets/images/kitten-in-hole.png":
/*!**********************************************!*\
  !*** ./src/assets/images/kitten-in-hole.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "91b3ff607ecdb2579694.png";

/***/ }),

/***/ "./src/assets/images/kitten-on-moon.png":
/*!**********************************************!*\
  !*** ./src/assets/images/kitten-on-moon.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "c30e0bf0172d30fcfc75.png";

/***/ }),

/***/ "./src/assets/images/kitten-sitting.png":
/*!**********************************************!*\
  !*** ./src/assets/images/kitten-sitting.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d073ebb1db4a310cbd7b.png";

/***/ }),

/***/ "./src/assets/images/kitten-sleeping.png":
/*!***********************************************!*\
  !*** ./src/assets/images/kitten-sleeping.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f5b215cb2c5b2fa3cc46.png";

/***/ }),

/***/ "./src/assets/images/languages.png":
/*!*****************************************!*\
  !*** ./src/assets/images/languages.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "c9c76e03a35ee2d121ba.png";

/***/ }),

/***/ "./src/assets/images/lock.png":
/*!************************************!*\
  !*** ./src/assets/images/lock.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "743d1923ef5eec1662b7.png";

/***/ }),

/***/ "./src/assets/images/luggage.png":
/*!***************************************!*\
  !*** ./src/assets/images/luggage.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "8bca9dddd165894482a2.png";

/***/ }),

/***/ "./src/assets/images/no-image.png":
/*!****************************************!*\
  !*** ./src/assets/images/no-image.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "af4b3c4a161c1a084520.png";

/***/ }),

/***/ "./src/assets/images/paint.png":
/*!*************************************!*\
  !*** ./src/assets/images/paint.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fb31fac90e20bfec0820.png";

/***/ }),

/***/ "./src/assets/images/playing-yarn.png":
/*!********************************************!*\
  !*** ./src/assets/images/playing-yarn.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "821ec3d3a469e33e3bb7.png";

/***/ }),

/***/ "./src/assets/images/presentation.png":
/*!********************************************!*\
  !*** ./src/assets/images/presentation.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f859a61e894e83ea0e8e.png";

/***/ }),

/***/ "./src/assets/images/projects-blue.png":
/*!*********************************************!*\
  !*** ./src/assets/images/projects-blue.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "3c97a890a8018670f90f.png";

/***/ }),

/***/ "./src/assets/images/projects-white.png":
/*!**********************************************!*\
  !*** ./src/assets/images/projects-white.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "7465cad2301cec8ccf79.png";

/***/ }),

/***/ "./src/assets/images/renovation.png":
/*!******************************************!*\
  !*** ./src/assets/images/renovation.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "0e13ef93b47c4758bc16.png";

/***/ }),

/***/ "./src/assets/images/script.png":
/*!**************************************!*\
  !*** ./src/assets/images/script.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "5198b9bac569f28a9c13.png";

/***/ }),

/***/ "./src/assets/images/writing.png":
/*!***************************************!*\
  !*** ./src/assets/images/writing.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "9236d0ec6185d5fcff85.png";

/***/ }),

/***/ "./node_modules/date-fns/_lib/addLeadingZeros.mjs":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/_lib/addLeadingZeros.mjs ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addLeadingZeros: () => (/* binding */ addLeadingZeros)
/* harmony export */ });
function addLeadingZeros(number, targetLength) {
  const sign = number < 0 ? "-" : "";
  const output = Math.abs(number).toString().padStart(targetLength, "0");
  return sign + output;
}


/***/ }),

/***/ "./node_modules/date-fns/_lib/defaultOptions.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/_lib/defaultOptions.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDefaultOptions: () => (/* binding */ getDefaultOptions),
/* harmony export */   setDefaultOptions: () => (/* binding */ setDefaultOptions)
/* harmony export */ });
let defaultOptions = {};

function getDefaultOptions() {
  return defaultOptions;
}

function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}


/***/ }),

/***/ "./node_modules/date-fns/_lib/format/formatters.mjs":
/*!**********************************************************!*\
  !*** ./node_modules/date-fns/_lib/format/formatters.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatters: () => (/* binding */ formatters)
/* harmony export */ });
/* harmony import */ var _getDayOfYear_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../getDayOfYear.mjs */ "./node_modules/date-fns/getDayOfYear.mjs");
/* harmony import */ var _getISOWeek_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../getISOWeek.mjs */ "./node_modules/date-fns/getISOWeek.mjs");
/* harmony import */ var _getISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../getISOWeekYear.mjs */ "./node_modules/date-fns/getISOWeekYear.mjs");
/* harmony import */ var _getWeek_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../getWeek.mjs */ "./node_modules/date-fns/getWeek.mjs");
/* harmony import */ var _getWeekYear_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../getWeekYear.mjs */ "./node_modules/date-fns/getWeekYear.mjs");
/* harmony import */ var _addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addLeadingZeros.mjs */ "./node_modules/date-fns/_lib/addLeadingZeros.mjs");
/* harmony import */ var _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lightFormatters.mjs */ "./node_modules/date-fns/_lib/format/lightFormatters.mjs");








const dayPeriodEnum = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night",
};

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */

const formatters = {
  // Era
  G: function (date, token, localize) {
    const era = date.getFullYear() > 0 ? 1 : 0;
    switch (token) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return localize.era(era, { width: "abbreviated" });
      // A, B
      case "GGGGG":
        return localize.era(era, { width: "narrow" });
      // Anno Domini, Before Christ
      case "GGGG":
      default:
        return localize.era(era, { width: "wide" });
    }
  },

  // Year
  y: function (date, token, localize) {
    // Ordinal number
    if (token === "yo") {
      const signedYear = date.getFullYear();
      // Returns 1 for 1 BC (which is year 0 in JavaScript)
      const year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, { unit: "year" });
    }

    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.y(date, token);
  },

  // Local week-numbering year
  Y: function (date, token, localize, options) {
    const signedWeekYear = (0,_getWeekYear_mjs__WEBPACK_IMPORTED_MODULE_1__.getWeekYear)(date, options);
    // Returns 1 for 1 BC (which is year 0 in JavaScript)
    const weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;

    // Two digit year
    if (token === "YY") {
      const twoDigitYear = weekYear % 100;
      return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(twoDigitYear, 2);
    }

    // Ordinal number
    if (token === "Yo") {
      return localize.ordinalNumber(weekYear, { unit: "year" });
    }

    // Padding
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(weekYear, token.length);
  },

  // ISO week-numbering year
  R: function (date, token) {
    const isoWeekYear = (0,_getISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_3__.getISOWeekYear)(date);

    // Padding
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(isoWeekYear, token.length);
  },

  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function (date, token) {
    const year = date.getFullYear();
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(year, token.length);
  },

  // Quarter
  Q: function (date, token, localize) {
    const quarter = Math.ceil((date.getMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case "Q":
        return String(quarter);
      // 01, 02, 03, 04
      case "QQ":
        return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return localize.ordinalNumber(quarter, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return localize.quarter(quarter, {
          width: "abbreviated",
          context: "formatting",
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return localize.quarter(quarter, {
          width: "narrow",
          context: "formatting",
        });
      // 1st quarter, 2nd quarter, ...
      case "QQQQ":
      default:
        return localize.quarter(quarter, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // Stand-alone quarter
  q: function (date, token, localize) {
    const quarter = Math.ceil((date.getMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case "q":
        return String(quarter);
      // 01, 02, 03, 04
      case "qq":
        return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return localize.ordinalNumber(quarter, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return localize.quarter(quarter, {
          width: "abbreviated",
          context: "standalone",
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return localize.quarter(quarter, {
          width: "narrow",
          context: "standalone",
        });
      // 1st quarter, 2nd quarter, ...
      case "qqqq":
      default:
        return localize.quarter(quarter, {
          width: "wide",
          context: "standalone",
        });
    }
  },

  // Month
  M: function (date, token, localize) {
    const month = date.getMonth();
    switch (token) {
      case "M":
      case "MM":
        return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.M(date, token);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return localize.ordinalNumber(month + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "MMM":
        return localize.month(month, {
          width: "abbreviated",
          context: "formatting",
        });
      // J, F, ..., D
      case "MMMMM":
        return localize.month(month, {
          width: "narrow",
          context: "formatting",
        });
      // January, February, ..., December
      case "MMMM":
      default:
        return localize.month(month, { width: "wide", context: "formatting" });
    }
  },

  // Stand-alone month
  L: function (date, token, localize) {
    const month = date.getMonth();
    switch (token) {
      // 1, 2, ..., 12
      case "L":
        return String(month + 1);
      // 01, 02, ..., 12
      case "LL":
        return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(month + 1, 2);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return localize.ordinalNumber(month + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "LLL":
        return localize.month(month, {
          width: "abbreviated",
          context: "standalone",
        });
      // J, F, ..., D
      case "LLLLL":
        return localize.month(month, {
          width: "narrow",
          context: "standalone",
        });
      // January, February, ..., December
      case "LLLL":
      default:
        return localize.month(month, { width: "wide", context: "standalone" });
    }
  },

  // Local week of year
  w: function (date, token, localize, options) {
    const week = (0,_getWeek_mjs__WEBPACK_IMPORTED_MODULE_4__.getWeek)(date, options);

    if (token === "wo") {
      return localize.ordinalNumber(week, { unit: "week" });
    }

    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(week, token.length);
  },

  // ISO week of year
  I: function (date, token, localize) {
    const isoWeek = (0,_getISOWeek_mjs__WEBPACK_IMPORTED_MODULE_5__.getISOWeek)(date);

    if (token === "Io") {
      return localize.ordinalNumber(isoWeek, { unit: "week" });
    }

    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(isoWeek, token.length);
  },

  // Day of the month
  d: function (date, token, localize) {
    if (token === "do") {
      return localize.ordinalNumber(date.getDate(), { unit: "date" });
    }

    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.d(date, token);
  },

  // Day of year
  D: function (date, token, localize) {
    const dayOfYear = (0,_getDayOfYear_mjs__WEBPACK_IMPORTED_MODULE_6__.getDayOfYear)(date);

    if (token === "Do") {
      return localize.ordinalNumber(dayOfYear, { unit: "dayOfYear" });
    }

    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(dayOfYear, token.length);
  },

  // Day of week
  E: function (date, token, localize) {
    const dayOfWeek = date.getDay();
    switch (token) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting",
        });
      // T
      case "EEEEE":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "formatting",
        });
      // Tu
      case "EEEEEE":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "formatting",
        });
      // Tuesday
      case "EEEE":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // Local day of week
  e: function (date, token, localize, options) {
    const dayOfWeek = date.getDay();
    const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case "e":
        return String(localDayOfWeek);
      // Padded numerical value
      case "ee":
        return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th
      case "eo":
        return localize.ordinalNumber(localDayOfWeek, { unit: "day" });
      case "eee":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting",
        });
      // T
      case "eeeee":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "formatting",
        });
      // Tu
      case "eeeeee":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "formatting",
        });
      // Tuesday
      case "eeee":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // Stand-alone local day of week
  c: function (date, token, localize, options) {
    const dayOfWeek = date.getDay();
    const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (same as in `e`)
      case "c":
        return String(localDayOfWeek);
      // Padded numerical value
      case "cc":
        return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th
      case "co":
        return localize.ordinalNumber(localDayOfWeek, { unit: "day" });
      case "ccc":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "standalone",
        });
      // T
      case "ccccc":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "standalone",
        });
      // Tu
      case "cccccc":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "standalone",
        });
      // Tuesday
      case "cccc":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "standalone",
        });
    }
  },

  // ISO day of week
  i: function (date, token, localize) {
    const dayOfWeek = date.getDay();
    const isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
    switch (token) {
      // 2
      case "i":
        return String(isoDayOfWeek);
      // 02
      case "ii":
        return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(isoDayOfWeek, token.length);
      // 2nd
      case "io":
        return localize.ordinalNumber(isoDayOfWeek, { unit: "day" });
      // Tue
      case "iii":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting",
        });
      // T
      case "iiiii":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "formatting",
        });
      // Tu
      case "iiiiii":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "formatting",
        });
      // Tuesday
      case "iiii":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // AM or PM
  a: function (date, token, localize) {
    const hours = date.getHours();
    const dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";

    switch (token) {
      case "a":
      case "aa":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting",
        });
      case "aaa":
        return localize
          .dayPeriod(dayPeriodEnumValue, {
            width: "abbreviated",
            context: "formatting",
          })
          .toLowerCase();
      case "aaaaa":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting",
        });
      case "aaaa":
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // AM, PM, midnight, noon
  b: function (date, token, localize) {
    const hours = date.getHours();
    let dayPeriodEnumValue;
    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
    }

    switch (token) {
      case "b":
      case "bb":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting",
        });
      case "bbb":
        return localize
          .dayPeriod(dayPeriodEnumValue, {
            width: "abbreviated",
            context: "formatting",
          })
          .toLowerCase();
      case "bbbbb":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting",
        });
      case "bbbb":
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // in the morning, in the afternoon, in the evening, at night
  B: function (date, token, localize) {
    const hours = date.getHours();
    let dayPeriodEnumValue;
    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }

    switch (token) {
      case "B":
      case "BB":
      case "BBB":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting",
        });
      case "BBBBB":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting",
        });
      case "BBBB":
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // Hour [1-12]
  h: function (date, token, localize) {
    if (token === "ho") {
      let hours = date.getHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, { unit: "hour" });
    }

    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.h(date, token);
  },

  // Hour [0-23]
  H: function (date, token, localize) {
    if (token === "Ho") {
      return localize.ordinalNumber(date.getHours(), { unit: "hour" });
    }

    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.H(date, token);
  },

  // Hour [0-11]
  K: function (date, token, localize) {
    const hours = date.getHours() % 12;

    if (token === "Ko") {
      return localize.ordinalNumber(hours, { unit: "hour" });
    }

    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(hours, token.length);
  },

  // Hour [1-24]
  k: function (date, token, localize) {
    let hours = date.getHours();
    if (hours === 0) hours = 24;

    if (token === "ko") {
      return localize.ordinalNumber(hours, { unit: "hour" });
    }

    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(hours, token.length);
  },

  // Minute
  m: function (date, token, localize) {
    if (token === "mo") {
      return localize.ordinalNumber(date.getMinutes(), { unit: "minute" });
    }

    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.m(date, token);
  },

  // Second
  s: function (date, token, localize) {
    if (token === "so") {
      return localize.ordinalNumber(date.getSeconds(), { unit: "second" });
    }

    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.s(date, token);
  },

  // Fraction of second
  S: function (date, token) {
    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.S(date, token);
  },

  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function (date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();

    if (timezoneOffset === 0) {
      return "Z";
    }

    switch (token) {
      // Hours and optional minutes
      case "X":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);

      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX": // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);

      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case "XXXXX":
      case "XXX": // Hours and minutes with `:` delimiter
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },

  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function (date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();

    switch (token) {
      // Hours and optional minutes
      case "x":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);

      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx": // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);

      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case "xxxxx":
      case "xxx": // Hours and minutes with `:` delimiter
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },

  // Timezone (GMT)
  O: function (date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();

    switch (token) {
      // Short
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      // Long
      case "OOOO":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },

  // Timezone (specific non-location)
  z: function (date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();

    switch (token) {
      // Short
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      // Long
      case "zzzz":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },

  // Seconds timestamp
  t: function (date, token, _localize) {
    const timestamp = Math.trunc(date.getTime() / 1000);
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(timestamp, token.length);
  },

  // Milliseconds timestamp
  T: function (date, token, _localize) {
    const timestamp = date.getTime();
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(timestamp, token.length);
  },
};

function formatTimezoneShort(offset, delimiter = "") {
  const sign = offset > 0 ? "-" : "+";
  const absOffset = Math.abs(offset);
  const hours = Math.trunc(absOffset / 60);
  const minutes = absOffset % 60;
  if (minutes === 0) {
    return sign + String(hours);
  }
  return sign + String(hours) + delimiter + (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(minutes, 2);
}

function formatTimezoneWithOptionalMinutes(offset, delimiter) {
  if (offset % 60 === 0) {
    const sign = offset > 0 ? "-" : "+";
    return sign + (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(Math.abs(offset) / 60, 2);
  }
  return formatTimezone(offset, delimiter);
}

function formatTimezone(offset, delimiter = "") {
  const sign = offset > 0 ? "-" : "+";
  const absOffset = Math.abs(offset);
  const hours = (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(Math.trunc(absOffset / 60), 2);
  const minutes = (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}


/***/ }),

/***/ "./node_modules/date-fns/_lib/format/lightFormatters.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/_lib/format/lightFormatters.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lightFormatters: () => (/* binding */ lightFormatters)
/* harmony export */ });
/* harmony import */ var _addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../addLeadingZeros.mjs */ "./node_modules/date-fns/_lib/addLeadingZeros.mjs");


/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */

const lightFormatters = {
  // Year
  y(date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |

    const signedYear = date.getFullYear();
    // Returns 1 for 1 BC (which is year 0 in JavaScript)
    const year = signedYear > 0 ? signedYear : 1 - signedYear;
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(token === "yy" ? year % 100 : year, token.length);
  },

  // Month
  M(date, token) {
    const month = date.getMonth();
    return token === "M" ? String(month + 1) : (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(month + 1, 2);
  },

  // Day of the month
  d(date, token) {
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getDate(), token.length);
  },

  // AM or PM
  a(date, token) {
    const dayPeriodEnumValue = date.getHours() / 12 >= 1 ? "pm" : "am";

    switch (token) {
      case "a":
      case "aa":
        return dayPeriodEnumValue.toUpperCase();
      case "aaa":
        return dayPeriodEnumValue;
      case "aaaaa":
        return dayPeriodEnumValue[0];
      case "aaaa":
      default:
        return dayPeriodEnumValue === "am" ? "a.m." : "p.m.";
    }
  },

  // Hour [1-12]
  h(date, token) {
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getHours() % 12 || 12, token.length);
  },

  // Hour [0-23]
  H(date, token) {
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getHours(), token.length);
  },

  // Minute
  m(date, token) {
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getMinutes(), token.length);
  },

  // Second
  s(date, token) {
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getSeconds(), token.length);
  },

  // Fraction of second
  S(date, token) {
    const numberOfDigits = token.length;
    const milliseconds = date.getMilliseconds();
    const fractionalSeconds = Math.trunc(
      milliseconds * Math.pow(10, numberOfDigits - 3),
    );
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(fractionalSeconds, token.length);
  },
};


/***/ }),

/***/ "./node_modules/date-fns/_lib/format/longFormatters.mjs":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/_lib/format/longFormatters.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   longFormatters: () => (/* binding */ longFormatters)
/* harmony export */ });
const dateLongFormatter = (pattern, formatLong) => {
  switch (pattern) {
    case "P":
      return formatLong.date({ width: "short" });
    case "PP":
      return formatLong.date({ width: "medium" });
    case "PPP":
      return formatLong.date({ width: "long" });
    case "PPPP":
    default:
      return formatLong.date({ width: "full" });
  }
};

const timeLongFormatter = (pattern, formatLong) => {
  switch (pattern) {
    case "p":
      return formatLong.time({ width: "short" });
    case "pp":
      return formatLong.time({ width: "medium" });
    case "ppp":
      return formatLong.time({ width: "long" });
    case "pppp":
    default:
      return formatLong.time({ width: "full" });
  }
};

const dateTimeLongFormatter = (pattern, formatLong) => {
  const matchResult = pattern.match(/(P+)(p+)?/) || [];
  const datePattern = matchResult[1];
  const timePattern = matchResult[2];

  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }

  let dateTimeFormat;

  switch (datePattern) {
    case "P":
      dateTimeFormat = formatLong.dateTime({ width: "short" });
      break;
    case "PP":
      dateTimeFormat = formatLong.dateTime({ width: "medium" });
      break;
    case "PPP":
      dateTimeFormat = formatLong.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      dateTimeFormat = formatLong.dateTime({ width: "full" });
      break;
  }

  return dateTimeFormat
    .replace("{{date}}", dateLongFormatter(datePattern, formatLong))
    .replace("{{time}}", timeLongFormatter(timePattern, formatLong));
};

const longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter,
};


/***/ }),

/***/ "./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.mjs":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.mjs ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getTimezoneOffsetInMilliseconds: () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate.mjs */ "./node_modules/date-fns/toDate.mjs");


/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const utcDate = new Date(
    Date.UTC(
      _date.getFullYear(),
      _date.getMonth(),
      _date.getDate(),
      _date.getHours(),
      _date.getMinutes(),
      _date.getSeconds(),
      _date.getMilliseconds(),
    ),
  );
  utcDate.setUTCFullYear(_date.getFullYear());
  return +date - +utcDate;
}


/***/ }),

/***/ "./node_modules/date-fns/_lib/protectedTokens.mjs":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/_lib/protectedTokens.mjs ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isProtectedDayOfYearToken: () => (/* binding */ isProtectedDayOfYearToken),
/* harmony export */   isProtectedWeekYearToken: () => (/* binding */ isProtectedWeekYearToken),
/* harmony export */   warnOrThrowProtectedError: () => (/* binding */ warnOrThrowProtectedError)
/* harmony export */ });
const dayOfYearTokenRE = /^D+$/;
const weekYearTokenRE = /^Y+$/;

const throwTokens = ["D", "DD", "YY", "YYYY"];

function isProtectedDayOfYearToken(token) {
  return dayOfYearTokenRE.test(token);
}

function isProtectedWeekYearToken(token) {
  return weekYearTokenRE.test(token);
}

function warnOrThrowProtectedError(token, format, input) {
  const _message = message(token, format, input);
  console.warn(_message);
  if (throwTokens.includes(token)) throw new RangeError(_message);
}

function message(token, format, input) {
  const subject = token[0] === "Y" ? "years" : "days of the month";
  return `Use \`${token.toLowerCase()}\` instead of \`${token}\` (in \`${format}\`) for formatting ${subject} to the input \`${input}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}


/***/ }),

/***/ "./node_modules/date-fns/constants.mjs":
/*!*********************************************!*\
  !*** ./node_modules/date-fns/constants.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   daysInWeek: () => (/* binding */ daysInWeek),
/* harmony export */   daysInYear: () => (/* binding */ daysInYear),
/* harmony export */   maxTime: () => (/* binding */ maxTime),
/* harmony export */   millisecondsInDay: () => (/* binding */ millisecondsInDay),
/* harmony export */   millisecondsInHour: () => (/* binding */ millisecondsInHour),
/* harmony export */   millisecondsInMinute: () => (/* binding */ millisecondsInMinute),
/* harmony export */   millisecondsInSecond: () => (/* binding */ millisecondsInSecond),
/* harmony export */   millisecondsInWeek: () => (/* binding */ millisecondsInWeek),
/* harmony export */   minTime: () => (/* binding */ minTime),
/* harmony export */   minutesInDay: () => (/* binding */ minutesInDay),
/* harmony export */   minutesInHour: () => (/* binding */ minutesInHour),
/* harmony export */   minutesInMonth: () => (/* binding */ minutesInMonth),
/* harmony export */   minutesInYear: () => (/* binding */ minutesInYear),
/* harmony export */   monthsInQuarter: () => (/* binding */ monthsInQuarter),
/* harmony export */   monthsInYear: () => (/* binding */ monthsInYear),
/* harmony export */   quartersInYear: () => (/* binding */ quartersInYear),
/* harmony export */   secondsInDay: () => (/* binding */ secondsInDay),
/* harmony export */   secondsInHour: () => (/* binding */ secondsInHour),
/* harmony export */   secondsInMinute: () => (/* binding */ secondsInMinute),
/* harmony export */   secondsInMonth: () => (/* binding */ secondsInMonth),
/* harmony export */   secondsInQuarter: () => (/* binding */ secondsInQuarter),
/* harmony export */   secondsInWeek: () => (/* binding */ secondsInWeek),
/* harmony export */   secondsInYear: () => (/* binding */ secondsInYear)
/* harmony export */ });
/**
 * @module constants
 * @summary Useful constants
 * @description
 * Collection of useful date constants.
 *
 * The constants could be imported from `date-fns/constants`:
 *
 * ```ts
 * import { maxTime, minTime } from "./constants/date-fns/constants";
 *
 * function isAllowedTime(time) {
 *   return time <= maxTime && time >= minTime;
 * }
 * ```
 */

/**
 * @constant
 * @name daysInWeek
 * @summary Days in 1 week.
 */
const daysInWeek = 7;

/**
 * @constant
 * @name daysInYear
 * @summary Days in 1 year.
 *
 * @description
 * How many days in a year.
 *
 * One years equals 365.2425 days according to the formula:
 *
 * > Leap year occures every 4 years, except for years that are divisable by 100 and not divisable by 400.
 * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
 */
const daysInYear = 365.2425;

/**
 * @constant
 * @name maxTime
 * @summary Maximum allowed time.
 *
 * @example
 * import { maxTime } from "./constants/date-fns/constants";
 *
 * const isValid = 8640000000000001 <= maxTime;
 * //=> false
 *
 * new Date(8640000000000001);
 * //=> Invalid Date
 */
const maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;

/**
 * @constant
 * @name minTime
 * @summary Minimum allowed time.
 *
 * @example
 * import { minTime } from "./constants/date-fns/constants";
 *
 * const isValid = -8640000000000001 >= minTime;
 * //=> false
 *
 * new Date(-8640000000000001)
 * //=> Invalid Date
 */
const minTime = -maxTime;

/**
 * @constant
 * @name millisecondsInWeek
 * @summary Milliseconds in 1 week.
 */
const millisecondsInWeek = 604800000;

/**
 * @constant
 * @name millisecondsInDay
 * @summary Milliseconds in 1 day.
 */
const millisecondsInDay = 86400000;

/**
 * @constant
 * @name millisecondsInMinute
 * @summary Milliseconds in 1 minute
 */
const millisecondsInMinute = 60000;

/**
 * @constant
 * @name millisecondsInHour
 * @summary Milliseconds in 1 hour
 */
const millisecondsInHour = 3600000;

/**
 * @constant
 * @name millisecondsInSecond
 * @summary Milliseconds in 1 second
 */
const millisecondsInSecond = 1000;

/**
 * @constant
 * @name minutesInYear
 * @summary Minutes in 1 year.
 */
const minutesInYear = 525600;

/**
 * @constant
 * @name minutesInMonth
 * @summary Minutes in 1 month.
 */
const minutesInMonth = 43200;

/**
 * @constant
 * @name minutesInDay
 * @summary Minutes in 1 day.
 */
const minutesInDay = 1440;

/**
 * @constant
 * @name minutesInHour
 * @summary Minutes in 1 hour.
 */
const minutesInHour = 60;

/**
 * @constant
 * @name monthsInQuarter
 * @summary Months in 1 quarter.
 */
const monthsInQuarter = 3;

/**
 * @constant
 * @name monthsInYear
 * @summary Months in 1 year.
 */
const monthsInYear = 12;

/**
 * @constant
 * @name quartersInYear
 * @summary Quarters in 1 year
 */
const quartersInYear = 4;

/**
 * @constant
 * @name secondsInHour
 * @summary Seconds in 1 hour.
 */
const secondsInHour = 3600;

/**
 * @constant
 * @name secondsInMinute
 * @summary Seconds in 1 minute.
 */
const secondsInMinute = 60;

/**
 * @constant
 * @name secondsInDay
 * @summary Seconds in 1 day.
 */
const secondsInDay = secondsInHour * 24;

/**
 * @constant
 * @name secondsInWeek
 * @summary Seconds in 1 week.
 */
const secondsInWeek = secondsInDay * 7;

/**
 * @constant
 * @name secondsInYear
 * @summary Seconds in 1 year.
 */
const secondsInYear = secondsInDay * daysInYear;

/**
 * @constant
 * @name secondsInMonth
 * @summary Seconds in 1 month
 */
const secondsInMonth = secondsInYear / 12;

/**
 * @constant
 * @name secondsInQuarter
 * @summary Seconds in 1 quarter.
 */
const secondsInQuarter = secondsInMonth * 3;


/***/ }),

/***/ "./node_modules/date-fns/constructFrom.mjs":
/*!*************************************************!*\
  !*** ./node_modules/date-fns/constructFrom.mjs ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   constructFrom: () => (/* binding */ constructFrom),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @name constructFrom
 * @category Generic Helpers
 * @summary Constructs a date using the reference date and the value
 *
 * @description
 * The function constructs a new date using the constructor from the reference
 * date and the given value. It helps to build generic functions that accept
 * date extensions.
 *
 * It defaults to `Date` if the passed reference date is a number or a string.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The reference date to take constructor from
 * @param value - The value to create the date
 *
 * @returns Date initialized using the given date and value
 *
 * @example
 * import { constructFrom } from 'date-fns'
 *
 * // A function that clones a date preserving the original type
 * function cloneDate<DateType extends Date(date: DateType): DateType {
 *   return constructFrom(
 *     date, // Use contrustor from the given date
 *     date.getTime() // Use the date value to create a new date
 *   )
 * }
 */
function constructFrom(date, value) {
  if (date instanceof Date) {
    return new date.constructor(value);
  } else {
    return new Date(value);
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (constructFrom);


/***/ }),

/***/ "./node_modules/date-fns/differenceInCalendarDays.mjs":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/differenceInCalendarDays.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   differenceInCalendarDays: () => (/* binding */ differenceInCalendarDays)
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants.mjs */ "./node_modules/date-fns/constants.mjs");
/* harmony import */ var _startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startOfDay.mjs */ "./node_modules/date-fns/startOfDay.mjs");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/getTimezoneOffsetInMilliseconds.mjs */ "./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.mjs");




/**
 * @name differenceInCalendarDays
 * @category Day Helpers
 * @summary Get the number of calendar days between the given dates.
 *
 * @description
 * Get the number of calendar days between the given dates. This means that the times are removed
 * from the dates and then the difference in days is calculated.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The later date
 * @param dateRight - The earlier date
 *
 * @returns The number of calendar days
 *
 * @example
 * // How many calendar days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * const result = differenceInCalendarDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 366
 * // How many calendar days are between
 * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
 * const result = differenceInCalendarDays(
 *   new Date(2011, 6, 3, 0, 1),
 *   new Date(2011, 6, 2, 23, 59)
 * )
 * //=> 1
 */
function differenceInCalendarDays(dateLeft, dateRight) {
  const startOfDayLeft = (0,_startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfDay)(dateLeft);
  const startOfDayRight = (0,_startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfDay)(dateRight);

  const timestampLeft =
    +startOfDayLeft - (0,_lib_getTimezoneOffsetInMilliseconds_mjs__WEBPACK_IMPORTED_MODULE_1__.getTimezoneOffsetInMilliseconds)(startOfDayLeft);
  const timestampRight =
    +startOfDayRight - (0,_lib_getTimezoneOffsetInMilliseconds_mjs__WEBPACK_IMPORTED_MODULE_1__.getTimezoneOffsetInMilliseconds)(startOfDayRight);

  // Round the number of days to the nearest integer because the number of
  // milliseconds in a day is not constant (e.g. it's different in the week of
  // the daylight saving time clock shift).
  return Math.round((timestampLeft - timestampRight) / _constants_mjs__WEBPACK_IMPORTED_MODULE_2__.millisecondsInDay);
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (differenceInCalendarDays);


/***/ }),

/***/ "./node_modules/date-fns/differenceInDays.mjs":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/differenceInDays.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   differenceInDays: () => (/* binding */ differenceInDays)
/* harmony export */ });
/* harmony import */ var _differenceInCalendarDays_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./differenceInCalendarDays.mjs */ "./node_modules/date-fns/differenceInCalendarDays.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");



/**
 * @name differenceInDays
 * @category Day Helpers
 * @summary Get the number of full days between the given dates.
 *
 * @description
 * Get the number of full day periods between two dates. Fractional days are
 * truncated towards zero.
 *
 * One "full day" is the distance between a local time in one day to the same
 * local time on the next or previous day. A full day can sometimes be less than
 * or more than 24 hours if a daylight savings change happens between two dates.
 *
 * To ignore DST and only measure exact 24-hour periods, use this instead:
 * `Math.trunc(differenceInHours(dateLeft, dateRight)/24)|0`.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The later date
 * @param dateRight - The earlier date
 *
 * @returns The number of full days according to the local timezone
 *
 * @example
 * // How many full days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * const result = differenceInDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 365
 *
 * @example
 * // How many full days are between
 * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
 * const result = differenceInDays(
 *   new Date(2011, 6, 3, 0, 1),
 *   new Date(2011, 6, 2, 23, 59)
 * )
 * //=> 0
 *
 * @example
 * // How many full days are between
 * // 1 March 2020 0:00 and 1 June 2020 0:00 ?
 * // Note: because local time is used, the
 * // result will always be 92 days, even in
 * // time zones where DST starts and the
 * // period has only 92*24-1 hours.
 * const result = differenceInDays(
 *   new Date(2020, 5, 1),
 *   new Date(2020, 2, 1)
 * )
 * //=> 92
 */
function differenceInDays(dateLeft, dateRight) {
  const _dateLeft = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(dateLeft);
  const _dateRight = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(dateRight);

  const sign = compareLocalAsc(_dateLeft, _dateRight);
  const difference = Math.abs((0,_differenceInCalendarDays_mjs__WEBPACK_IMPORTED_MODULE_1__.differenceInCalendarDays)(_dateLeft, _dateRight));

  _dateLeft.setDate(_dateLeft.getDate() - sign * difference);

  // Math.abs(diff in full days - diff in calendar days) === 1 if last calendar day is not full
  // If so, result must be decreased by 1 in absolute value
  const isLastDayNotFull = Number(
    compareLocalAsc(_dateLeft, _dateRight) === -sign,
  );
  const result = sign * (difference - isLastDayNotFull);
  // Prevent negative zero
  return result === 0 ? 0 : result;
}

// Like `compareAsc` but uses local time not UTC, which is needed
// for accurate equality comparisons of UTC timestamps that end up
// having the same representation in local time, e.g. one hour before
// DST ends vs. the instant that DST ends.
function compareLocalAsc(dateLeft, dateRight) {
  const diff =
    dateLeft.getFullYear() - dateRight.getFullYear() ||
    dateLeft.getMonth() - dateRight.getMonth() ||
    dateLeft.getDate() - dateRight.getDate() ||
    dateLeft.getHours() - dateRight.getHours() ||
    dateLeft.getMinutes() - dateRight.getMinutes() ||
    dateLeft.getSeconds() - dateRight.getSeconds() ||
    dateLeft.getMilliseconds() - dateRight.getMilliseconds();

  if (diff < 0) {
    return -1;
  } else if (diff > 0) {
    return 1;
    // Return 0 if diff is 0; return NaN if diff is NaN
  } else {
    return diff;
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (differenceInDays);


/***/ }),

/***/ "./node_modules/date-fns/format.mjs":
/*!******************************************!*\
  !*** ./node_modules/date-fns/format.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   format: () => (/* binding */ format),
/* harmony export */   formatDate: () => (/* binding */ format),
/* harmony export */   formatters: () => (/* reexport safe */ _lib_format_formatters_mjs__WEBPACK_IMPORTED_MODULE_0__.formatters),
/* harmony export */   longFormatters: () => (/* reexport safe */ _lib_format_longFormatters_mjs__WEBPACK_IMPORTED_MODULE_1__.longFormatters)
/* harmony export */ });
/* harmony import */ var _lib_defaultLocale_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/defaultLocale.mjs */ "./node_modules/date-fns/locale/en-US.mjs");
/* harmony import */ var _lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/defaultOptions.mjs */ "./node_modules/date-fns/_lib/defaultOptions.mjs");
/* harmony import */ var _lib_format_formatters_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/format/formatters.mjs */ "./node_modules/date-fns/_lib/format/formatters.mjs");
/* harmony import */ var _lib_format_longFormatters_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/format/longFormatters.mjs */ "./node_modules/date-fns/_lib/format/longFormatters.mjs");
/* harmony import */ var _lib_protectedTokens_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_lib/protectedTokens.mjs */ "./node_modules/date-fns/_lib/protectedTokens.mjs");
/* harmony import */ var _isValid_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./isValid.mjs */ "./node_modules/date-fns/isValid.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");








// Rexports of internal for libraries to use.
// See: https://github.com/date-fns/date-fns/issues/3638#issuecomment-1877082874


// This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps
const formattingTokensRegExp =
  /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;

// This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`
const longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;

const escapedStringRegExp = /^'([^]*?)'?$/;
const doubleQuoteRegExp = /''/g;
const unescapedLatinCharacterRegExp = /[a-zA-Z]/;



/**
 * The {@link format} function options.
 */

/**
 * @name format
 * @alias formatDate
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear](https://date-fns.org/docs/getISOWeekYear)
 *    and [getWeekYear](https://date-fns.org/docs/getWeekYear)).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 * @param format - The string of tokens
 * @param options - An object with options
 *
 * @returns The formatted date string
 *
 * @throws `date` must not be Invalid Date
 * @throws `options.locale` must contain `localize` property
 * @throws `options.locale` must contain `formatLong` property
 * @throws use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * const result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * const result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */
function format(date, formatStr, options) {
  const defaultOptions = (0,_lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_2__.getDefaultOptions)();
  const locale = options?.locale ?? defaultOptions.locale ?? _lib_defaultLocale_mjs__WEBPACK_IMPORTED_MODULE_3__.enUS;

  const firstWeekContainsDate =
    options?.firstWeekContainsDate ??
    options?.locale?.options?.firstWeekContainsDate ??
    defaultOptions.firstWeekContainsDate ??
    defaultOptions.locale?.options?.firstWeekContainsDate ??
    1;

  const weekStartsOn =
    options?.weekStartsOn ??
    options?.locale?.options?.weekStartsOn ??
    defaultOptions.weekStartsOn ??
    defaultOptions.locale?.options?.weekStartsOn ??
    0;

  const originalDate = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_4__.toDate)(date);

  if (!(0,_isValid_mjs__WEBPACK_IMPORTED_MODULE_5__.isValid)(originalDate)) {
    throw new RangeError("Invalid time value");
  }

  let parts = formatStr
    .match(longFormattingTokensRegExp)
    .map((substring) => {
      const firstCharacter = substring[0];
      if (firstCharacter === "p" || firstCharacter === "P") {
        const longFormatter = _lib_format_longFormatters_mjs__WEBPACK_IMPORTED_MODULE_1__.longFormatters[firstCharacter];
        return longFormatter(substring, locale.formatLong);
      }
      return substring;
    })
    .join("")
    .match(formattingTokensRegExp)
    .map((substring) => {
      // Replace two single quote characters with one single quote character
      if (substring === "''") {
        return { isToken: false, value: "'" };
      }

      const firstCharacter = substring[0];
      if (firstCharacter === "'") {
        return { isToken: false, value: cleanEscapedString(substring) };
      }

      if (_lib_format_formatters_mjs__WEBPACK_IMPORTED_MODULE_0__.formatters[firstCharacter]) {
        return { isToken: true, value: substring };
      }

      if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" +
            firstCharacter +
            "`",
        );
      }

      return { isToken: false, value: substring };
    });

  // invoke localize preprocessor (only for french locales at the moment)
  if (locale.localize.preprocessor) {
    parts = locale.localize.preprocessor(originalDate, parts);
  }

  const formatterOptions = {
    firstWeekContainsDate,
    weekStartsOn,
    locale,
  };

  return parts
    .map((part) => {
      if (!part.isToken) return part.value;

      const token = part.value;

      if (
        (!options?.useAdditionalWeekYearTokens &&
          (0,_lib_protectedTokens_mjs__WEBPACK_IMPORTED_MODULE_6__.isProtectedWeekYearToken)(token)) ||
        (!options?.useAdditionalDayOfYearTokens &&
          (0,_lib_protectedTokens_mjs__WEBPACK_IMPORTED_MODULE_6__.isProtectedDayOfYearToken)(token))
      ) {
        (0,_lib_protectedTokens_mjs__WEBPACK_IMPORTED_MODULE_6__.warnOrThrowProtectedError)(token, formatStr, String(date));
      }

      const formatter = _lib_format_formatters_mjs__WEBPACK_IMPORTED_MODULE_0__.formatters[token[0]];
      return formatter(originalDate, token, locale.localize, formatterOptions);
    })
    .join("");
}

function cleanEscapedString(input) {
  const matched = input.match(escapedStringRegExp);

  if (!matched) {
    return input;
  }

  return matched[1].replace(doubleQuoteRegExp, "'");
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (format);


/***/ }),

/***/ "./node_modules/date-fns/getDayOfYear.mjs":
/*!************************************************!*\
  !*** ./node_modules/date-fns/getDayOfYear.mjs ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getDayOfYear: () => (/* binding */ getDayOfYear)
/* harmony export */ });
/* harmony import */ var _differenceInCalendarDays_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./differenceInCalendarDays.mjs */ "./node_modules/date-fns/differenceInCalendarDays.mjs");
/* harmony import */ var _startOfYear_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfYear.mjs */ "./node_modules/date-fns/startOfYear.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");




/**
 * @name getDayOfYear
 * @category Day Helpers
 * @summary Get the day of the year of the given date.
 *
 * @description
 * Get the day of the year of the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The day of year
 *
 * @example
 * // Which day of the year is 2 July 2014?
 * const result = getDayOfYear(new Date(2014, 6, 2))
 * //=> 183
 */
function getDayOfYear(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const diff = (0,_differenceInCalendarDays_mjs__WEBPACK_IMPORTED_MODULE_1__.differenceInCalendarDays)(_date, (0,_startOfYear_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfYear)(_date));
  const dayOfYear = diff + 1;
  return dayOfYear;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getDayOfYear);


/***/ }),

/***/ "./node_modules/date-fns/getISOWeek.mjs":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/getISOWeek.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getISOWeek: () => (/* binding */ getISOWeek)
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants.mjs */ "./node_modules/date-fns/constants.mjs");
/* harmony import */ var _startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./startOfISOWeek.mjs */ "./node_modules/date-fns/startOfISOWeek.mjs");
/* harmony import */ var _startOfISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfISOWeekYear.mjs */ "./node_modules/date-fns/startOfISOWeekYear.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");





/**
 * @name getISOWeek
 * @category ISO Week Helpers
 * @summary Get the ISO week of the given date.
 *
 * @description
 * Get the ISO week of the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The ISO week
 *
 * @example
 * // Which week of the ISO-week numbering year is 2 January 2005?
 * const result = getISOWeek(new Date(2005, 0, 2))
 * //=> 53
 */
function getISOWeek(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const diff = +(0,_startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_1__.startOfISOWeek)(_date) - +(0,_startOfISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfISOWeekYear)(_date);

  // Round the number of weeks to the nearest integer because the number of
  // milliseconds in a week is not constant (e.g. it's different in the week of
  // the daylight saving time clock shift).
  return Math.round(diff / _constants_mjs__WEBPACK_IMPORTED_MODULE_3__.millisecondsInWeek) + 1;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getISOWeek);


/***/ }),

/***/ "./node_modules/date-fns/getISOWeekYear.mjs":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/getISOWeekYear.mjs ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getISOWeekYear: () => (/* binding */ getISOWeekYear)
/* harmony export */ });
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");
/* harmony import */ var _startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfISOWeek.mjs */ "./node_modules/date-fns/startOfISOWeek.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");




/**
 * @name getISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the ISO week-numbering year of the given date.
 *
 * @description
 * Get the ISO week-numbering year of the given date,
 * which always starts 3 days before the year's first Thursday.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The ISO week-numbering year
 *
 * @example
 * // Which ISO-week numbering year is 2 January 2005?
 * const result = getISOWeekYear(new Date(2005, 0, 2))
 * //=> 2004
 */
function getISOWeekYear(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const year = _date.getFullYear();

  const fourthOfJanuaryOfNextYear = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, 0);
  fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
  const startOfNextYear = (0,_startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfISOWeek)(fourthOfJanuaryOfNextYear);

  const fourthOfJanuaryOfThisYear = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, 0);
  fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0);
  const startOfThisYear = (0,_startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfISOWeek)(fourthOfJanuaryOfThisYear);

  if (_date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (_date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getISOWeekYear);


/***/ }),

/***/ "./node_modules/date-fns/getWeek.mjs":
/*!*******************************************!*\
  !*** ./node_modules/date-fns/getWeek.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getWeek: () => (/* binding */ getWeek)
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants.mjs */ "./node_modules/date-fns/constants.mjs");
/* harmony import */ var _startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./startOfWeek.mjs */ "./node_modules/date-fns/startOfWeek.mjs");
/* harmony import */ var _startOfWeekYear_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfWeekYear.mjs */ "./node_modules/date-fns/startOfWeekYear.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");





/**
 * The {@link getWeek} function options.
 */

/**
 * @name getWeek
 * @category Week Helpers
 * @summary Get the local week index of the given date.
 *
 * @description
 * Get the local week index of the given date.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 * @param options - An object with options
 *
 * @returns The week
 *
 * @example
 * // Which week of the local week numbering year is 2 January 2005 with default options?
 * const result = getWeek(new Date(2005, 0, 2))
 * //=> 2
 *
 * @example
 * // Which week of the local week numbering year is 2 January 2005,
 * // if Monday is the first day of the week,
 * // and the first week of the year always contains 4 January?
 * const result = getWeek(new Date(2005, 0, 2), {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> 53
 */

function getWeek(date, options) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const diff = +(0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_1__.startOfWeek)(_date, options) - +(0,_startOfWeekYear_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfWeekYear)(_date, options);

  // Round the number of weeks to the nearest integer because the number of
  // milliseconds in a week is not constant (e.g. it's different in the week of
  // the daylight saving time clock shift).
  return Math.round(diff / _constants_mjs__WEBPACK_IMPORTED_MODULE_3__.millisecondsInWeek) + 1;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeek);


/***/ }),

/***/ "./node_modules/date-fns/getWeekYear.mjs":
/*!***********************************************!*\
  !*** ./node_modules/date-fns/getWeekYear.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getWeekYear: () => (/* binding */ getWeekYear)
/* harmony export */ });
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");
/* harmony import */ var _startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./startOfWeek.mjs */ "./node_modules/date-fns/startOfWeek.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");
/* harmony import */ var _lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/defaultOptions.mjs */ "./node_modules/date-fns/_lib/defaultOptions.mjs");





/**
 * The {@link getWeekYear} function options.
 */

/**
 * @name getWeekYear
 * @category Week-Numbering Year Helpers
 * @summary Get the local week-numbering year of the given date.
 *
 * @description
 * Get the local week-numbering year of the given date.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 * @param options - An object with options.
 *
 * @returns The local week-numbering year
 *
 * @example
 * // Which week numbering year is 26 December 2004 with the default settings?
 * const result = getWeekYear(new Date(2004, 11, 26))
 * //=> 2005
 *
 * @example
 * // Which week numbering year is 26 December 2004 if week starts on Saturday?
 * const result = getWeekYear(new Date(2004, 11, 26), { weekStartsOn: 6 })
 * //=> 2004
 *
 * @example
 * // Which week numbering year is 26 December 2004 if the first week contains 4 January?
 * const result = getWeekYear(new Date(2004, 11, 26), { firstWeekContainsDate: 4 })
 * //=> 2004
 */
function getWeekYear(date, options) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const year = _date.getFullYear();

  const defaultOptions = (0,_lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  const firstWeekContainsDate =
    options?.firstWeekContainsDate ??
    options?.locale?.options?.firstWeekContainsDate ??
    defaultOptions.firstWeekContainsDate ??
    defaultOptions.locale?.options?.firstWeekContainsDate ??
    1;

  const firstWeekOfNextYear = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__.constructFrom)(date, 0);
  firstWeekOfNextYear.setFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setHours(0, 0, 0, 0);
  const startOfNextYear = (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__.startOfWeek)(firstWeekOfNextYear, options);

  const firstWeekOfThisYear = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__.constructFrom)(date, 0);
  firstWeekOfThisYear.setFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setHours(0, 0, 0, 0);
  const startOfThisYear = (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__.startOfWeek)(firstWeekOfThisYear, options);

  if (_date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (_date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeekYear);


/***/ }),

/***/ "./node_modules/date-fns/isDate.mjs":
/*!******************************************!*\
  !*** ./node_modules/date-fns/isDate.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isDate: () => (/* binding */ isDate)
/* harmony export */ });
/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * @param value - The value to check
 *
 * @returns True if the given value is a date
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */
function isDate(value) {
  return (
    value instanceof Date ||
    (typeof value === "object" &&
      Object.prototype.toString.call(value) === "[object Date]")
  );
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isDate);


/***/ }),

/***/ "./node_modules/date-fns/isValid.mjs":
/*!*******************************************!*\
  !*** ./node_modules/date-fns/isValid.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isValid: () => (/* binding */ isValid)
/* harmony export */ });
/* harmony import */ var _isDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isDate.mjs */ "./node_modules/date-fns/isDate.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");



/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate](https://date-fns.org/docs/toDate)
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 *
 * @returns The date is valid
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */
function isValid(date) {
  if (!(0,_isDate_mjs__WEBPACK_IMPORTED_MODULE_0__.isDate)(date) && typeof date !== "number") {
    return false;
  }
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_1__.toDate)(date);
  return !isNaN(Number(_date));
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isValid);


/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildFormatLongFn.mjs":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildFormatLongFn.mjs ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildFormatLongFn: () => (/* binding */ buildFormatLongFn)
/* harmony export */ });
function buildFormatLongFn(args) {
  return (options = {}) => {
    // TODO: Remove String()
    const width = options.width ? String(options.width) : args.defaultWidth;
    const format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}


/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildLocalizeFn.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildLocalizeFn.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildLocalizeFn: () => (/* binding */ buildLocalizeFn)
/* harmony export */ });
/* eslint-disable no-unused-vars */

/**
 * The localize function argument callback which allows to convert raw value to
 * the actual type.
 *
 * @param value - The value to convert
 *
 * @returns The converted value
 */

/**
 * The map of localized values for each width.
 */

/**
 * The index type of the locale unit value. It types conversion of units of
 * values that don't start at 0 (i.e. quarters).
 */

/**
 * Converts the unit value to the tuple of values.
 */

/**
 * The tuple of localized era values. The first element represents BC,
 * the second element represents AD.
 */

/**
 * The tuple of localized quarter values. The first element represents Q1.
 */

/**
 * The tuple of localized day values. The first element represents Sunday.
 */

/**
 * The tuple of localized month values. The first element represents January.
 */

function buildLocalizeFn(args) {
  return (value, options) => {
    const context = options?.context ? String(options.context) : "standalone";

    let valuesArray;
    if (context === "formatting" && args.formattingValues) {
      const defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      const width = options?.width ? String(options.width) : defaultWidth;

      valuesArray =
        args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      const defaultWidth = args.defaultWidth;
      const width = options?.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[width] || args.values[defaultWidth];
    }
    const index = args.argumentCallback ? args.argumentCallback(value) : value;

    // @ts-expect-error - For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!
    return valuesArray[index];
  };
}


/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildMatchFn.mjs":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildMatchFn.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildMatchFn: () => (/* binding */ buildMatchFn)
/* harmony export */ });
function buildMatchFn(args) {
  return (string, options = {}) => {
    const width = options.width;

    const matchPattern =
      (width && args.matchPatterns[width]) ||
      args.matchPatterns[args.defaultMatchWidth];
    const matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }
    const matchedString = matchResult[0];

    const parsePatterns =
      (width && args.parsePatterns[width]) ||
      args.parsePatterns[args.defaultParseWidth];

    const key = Array.isArray(parsePatterns)
      ? findIndex(parsePatterns, (pattern) => pattern.test(matchedString))
      : // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
        findKey(parsePatterns, (pattern) => pattern.test(matchedString));

    let value;

    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback
      ? // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
        options.valueCallback(value)
      : value;

    const rest = string.slice(matchedString.length);

    return { value, rest };
  };
}

function findKey(object, predicate) {
  for (const key in object) {
    if (
      Object.prototype.hasOwnProperty.call(object, key) &&
      predicate(object[key])
    ) {
      return key;
    }
  }
  return undefined;
}

function findIndex(array, predicate) {
  for (let key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
  return undefined;
}


/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildMatchPatternFn.mjs":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildMatchPatternFn.mjs ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildMatchPatternFn: () => (/* binding */ buildMatchPatternFn)
/* harmony export */ });
function buildMatchPatternFn(args) {
  return (string, options = {}) => {
    const matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    const matchedString = matchResult[0];

    const parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    let value = args.valueCallback
      ? args.valueCallback(parseResult[0])
      : parseResult[0];

    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
    value = options.valueCallback ? options.valueCallback(value) : value;

    const rest = string.slice(matchedString.length);

    return { value, rest };
  };
}


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US.mjs":
/*!************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US.mjs ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   enUS: () => (/* binding */ enUS)
/* harmony export */ });
/* harmony import */ var _en_US_lib_formatDistance_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./en-US/_lib/formatDistance.mjs */ "./node_modules/date-fns/locale/en-US/_lib/formatDistance.mjs");
/* harmony import */ var _en_US_lib_formatLong_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./en-US/_lib/formatLong.mjs */ "./node_modules/date-fns/locale/en-US/_lib/formatLong.mjs");
/* harmony import */ var _en_US_lib_formatRelative_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./en-US/_lib/formatRelative.mjs */ "./node_modules/date-fns/locale/en-US/_lib/formatRelative.mjs");
/* harmony import */ var _en_US_lib_localize_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./en-US/_lib/localize.mjs */ "./node_modules/date-fns/locale/en-US/_lib/localize.mjs");
/* harmony import */ var _en_US_lib_match_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./en-US/_lib/match.mjs */ "./node_modules/date-fns/locale/en-US/_lib/match.mjs");






/**
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp](https://github.com/kossnocorp)
 * @author Lesha Koss [@leshakoss](https://github.com/leshakoss)
 */
const enUS = {
  code: "en-US",
  formatDistance: _en_US_lib_formatDistance_mjs__WEBPACK_IMPORTED_MODULE_0__.formatDistance,
  formatLong: _en_US_lib_formatLong_mjs__WEBPACK_IMPORTED_MODULE_1__.formatLong,
  formatRelative: _en_US_lib_formatRelative_mjs__WEBPACK_IMPORTED_MODULE_2__.formatRelative,
  localize: _en_US_lib_localize_mjs__WEBPACK_IMPORTED_MODULE_3__.localize,
  match: _en_US_lib_match_mjs__WEBPACK_IMPORTED_MODULE_4__.match,
  options: {
    weekStartsOn: 0 /* Sunday */,
    firstWeekContainsDate: 1,
  },
};

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (enUS);


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/formatDistance.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/formatDistance.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatDistance: () => (/* binding */ formatDistance)
/* harmony export */ });
const formatDistanceLocale = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds",
  },

  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds",
  },

  halfAMinute: "half a minute",

  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes",
  },

  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes",
  },

  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours",
  },

  xHours: {
    one: "1 hour",
    other: "{{count}} hours",
  },

  xDays: {
    one: "1 day",
    other: "{{count}} days",
  },

  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks",
  },

  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks",
  },

  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months",
  },

  xMonths: {
    one: "1 month",
    other: "{{count}} months",
  },

  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years",
  },

  xYears: {
    one: "1 year",
    other: "{{count}} years",
  },

  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years",
  },

  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years",
  },
};

const formatDistance = (token, count, options) => {
  let result;

  const tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === "string") {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace("{{count}}", count.toString());
  }

  if (options?.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return "in " + result;
    } else {
      return result + " ago";
    }
  }

  return result;
};


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/formatLong.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/formatLong.mjs ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatLong: () => (/* binding */ formatLong)
/* harmony export */ });
/* harmony import */ var _lib_buildFormatLongFn_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_lib/buildFormatLongFn.mjs */ "./node_modules/date-fns/locale/_lib/buildFormatLongFn.mjs");


const dateFormats = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy",
};

const timeFormats = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a",
};

const dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}",
};

const formatLong = {
  date: (0,_lib_buildFormatLongFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildFormatLongFn)({
    formats: dateFormats,
    defaultWidth: "full",
  }),

  time: (0,_lib_buildFormatLongFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildFormatLongFn)({
    formats: timeFormats,
    defaultWidth: "full",
  }),

  dateTime: (0,_lib_buildFormatLongFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildFormatLongFn)({
    formats: dateTimeFormats,
    defaultWidth: "full",
  }),
};


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/formatRelative.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/formatRelative.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatRelative: () => (/* binding */ formatRelative)
/* harmony export */ });
const formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P",
};

const formatRelative = (token, _date, _baseDate, _options) =>
  formatRelativeLocale[token];


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/localize.mjs":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/localize.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   localize: () => (/* binding */ localize)
/* harmony export */ });
/* harmony import */ var _lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_lib/buildLocalizeFn.mjs */ "./node_modules/date-fns/locale/_lib/buildLocalizeFn.mjs");


const eraValues = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"],
};

const quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
};

// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
const monthValues = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],

  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
};

const dayValues = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
};

const dayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
};

const formattingDayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night",
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night",
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night",
  },
};

const ordinalNumber = (dirtyNumber, _options) => {
  const number = Number(dirtyNumber);

  // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  const rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + "st";
      case 2:
        return number + "nd";
      case 3:
        return number + "rd";
    }
  }
  return number + "th";
};

const localize = {
  ordinalNumber,

  era: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: eraValues,
    defaultWidth: "wide",
  }),

  quarter: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: quarterValues,
    defaultWidth: "wide",
    argumentCallback: (quarter) => quarter - 1,
  }),

  month: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: monthValues,
    defaultWidth: "wide",
  }),

  day: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: dayValues,
    defaultWidth: "wide",
  }),

  dayPeriod: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: dayPeriodValues,
    defaultWidth: "wide",
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: "wide",
  }),
};


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/match.mjs":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/match.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   match: () => (/* binding */ match)
/* harmony export */ });
/* harmony import */ var _lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_lib/buildMatchFn.mjs */ "./node_modules/date-fns/locale/_lib/buildMatchFn.mjs");
/* harmony import */ var _lib_buildMatchPatternFn_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_lib/buildMatchPatternFn.mjs */ "./node_modules/date-fns/locale/_lib/buildMatchPatternFn.mjs");



const matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
const parseOrdinalNumberPattern = /\d+/i;

const matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i,
};
const parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i],
};

const matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i,
};
const parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i],
};

const matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
};
const parseMonthPatterns = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i,
  ],

  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i,
  ],
};

const matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
};
const parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
};

const matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
};
const parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i,
  },
};

const match = {
  ordinalNumber: (0,_lib_buildMatchPatternFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildMatchPatternFn)({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: (value) => parseInt(value, 10),
  }),

  era: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseEraPatterns,
    defaultParseWidth: "any",
  }),

  quarter: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: "any",
    valueCallback: (index) => index + 1,
  }),

  month: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: "any",
  }),

  day: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseDayPatterns,
    defaultParseWidth: "any",
  }),

  dayPeriod: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: "any",
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: "any",
  }),
};


/***/ }),

/***/ "./node_modules/date-fns/parseISO.mjs":
/*!********************************************!*\
  !*** ./node_modules/date-fns/parseISO.mjs ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   parseISO: () => (/* binding */ parseISO)
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.mjs */ "./node_modules/date-fns/constants.mjs");


/**
 * The {@link parseISO} function options.
 */

/**
 * @name parseISO
 * @category Common Helpers
 * @summary Parse ISO string
 *
 * @description
 * Parse the given string in ISO 8601 format and return an instance of Date.
 *
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If the argument isn't a string, the function cannot parse the string or
 * the values are invalid, it returns Invalid Date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param argument - The value to convert
 * @param options - An object with options
 *
 * @returns The parsed date in the local time zone
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * const result = parseISO('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert string '+02014101' to date,
 * // if the additional number of digits in the extended year format is 1:
 * const result = parseISO('+02014101', { additionalDigits: 1 })
 * //=> Fri Apr 11 2014 00:00:00
 */
function parseISO(argument, options) {
  const additionalDigits = options?.additionalDigits ?? 2;
  const dateStrings = splitDateString(argument);

  let date;
  if (dateStrings.date) {
    const parseYearResult = parseYear(dateStrings.date, additionalDigits);
    date = parseDate(parseYearResult.restDateString, parseYearResult.year);
  }

  if (!date || isNaN(date.getTime())) {
    return new Date(NaN);
  }

  const timestamp = date.getTime();
  let time = 0;
  let offset;

  if (dateStrings.time) {
    time = parseTime(dateStrings.time);
    if (isNaN(time)) {
      return new Date(NaN);
    }
  }

  if (dateStrings.timezone) {
    offset = parseTimezone(dateStrings.timezone);
    if (isNaN(offset)) {
      return new Date(NaN);
    }
  } else {
    const dirtyDate = new Date(timestamp + time);
    // JS parsed string assuming it's in UTC timezone
    // but we need it to be parsed in our timezone
    // so we use utc values to build date in our timezone.
    // Year values from 0 to 99 map to the years 1900 to 1999
    // so set year explicitly with setFullYear.
    const result = new Date(0);
    result.setFullYear(
      dirtyDate.getUTCFullYear(),
      dirtyDate.getUTCMonth(),
      dirtyDate.getUTCDate(),
    );
    result.setHours(
      dirtyDate.getUTCHours(),
      dirtyDate.getUTCMinutes(),
      dirtyDate.getUTCSeconds(),
      dirtyDate.getUTCMilliseconds(),
    );
    return result;
  }

  return new Date(timestamp + time + offset);
}

const patterns = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/,
};

const dateRegex =
  /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
const timeRegex =
  /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
const timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;

function splitDateString(dateString) {
  const dateStrings = {};
  const array = dateString.split(patterns.dateTimeDelimiter);
  let timeString;

  // The regex match should only return at maximum two array elements.
  // [date], [time], or [date, time].
  if (array.length > 2) {
    return dateStrings;
  }

  if (/:/.test(array[0])) {
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];
    if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
      timeString = dateString.substr(
        dateStrings.date.length,
        dateString.length,
      );
    }
  }

  if (timeString) {
    const token = patterns.timezone.exec(timeString);
    if (token) {
      dateStrings.time = timeString.replace(token[1], "");
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }

  return dateStrings;
}

function parseYear(dateString, additionalDigits) {
  const regex = new RegExp(
    "^(?:(\\d{4}|[+-]\\d{" +
      (4 + additionalDigits) +
      "})|(\\d{2}|[+-]\\d{" +
      (2 + additionalDigits) +
      "})$)",
  );

  const captures = dateString.match(regex);
  // Invalid ISO-formatted year
  if (!captures) return { year: NaN, restDateString: "" };

  const year = captures[1] ? parseInt(captures[1]) : null;
  const century = captures[2] ? parseInt(captures[2]) : null;

  // either year or century is null, not both
  return {
    year: century === null ? year : century * 100,
    restDateString: dateString.slice((captures[1] || captures[2]).length),
  };
}

function parseDate(dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) return new Date(NaN);

  const captures = dateString.match(dateRegex);
  // Invalid ISO-formatted string
  if (!captures) return new Date(NaN);

  const isWeekDate = !!captures[4];
  const dayOfYear = parseDateUnit(captures[1]);
  const month = parseDateUnit(captures[2]) - 1;
  const day = parseDateUnit(captures[3]);
  const week = parseDateUnit(captures[4]);
  const dayOfWeek = parseDateUnit(captures[5]) - 1;

  if (isWeekDate) {
    if (!validateWeekDate(year, week, dayOfWeek)) {
      return new Date(NaN);
    }
    return dayOfISOWeekYear(year, week, dayOfWeek);
  } else {
    const date = new Date(0);
    if (
      !validateDate(year, month, day) ||
      !validateDayOfYearDate(year, dayOfYear)
    ) {
      return new Date(NaN);
    }
    date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
    return date;
  }
}

function parseDateUnit(value) {
  return value ? parseInt(value) : 1;
}

function parseTime(timeString) {
  const captures = timeString.match(timeRegex);
  if (!captures) return NaN; // Invalid ISO-formatted time

  const hours = parseTimeUnit(captures[1]);
  const minutes = parseTimeUnit(captures[2]);
  const seconds = parseTimeUnit(captures[3]);

  if (!validateTime(hours, minutes, seconds)) {
    return NaN;
  }

  return (
    hours * _constants_mjs__WEBPACK_IMPORTED_MODULE_0__.millisecondsInHour + minutes * _constants_mjs__WEBPACK_IMPORTED_MODULE_0__.millisecondsInMinute + seconds * 1000
  );
}

function parseTimeUnit(value) {
  return (value && parseFloat(value.replace(",", "."))) || 0;
}

function parseTimezone(timezoneString) {
  if (timezoneString === "Z") return 0;

  const captures = timezoneString.match(timezoneRegex);
  if (!captures) return 0;

  const sign = captures[1] === "+" ? -1 : 1;
  const hours = parseInt(captures[2]);
  const minutes = (captures[3] && parseInt(captures[3])) || 0;

  if (!validateTimezone(hours, minutes)) {
    return NaN;
  }

  return sign * (hours * _constants_mjs__WEBPACK_IMPORTED_MODULE_0__.millisecondsInHour + minutes * _constants_mjs__WEBPACK_IMPORTED_MODULE_0__.millisecondsInMinute);
}

function dayOfISOWeekYear(isoWeekYear, week, day) {
  const date = new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  const fourthOfJanuaryDay = date.getUTCDay() || 7;
  const diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}

// Validation functions

// February is null to handle the leap year (using ||)
const daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function isLeapYearIndex(year) {
  return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
}

function validateDate(year, month, date) {
  return (
    month >= 0 &&
    month <= 11 &&
    date >= 1 &&
    date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28))
  );
}

function validateDayOfYearDate(year, dayOfYear) {
  return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);
}

function validateWeekDate(_year, week, day) {
  return week >= 1 && week <= 53 && day >= 0 && day <= 6;
}

function validateTime(hours, minutes, seconds) {
  if (hours === 24) {
    return minutes === 0 && seconds === 0;
  }

  return (
    seconds >= 0 &&
    seconds < 60 &&
    minutes >= 0 &&
    minutes < 60 &&
    hours >= 0 &&
    hours < 25
  );
}

function validateTimezone(_hours, minutes) {
  return minutes >= 0 && minutes <= 59;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (parseISO);


/***/ }),

/***/ "./node_modules/date-fns/startOfDay.mjs":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/startOfDay.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfDay: () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of a day
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */
function startOfDay(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfDay);


/***/ }),

/***/ "./node_modules/date-fns/startOfISOWeek.mjs":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/startOfISOWeek.mjs ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfISOWeek: () => (/* binding */ startOfISOWeek)
/* harmony export */ });
/* harmony import */ var _startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startOfWeek.mjs */ "./node_modules/date-fns/startOfWeek.mjs");


/**
 * @name startOfISOWeek
 * @category ISO Week Helpers
 * @summary Return the start of an ISO week for the given date.
 *
 * @description
 * Return the start of an ISO week for the given date.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of an ISO week
 *
 * @example
 * // The start of an ISO week for 2 September 2014 11:55:00:
 * const result = startOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfISOWeek(date) {
  return (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfWeek)(date, { weekStartsOn: 1 });
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfISOWeek);


/***/ }),

/***/ "./node_modules/date-fns/startOfISOWeekYear.mjs":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/startOfISOWeekYear.mjs ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfISOWeekYear: () => (/* binding */ startOfISOWeekYear)
/* harmony export */ });
/* harmony import */ var _getISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getISOWeekYear.mjs */ "./node_modules/date-fns/getISOWeekYear.mjs");
/* harmony import */ var _startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfISOWeek.mjs */ "./node_modules/date-fns/startOfISOWeek.mjs");
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");




/**
 * @name startOfISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Return the start of an ISO week-numbering year for the given date.
 *
 * @description
 * Return the start of an ISO week-numbering year,
 * which always starts 3 days before the year's first Thursday.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of an ISO week-numbering year
 *
 * @example
 * // The start of an ISO week-numbering year for 2 July 2005:
 * const result = startOfISOWeekYear(new Date(2005, 6, 2))
 * //=> Mon Jan 03 2005 00:00:00
 */
function startOfISOWeekYear(date) {
  const year = (0,_getISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_0__.getISOWeekYear)(date);
  const fourthOfJanuary = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, 0);
  fourthOfJanuary.setFullYear(year, 0, 4);
  fourthOfJanuary.setHours(0, 0, 0, 0);
  return (0,_startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfISOWeek)(fourthOfJanuary);
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfISOWeekYear);


/***/ }),

/***/ "./node_modules/date-fns/startOfWeek.mjs":
/*!***********************************************!*\
  !*** ./node_modules/date-fns/startOfWeek.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfWeek: () => (/* binding */ startOfWeek)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");
/* harmony import */ var _lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/defaultOptions.mjs */ "./node_modules/date-fns/_lib/defaultOptions.mjs");



/**
 * The {@link startOfWeek} function options.
 */

/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of a week
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfWeek(date, options) {
  const defaultOptions = (0,_lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__.getDefaultOptions)();
  const weekStartsOn =
    options?.weekStartsOn ??
    options?.locale?.options?.weekStartsOn ??
    defaultOptions.weekStartsOn ??
    defaultOptions.locale?.options?.weekStartsOn ??
    0;

  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_1__.toDate)(date);
  const day = _date.getDay();
  const diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;

  _date.setDate(_date.getDate() - diff);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfWeek);


/***/ }),

/***/ "./node_modules/date-fns/startOfWeekYear.mjs":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/startOfWeekYear.mjs ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfWeekYear: () => (/* binding */ startOfWeekYear)
/* harmony export */ });
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");
/* harmony import */ var _getWeekYear_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getWeekYear.mjs */ "./node_modules/date-fns/getWeekYear.mjs");
/* harmony import */ var _startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./startOfWeek.mjs */ "./node_modules/date-fns/startOfWeek.mjs");
/* harmony import */ var _lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/defaultOptions.mjs */ "./node_modules/date-fns/_lib/defaultOptions.mjs");





/**
 * The {@link startOfWeekYear} function options.
 */

/**
 * @name startOfWeekYear
 * @category Week-Numbering Year Helpers
 * @summary Return the start of a local week-numbering year for the given date.
 *
 * @description
 * Return the start of a local week-numbering year.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of a week-numbering year
 *
 * @example
 * // The start of an a week-numbering year for 2 July 2005 with default settings:
 * const result = startOfWeekYear(new Date(2005, 6, 2))
 * //=> Sun Dec 26 2004 00:00:00
 *
 * @example
 * // The start of a week-numbering year for 2 July 2005
 * // if Monday is the first day of week
 * // and 4 January is always in the first week of the year:
 * const result = startOfWeekYear(new Date(2005, 6, 2), {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> Mon Jan 03 2005 00:00:00
 */
function startOfWeekYear(date, options) {
  const defaultOptions = (0,_lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__.getDefaultOptions)();
  const firstWeekContainsDate =
    options?.firstWeekContainsDate ??
    options?.locale?.options?.firstWeekContainsDate ??
    defaultOptions.firstWeekContainsDate ??
    defaultOptions.locale?.options?.firstWeekContainsDate ??
    1;

  const year = (0,_getWeekYear_mjs__WEBPACK_IMPORTED_MODULE_1__.getWeekYear)(date, options);
  const firstWeek = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__.constructFrom)(date, 0);
  firstWeek.setFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setHours(0, 0, 0, 0);
  const _date = (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__.startOfWeek)(firstWeek, options);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfWeekYear);


/***/ }),

/***/ "./node_modules/date-fns/startOfYear.mjs":
/*!***********************************************!*\
  !*** ./node_modules/date-fns/startOfYear.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfYear: () => (/* binding */ startOfYear)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");



/**
 * @name startOfYear
 * @category Year Helpers
 * @summary Return the start of a year for the given date.
 *
 * @description
 * Return the start of a year for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of a year
 *
 * @example
 * // The start of a year for 2 September 2014 11:55:00:
 * const result = startOfYear(new Date(2014, 8, 2, 11, 55, 00))
 * //=> Wed Jan 01 2014 00:00:00
 */
function startOfYear(date) {
  const cleanDate = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const _date = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, 0);
  _date.setFullYear(cleanDate.getFullYear(), 0, 1);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfYear);


/***/ }),

/***/ "./node_modules/date-fns/toDate.mjs":
/*!******************************************!*\
  !*** ./node_modules/date-fns/toDate.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   toDate: () => (/* binding */ toDate)
/* harmony export */ });
/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param argument - The value to convert
 *
 * @returns The parsed date in the local time zone
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  const argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (
    argument instanceof Date ||
    (typeof argument === "object" && argStr === "[object Date]")
  ) {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new argument.constructor(+argument);
  } else if (
    typeof argument === "number" ||
    argStr === "[object Number]" ||
    typeof argument === "string" ||
    argStr === "[object String]"
  ) {
    // TODO: Can we get rid of as?
    return new Date(argument);
  } else {
    // TODO: Can we get rid of as?
    return new Date(NaN);
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toDate);


/***/ }),

/***/ "./src/data/defaultProjectData.json":
/*!******************************************!*\
  !*** ./src/data/defaultProjectData.json ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('[{"name":"Home Cooking","path":"cooking.png","todoItems":[{"title":"Plan Weekly Menu","description":"Decide on meals for the upcoming week, considering dietary preferences and available ingredients.","daysRange":5,"priority":"Medium"},{"title":"Grocery Shopping","description":"Compile a shopping list based on the weekly menu plan and make necessary purchases.","daysRange":10,"priority":"High"},{"title":"Organize Kitchen Supplies","description":"Arrange kitchen cabinets and pantry, ensuring easy access to frequently used ingredients and utensils.","daysRange":15,"priority":"Low"},{"title":"Try New Recipe","description":"Experiment with a new dish or cooking technique to add variety to the meal rotation.","daysRange":20,"priority":"Medium"},{"title":"Meal Prep Sunday","description":"Prepare ingredients and meals in advance to streamline cooking during the busy weekdays.","daysRange":25,"priority":"High"},{"title":"Clean Refrigerator","description":"Remove expired items, organize shelves, and wipe down surfaces to maintain freshness and cleanliness.","daysRange":30,"priority":"Medium"},{"title":"Research Cooking Techniques","description":"Study new cooking methods or culinary skills to enhance cooking proficiency and creativity.","daysRange":35,"priority":"Low"},{"title":"Cook For The Family","description":"Study new cooking methods or culinary skills to enhance cooking proficiency and creativity.","daysRange":40,"priority":"Low"}]},{"name":"Backpacking Across Europe","path":"luggage.png","todoItems":[{"title":"Research Destinations","description":"Explore various European cities and attractions to create an itinerary that suits personal interests and budget.","daysRange":5,"priority":"High"},{"title":"Book Accommodations","description":"Reserve hostels, hotels, or other lodging options for each destination along the backpacking route.","daysRange":10,"priority":"High"},{"title":"Plan Transportation","description":"Arrange flights, train tickets, or other modes of transportation between cities, considering cost and travel time.","daysRange":15,"priority":"Medium"},{"title":"Pack Essentials","description":"Create a packing list of clothing, toiletries, travel documents, and other necessities for the journey.","daysRange":20,"priority":"High"},{"title":"Learn Basic Phrases","description":"Study key phrases in the languages of countries to be visited to facilitate communication with locals.","daysRange":25,"priority":"Low"},{"title":"Budget Planning","description":"Estimate daily expenses for accommodations, meals, transportation, and activities to stay within budget constraints.","daysRange":30,"priority":"Medium"},{"title":"Explore Cultural Activities","description":"Research museums, landmarks, festivals, and cultural events to immerse oneself in the local culture of each destination.","daysRange":35,"priority":"Medium"},{"title":"Emergency Preparedness","description":"Compile a list of emergency contacts, purchase travel insurance, and familiarize oneself with local emergency services.","daysRange":40,"priority":"High"}]},{"name":"Financial Literacy","path":"budget.png","todoItems":[{"title":"Learn Budgeting Basics","description":"Research and understand the fundamentals of budgeting.","daysRange":5,"priority":"Medium"},{"title":"Save Money Tips","description":"Explore various methods and tips for saving money effectively.","daysRange":10,"priority":"High"},{"title":"Understanding interest rates","description":"Learn how interest rates work and their impact on savings and loans.","daysRange":15,"priority":"Medium"},{"title":"Investing Basics","description":"Study the basic principles of investing in stocks, bonds, and other assets.","daysRange":20,"priority":"High"},{"title":"Debt management strategies","description":"Discover strategies for managing and reducing debt.","daysRange":25,"priority":"High"},{"title":"Tax planning strategies","description":"Explore tax-saving strategies and deductions.","daysRange":30,"priority":"High"},{"title":"Emergency fund setup","description":"Create a plan for building and maintaining an emergency fund.","daysRange":35,"priority":"Medium"},{"title":"Financial goal setting","description":"Set short-term and long-term financial goals.","daysRange":40,"priority":"Low"}]},{"name":"Fitness Challenge","path":"dumbbell.png","todoItems":[{"title":"Set Fitness Goals","description":"Define specific and achievable fitness goals for the challenge.","daysRange":5,"priority":"High"},{"title":"Create Workout Plan","description":"Design a workout plan that includes cardio, strength training, and flexibility exercises.","daysRange":10,"priority":"High"},{"title":"Plan Meal Prep","description":"Research and plan healthy meals to support your fitness goals throughout the challenge.","daysRange":15,"priority":"Medium"},{"title":"Track Progress","description":"Set up a system to track your workouts, meals, and progress towards your fitness goals.","daysRange":20,"priority":"Medium"},{"title":"Join Fitness Classes","description":"Explore and sign up for fitness classes or group workouts to stay motivated and try new activities.","daysRange":25,"priority":"Medium"},{"title":"Incorporate Rest Days","description":"Schedule regular rest days into your workout plan to prevent burnout and allow for muscle recovery.","daysRange":30,"priority":"Low"},{"title":"Monitor Nutrition","description":"Keep track of your daily calorie intake and macronutrient balance to support your fitness goals.","daysRange":35,"priority":"Medium"},{"title":"Celebrate Milestones","description":"Celebrate your progress by acknowledging and rewarding yourself for reaching fitness milestones along the way.","daysRange":40,"priority":"Low"}]},{"name":"Coding Interviews","path":"script.png","todoItems":[{"title":"Study data structures","description":"Review and understand various data structures such as arrays, linked lists, stacks, and queues.","daysRange":5,"priority":"High"},{"title":"Learn algorithms","description":"Study common algorithms like sorting, searching, and dynamic programming to solve coding problems efficiently.","daysRange":10,"priority":"High"},{"title":"Practice coding challenges","description":"Solve coding problems regularly on platforms like LeetCode or HackerRank to improve problem-solving skills.","daysRange":15,"priority":"High"},{"title":"Review time complexity","description":"Refresh knowledge on time complexity analysis to evaluate the efficiency of algorithms.","daysRange":20,"priority":"Medium"},{"title":"Mock interviews","description":"Participate in mock interviews to simulate real interview scenarios and receive feedback on performance.","daysRange":25,"priority":"High"},{"title":"Improve coding speed","description":"Practice coding under time constraints to enhance speed and accuracy during coding interviews.","daysRange":30,"priority":"Medium"},{"title":"Master a programming language","description":"Deepen understanding of a programming language of choice (e.g., Python, Java, JavaScript) to write clean and efficient code.","daysRange":35,"priority":"High"},{"title":"Solve problem-solving patterns","description":"Learn common problem-solving patterns such as two pointers, sliding window, and binary search to tackle coding challenges effectively.","daysRange":40,"priority":"Medium"},{"title":"Enhance debugging skills","description":"Develop techniques for debugging code efficiently to identify and fix errors quickly.","daysRange":45,"priority":"Low"},{"title":"Stay updated with tech trends","description":"Stay informed about industry trends, new technologies, and interview formats to adapt and prepare effectively.","daysRange":50,"priority":"Low"}]},{"name":"Home Renovations","path":"renovation.png","todoItems":[{"title":"Research design ideas","description":"Explore various design styles and gather inspiration for the renovation project.","daysRange":5,"priority":"High"},{"title":"Create a budget plan","description":"Estimate the costs of materials, labor, and other expenses, and set a realistic budget.","daysRange":10,"priority":"High"},{"title":"Obtain necessary permits","description":"Research and apply for any required permits from local authorities for the renovation work.","daysRange":15,"priority":"High"},{"title":"Hire contractors","description":"Interview and hire reliable contractors for the different aspects of the renovation project.","daysRange":20,"priority":"High"},{"title":"Order materials","description":"Purchase high-quality materials such as tiles, flooring, paint, and fixtures.","daysRange":25,"priority":"Medium"},{"title":"Prepare for disruptions","description":"Make arrangements for temporary living accommodations or alternative work setups during the renovation.","daysRange":30,"priority":"Medium"},{"title":"Manage project timeline","description":"Closely monitor the progress of the renovation and ensure it stays on schedule.","daysRange":35,"priority":"High"},{"title":"Decorate and furnish","description":"Select furniture, accessories, and artwork that complement the new design and enhance the living space.","daysRange":40,"priority":"Medium"},{"title":"Conduct final inspections","description":"Inspect the completed work and ensure all aspects of the renovation meet quality standards.","daysRange":45,"priority":"High"},{"title":"Celebrate completion","description":"Host a housewarming party or gathering to showcase the renovated space and enjoy the fruits of your labor.","daysRange":50,"priority":"Low"}]},{"name":"Sustainable Gardening","path":"gardening.png","todoItems":[{"title":"Research plant varieties","description":"Explore different types of plants suitable for your climate and gardening goals.","daysRange":5,"priority":"High"},{"title":"Plan garden layout","description":"Design the layout of your garden, considering factors like sunlight, soil conditions, and plant compatibility.","daysRange":10,"priority":"Medium"},{"title":"Prepare the soil","description":"Enrich the soil with organic matter and ensure proper drainage for optimal plant growth.","daysRange":15,"priority":"High"},{"title":"Implement water-saving strategies","description":"Explore and implement techniques like rainwater harvesting, drip irrigation, and mulching to conserve water.","daysRange":20,"priority":"Medium"},{"title":"Establish composting system","description":"Set up a composting system to recycle organic waste and create nutrient-rich fertilizer for your garden.","daysRange":25,"priority":"Medium"},{"title":"Plant vegetables and herbs","description":"Cultivate a variety of vegetables, herbs, and edible plants for fresh, organic produce.","daysRange":30,"priority":"High"},{"title":"Incorporate natural pest control","description":"Implement eco-friendly pest control methods, such as companion planting or introducing beneficial insects.","daysRange":35,"priority":"Medium"},{"title":"Mulch and weed regularly","description":"Maintain the garden by applying mulch to retain moisture and regularly removing unwanted weeds.","daysRange":40,"priority":"High"},{"title":"Learn about seed saving","description":"Explore techniques for collecting and storing seeds from your own plants for future use.","daysRange":45,"priority":"Low"},{"title":"Engage the community","description":"Share your gardening knowledge and experiences with others, fostering a sense of community.","daysRange":50,"priority":"Low"}]},{"name":"Learn Greek","path":"languages.png","todoItems":[{"title":"Set language learning goals","description":"Define your language learning goals, such as fluency level, specific skills (reading, writing, speaking), or purposes (travel, work, etc.).","daysRange":5,"priority":"High"},{"title":"Choose a language learning method","description":"Explore different language learning methods (e.g., classes, apps, books, immersion) and select the approach that suits you best.","daysRange":10,"priority":"High"},{"title":"Build a vocabulary base","description":"Start learning common words and phrases in the target language, focusing on vocabulary relevant to your goals.","daysRange":15,"priority":"High"},{"title":"Practice pronunciation","description":"Work on proper pronunciation by listening to native speakers and repeating words and phrases out loud.","daysRange":20,"priority":"Medium"},{"title":"Immerse yourself in the language","description":"Expose yourself to the language through movies, music, books, or conversations with native speakers to improve comprehension.","daysRange":25,"priority":"Medium"},{"title":"Study grammar rules","description":"Learn the grammar rules and structures of the language to construct proper sentences and communicate effectively.","daysRange":30,"priority":"Medium"},{"title":"Practice writing and speaking","description":"Regularly practice writing and speaking in the target language to reinforce your skills and gain confidence.","daysRange":35,"priority":"High"},{"title":"Find language exchange partners","description":"Connect with native speakers or fellow learners for language exchange conversations to practice in a realistic setting.","daysRange":40,"priority":"Medium"},{"title":"Attend language meetups or classes","description":"Participate in language meetups or classes to practice with others and receive feedback from instructors or more advanced learners.","daysRange":45,"priority":"Low"},{"title":"Celebrate your progress","description":"Recognize and celebrate your language learning milestones to stay motivated and encouraged throughout the journey.","daysRange":50,"priority":"Low"}]},{"name":"Entrepreneurial Ventures","path":"presentation.png","todoItems":[{"title":"Identify a business idea","description":"Brainstorm and research potential business ideas that align with your interests, skills, and market demands.","daysRange":5,"priority":"High"},{"title":"Conduct market research","description":"Analyze the market, target audience, competitors, and potential challenges to validate your business idea.","daysRange":10,"priority":"High"},{"title":"Develop a business plan","description":"Create a comprehensive business plan outlining your business model, strategies, financial projections, and growth plans.","daysRange":15,"priority":"High"},{"title":"Secure funding","description":"Explore different funding options, such as personal savings, loans, investors, or crowdfunding platforms, to finance your venture.","daysRange":20,"priority":"Medium"},{"title":"Build a team","description":"Identify and recruit talented individuals with complementary skills to join your entrepreneurial team.","daysRange":25,"priority":"Medium"},{"title":"Establish legal and financial structures","description":"Register your business, obtain necessary licenses and permits, and set up accounting and tax systems.","daysRange":30,"priority":"High"},{"title":"Develop a marketing strategy","description":"Create a marketing plan to promote your products or services and reach your target audience effectively.","daysRange":35,"priority":"Medium"},{"title":"Launch and iterate","description":"Officially launch your business, gather customer feedback, and continuously improve your offerings based on market demands.","daysRange":40,"priority":"High"},{"title":"Explore growth opportunities","description":"Identify and pursue growth opportunities, such as expanding into new markets, forming strategic partnerships, or introducing new products or services.","daysRange":45,"priority":"Medium"},{"title":"Build a strong company culture","description":"Cultivate a positive and inclusive company culture that fosters innovation, creativity, and employee satisfaction.","daysRange":50,"priority":"Low"}]},{"name":"Creative Writing","path":"writing.png","todoItems":[{"title":"Explore writing genres","description":"Research and experiment with different genres of writing, such as fiction, poetry, screenwriting, or journalism.","daysRange":5,"priority":"High"},{"title":"Develop writing habits","description":"Establish a consistent writing routine and set achievable goals, such as writing a certain number of words or pages per day.","daysRange":10,"priority":"High"},{"title":"Build a writing portfolio","description":"Compile your best writing pieces into a portfolio to showcase your skills and track your progress.","daysRange":15,"priority":"Medium"},{"title":"Study writing techniques","description":"Learn various writing techniques, such as character development, world-building, dialogue, and plot structure.","daysRange":20,"priority":"Medium"},{"title":"Read extensively","description":"Read widely across different genres and styles to gain inspiration and improve your writing skills.","daysRange":25,"priority":"High"},{"title":"Join a writing group","description":"Participate in a local or online writing group to receive feedback, support, and motivation from fellow writers.","daysRange":30,"priority":"Low"},{"title":"Attend writing workshops","description":"Enroll in writing workshops or classes to learn from experienced authors and receive guidance on your craft.","daysRange":35,"priority":"Medium"},{"title":"Explore publishing opportunities","description":"Research traditional and self-publishing options, submission guidelines, and literary agents or publishers.","daysRange":40,"priority":"Medium"},{"title":"Build an online presence","description":"Create a website or blog to showcase your writing, connect with readers, and promote your work.","daysRange":45,"priority":"Low"},{"title":"Cultivate perseverance","description":"Embrace the writing journey with patience and perseverance, as mastering the craft takes time and dedication.","daysRange":50,"priority":"High"}]},{"name":"Painting Endeavour","path":"paint.png","todoItems":[{"title":"Define your painting style","description":"Explore different painting styles and techniques to find the one that resonates with you the most, whether it\'s abstract, realism, impressionism, or any other genre.","daysRange":5,"priority":"High"},{"title":"Gather art supplies","description":"Stock up on essential supplies like canvas, paints, brushes, palettes, and any other materials you might need for your preferred painting style.","daysRange":10,"priority":"High"},{"title":"Set up your workspace","description":"Create a dedicated workspace for painting, ensuring proper lighting, ventilation, and organization for your materials and tools.","daysRange":15,"priority":"Medium"},{"title":"Study color theory","description":"Learn about color theory, including color mixing, harmonies, and the psychological impact of different color combinations, to enhance your painting skills.","daysRange":20,"priority":"Medium"},{"title":"Practice sketching and drawing","description":"Develop your drawing skills by practicing sketching and drawing techniques, as these will help you plan compositions and improve your overall painting abilities.","daysRange":25,"priority":"Medium"},{"title":"Explore subject matter","description":"Decide on the subject matter you want to focus on, whether it\'s landscapes, portraits, still life, or abstract compositions.","daysRange":30,"priority":"High"},{"title":"Study composition principles","description":"Learn about composition principles, such as the rule of thirds, leading lines, and balance, to create visually appealing and well-structured paintings.","daysRange":35,"priority":"Medium"},{"title":"Experiment with different techniques","description":"Try out various painting techniques like impasto, glazing, sgraffito, or palette knife painting to add depth and texture to your works.","daysRange":40,"priority":"Medium"},{"title":"Participate in art communities","description":"Join local art groups, online forums, or attend workshops to connect with other artists, share your work, and receive constructive feedback.","daysRange":45,"priority":"Low"},{"title":"Organize an exhibition","description":"Plan and organize an exhibition or art show to showcase your paintings and share your artistic journey with others.","daysRange":50,"priority":"Low"}]}]');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/styles/main.css */ "./src/assets/styles/main.css");
/* harmony import */ var _pages_homePage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/homePage.js */ "./src/pages/homePage.js");
/* harmony import */ var _pages_allProjectsPage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/allProjectsPage.js */ "./src/pages/allProjectsPage.js");
/* harmony import */ var _services_projectLocalStorage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/projectLocalStorage.js */ "./src/services/projectLocalStorage.js");
/* harmony import */ var _ui_clearDisplay_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/clearDisplay.js */ "./src/ui/clearDisplay.js");
/* harmony import */ var _ui_renderAttributionsModal_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui/renderAttributionsModal.js */ "./src/ui/renderAttributionsModal.js");







(0,_services_projectLocalStorage_js__WEBPACK_IMPORTED_MODULE_3__.initializeDefaultProjectData)();
(0,_ui_renderAttributionsModal_js__WEBPACK_IMPORTED_MODULE_5__.renderAttributionsModal)();

document.addEventListener("DOMContentLoaded", () => {
  (0,_pages_homePage_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const tabs = document.querySelectorAll(".tab");
  let activeTab = tabs[0];
  activeTab.classList.add("active");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      activeTab.classList.remove("active");
      tab.classList.add("active");
      activeTab = tab;
      (0,_ui_clearDisplay_js__WEBPACK_IMPORTED_MODULE_4__.clearContentTitleDisplay)();
      const tabType = tab.textContent.trim().replace(/\s+/g, "");
      const pageCreator = pageCreators[tabType];
      pageCreator();
    });
  });
});

const pageCreators = {
  Home: _pages_homePage_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  Projects: _pages_allProjectsPage_js__WEBPACK_IMPORTED_MODULE_2__.createAllProjectsPage,
};

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDZ0g7QUFDakI7QUFDTztBQUN0Ryw0Q0FBNEMsd0lBQThDO0FBQzFGLDRDQUE0QyxvSkFBb0Q7QUFDaEcsNENBQTRDLDRKQUF3RDtBQUNwRyw0Q0FBNEMsa0pBQW1EO0FBQy9GLDRDQUE0QywwSkFBdUQ7QUFDbkcsNENBQTRDLDJWQUFnSztBQUM1TSw0Q0FBNEMsd0lBQThDO0FBQzFGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YsaUlBQWlJLHlCQUF5QjtBQUMxSix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLG1DQUFtQztBQUNwRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLG1DQUFtQztBQUNwRDtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLG1DQUFtQztBQUNwRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsbUNBQW1DO0FBQ3BEOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsbUNBQW1DO0FBQ3BEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLDZGQUE2RixZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sTUFBTSxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sT0FBTyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sTUFBTSxVQUFVLE9BQU8sT0FBTyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFFBQVEsS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sTUFBTSxZQUFZLFdBQVcsTUFBTSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLE1BQU0sWUFBWSxhQUFhLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLE9BQU8sTUFBTSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFB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QTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxxRUFBZTtBQUM5QjtBQUNBO0FBQ0Esd0RBQXdELGFBQWE7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHFFQUFlO0FBQzlCO0FBQ0E7QUFDQSxzREFBc0QsYUFBYTtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxXQUFXO0FBQzVEO0FBQ0EsaURBQWlELFdBQVc7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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LE1BQU0sSUFBSSxNQUFNO0FBQzVCOztBQUVPO0FBQ1AsUUFBUSw2RUFBaUI7QUFDekI7QUFDQTtBQUNBLEdBQUc7O0FBRUgsUUFBUSw2RUFBaUI7QUFDekI7QUFDQTtBQUNBLEdBQUc7O0FBRUgsWUFBWSw2RUFBaUI7QUFDN0I7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVmlFOztBQUVqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFD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Q0EsUUFBUSwwREFBYztBQUN0QixZQUFZLDRFQUFxQjtBQUNqQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hc3NldHMvc3R5bGVzL21haW4uY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYXNzZXRzL3N0eWxlcy9tYWluLmNzcz81NTAzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Fzc2V0cy9pbWFnZXMvYmFkZ2VzLyBzeW5jIF5cXC5cXC9sdmxcXC0uKlxcLnBuZyQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Fzc2V0cy9pbWFnZXMvIHN5bmMgXlxcLlxcLy4qJCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZXZlbnRIYW5kbGVycy9oYW5kbGVBZGRQcm9qZWN0QnRuLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ldmVudEhhbmRsZXJzL2hhbmRsZUFkZFRhc2tCdG4uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2V2ZW50SGFuZGxlcnMvaGFuZGxlQmFja0J0bi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZXZlbnRIYW5kbGVycy9oYW5kbGVDb21wbGV0ZWRDaGVja2JveC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZXZlbnRIYW5kbGVycy9oYW5kbGVEdWVEYXRlQ2hhbmdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ldmVudEhhbmRsZXJzL2hhbmRsZUluUHJvZ3Jlc3NSYWRpb0JveC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZXZlbnRIYW5kbGVycy9oYW5kbGVNZW51U2VsZWN0aW9uLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ldmVudEhhbmRsZXJzL2hhbmRsZVByaW9yaXR5U2VsZWN0aW9uLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ldmVudEhhbmRsZXJzL2hhbmRsZVByb2plY3RGb3JtU3VibWlzc2lvbi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZXZlbnRIYW5kbGVycy9oYW5kbGVSZW1vdmVJdGVtQnRuLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ldmVudEhhbmRsZXJzL2hhbmRsZVJlbW92ZVByb2plY3RCdG4uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2V2ZW50SGFuZGxlcnMvaGFuZGxlVGFza0Rlc2NyaXB0aW9uLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ldmVudEhhbmRsZXJzL2hhbmRsZVRhc2tGb3JtU3VibWlzc2lvbi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZXZlbnRIYW5kbGVycy9oYW5kbGVUYXNrVGl0bGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2hlbHBlcnMvZGF0ZUZvcm1hdHRlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaGVscGVycy9maWx0ZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2hlbHBlcnMvbW9kYWxIZWxwZXJzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9oZWxwZXJzL3JlYXJyYW5nZVRvZG9MaXN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9oZWxwZXJzL3NldFJhbmRvbVBhcmFtZXRlcnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2hlbHBlcnMvc2V0U3RhdHVzVGV4dC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaGVscGVycy9zb3J0aW5nLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2RlbHMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kZWxzL3Byb2plY3RMaXN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2RlbHMvdG9kb0l0ZW0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZGVscy90b2RvTGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcGFnZXMvYWxsUHJvamVjdHNQYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wYWdlcy9ob21lUGFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcGFnZXMvcHJvamVjdFBhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NlcnZpY2VzL3Byb2plY3RGYWN0b3J5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zZXJ2aWNlcy9wcm9qZWN0TGlzdEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NlcnZpY2VzL3Byb2plY3RMb2NhbFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NlcnZpY2VzL3RvZG9JdGVtRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdWkvY2xlYXJEaXNwbGF5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy91aS9jcmVhdGVBZGRQcm9qZWN0QnRuLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy91aS9jcmVhdGVBZGRUYXNrQnRuLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy91aS9jcmVhdGVCYWNrQnRuLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy91aS9jcmVhdGVCYWRnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdWkvY3JlYXRlQmFkZ2VzQ29udGFpbmVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy91aS9jcmVhdGVDaXJjdWxhclByb2dyZXNzQmFyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy91aS9jcmVhdGVDb250ZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy91aS9jcmVhdGVGb2N1c1Byb2plY3RzQ29udGFpbmVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy91aS9jcmVhdGVNb2RhbHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3VpL2NyZWF0ZU5vVGFza3NNZXNzYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy91aS9jcmVhdGVPcmdhbml6ZUJ5TWVudS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdWkvY3JlYXRlUHJvZ3Jlc3NDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3VpL2NyZWF0ZVJlbW92ZUJ0bi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdWkvY3JlYXRlU3RhdHNDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3VpL2NyZWF0ZVRhc2tFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy91aS9jcmVhdGVUYXNrVGFibGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3VpL2NyZWF0ZVRpbWVTZW5zaXRpdmVDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3VpL2NyZWF0ZVRpdGxlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy91aS9jcmVhdGVUb2RvTGlzdENvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdWkvcmVuZGVyQXR0cmlidXRpb25zTW9kYWwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3VpL3VwZGF0ZURhc2hib2FyZENvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdWkvdXBkYXRlU3RhdHNDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3VpL3VwZGF0ZVRhc2tFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy91aS91cGRhdGVUYXNrVGFibGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL19saWIvYWRkTGVhZGluZ1plcm9zLm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvX2xpYi9kZWZhdWx0T3B0aW9ucy5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL19saWIvZm9ybWF0L2Zvcm1hdHRlcnMubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9fbGliL2Zvcm1hdC9saWdodEZvcm1hdHRlcnMubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9fbGliL2Zvcm1hdC9sb25nRm9ybWF0dGVycy5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL19saWIvcHJvdGVjdGVkVG9rZW5zLm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvY29uc3RhbnRzLm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvY29uc3RydWN0RnJvbS5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2RpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cy5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2RpZmZlcmVuY2VJbkRheXMubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9mb3JtYXQubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9nZXREYXlPZlllYXIubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9nZXRJU09XZWVrLm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZ2V0SVNPV2Vla1llYXIubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9nZXRXZWVrLm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZ2V0V2Vla1llYXIubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9pc0RhdGUubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9pc1ZhbGlkLm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL19saWIvYnVpbGRGb3JtYXRMb25nRm4ubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvX2xpYi9idWlsZExvY2FsaXplRm4ubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvX2xpYi9idWlsZE1hdGNoRm4ubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvX2xpYi9idWlsZE1hdGNoUGF0dGVybkZuLm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2VuLVVTLm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0RGlzdGFuY2UubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXRMb25nLm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0UmVsYXRpdmUubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvZW4tVVMvX2xpYi9sb2NhbGl6ZS5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9lbi1VUy9fbGliL21hdGNoLm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvcGFyc2VJU08ubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9zdGFydE9mRGF5Lm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvc3RhcnRPZklTT1dlZWsubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9zdGFydE9mSVNPV2Vla1llYXIubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9zdGFydE9mV2Vlay5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3N0YXJ0T2ZXZWVrWWVhci5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3N0YXJ0T2ZZZWFyLm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvdG9EYXRlLm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiL3NyYy9hc3NldHMvaW1hZ2VzL2JhbGwucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiL3NyYy9hc3NldHMvaW1hZ2VzL2hvbWUtd2hpdGUucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiL3NyYy9hc3NldHMvaW1hZ2VzL3Byb2plY3RzLXdoaXRlLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi9zcmMvYXNzZXRzL2ltYWdlcy9ob21lLWJsdWUucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiL3NyYy9hc3NldHMvaW1hZ2VzL3Byb2plY3RzLWJsdWUucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18gPSBuZXcgVVJMKFwiZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsPHN2ZyB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCI+PHBhdGggZmlsbD1cXFwiJTIzM2Y3MmFmXFxcIiBkPVxcXCJNNyAxMGw1IDUgNS01elxcXCIvPjwvc3ZnPlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF82X19fID0gbmV3IFVSTChcIi9zcmMvYXNzZXRzL2ltYWdlcy9sb2NrLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9R3JhbmRzdGFuZGVyOml0YWwsd2dodEAwLDEwMC4uOTAwOzEsMTAwLi45MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzZfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF82X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAtLWRhcmstYmx1ZTogcmdiKDE3LCA0NSwgNzgpO1xuICAtLW1pZC1ibHVlOiByZ2IoNjMsIDExNCwgMTc1KTtcbiAgLS1saWdodC1ibHVlOiByZ2IoMjE5LCAyMjYsIDIzOSk7XG4gIC0tY3JlYW06IHJnYigyNTIsIDI0OCwgMjM2KTtcbiAgLS1ncmVlbjogcmdiKDc2LCAxNzUsIDgwKTtcbn1cblxuYm9keSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAwcHggMWZyO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEyMHB4IDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJzaWRlYmFyIHRpdGxlXCIgXCJzaWRlYmFyIGNvbnRlbnRcIjtcbiAgbWFyZ2luOiAxMHB4IDEwcHg7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtICgxMHB4ICsgMTBweCkpO1xuICBmb250LWZhbWlseTogXCJHcmFuZHN0YW5kZXJcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cblxuLnNpZGViYXIge1xuICBncmlkLWFyZWE6IHNpZGViYXI7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTAwcHggMWZyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpO1xuICBjb2xvcjogdmFyKC0tY3JlYW0pO1xuICBvdmVyZmxvdzogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogMzBweCAxcHggMXB4IDMwcHg7XG4gIHBhZGRpbmc6IDIwcHggMCAwIDE1cHg7XG59XG5cbiNjb250ZW50IHtcbiAgZ3JpZC1hcmVhOiBjb250ZW50O1xuICBib3gtc2hhZG93OiBpbnNldCAwIDEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMjU3KTtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNyZWFtKTtcbn1cblxuLnBhZ2UtdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBncmlkLWFyZWE6IHRpdGxlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICBwYWRkaW5nOiAzMHB4O1xuICBjb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMzBweDtcbiAgYm94LXNoYWRvdzogaW5zZXQgMTBweCAxcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMjU3KTtcbn1cblxuLnRhYiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogMTZweDtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1MHB4IDFweCAxcHggNTBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAyMHB4O1xufVxuXG4udGFiOmhvdmVyOm5vdCguYWN0aXZlKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWJsdWUpO1xuICBjb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcbn1cblxuLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNyZWFtKTtcbiAgY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XG59XG5cbi5zaWRlYmFyIHVsIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLmxvZ28taW1nIHtcbiAgY29udGVudDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG59XG5cbi5sb2dvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMjBweDtcbiAgZ2FwOiAyMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaG9tZS1pY29uIHtcbiAgY29udGVudDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xuICB3aWR0aDogMTAlO1xufVxuXG4ucHJvamVjdHMtaWNvbiB7XG4gIGNvbnRlbnQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KTtcbiAgd2lkdGg6IDEwJTtcbn1cblxuLmFjdGl2ZSAuaG9tZS1pY29uLFxuLnRhYjpob3ZlciAuaG9tZS1pY29uIHtcbiAgY29udGVudDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pO1xufVxuXG4uYWN0aXZlIC5wcm9qZWN0cy1pY29uLFxuLnRhYjpob3ZlciAucHJvamVjdHMtaWNvbiB7XG4gIGNvbnRlbnQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX199KTtcbn1cblxuLnRpdGxlLWltZyB7XG4gIGhlaWdodDogODBweDtcbn1cblxuLmRhc2hib2FyZC1hbGwtcHJvamVjdHMge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyMDBweCwgMWZyKSk7XG4gIGdhcDogNTBweDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBtYXgtaGVpZ2h0OiBjYWxjKDcxNXB4IC0gKDM1cHggKyA0MHB4KSk7XG4gIG1hcmdpbjogMzBweCAzMHB4IDBweCAzMHB4O1xuICBwYWRkaW5nOiAyNXB4IDI1cHggMjBweCAyNXB4O1xufVxuXG4ucHJvamVjdC1ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYm9yZGVyOiA2cHggZGFzaGVkIHZhcigtLWxpZ2h0LWJsdWUpO1xuICBib3gtc2hhZG93OiAwcHggMTBweCAxMHB4IHZhcigtLWxpZ2h0LWJsdWUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICBjb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcbn1cblxuLnByb2plY3QtYm94OmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICBib3gtc2hhZG93OiAwcHggMTBweCAxMHB4IHZhcigtLWRhcmstYmx1ZSk7XG59XG5cbi5wcm9qZWN0LWltZyB7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG59XG5cbi5hZGQtcHJvamVjdC1idG4taW1nIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuXG4uYWRkLXByb2plY3QtYnRuIHtcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xufVxuXG4uYWRkLXByb2plY3QtYnRuOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xufVxuXG4ucHJvZ3Jlc3MtYmFyIHtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gIG1hcmdpbjogMjBweCAwO1xufVxuXG4ucHJvZ3Jlc3MtYmFyLWNvbXBsZXRlZCB7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4pO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XG59XG5cbi5wcm9ncmVzcy1iYXItdGV4dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMjAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xufVxuXG4uYWRkLXByb2plY3QtbW9kYWwsXG4uYWRkLXRhc2stbW9kYWwsXG4uYXR0cmlidXRpb24tbW9kYWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBjb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcbiAgcGFkZGluZzogMTBweCAzMHB4IDIwcHggMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYmx1ZSk7XG4gIGJvcmRlcjogOHB4IGRhc2hlZCB3aGl0ZXNtb2tlO1xuICB6LWluZGV4OiAyO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIG1heC13aWR0aDogMzAlO1xuICBtaW4td2lkdGg6IDMwJTtcbiAgdG9wOiAyMCU7XG4gIGxlZnQ6IDQ1JTtcbn1cblxuLmFkZC1wcm9qZWN0LWZvcm0tZWxlbWVudHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uY2xvc2UtYnRuIHtcbiAgYm9yZGVyLXJhZGl1czogNjBweDtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiA2cHggMTBweCAxcHggMTBweDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC4yNDYpO1xuICBjb2xvcjogZ3JleTtcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG59XG5cbi5jbG9zZS1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC42NDkpO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5tb2RhbC1pbWcge1xuICBoZWlnaHQ6IDEzMHB4O1xufVxuXG4ubW9kYWwtaW50cm8ge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ubW9kYWwtdGV4dCB7XG4gIGNvbG9yOiBncmV5O1xuICBib3JkZXI6IDVweCBkb3R0ZWQgcmdiKDIzNiwgMjM2LCAyMzYpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNDcsIDIzNyk7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLmFkZC1wcm9qZWN0LWZvcm0sXG4uYWRkLXRhc2stZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTVweDtcbn1cblxuLmFkZC1wcm9qZWN0LWZvcm0gaW5wdXRbdHlwZT1cInRleHRcIl0sXG4uYWRkLXRhc2stZm9ybSBpbnB1dFt0eXBlPVwidGV4dFwiXSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgYm9yZGVyOiAzcHggZG90dGVkIHZhcigtLWxpZ2h0LWJsdWUpO1xuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgdmFyKC0tZGFyay1ibHVlKTtcbn1cblxuLmFkZC1wcm9qZWN0LXN1Ym1pdC1idG4sXG4uYWRkLXRhc2stc3VibWl0LWJ0biB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGJvcmRlcjogM3B4IGRvdHRlZCByZ2IoMjA1LCAyMDUsIDIwNSk7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMTBweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC41NzUpO1xuICBjb2xvcjogcmdiKDIyNywgMjI3LCAyMjcpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2EzYTNhNWI7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgcGFkZGluZzogMjVweCAxNXB4O1xuICB3aWR0aDogbWluLWNvbnRlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG59XG5cbi5hZGQtcHJvamVjdC1zdWJtaXQtYnRuOmhvdmVyLFxuLmFkZC10YXNrLXN1Ym1pdC1idG46aG92ZXIge1xuICBib3JkZXItY29sb3I6IHJnYigyMDMsIDIzOSwgMTg1KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzcyYzA3NGNmO1xuICBjb2xvcjogdmFyKC0tY3JlYW0pO1xufVxuXG4ub3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODQzKTtcbiAgei1pbmRleDogMTtcbn1cblxuYnV0dG9uLFxuaW5wdXRbdHlwZT1cImZpbGVcIl0ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmJ1dHRvbixcbmlucHV0W3R5cGU9XCJmaWxlXCJdLFxuaW5wdXRbdHlwZT1cInRleHRcIl0ge1xuICBmb250LWZhbWlseTogXCJHcmFuZHN0YW5kZXJcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cblxuLnByb2plY3QtZGFzaGJvYXJkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgbWFyZ2luOiAyNXB4O1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heChtaW4tY29udGVudCwgbWF4LWNvbnRlbnQpIG1pbm1heChcbiAgICAgIG1pbi1jb250ZW50LFxuICAgICAgbWF4LWNvbnRlbnRcbiAgICApO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbm1heChtaW4tY29udGVudCwgbWF4LWNvbnRlbnQpIDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJiYWNrLWJ1dHRvbiB0b2RvLWxpc3RcIiBcInN0YXRzIHRvZG8tbGlzdFwiO1xuICBnYXA6IDMwcHg7XG59XG5cbi5iYWNrLWJ1dHRvbiB7XG4gIGdyaWQtYXJlYTogYmFjay1idXR0b247XG4gIGZvbnQtc2l6ZTogMTlweDtcbiAgY29sb3I6IHZhcigtLW1pZC1ibHVlKTtcbiAgcGFkZGluZzogN3B4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1saWdodC1ibHVlKTtcbiAgYm94LXNoYWRvdzogMHB4IDVweCA1cHggcmdiKDE5MywgMTkzLCAxOTMpO1xuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xufVxuXG4uYmFjay1idXR0b246aG92ZXIge1xuICBjb2xvcjogdmFyKC0tbWlkLWJsdWUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ibHVlKTtcbn1cblxuLnN0YXRzLWNvbnRhaW5lciB7XG4gIGdyaWQtYXJlYTogc3RhdHM7XG4gIGNvbG9yOiB2YXIoLS1taWQtYmx1ZSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWxpZ2h0LWJsdWUpO1xuICBwYWRkaW5nOiA1cHg7XG4gIGdhcDogNTBweDtcbiAgd2lkdGg6IG1pbi1jb250ZW50O1xuICBoZWlnaHQ6IG1pbi1jb250ZW50O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3gtc2hhZG93OiAwcHggNXB4IDVweCByZ2IoMTkzLCAxOTMsIDE5Myk7XG59XG5cbi50b2RvLWxpc3QtY29udGFpbmVyIHtcbiAgZ3JpZC1hcmVhOiB0b2RvLWxpc3Q7XG59XG5cbi5wcm9ncmVzcy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDVweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuQGtleWZyYW1lcyBwcm9ncmVzcyB7XG4gIDAlIHtcbiAgICAtLXBlcmNlbnRhZ2U6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgLS1wZXJjZW50YWdlOiB2YXIoLS12YWx1ZSk7XG4gIH1cbn1cblxuQHByb3BlcnR5IC0tcGVyY2VudGFnZSB7XG4gIHN5bnRheDogXCI8bnVtYmVyPlwiO1xuICBpbmhlcml0czogdHJ1ZTtcbiAgaW5pdGlhbC12YWx1ZTogMDtcbn1cblxuW3JvbGU9XCJwcm9ncmVzc2JhclwiXSB7XG4gIC0tcGVyY2VudGFnZTogdmFyKC0tdmFsdWUpO1xuICAtLXNlY29uZGFyeTogcmdiYSgyMTQsIDIxNCwgMjE0LCAwLjU2Nyk7XG4gIC0tc2l6ZTogMTUwcHg7XG4gIGFuaW1hdGlvbjogcHJvZ3Jlc3MgMnMgMC41cyBmb3J3YXJkcztcbiAgd2lkdGg6IHZhcigtLXNpemUpO1xuICBhc3BlY3QtcmF0aW86IDIgLyAxO1xuICBib3JkZXItcmFkaXVzOiA1MCUgLyAxMDAlIDEwMCUgMCAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbltyb2xlPVwicHJvZ3Jlc3NiYXJcIl0uY29tcGxldGVkLWJhci1jb2xvciB7XG4gIC0tcHJpbWFyeTogdmFyKC0tZ3JlZW4pO1xuICBjb2xvcjogdmFyKC0tZ3JlZW4pO1xufVxuXG5bcm9sZT1cInByb2dyZXNzYmFyXCJdLmluLXByb2dyZXNzLWJhci1jb2xvciB7XG4gIC0tcHJpbWFyeTogcmdiKDAsIDExMywgMjA2KTtcbiAgY29sb3I6IHJnYigwLCAxMTMsIDIwNik7XG59XG5cbltyb2xlPVwicHJvZ3Jlc3NiYXJcIl0ubm90LXN0YXJ0ZWQtYmFyLWNvbG9yIHtcbiAgLS1wcmltYXJ5OiBncmV5O1xuICBjb2xvcjogZ3JleTtcbn1cblxuW3JvbGU9XCJwcm9ncmVzc2JhclwiXS5vdmVyZHVlLWJhci1jb2xvciB7XG4gIC0tcHJpbWFyeTogcmdiKDI1NSwgODYsIDg2KTtcbiAgY29sb3I6IHJnYigyNTAsIDEwOSwgMTA5KTtcbn1cblxuLmRlZmF1bHQtYmFyLWNvbG9yIHtcbiAgLS1wcmltYXJ5OiBibGFjaztcbn1cblxuW3JvbGU9XCJwcm9ncmVzc2JhclwiXTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IGNvbmljLWdyYWRpZW50KFxuICAgIGZyb20gMC43NXR1cm4gYXQgNTAlIDEwMCUsXG4gICAgdmFyKC0tcHJpbWFyeSkgY2FsYyh2YXIoLS1wZXJjZW50YWdlKSAqIDElIC8gMiksXG4gICAgdmFyKC0tc2Vjb25kYXJ5KSBjYWxjKHZhcigtLXBlcmNlbnRhZ2UpICogMSUgLyAyICsgMC45JSlcbiAgKTtcbiAgbWFzazogcmFkaWFsLWdyYWRpZW50KGF0IDUwJSAxMDAlLCB3aGl0ZSA1NSUsIHRyYW5zcGFyZW50IDU1LjUlKTtcbiAgLXdlYmtpdC1tYXNrOiByYWRpYWwtZ3JhZGllbnQoYXQgNTAlIDEwMCUsICMwMDAwIDYwJSwgIzAwMCA3NSUpO1xufVxuXG5bcm9sZT1cInByb2dyZXNzYmFyXCJdOjphZnRlciB7XG4gIGNvdW50ZXItcmVzZXQ6IHBlcmNlbnRhZ2UgdmFyKC0tdmFsdWUpO1xuICBjb250ZW50OiBhdHRyKGRhdGEtcGVyY2VudGFnZSkgXCIlXCI7XG4gIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1zaXplKSAvIDUpO1xufVxuXG4udG9kby1saXN0LWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJveC1zaGFkb3c6IDBweCA1cHggNXB4IHJnYigxOTMsIDE5MywgMTkzKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMTBweCAyNXB4IDVweCAyNXB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1saWdodC1ibHVlKTtcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgY29sb3I6IHZhcigtLW1pZC1ibHVlKTtcbn1cblxuLm9yZ2FuaXplLW1lbnUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5jdXN0b20tc2VsZWN0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTgwcHg7XG59XG5cbi5tZW51LXNlbGVjdCxcbi5wcmlvcml0eS1zZWxlY3Qge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweCAzMHB4IDEwcHggMTVweDtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tbGlnaHQtYmx1ZSk7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBhcHBlYXJhbmNlOiBub25lO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19ffSk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IDEwcHggY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IDMwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6IHZhcigtLW1pZC1ibHVlKTtcbiAgZm9udC1mYW1pbHk6IFwiR3JhbmRzdGFuZGVyXCIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG5cbi5tZW51LXNlbGVjdDpob3Zlcixcbi5tZW51LXNlbGVjdDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWJsdWUpO1xufVxuXG4udGFza3MtdGFibGUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMjBweCAwO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIG1heC1oZWlnaHQ6IGNhbGMoNTYwcHggLSAoNDVweCkpO1xuICBtaW4taGVpZ2h0OiBjYWxjKDU2MHB4IC0gKDQ1cHgpKTtcbiAgbWF4LXdpZHRoOiBjYWxjKDkwMHB4IC0gKDEwcHgpKTtcbiAgbWluLXdpZHRoOiBjYWxjKDkwMHB4IC0gKDEwcHgpKTtcbn1cblxuLnRvZG8tbGlzdC1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogMHB4IDVweCAycHggcmdiKDEyNywgMTI3LCAxMjcpO1xuICBtYXJnaW46IDAgMTBweCAxMHB4IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGdhcDogMTVweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5jdXN0b20tY2hlY2tib3gge1xuICBmbGV4LWJhc2lzOiA0MHB4O1xufVxuXG4udGFzay1pbmZvLWNvbnRhaW5lciB7XG4gIGZsZXgtYmFzaXM6IDM1MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uZHVlLWRhdGUtY29udGFpbmVyIHtcbiAgZmxleC1iYXNpczogMjIwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbn1cblxuLmluLXByb2dyZXNzLXJhZGlvLWNvbnRhaW5lciB7XG4gIGZsZXgtYmFzaXM6IDYwcHg7XG4gIHBhZGRpbmctdG9wOiAyNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xufVxuXG4ucHJpb3JpdHktY29udGFpbmVyIHtcbiAgZmxleC1iYXNpczogMTEwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDE4MHB4O1xufVxuXG4ucmVtb3ZlLWl0ZW0tYnRuLFxuLnJlbW92ZS1wcm9qZWN0LWJ0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtNXB4O1xuICByaWdodDogLTVweDtcbiAgZGlzcGxheTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiA0cHggN3B4IDRweCA3cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuMjQ2KTtcbiAgY29sb3I6IGdyZXk7XG59XG5cbi5yZW1vdmUtaXRlbS1idG46aG92ZXIsXG4ucmVtb3ZlLXByb2plY3QtYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuNjQ5KTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udGFzay10aXRsZSxcbi50YXNrLWRlc2NyaXB0aW9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4udGFzay10aXRsZS5leHBhbmRlZCxcbi50YXNrLWRlc2NyaXB0aW9uLmV4cGFuZGVkIHtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIG1heC13aWR0aDogbm9uZTtcbn1cblxuLnRhc2stdGl0bGU6aG92ZXIsXG4udGFzay1kZXNjcmlwdGlvbjpob3ZlciB7XG4gIGNvbG9yOiAjMDA4NGZmO1xufVxuXG4ucHJpb3JpdHktMSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjEzLCAyNTUsIDIxNSwgMC4yNzIpO1xufVxuXG4ucHJpb3JpdHktMiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU0LCAyMTYsIDEwMiwgMC4xNjcpO1xufVxuXG4ucHJpb3JpdHktMyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxNjcsIDE2NywgMC4zMDMpO1xufVxuXG4uY29tcGxldGVkLWNoZWNrZWQge1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgY29sb3I6ICMwMDAwMDA1Yjtcbn1cblxuLmFkZC10YXNrLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMjBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmFkZC10YXNrLWJ0biB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3JlYW0pO1xuICBjb2xvcjogdmFyKC0tZ3JlZW4pO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmVlbik7XG4gIHBhZGRpbmc6IDhweCAxMXB4IDAgMTFweDtcbn1cblxuLmFkZC10YXNrLWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuKTtcbiAgY29sb3I6IHZhcigtLWNyZWFtKTtcbn1cblxuLmN1c3RvbS1jaGVja2JveCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0sXG4uY3VzdG9tLXJhZGlvLWJveCBpbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uY3VzdG9tLWNoZWNrYm94LFxuLmN1c3RvbS1yYWRpby1ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY2hlY2ttYXJrLFxuLmNoZWNrZG90IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmNoZWNrZG90IHtcbiAgaGVpZ2h0OiAxNnB4O1xuICB3aWR0aDogMTZweDtcbn1cblxuaW5wdXRbdHlwZT1cInJhZGlvXCJdOmhvdmVyICsgLmNoZWNrZG90IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxMTMsIDIwNiwgMC41KTtcbn1cblxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmhvdmVyICsgLmNoZWNrbWFyayB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzYsIDE3NSwgNzksIDAuNSk7XG59XG5cbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkICsgLmNoZWNrbWFyazphZnRlcixcbmlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkICsgLmNoZWNrZG90OmFmdGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkICsgLmNoZWNrbWFyayB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuKTtcbn1cblxuaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQgKyAuY2hlY2tkb3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMTEzLCAyMDYpO1xufVxuXG4uY2hlY2ttYXJrOmFmdGVyLFxuLmNoZWNrZG90OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uY2hlY2ttYXJrOmFmdGVyIHtcbiAgbGVmdDogMTFweDtcbiAgdG9wOiA2cHg7XG4gIHdpZHRoOiA1cHg7XG4gIGhlaWdodDogMTNweDtcbiAgYm9yZGVyOiBzb2xpZCB2YXIoLS1jcmVhbSk7XG4gIGJvcmRlci13aWR0aDogMCAycHggMnB4IDA7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbn1cblxuLmNoZWNrZG90OmFmdGVyIHtcbiAgbGVmdDogNXB4O1xuICB0b3A6IDVweDtcbiAgd2lkdGg6IDZweDtcbiAgaGVpZ2h0OiA2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNyZWFtKTtcbn1cblxuLmluLXByb2dyZXNzLXRleHQge1xuICBkaXNwbGF5OiBub25lO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiAjNjY2O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5uby10YXNrcy1tZXNzYWdlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBjb2xvcjogcmdiKDI1NSwgMjIwLCAxNjEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1taWQtYmx1ZSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5uby10YXNrcy1pbWcge1xuICBoZWlnaHQ6IDMwMHB4O1xufVxuXG4uaG9tZS1kYXNoYm9hcmQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImJhZGdlcyBiYWRnZXNcIiBcImR1ZS1zb29uLXRhYmxlIG92ZXJkdWUtdGFibGVcIiBcInByb2dyZXNzLWJhcnMgcHJvZ3Jlc3MtYmFyc1wiO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIHBhZGRpbmc6IDQ1cHggMjVweCAyMHB4IDI1cHg7XG4gIGdhcDogMjBweDtcbiAgY29sb3I6IHZhcigtLW1pZC1ibHVlKTtcbn1cblxuLmJhZGdlLWNvbnRhaW5lciB7XG4gIGdyaWQtYXJlYTogYmFkZ2VzO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgcGFkZGluZzogMCAxMHB4O1xufVxuXG4uYmFkZ2UtY29udGFpbmVyIGg0OmZpcnN0LWNoaWxkIHtcbiAgY29sb3I6IHJnYigyOCwgNzMsIDEyNik7XG59XG5cbi5hbGwtYmFkZ2VzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZ2FwOiAzMHB4O1xufVxuXG4uYmFkZ2UtaW1nIHtcbiAgd2lkdGg6IDQ1cHg7XG59XG5cbi5iYWRnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogNnB4O1xufVxuXG4uYmFkZ2UgaDYge1xuICBtYXJnaW46IDEwcHggMDtcbn1cblxuLmJhZGdlLW92ZXJsYXkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1yYWRpdXM6IDM1cHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzZfX199KTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIDEwcHggY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IDQ1cHg7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDUsIDI0NSwgMjQ1LCAwLjgxOSk7XG59XG5cbi5kdWUtc29vbi1saXN0LWl0ZW0sXG4ub3ZlcmR1ZS1saXN0LWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZsZXgtYmFzaXM6IDEwcHg7XG4gIHBhZGRpbmc6IDZweCAxNXB4O1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgdmFyKC0tY3JlYW0pO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5kdWUtc29vbi1jb250YWluZXIge1xuICBncmlkLWFyZWE6IGR1ZS1zb29uLXRhYmxlO1xufVxuLm92ZXJkdWUtY29udGFpbmVyIHtcbiAgZ3JpZC1hcmVhOiBvdmVyZHVlLXRhYmxlO1xufVxuXG4uZHVlLXNvb24tY29udGFpbmVyLFxuLm92ZXJkdWUtY29udGFpbmVyLFxuLmJhZGdlLWNvbnRhaW5lcixcbi5mb2N1cy1zdGF0cy1jb250YWluZXIge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWxpZ2h0LWJsdWUpO1xufVxuXG4uZHVlLXNvb24tdGFibGUtY29udGFpbmVyLFxuLm92ZXJkdWUtdGFibGUtY29udGFpbmVyIHtcbiAgbWF4LWhlaWdodDogMTUwcHg7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4uZHVlLXNvb24tY29udGFpbmVyIGg0LFxuLm92ZXJkdWUtY29udGFpbmVyIGg0IHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIGNvbG9yOiByZ2IoMjgsIDczLCAxMjYpO1xufVxuXG4ub3ZlcmR1ZS1saXN0LWl0ZW0gZGl2Omxhc3QtY2hpbGQge1xuICBjb2xvcjogcmdiKDIyOCwgOTIsIDkyKTtcbn1cblxuLmR1ZS1zb29uLWxpc3QtaXRlbSBkaXY6bGFzdC1jaGlsZCB7XG4gIGNvbG9yOiByZ2IoOTAsIDEzOSwgOTApO1xufVxuXG4uaG9tZS1zdGF0cy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEzMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmZvY3VzLXN0YXRzLWNvbnRhaW5lciB7XG4gIGdyaWQtYXJlYTogcHJvZ3Jlc3MtYmFycztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDAgNTBweDtcbn1cblxuLmZvY3VzLXN0YXRzLWNvbnRhaW5lciBoNDpmaXJzdC1jaGlsZCB7XG4gIGNvbG9yOiByZ2IoMjgsIDczLCAxMjYpO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1taWQtYmx1ZSk7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmhvbWUtaW4tcHJvZ3Jlc3MtYmFyLFxuLmhvbWUtbm90LXN0YXJ0ZWQtYmFyLFxuLmhvbWUtb3ZlcmR1ZS1iYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGdhcDogMjBweDtcbiAgZmxleC1iYXNpczogMTg1cHg7XG4gIGNvbG9yOiB2YXIoLS1taWQtYmx1ZSk7XG59XG5cbi5zaWRlYmFyLWZvb3RlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNpZGViYXItZm9vdGVyIGEge1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZXMvbWFpbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSw0QkFBNEI7RUFDNUIsNkJBQTZCO0VBQzdCLGdDQUFnQztFQUNoQywyQkFBMkI7RUFDM0IseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdDQUFnQztFQUNoQyw2QkFBNkI7RUFDN0Isc0RBQXNEO0VBQ3RELGlCQUFpQjtFQUNqQixtQ0FBbUM7RUFDbkMseURBQXlEO0FBQzNEOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0Isa0NBQWtDO0VBQ2xDLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsZ0NBQWdDO0VBQ2hDLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrREFBa0Q7RUFDbEQsZ0NBQWdDO0VBQ2hDLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsNEJBQTRCO0VBQzVCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsOEJBQThCO0VBQzlCLDZCQUE2QjtFQUM3QixvREFBb0Q7QUFDdEQ7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsZ0NBQWdDO0VBQ2hDLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGdEQUEyQztFQUMzQyxZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixTQUFTO0VBQ1QsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0RBQWlEO0VBQ2pELFVBQVU7QUFDWjs7QUFFQTtFQUNF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QixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0VBQ1osNENBQTRDO0FBQzlDOztBQUVBOztFQUVFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixxQ0FBcUM7RUFDckMsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBOzs7O0VBSUUsa0JBQWtCO0VBQ2xCLDRCQUE0QjtFQUM1QixtQ0FBbUM7QUFDckM7O0FBRUE7O0VBRUUsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7O0FBRUE7O0VBRUUsaUJBQWlCO0VBQ2pCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixVQUFVO0VBQ1YsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsdUNBQXVDO0VBQ3ZDLGVBQWU7QUFDakI7O0FBRUE7OztFQUdFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1HcmFuZHN0YW5kZXI6aXRhbCx3Z2h0QDAsMTAwLi45MDA7MSwxMDAuLjkwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG5cXG46cm9vdCB7XFxuICAtLWRhcmstYmx1ZTogcmdiKDE3LCA0NSwgNzgpO1xcbiAgLS1taWQtYmx1ZTogcmdiKDYzLCAxMTQsIDE3NSk7XFxuICAtLWxpZ2h0LWJsdWU6IHJnYigyMTksIDIyNiwgMjM5KTtcXG4gIC0tY3JlYW06IHJnYigyNTIsIDI0OCwgMjM2KTtcXG4gIC0tZ3JlZW46IHJnYig3NiwgMTc1LCA4MCk7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAwcHggMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMjBweCAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwic2lkZWJhciB0aXRsZVxcXCIgXFxcInNpZGViYXIgY29udGVudFxcXCI7XFxuICBtYXJnaW46IDEwcHggMTBweDtcXG4gIGhlaWdodDogY2FsYygxMDB2aCAtICgxMHB4ICsgMTBweCkpO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJHcmFuZHN0YW5kZXJcXFwiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICBncmlkLWFyZWE6IHNpZGViYXI7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCAxZnI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpO1xcbiAgY29sb3I6IHZhcigtLWNyZWFtKTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgYm9yZGVyLXJhZGl1czogMzBweCAxcHggMXB4IDMwcHg7XFxuICBwYWRkaW5nOiAyMHB4IDAgMCAxNXB4O1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBncmlkLWFyZWE6IGNvbnRlbnQ7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMjU3KTtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3JlYW0pO1xcbn1cXG5cXG4ucGFnZS10aXRsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ3JpZC1hcmVhOiB0aXRsZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMzBweDtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDEwcHggMXB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjI1Nyk7XFxufVxcblxcbi50YWIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBhZGRpbmc6IDE2cHg7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4IDFweCAxcHggNTBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbi50YWI6aG92ZXI6bm90KC5hY3RpdmUpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWJsdWUpO1xcbiAgY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XFxufVxcblxcbi5hY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3JlYW0pO1xcbiAgY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XFxufVxcblxcbi5zaWRlYmFyIHVsIHtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi5sb2dvLWltZyB7XFxuICBjb250ZW50OiB1cmwoXFxcIi9zcmMvYXNzZXRzL2ltYWdlcy9iYWxsLnBuZ1xcXCIpO1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgaGVpZ2h0OiAxMDBweDtcXG59XFxuXFxuLmxvZ28ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBnYXA6IDIwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaG9tZS1pY29uIHtcXG4gIGNvbnRlbnQ6IHVybChcXFwiL3NyYy9hc3NldHMvaW1hZ2VzL2hvbWUtd2hpdGUucG5nXFxcIik7XFxuICB3aWR0aDogMTAlO1xcbn1cXG5cXG4ucHJvamVjdHMtaWNvbiB7XFxuICBjb250ZW50OiB1cmwoXFxcIi9zcmMvYXNzZXRzL2ltYWdlcy9wcm9qZWN0cy13aGl0ZS5wbmdcXFwiKTtcXG4gIHdpZHRoOiAxMCU7XFxufVxcblxcbi5hY3RpdmUgLmhvbWUtaWNvbixcXG4udGFiOmhvdmVyIC5ob21lLWljb24ge1xcbiAgY29udGVudDogdXJsKFxcXCIvc3JjL2Fzc2V0cy9pbWFnZXMvaG9tZS1ibHVlLnBuZ1xcXCIpO1xcbn1cXG5cXG4uYWN0aXZlIC5wcm9qZWN0cy1pY29uLFxcbi50YWI6aG92ZXIgLnByb2plY3RzLWljb24ge1xcbiAgY29udGVudDogdXJsKFxcXCIvc3JjL2Fzc2V0cy9pbWFnZXMvcHJvamVjdHMtYmx1ZS5wbmdcXFwiKTtcXG59XFxuXFxuLnRpdGxlLWltZyB7XFxuICBoZWlnaHQ6IDgwcHg7XFxufVxcblxcbi5kYXNoYm9hcmQtYWxsLXByb2plY3RzIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyMDBweCwgMWZyKSk7XFxuICBnYXA6IDUwcHg7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgbWF4LWhlaWdodDogY2FsYyg3MTVweCAtICgzNXB4ICsgNDBweCkpO1xcbiAgbWFyZ2luOiAzMHB4IDMwcHggMHB4IDMwcHg7XFxuICBwYWRkaW5nOiAyNXB4IDI1cHggMjBweCAyNXB4O1xcbn1cXG5cXG4ucHJvamVjdC1ib3gge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgYm9yZGVyOiA2cHggZGFzaGVkIHZhcigtLWxpZ2h0LWJsdWUpO1xcbiAgYm94LXNoYWRvdzogMHB4IDEwcHggMTBweCB2YXIoLS1saWdodC1ibHVlKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICBjb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XFxufVxcblxcbi5wcm9qZWN0LWJveDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbiAgYm94LXNoYWRvdzogMHB4IDEwcHggMTBweCB2YXIoLS1kYXJrLWJsdWUpO1xcbn1cXG5cXG4ucHJvamVjdC1pbWcge1xcbiAgd2lkdGg6IDgwcHg7XFxuICBoZWlnaHQ6IDgwcHg7XFxufVxcblxcbi5hZGQtcHJvamVjdC1idG4taW1nIHtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGhlaWdodDogMTAwcHg7XFxufVxcblxcbi5hZGQtcHJvamVjdC1idG4ge1xcbiAgYm9yZGVyOiAwO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XFxufVxcblxcbi5hZGQtcHJvamVjdC1idG46aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbn1cXG5cXG4ucHJvZ3Jlc3MtYmFyIHtcXG4gIHdpZHRoOiA5MCU7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcXG4gIG1hcmdpbjogMjBweCAwO1xcbn1cXG5cXG4ucHJvZ3Jlc3MtYmFyLWNvbXBsZXRlZCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbik7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA0MHB4O1xcbn1cXG5cXG4ucHJvZ3Jlc3MtYmFyLXRleHQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMjAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcXG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxufVxcblxcbi5hZGQtcHJvamVjdC1tb2RhbCxcXG4uYWRkLXRhc2stbW9kYWwsXFxuLmF0dHJpYnV0aW9uLW1vZGFsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XFxuICBwYWRkaW5nOiAxMHB4IDMwcHggMjBweCAzMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYmx1ZSk7XFxuICBib3JkZXI6IDhweCBkYXNoZWQgd2hpdGVzbW9rZTtcXG4gIHotaW5kZXg6IDI7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBtYXgtd2lkdGg6IDMwJTtcXG4gIG1pbi13aWR0aDogMzAlO1xcbiAgdG9wOiAyMCU7XFxuICBsZWZ0OiA0NSU7XFxufVxcblxcbi5hZGQtcHJvamVjdC1mb3JtLWVsZW1lbnRzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uY2xvc2UtYnRuIHtcXG4gIGJvcmRlci1yYWRpdXM6IDYwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiA2cHggMTBweCAxcHggMTBweDtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjI0Nik7XFxuICBjb2xvcjogZ3JleTtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbn1cXG5cXG4uY2xvc2UtYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjY0OSk7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5tb2RhbC1pbWcge1xcbiAgaGVpZ2h0OiAxMzBweDtcXG59XFxuXFxuLm1vZGFsLWludHJvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5tb2RhbC10ZXh0IHtcXG4gIGNvbG9yOiBncmV5O1xcbiAgYm9yZGVyOiA1cHggZG90dGVkIHJnYigyMzYsIDIzNiwgMjM2KTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNDcsIDIzNyk7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uYWRkLXByb2plY3QtZm9ybSxcXG4uYWRkLXRhc2stZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTVweDtcXG59XFxuXFxuLmFkZC1wcm9qZWN0LWZvcm0gaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdLFxcbi5hZGQtdGFzay1mb3JtIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgYm9yZGVyOiAzcHggZG90dGVkIHZhcigtLWxpZ2h0LWJsdWUpO1xcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHZhcigtLWRhcmstYmx1ZSk7XFxufVxcblxcbi5hZGQtcHJvamVjdC1zdWJtaXQtYnRuLFxcbi5hZGQtdGFzay1zdWJtaXQtYnRuIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBib3JkZXI6IDNweCBkb3R0ZWQgcmdiKDIwNSwgMjA1LCAyMDUpO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxMHB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjU3NSk7XFxuICBjb2xvcjogcmdiKDIyNywgMjI3LCAyMjcpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNhM2EzYTViO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgcGFkZGluZzogMjVweCAxNXB4O1xcbiAgd2lkdGg6IG1pbi1jb250ZW50O1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG59XFxuXFxuLmFkZC1wcm9qZWN0LXN1Ym1pdC1idG46aG92ZXIsXFxuLmFkZC10YXNrLXN1Ym1pdC1idG46aG92ZXIge1xcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMjAzLCAyMzksIDE4NSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzJjMDc0Y2Y7XFxuICBjb2xvcjogdmFyKC0tY3JlYW0pO1xcbn1cXG5cXG4ub3ZlcmxheSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODQzKTtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbmJ1dHRvbixcXG5pbnB1dFt0eXBlPVxcXCJmaWxlXFxcIl0ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5idXR0b24sXFxuaW5wdXRbdHlwZT1cXFwiZmlsZVxcXCJdLFxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuICBmb250LWZhbWlseTogXFxcIkdyYW5kc3RhbmRlclxcXCIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5wcm9qZWN0LWRhc2hib2FyZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgbWFyZ2luOiAyNXB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgobWluLWNvbnRlbnQsIG1heC1jb250ZW50KSBtaW5tYXgoXFxuICAgICAgbWluLWNvbnRlbnQsXFxuICAgICAgbWF4LWNvbnRlbnRcXG4gICAgKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogbWlubWF4KG1pbi1jb250ZW50LCBtYXgtY29udGVudCkgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcImJhY2stYnV0dG9uIHRvZG8tbGlzdFxcXCIgXFxcInN0YXRzIHRvZG8tbGlzdFxcXCI7XFxuICBnYXA6IDMwcHg7XFxufVxcblxcbi5iYWNrLWJ1dHRvbiB7XFxuICBncmlkLWFyZWE6IGJhY2stYnV0dG9uO1xcbiAgZm9udC1zaXplOiAxOXB4O1xcbiAgY29sb3I6IHZhcigtLW1pZC1ibHVlKTtcXG4gIHBhZGRpbmc6IDdweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1saWdodC1ibHVlKTtcXG4gIGJveC1zaGFkb3c6IDBweCA1cHggNXB4IHJnYigxOTMsIDE5MywgMTkzKTtcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5iYWNrLWJ1dHRvbjpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tbWlkLWJsdWUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYmx1ZSk7XFxufVxcblxcbi5zdGF0cy1jb250YWluZXIge1xcbiAgZ3JpZC1hcmVhOiBzdGF0cztcXG4gIGNvbG9yOiB2YXIoLS1taWQtYmx1ZSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tbGlnaHQtYmx1ZSk7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBnYXA6IDUwcHg7XFxuICB3aWR0aDogbWluLWNvbnRlbnQ7XFxuICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBib3gtc2hhZG93OiAwcHggNXB4IDVweCByZ2IoMTkzLCAxOTMsIDE5Myk7XFxufVxcblxcbi50b2RvLWxpc3QtY29udGFpbmVyIHtcXG4gIGdyaWQtYXJlYTogdG9kby1saXN0O1xcbn1cXG5cXG4ucHJvZ3Jlc3MtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA1cHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHByb2dyZXNzIHtcXG4gIDAlIHtcXG4gICAgLS1wZXJjZW50YWdlOiAwO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIC0tcGVyY2VudGFnZTogdmFyKC0tdmFsdWUpO1xcbiAgfVxcbn1cXG5cXG5AcHJvcGVydHkgLS1wZXJjZW50YWdlIHtcXG4gIHN5bnRheDogXFxcIjxudW1iZXI+XFxcIjtcXG4gIGluaGVyaXRzOiB0cnVlO1xcbiAgaW5pdGlhbC12YWx1ZTogMDtcXG59XFxuXFxuW3JvbGU9XFxcInByb2dyZXNzYmFyXFxcIl0ge1xcbiAgLS1wZXJjZW50YWdlOiB2YXIoLS12YWx1ZSk7XFxuICAtLXNlY29uZGFyeTogcmdiYSgyMTQsIDIxNCwgMjE0LCAwLjU2Nyk7XFxuICAtLXNpemU6IDE1MHB4O1xcbiAgYW5pbWF0aW9uOiBwcm9ncmVzcyAycyAwLjVzIGZvcndhcmRzO1xcbiAgd2lkdGg6IHZhcigtLXNpemUpO1xcbiAgYXNwZWN0LXJhdGlvOiAyIC8gMTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJSAvIDEwMCUgMTAwJSAwIDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5bcm9sZT1cXFwicHJvZ3Jlc3NiYXJcXFwiXS5jb21wbGV0ZWQtYmFyLWNvbG9yIHtcXG4gIC0tcHJpbWFyeTogdmFyKC0tZ3JlZW4pO1xcbiAgY29sb3I6IHZhcigtLWdyZWVuKTtcXG59XFxuXFxuW3JvbGU9XFxcInByb2dyZXNzYmFyXFxcIl0uaW4tcHJvZ3Jlc3MtYmFyLWNvbG9yIHtcXG4gIC0tcHJpbWFyeTogcmdiKDAsIDExMywgMjA2KTtcXG4gIGNvbG9yOiByZ2IoMCwgMTEzLCAyMDYpO1xcbn1cXG5cXG5bcm9sZT1cXFwicHJvZ3Jlc3NiYXJcXFwiXS5ub3Qtc3RhcnRlZC1iYXItY29sb3Ige1xcbiAgLS1wcmltYXJ5OiBncmV5O1xcbiAgY29sb3I6IGdyZXk7XFxufVxcblxcbltyb2xlPVxcXCJwcm9ncmVzc2JhclxcXCJdLm92ZXJkdWUtYmFyLWNvbG9yIHtcXG4gIC0tcHJpbWFyeTogcmdiKDI1NSwgODYsIDg2KTtcXG4gIGNvbG9yOiByZ2IoMjUwLCAxMDksIDEwOSk7XFxufVxcblxcbi5kZWZhdWx0LWJhci1jb2xvciB7XFxuICAtLXByaW1hcnk6IGJsYWNrO1xcbn1cXG5cXG5bcm9sZT1cXFwicHJvZ3Jlc3NiYXJcXFwiXTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZDogY29uaWMtZ3JhZGllbnQoXFxuICAgIGZyb20gMC43NXR1cm4gYXQgNTAlIDEwMCUsXFxuICAgIHZhcigtLXByaW1hcnkpIGNhbGModmFyKC0tcGVyY2VudGFnZSkgKiAxJSAvIDIpLFxcbiAgICB2YXIoLS1zZWNvbmRhcnkpIGNhbGModmFyKC0tcGVyY2VudGFnZSkgKiAxJSAvIDIgKyAwLjklKVxcbiAgKTtcXG4gIG1hc2s6IHJhZGlhbC1ncmFkaWVudChhdCA1MCUgMTAwJSwgd2hpdGUgNTUlLCB0cmFuc3BhcmVudCA1NS41JSk7XFxuICAtd2Via2l0LW1hc2s6IHJhZGlhbC1ncmFkaWVudChhdCA1MCUgMTAwJSwgIzAwMDAgNjAlLCAjMDAwIDc1JSk7XFxufVxcblxcbltyb2xlPVxcXCJwcm9ncmVzc2JhclxcXCJdOjphZnRlciB7XFxuICBjb3VudGVyLXJlc2V0OiBwZXJjZW50YWdlIHZhcigtLXZhbHVlKTtcXG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS1wZXJjZW50YWdlKSBcXFwiJVxcXCI7XFxuICBmb250LXNpemU6IGNhbGModmFyKC0tc2l6ZSkgLyA1KTtcXG59XFxuXFxuLnRvZG8tbGlzdC1jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gIGJveC1zaGFkb3c6IDBweCA1cHggNXB4IHJnYigxOTMsIDE5MywgMTkzKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMTBweCAyNXB4IDVweCAyNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWxpZ2h0LWJsdWUpO1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gIGNvbG9yOiB2YXIoLS1taWQtYmx1ZSk7XFxufVxcblxcbi5vcmdhbml6ZS1tZW51IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG4uY3VzdG9tLXNlbGVjdCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTgwcHg7XFxufVxcblxcbi5tZW51LXNlbGVjdCxcXG4ucHJpb3JpdHktc2VsZWN0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMTBweCAzMHB4IDEwcHggMTVweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWxpZ2h0LWJsdWUpO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsPHN2ZyB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCI+PHBhdGggZmlsbD1cXFwiJTIzM2Y3MmFmXFxcIiBkPVxcXCJNNyAxMGw1IDUgNS01elxcXCIvPjwvc3ZnPicpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IDEwcHggY2VudGVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiAzMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6IHZhcigtLW1pZC1ibHVlKTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiR3JhbmRzdGFuZGVyXFxcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLm1lbnUtc2VsZWN0OmhvdmVyLFxcbi5tZW51LXNlbGVjdDpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYmx1ZSk7XFxufVxcblxcbi50YXNrcy10YWJsZS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiAyMHB4IDA7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgbWF4LWhlaWdodDogY2FsYyg1NjBweCAtICg0NXB4KSk7XFxuICBtaW4taGVpZ2h0OiBjYWxjKDU2MHB4IC0gKDQ1cHgpKTtcXG4gIG1heC13aWR0aDogY2FsYyg5MDBweCAtICgxMHB4KSk7XFxuICBtaW4td2lkdGg6IGNhbGMoOTAwcHggLSAoMTBweCkpO1xcbn1cXG5cXG4udG9kby1saXN0LWl0ZW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3gtc2hhZG93OiAwcHggNXB4IDJweCByZ2IoMTI3LCAxMjcsIDEyNyk7XFxuICBtYXJnaW46IDAgMTBweCAxMHB4IDEwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gIGdhcDogMTVweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5jdXN0b20tY2hlY2tib3gge1xcbiAgZmxleC1iYXNpczogNDBweDtcXG59XFxuXFxuLnRhc2staW5mby1jb250YWluZXIge1xcbiAgZmxleC1iYXNpczogMzUwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uZHVlLWRhdGUtY29udGFpbmVyIHtcXG4gIGZsZXgtYmFzaXM6IDIyMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmluLXByb2dyZXNzLXJhZGlvLWNvbnRhaW5lciB7XFxuICBmbGV4LWJhc2lzOiA2MHB4O1xcbiAgcGFkZGluZy10b3A6IDI1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5wcmlvcml0eS1jb250YWluZXIge1xcbiAgZmxleC1iYXNpczogMTEwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTgwcHg7XFxufVxcblxcbi5yZW1vdmUtaXRlbS1idG4sXFxuLnJlbW92ZS1wcm9qZWN0LWJ0biB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC01cHg7XFxuICByaWdodDogLTVweDtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogNHB4IDdweCA0cHggN3B4O1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjI0Nik7XFxuICBjb2xvcjogZ3JleTtcXG59XFxuXFxuLnJlbW92ZS1pdGVtLWJ0bjpob3ZlcixcXG4ucmVtb3ZlLXByb2plY3QtYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjY0OSk7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi50YXNrLXRpdGxlLFxcbi50YXNrLWRlc2NyaXB0aW9uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcblxcbi50YXNrLXRpdGxlLmV4cGFuZGVkLFxcbi50YXNrLWRlc2NyaXB0aW9uLmV4cGFuZGVkIHtcXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG4gIG1heC13aWR0aDogbm9uZTtcXG59XFxuXFxuLnRhc2stdGl0bGU6aG92ZXIsXFxuLnRhc2stZGVzY3JpcHRpb246aG92ZXIge1xcbiAgY29sb3I6ICMwMDg0ZmY7XFxufVxcblxcbi5wcmlvcml0eS0xIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjEzLCAyNTUsIDIxNSwgMC4yNzIpO1xcbn1cXG5cXG4ucHJpb3JpdHktMiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NCwgMjE2LCAxMDIsIDAuMTY3KTtcXG59XFxuXFxuLnByaW9yaXR5LTMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDE2NywgMTY3LCAwLjMwMyk7XFxufVxcblxcbi5jb21wbGV0ZWQtY2hlY2tlZCB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gIGNvbG9yOiAjMDAwMDAwNWI7XFxufVxcblxcbi5hZGQtdGFzay1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMjBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLmFkZC10YXNrLWJ0biB7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3JlYW0pO1xcbiAgY29sb3I6IHZhcigtLWdyZWVuKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdyZWVuKTtcXG4gIHBhZGRpbmc6IDhweCAxMXB4IDAgMTFweDtcXG59XFxuXFxuLmFkZC10YXNrLWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbik7XFxuICBjb2xvcjogdmFyKC0tY3JlYW0pO1xcbn1cXG5cXG4uY3VzdG9tLWNoZWNrYm94IGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0sXFxuLmN1c3RvbS1yYWRpby1ib3ggaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uY3VzdG9tLWNoZWNrYm94LFxcbi5jdXN0b20tcmFkaW8tYm94IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jaGVja21hcmssXFxuLmNoZWNrZG90IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB3aWR0aDogMzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4uY2hlY2tkb3Qge1xcbiAgaGVpZ2h0OiAxNnB4O1xcbiAgd2lkdGg6IDE2cHg7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl06aG92ZXIgKyAuY2hlY2tkb3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxMTMsIDIwNiwgMC41KTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpob3ZlciArIC5jaGVja21hcmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3NiwgMTc1LCA3OSwgMC41KTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkICsgLmNoZWNrbWFyazphZnRlcixcXG5pbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdOmNoZWNrZWQgKyAuY2hlY2tkb3Q6YWZ0ZXIge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCArIC5jaGVja21hcmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4pO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdOmNoZWNrZWQgKyAuY2hlY2tkb3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDExMywgMjA2KTtcXG59XFxuXFxuLmNoZWNrbWFyazphZnRlcixcXG4uY2hlY2tkb3Q6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uY2hlY2ttYXJrOmFmdGVyIHtcXG4gIGxlZnQ6IDExcHg7XFxuICB0b3A6IDZweDtcXG4gIHdpZHRoOiA1cHg7XFxuICBoZWlnaHQ6IDEzcHg7XFxuICBib3JkZXI6IHNvbGlkIHZhcigtLWNyZWFtKTtcXG4gIGJvcmRlci13aWR0aDogMCAycHggMnB4IDA7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxufVxcblxcbi5jaGVja2RvdDphZnRlciB7XFxuICBsZWZ0OiA1cHg7XFxuICB0b3A6IDVweDtcXG4gIHdpZHRoOiA2cHg7XFxuICBoZWlnaHQ6IDZweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jcmVhbSk7XFxufVxcblxcbi5pbi1wcm9ncmVzcy10ZXh0IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBmb250LXNpemU6IDEwcHg7XFxuICBjb2xvcjogIzY2NjtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG59XFxuXFxuLm5vLXRhc2tzLW1lc3NhZ2Uge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG4gIGNvbG9yOiByZ2IoMjU1LCAyMjAsIDE2MSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1taWQtYmx1ZSk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4ubm8tdGFza3MtaW1nIHtcXG4gIGhlaWdodDogMzAwcHg7XFxufVxcblxcbi5ob21lLWRhc2hib2FyZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcImJhZGdlcyBiYWRnZXNcXFwiIFxcXCJkdWUtc29vbi10YWJsZSBvdmVyZHVlLXRhYmxlXFxcIiBcXFwicHJvZ3Jlc3MtYmFycyBwcm9ncmVzcy1iYXJzXFxcIjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIHBhZGRpbmc6IDQ1cHggMjVweCAyMHB4IDI1cHg7XFxuICBnYXA6IDIwcHg7XFxuICBjb2xvcjogdmFyKC0tbWlkLWJsdWUpO1xcbn1cXG5cXG4uYmFkZ2UtY29udGFpbmVyIHtcXG4gIGdyaWQtYXJlYTogYmFkZ2VzO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwIDEwcHg7XFxufVxcblxcbi5iYWRnZS1jb250YWluZXIgaDQ6Zmlyc3QtY2hpbGQge1xcbiAgY29sb3I6IHJnYigyOCwgNzMsIDEyNik7XFxufVxcblxcbi5hbGwtYmFkZ2VzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZ2FwOiAzMHB4O1xcbn1cXG5cXG4uYmFkZ2UtaW1nIHtcXG4gIHdpZHRoOiA0NXB4O1xcbn1cXG5cXG4uYmFkZ2Uge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZzogNnB4O1xcbn1cXG5cXG4uYmFkZ2UgaDYge1xcbiAgbWFyZ2luOiAxMHB4IDA7XFxufVxcblxcbi5iYWRnZS1vdmVybGF5IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDM1cHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi9zcmMvYXNzZXRzL2ltYWdlcy9sb2NrLnBuZ1xcXCIpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCAxMHB4IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogNDVweDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ1LCAyNDUsIDI0NSwgMC44MTkpO1xcbn1cXG5cXG4uZHVlLXNvb24tbGlzdC1pdGVtLFxcbi5vdmVyZHVlLWxpc3QtaXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZmxleC1iYXNpczogMTBweDtcXG4gIHBhZGRpbmc6IDZweCAxNXB4O1xcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHZhcigtLWNyZWFtKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmR1ZS1zb29uLWNvbnRhaW5lciB7XFxuICBncmlkLWFyZWE6IGR1ZS1zb29uLXRhYmxlO1xcbn1cXG4ub3ZlcmR1ZS1jb250YWluZXIge1xcbiAgZ3JpZC1hcmVhOiBvdmVyZHVlLXRhYmxlO1xcbn1cXG5cXG4uZHVlLXNvb24tY29udGFpbmVyLFxcbi5vdmVyZHVlLWNvbnRhaW5lcixcXG4uYmFkZ2UtY29udGFpbmVyLFxcbi5mb2N1cy1zdGF0cy1jb250YWluZXIge1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWxpZ2h0LWJsdWUpO1xcbn1cXG5cXG4uZHVlLXNvb24tdGFibGUtY29udGFpbmVyLFxcbi5vdmVyZHVlLXRhYmxlLWNvbnRhaW5lciB7XFxuICBtYXgtaGVpZ2h0OiAxNTBweDtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4uZHVlLXNvb24tY29udGFpbmVyIGg0LFxcbi5vdmVyZHVlLWNvbnRhaW5lciBoNCB7XFxuICBtYXJnaW4tbGVmdDogMTVweDtcXG4gIGNvbG9yOiByZ2IoMjgsIDczLCAxMjYpO1xcbn1cXG5cXG4ub3ZlcmR1ZS1saXN0LWl0ZW0gZGl2Omxhc3QtY2hpbGQge1xcbiAgY29sb3I6IHJnYigyMjgsIDkyLCA5Mik7XFxufVxcblxcbi5kdWUtc29vbi1saXN0LWl0ZW0gZGl2Omxhc3QtY2hpbGQge1xcbiAgY29sb3I6IHJnYig5MCwgMTM5LCA5MCk7XFxufVxcblxcbi5ob21lLXN0YXRzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMzBweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZm9jdXMtc3RhdHMtY29udGFpbmVyIHtcXG4gIGdyaWQtYXJlYTogcHJvZ3Jlc3MtYmFycztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nOiAwIDUwcHg7XFxufVxcblxcbi5mb2N1cy1zdGF0cy1jb250YWluZXIgaDQ6Zmlyc3QtY2hpbGQge1xcbiAgY29sb3I6IHJnYigyOCwgNzMsIDEyNik7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1taWQtYmx1ZSk7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5ob21lLWluLXByb2dyZXNzLWJhcixcXG4uaG9tZS1ub3Qtc3RhcnRlZC1iYXIsXFxuLmhvbWUtb3ZlcmR1ZS1iYXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxuICBmbGV4LWJhc2lzOiAxODVweDtcXG4gIGNvbG9yOiB2YXIoLS1taWQtYmx1ZSk7XFxufVxcblxcbi5zaWRlYmFyLWZvb3RlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5zaWRlYmFyLWZvb3RlciBhIHtcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsInZhciBtYXAgPSB7XG5cdFwiLi9sdmwtMS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2JhZGdlcy9sdmwtMS5wbmdcIixcblx0XCIuL2x2bC0yLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvYmFkZ2VzL2x2bC0yLnBuZ1wiLFxuXHRcIi4vbHZsLTMucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9iYWRnZXMvbHZsLTMucG5nXCIsXG5cdFwiLi9sdmwtNC5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2JhZGdlcy9sdmwtNC5wbmdcIixcblx0XCIuL2x2bC01LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvYmFkZ2VzL2x2bC01LnBuZ1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2JhZGdlcyBzeW5jIHJlY3Vyc2l2ZSBeXFxcXC5cXFxcL2x2bFxcXFwtLipcXFxcLnBuZyRcIjsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vYWRkLXByb2plY3QtYnRuLTIucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9hZGQtcHJvamVjdC1idG4tMi5wbmdcIixcblx0XCIuL2JhZGdlcy9sdmwtMS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2JhZGdlcy9sdmwtMS5wbmdcIixcblx0XCIuL2JhZGdlcy9sdmwtMi5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2JhZGdlcy9sdmwtMi5wbmdcIixcblx0XCIuL2JhZGdlcy9sdmwtMy5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2JhZGdlcy9sdmwtMy5wbmdcIixcblx0XCIuL2JhZGdlcy9sdmwtNC5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2JhZGdlcy9sdmwtNC5wbmdcIixcblx0XCIuL2JhZGdlcy9sdmwtNS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2JhZGdlcy9sdmwtNS5wbmdcIixcblx0XCIuL2JhbGwucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9iYWxsLnBuZ1wiLFxuXHRcIi4vYnVkZ2V0LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvYnVkZ2V0LnBuZ1wiLFxuXHRcIi4vY29va2luZy5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2Nvb2tpbmcucG5nXCIsXG5cdFwiLi9kdW1iYmVsbC5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2R1bWJiZWxsLnBuZ1wiLFxuXHRcIi4vZ2FyZGVuaW5nLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvZ2FyZGVuaW5nLnBuZ1wiLFxuXHRcIi4vaG9tZS1ibHVlLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvaG9tZS1ibHVlLnBuZ1wiLFxuXHRcIi4vaG9tZS13aGl0ZS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2hvbWUtd2hpdGUucG5nXCIsXG5cdFwiLi9raXR0ZW4taW4taG9sZS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2tpdHRlbi1pbi1ob2xlLnBuZ1wiLFxuXHRcIi4va2l0dGVuLW9uLW1vb24ucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9raXR0ZW4tb24tbW9vbi5wbmdcIixcblx0XCIuL2tpdHRlbi1zaXR0aW5nLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMva2l0dGVuLXNpdHRpbmcucG5nXCIsXG5cdFwiLi9raXR0ZW4tc2xlZXBpbmcucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9raXR0ZW4tc2xlZXBpbmcucG5nXCIsXG5cdFwiLi9sYW5ndWFnZXMucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9sYW5ndWFnZXMucG5nXCIsXG5cdFwiLi9sb2NrLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvbG9jay5wbmdcIixcblx0XCIuL2x1Z2dhZ2UucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9sdWdnYWdlLnBuZ1wiLFxuXHRcIi4vbm8taW1hZ2UucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9uby1pbWFnZS5wbmdcIixcblx0XCIuL3BhaW50LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvcGFpbnQucG5nXCIsXG5cdFwiLi9wbGF5aW5nLXlhcm4ucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9wbGF5aW5nLXlhcm4ucG5nXCIsXG5cdFwiLi9wcmVzZW50YXRpb24ucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9wcmVzZW50YXRpb24ucG5nXCIsXG5cdFwiLi9wcm9qZWN0cy1ibHVlLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvcHJvamVjdHMtYmx1ZS5wbmdcIixcblx0XCIuL3Byb2plY3RzLXdoaXRlLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvcHJvamVjdHMtd2hpdGUucG5nXCIsXG5cdFwiLi9yZW5vdmF0aW9uLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvcmVub3ZhdGlvbi5wbmdcIixcblx0XCIuL3NjcmlwdC5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3NjcmlwdC5wbmdcIixcblx0XCIuL3dyaXRpbmcucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy93cml0aW5nLnBuZ1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9hc3NldHMvaW1hZ2VzIHN5bmMgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLiokXCI7IiwiaW1wb3J0IHsgY3JlYXRlQWRkUHJvamVjdE1vZGFsIH0gZnJvbSBcIi4uL3VpL2NyZWF0ZU1vZGFscy5qc1wiO1xuaW1wb3J0IHsgYWRkT3ZlcmxheSwgZGlzcGxheU1vZGFsIH0gZnJvbSBcIi4uL2hlbHBlcnMvbW9kYWxIZWxwZXJzLmpzXCI7XG5cbmNvbnN0IGhhbmRsZUFkZFByb2plY3RCdG4gPSAoKSA9PiB7XG4gIGFkZE92ZXJsYXkoKTtcbiAgZGlzcGxheU1vZGFsKGNyZWF0ZUFkZFByb2plY3RNb2RhbCgpKTtcbn07XG5cbmV4cG9ydCB7IGhhbmRsZUFkZFByb2plY3RCdG4gfTtcbiIsImltcG9ydCB7IGNyZWF0ZUFkZFRhc2tNb2RhbCB9IGZyb20gXCIuLi91aS9jcmVhdGVNb2RhbHMuanNcIjtcbmltcG9ydCB7IGFkZE92ZXJsYXksIGRpc3BsYXlNb2RhbCB9IGZyb20gXCIuLi9oZWxwZXJzL21vZGFsSGVscGVycy5qc1wiO1xuXG5jb25zdCBoYW5kbGVBZGRUYXNrQnRuID0gKHByb2plY3QpID0+IHtcbiAgYWRkT3ZlcmxheSgpO1xuICBjb25zdCB0YXNrTW9kYWwgPSBjcmVhdGVBZGRUYXNrTW9kYWwocHJvamVjdCk7XG4gIGRpc3BsYXlNb2RhbCh0YXNrTW9kYWwpO1xufTtcblxuZXhwb3J0IHsgaGFuZGxlQWRkVGFza0J0biB9O1xuIiwiaW1wb3J0IHsgY2xlYXJDb250ZW50VGl0bGVEaXNwbGF5IH0gZnJvbSBcIi4uL3VpL2NsZWFyRGlzcGxheS5qc1wiO1xuXG5jb25zdCBoYW5kbGVCYWNrQnRuID0gKHByZXZpb3VzUGFnZSkgPT4ge1xuICBjbGVhckNvbnRlbnRUaXRsZURpc3BsYXkoKTtcbiAgcHJldmlvdXNQYWdlKCk7XG59O1xuXG5leHBvcnQgeyBoYW5kbGVCYWNrQnRuIH07XG4iLCJpbXBvcnQgeyB1cGRhdGVUYXNrRWxlbWVudCB9IGZyb20gXCIuLi91aS91cGRhdGVUYXNrRWxlbWVudC5qc1wiO1xuaW1wb3J0IHsgdXBkYXRlVG9kb0l0ZW1TdG9yYWdlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3Byb2plY3RMb2NhbFN0b3JhZ2UuanNcIjtcbmltcG9ydCB7IHVwZGF0ZVN0YXRzQ29udGFpbmVyIH0gZnJvbSBcIi4uL3VpL3VwZGF0ZVN0YXRzQ29udGFpbmVyLmpzXCI7XG5cbmNvbnN0IGhhbmRsZUNvbXBsZXRlZENoZWNrYm94ID0gKHByb2plY3QsIHRhc2tFbGVtZW50LCB0b2RvSXRlbSkgPT4ge1xuICB0b2RvSXRlbS50b2dnbGVDb21wbGV0ZSgpO1xuICB0b2RvSXRlbS51cGRhdGVTdGF0dXMoKTtcbiAgdXBkYXRlVG9kb0l0ZW1TdG9yYWdlKHByb2plY3QpO1xuICB1cGRhdGVUYXNrRWxlbWVudChwcm9qZWN0LCB0YXNrRWxlbWVudCwgdG9kb0l0ZW0pO1xuICB1cGRhdGVTdGF0c0NvbnRhaW5lcihwcm9qZWN0KTtcbn07XG5cbmV4cG9ydCB7IGhhbmRsZUNvbXBsZXRlZENoZWNrYm94IH07XG4iLCJpbXBvcnQgeyB1cGRhdGVUYXNrRWxlbWVudCB9IGZyb20gXCIuLi91aS91cGRhdGVUYXNrRWxlbWVudC5qc1wiO1xuaW1wb3J0IHsgdXBkYXRlVG9kb0l0ZW1TdG9yYWdlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3Byb2plY3RMb2NhbFN0b3JhZ2UuanNcIjtcbmltcG9ydCB7XG4gIGZvcm1hdERhdGVGb3JJbnB1dCxcbiAgcGFyc2VEYXRlRnJvbUlucHV0LFxuICBkdWVPbk1vbnRoU3RyaW5nRGF0ZSxcbn0gZnJvbSBcIi4uL2hlbHBlcnMvZGF0ZUZvcm1hdHRlci5qc1wiO1xuXG5jb25zdCBzaG93RGF0ZVBpY2tlciA9IChwcm9qZWN0LCB0YXNrRWxlbWVudCwgdG9kb0l0ZW0sIGRhdGVDb250YWluZXIpID0+IHtcbiAgY29uc3QgZGF0ZUlucHV0ID0gY3JlYXRlRGF0ZVBpY2tlcklucHV0KHRvZG9JdGVtLmdldER1ZURhdGUoKSk7XG5cbiAgZGF0ZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT5cbiAgICBoYW5kbGVEdWVEYXRlQ2hhbmdlKHByb2plY3QsIHRhc2tFbGVtZW50LCB0b2RvSXRlbSwgZGF0ZUlucHV0KVxuICApO1xuICBkYXRlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgKCkgPT5cbiAgICBoYW5kbGVEdWVEYXRlQmx1cihwcm9qZWN0LCB0YXNrRWxlbWVudCwgdG9kb0l0ZW0sIGRhdGVDb250YWluZXIpXG4gICk7XG5cbiAgZGF0ZUNvbnRhaW5lci5yZXBsYWNlQ2hpbGRyZW4oZGF0ZUlucHV0KTtcbiAgZGF0ZUlucHV0LmZvY3VzKCk7XG59O1xuXG5jb25zdCBjcmVhdGVEYXRlUGlja2VySW5wdXQgPSAoZHVlRGF0ZSkgPT4ge1xuICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGRhdGVJbnB1dC50eXBlID0gXCJkYXRlXCI7XG4gIGRhdGVJbnB1dC52YWx1ZSA9IGZvcm1hdERhdGVGb3JJbnB1dChkdWVEYXRlKTtcbiAgcmV0dXJuIGRhdGVJbnB1dDtcbn07XG5cbmNvbnN0IGhhbmRsZUR1ZURhdGVDaGFuZ2UgPSAocHJvamVjdCwgdGFza0VsZW1lbnQsIHRvZG9JdGVtLCBkYXRlSW5wdXQpID0+IHtcbiAgY29uc3QgbmV3RHVlRGF0ZSA9IHBhcnNlRGF0ZUZyb21JbnB1dChkYXRlSW5wdXQudmFsdWUpO1xuICBjb25zdCBvcmlnaW5hbER1ZURhdGUgPSB0b2RvSXRlbS5nZXREdWVEYXRlKCk7XG5cbiAgaWYgKFxuICAgICFpc05hTihuZXdEdWVEYXRlLmdldFRpbWUoKSkgJiZcbiAgICBuZXdEdWVEYXRlLmdldFRpbWUoKSAhPT0gb3JpZ2luYWxEdWVEYXRlLmdldFRpbWUoKVxuICApIHtcbiAgICB0b2RvSXRlbS51cGRhdGVEdWVEYXRlKG5ld0R1ZURhdGUpO1xuICAgIHVwZGF0ZVRvZG9JdGVtU3RvcmFnZShwcm9qZWN0KTtcbiAgICB1cGRhdGVUYXNrRWxlbWVudChwcm9qZWN0LCB0YXNrRWxlbWVudCwgdG9kb0l0ZW0pO1xuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJJbnZhbGlkIGRhdGUgZm9ybWF0XCIpO1xuICB9XG59O1xuXG5jb25zdCBoYW5kbGVEdWVEYXRlQmx1ciA9IChwcm9qZWN0LCB0YXNrRWxlbWVudCwgdG9kb0l0ZW0sIGRhdGVDb250YWluZXIpID0+IHtcbiAgY29uc3QgZHVlRGF0ZVRleHQgPSBjcmVhdGVEdWVEYXRlVGV4dCh0b2RvSXRlbSk7XG4gIGR1ZURhdGVUZXh0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PlxuICAgIHNob3dEYXRlUGlja2VyKHByb2plY3QsIHRhc2tFbGVtZW50LCB0b2RvSXRlbSwgZGF0ZUNvbnRhaW5lcilcbiAgKTtcbiAgZGF0ZUNvbnRhaW5lci5yZXBsYWNlQ2hpbGRyZW4oZHVlRGF0ZVRleHQpO1xufTtcblxuY29uc3QgY3JlYXRlRHVlRGF0ZVRleHQgPSAodG9kb0l0ZW0pID0+IHtcbiAgY29uc3QgZHVlRGF0ZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgZHVlRGF0ZVRleHQudGV4dENvbnRlbnQgPSBkdWVPbk1vbnRoU3RyaW5nRGF0ZSh0b2RvSXRlbS5nZXREdWVEYXRlKCkpO1xuICByZXR1cm4gZHVlRGF0ZVRleHQ7XG59O1xuZXhwb3J0IHsgc2hvd0RhdGVQaWNrZXIgfTtcbiIsImltcG9ydCB7IHVwZGF0ZVRhc2tFbGVtZW50IH0gZnJvbSBcIi4uL3VpL3VwZGF0ZVRhc2tFbGVtZW50LmpzXCI7XG5pbXBvcnQgeyB1cGRhdGVUb2RvSXRlbVN0b3JhZ2UgfSBmcm9tIFwiLi4vc2VydmljZXMvcHJvamVjdExvY2FsU3RvcmFnZS5qc1wiO1xuaW1wb3J0IHsgdXBkYXRlU3RhdHNDb250YWluZXIgfSBmcm9tIFwiLi4vdWkvdXBkYXRlU3RhdHNDb250YWluZXIuanNcIjtcblxuY29uc3QgaGFuZGxlSW5Qcm9ncmVzc1JhZGlvQm94ID0gKHByb2plY3QsIHRhc2tFbGVtZW50LCB0b2RvSXRlbSkgPT4ge1xuICB0b2RvSXRlbS50b2dnbGVJblByb2dyZXNzKCk7XG4gIHRvZG9JdGVtLnVwZGF0ZVN0YXR1cygpO1xuICB1cGRhdGVUb2RvSXRlbVN0b3JhZ2UocHJvamVjdCk7XG4gIHVwZGF0ZVRhc2tFbGVtZW50KHByb2plY3QsIHRhc2tFbGVtZW50LCB0b2RvSXRlbSk7XG4gIHVwZGF0ZVN0YXRzQ29udGFpbmVyKHByb2plY3QpO1xufTtcblxuZXhwb3J0IHsgaGFuZGxlSW5Qcm9ncmVzc1JhZGlvQm94IH07XG4iLCJpbXBvcnQgeyByZWFycmFuZ2VUb2RvTGlzdCB9IGZyb20gXCIuLi9oZWxwZXJzL3JlYXJyYW5nZVRvZG9MaXN0LmpzXCI7XG5pbXBvcnQgeyB1cGRhdGVUYXNrVGFibGUgfSBmcm9tIFwiLi4vdWkvdXBkYXRlVGFza1RhYmxlLmpzXCI7XG5cbmNvbnN0IGhhbmRsZU1lbnVTZWxlY3Rpb24gPSAoZXZlbnQsIHByb2plY3QsIHRvZG9MaXN0KSA9PiB7XG4gIGNvbnN0IHNlbGVjdGVkT3B0aW9uID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICBjb25zdCByZWFycmFuZ2VkVG9kb0xpc3QgPSByZWFycmFuZ2VUb2RvTGlzdCh0b2RvTGlzdCwgc2VsZWN0ZWRPcHRpb24pO1xuICB1cGRhdGVUYXNrVGFibGUocHJvamVjdCwgcmVhcnJhbmdlZFRvZG9MaXN0KTtcbn07XG5cbmV4cG9ydCB7IGhhbmRsZU1lbnVTZWxlY3Rpb24gfTtcbiIsImltcG9ydCB7IHVwZGF0ZVRhc2tFbGVtZW50IH0gZnJvbSBcIi4uL3VpL3VwZGF0ZVRhc2tFbGVtZW50LmpzXCI7XG5pbXBvcnQgeyB1cGRhdGVUb2RvSXRlbVN0b3JhZ2UgfSBmcm9tIFwiLi4vc2VydmljZXMvcHJvamVjdExvY2FsU3RvcmFnZS5qc1wiO1xuXG5jb25zdCBoYW5kbGVQcmlvcml0eVNlbGVjdGlvbiA9IChldmVudCwgcHJvamVjdCwgdGFza0VsZW1lbnQsIHRvZG9JdGVtKSA9PiB7XG4gIGNvbnN0IHNlbGVjdGVkT3B0aW9uID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICB0b2RvSXRlbS51cGRhdGVQcmlvcml0eShzZWxlY3RlZE9wdGlvbik7XG4gIHVwZGF0ZVRvZG9JdGVtU3RvcmFnZShwcm9qZWN0KTtcbiAgdXBkYXRlVGFza0VsZW1lbnQocHJvamVjdCwgdGFza0VsZW1lbnQsIHRvZG9JdGVtKTtcbn07XG5leHBvcnQgeyBoYW5kbGVQcmlvcml0eVNlbGVjdGlvbiB9O1xuIiwiaW1wb3J0IHsgY3JlYXRlUHJvamVjdEZyb21JbnB1dCB9IGZyb20gXCIuLi9zZXJ2aWNlcy9wcm9qZWN0RmFjdG9yeS5qc1wiO1xuaW1wb3J0IHsgc2F2ZVVzZXJQcm9qZWN0RGF0YSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9wcm9qZWN0TG9jYWxTdG9yYWdlLmpzXCI7XG5pbXBvcnQgeyB1cGRhdGVEYXNoYm9hcmRDb250YWluZXIgfSBmcm9tIFwiLi4vdWkvdXBkYXRlRGFzaGJvYXJkQ29udGFpbmVyLmpzXCI7XG5pbXBvcnQgeyBjbG9zZU1vZGFsIH0gZnJvbSBcIi4uL2hlbHBlcnMvbW9kYWxIZWxwZXJzLmpzXCI7XG5cbmNvbnN0IGhhbmRsZVByb2plY3RGb3JtU3VibWlzc2lvbiA9IChcbiAgZXZlbnQsXG4gIHByb2plY3ROYW1lSW5wdXQsXG4gIHByb2plY3RJbWdJbnB1dFxuKSA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgY29uc3QgcHJvamVjdE5hbWUgPSBwcm9qZWN0TmFtZUlucHV0LnZhbHVlO1xuICBjb25zdCBwcm9qZWN0SW1nRmlsZSA9IHByb2plY3RJbWdJbnB1dC5maWxlc1swXTtcblxuICBpZiAocHJvamVjdEltZ0ZpbGUpIHtcbiAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgY29uc3QgcHJvamVjdEltZ1BhdGggPSBlLnRhcmdldC5yZXN1bHQ7XG4gICAgICBjb25zdCBuZXdQcm9qZWN0ID0gY3JlYXRlUHJvamVjdEZyb21JbnB1dChwcm9qZWN0TmFtZSwgcHJvamVjdEltZ1BhdGgpO1xuICAgICAgc2F2ZVVzZXJQcm9qZWN0RGF0YShuZXdQcm9qZWN0KTtcbiAgICAgIHVwZGF0ZURhc2hib2FyZENvbnRhaW5lcigpO1xuICAgICAgY2xvc2VNb2RhbChcIi5hZGQtcHJvamVjdC1tb2RhbFwiKTtcbiAgICB9O1xuICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKHByb2plY3RJbWdGaWxlKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBwcm9qZWN0SW1nUGF0aCA9IFwibm8taW1hZ2UucG5nXCI7XG4gICAgY29uc3QgbmV3UHJvamVjdCA9IGNyZWF0ZVByb2plY3RGcm9tSW5wdXQocHJvamVjdE5hbWUsIHByb2plY3RJbWdQYXRoKTtcbiAgICBzYXZlVXNlclByb2plY3REYXRhKG5ld1Byb2plY3QpO1xuICAgIHVwZGF0ZURhc2hib2FyZENvbnRhaW5lcigpO1xuICAgIGNsb3NlTW9kYWwoXCIuYWRkLXByb2plY3QtbW9kYWxcIik7XG4gIH1cbn07XG5cbmV4cG9ydCB7IGhhbmRsZVByb2plY3RGb3JtU3VibWlzc2lvbiB9O1xuIiwiaW1wb3J0IHsgcmVtb3ZlVG9kb0l0ZW1Gcm9tU3RvcmFnZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9wcm9qZWN0TG9jYWxTdG9yYWdlLmpzXCI7XG5pbXBvcnQgeyB1cGRhdGVUYXNrVGFibGUgfSBmcm9tIFwiLi4vdWkvdXBkYXRlVGFza1RhYmxlLmpzXCI7XG5pbXBvcnQgeyB1cGRhdGVTdGF0c0NvbnRhaW5lciB9IGZyb20gXCIuLi91aS91cGRhdGVTdGF0c0NvbnRhaW5lci5qc1wiO1xuXG5jb25zdCBoYW5kbGVSZW1vdmVJdGVtQnRuID0gKHByb2plY3QsIHRvZG9JdGVtKSA9PiB7XG4gIGNvbnN0IHRvZG9MaXN0SXRlbXMgPSBwcm9qZWN0LmdldFRvZG9MaXN0KCkuZ2V0VG9kb0l0ZW1zKCk7XG4gIGNvbnN0IHRvZG9MaXN0ID0gcHJvamVjdC5nZXRUb2RvTGlzdCgpO1xuICB0b2RvTGlzdC5yZW1vdmVUb2RvSXRlbSh0b2RvSXRlbSk7XG4gIHJlbW92ZVRvZG9JdGVtRnJvbVN0b3JhZ2UocHJvamVjdCwgdG9kb0l0ZW0pO1xuICB1cGRhdGVUYXNrVGFibGUocHJvamVjdCwgdG9kb0xpc3RJdGVtcyk7XG4gIHVwZGF0ZVN0YXRzQ29udGFpbmVyKHByb2plY3QpO1xufTtcblxuZXhwb3J0IHsgaGFuZGxlUmVtb3ZlSXRlbUJ0biB9O1xuIiwiaW1wb3J0IHsgdXBkYXRlRGFzaGJvYXJkQ29udGFpbmVyIH0gZnJvbSBcIi4uL3VpL3VwZGF0ZURhc2hib2FyZENvbnRhaW5lci5qc1wiO1xuaW1wb3J0IHsgcmVtb3ZlUHJvamVjdEZyb21TdG9yYWdlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3Byb2plY3RMb2NhbFN0b3JhZ2UuanNcIjtcblxuY29uc3QgaGFuZGxlUmVtb3ZlUHJvamVjdEJ0biA9IChwcm9qZWN0LCBwcm9qZWN0TGlzdCkgPT4ge1xuICBwcm9qZWN0TGlzdC5yZW1vdmVQcm9qZWN0KHByb2plY3QpO1xuICByZW1vdmVQcm9qZWN0RnJvbVN0b3JhZ2UocHJvamVjdCk7XG4gIHVwZGF0ZURhc2hib2FyZENvbnRhaW5lcigpO1xufTtcblxuZXhwb3J0IHsgaGFuZGxlUmVtb3ZlUHJvamVjdEJ0biB9O1xuIiwiaW1wb3J0IHsgdXBkYXRlVGFza0VsZW1lbnQgfSBmcm9tIFwiLi4vdWkvdXBkYXRlVGFza0VsZW1lbnQuanNcIjtcbmltcG9ydCB7IHVwZGF0ZVRvZG9JdGVtU3RvcmFnZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9wcm9qZWN0TG9jYWxTdG9yYWdlLmpzXCI7XG5cbmNvbnN0IGhhbmRsZVRhc2tEZXNjcmlwdGlvbkJsdXIgPSAoXG4gIHByb2plY3QsXG4gIHRhc2tFbGVtZW50LFxuICB0b2RvSXRlbSxcbiAgdGFza0Rlc2NyaXB0aW9uXG4pID0+IHtcbiAgY29uc3QgbmV3RGVzY3JpcHRpb24gPSB0YXNrRGVzY3JpcHRpb24udGV4dENvbnRlbnQudHJpbSgpO1xuICBpZiAobmV3RGVzY3JpcHRpb24gIT09IHRvZG9JdGVtLmdldERlc2NyaXB0aW9uKCkpIHtcbiAgICB0b2RvSXRlbS51cGRhdGVEZXNjcmlwdGlvbihuZXdEZXNjcmlwdGlvbik7XG4gICAgdXBkYXRlVG9kb0l0ZW1TdG9yYWdlKHByb2plY3QpO1xuICAgIHVwZGF0ZVRhc2tFbGVtZW50KHByb2plY3QsIHRhc2tFbGVtZW50LCB0b2RvSXRlbSk7XG4gIH1cbn07XG5cbmNvbnN0IGhhbmRsZVRhc2tEZXNjcmlwdGlvbktleURvd24gPSAoZXZlbnQsIHRhc2tEZXNjcmlwdGlvbikgPT4ge1xuICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRhc2tEZXNjcmlwdGlvbi5ibHVyKCk7XG4gIH1cbn07XG5cbmV4cG9ydCB7IGhhbmRsZVRhc2tEZXNjcmlwdGlvbkJsdXIsIGhhbmRsZVRhc2tEZXNjcmlwdGlvbktleURvd24gfTtcbiIsImltcG9ydCB7IHVwZGF0ZVRvZG9JdGVtU3RvcmFnZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9wcm9qZWN0TG9jYWxTdG9yYWdlLmpzXCI7XG5pbXBvcnQgeyBmb3JtYXREYXRlRm9ySW5wdXQgfSBmcm9tIFwiLi4vaGVscGVycy9kYXRlRm9ybWF0dGVyLmpzXCI7XG5pbXBvcnQgeyBjcmVhdGVUb2RvSXRlbUZyb21JbnB1dCB9IGZyb20gXCIuLi9zZXJ2aWNlcy90b2RvSXRlbUZhY3RvcnkuanNcIjtcbmltcG9ydCB7IHVwZGF0ZVRhc2tUYWJsZSB9IGZyb20gXCIuLi91aS91cGRhdGVUYXNrVGFibGUuanNcIjtcbmltcG9ydCB7IHVwZGF0ZVN0YXRzQ29udGFpbmVyIH0gZnJvbSBcIi4uL3VpL3VwZGF0ZVN0YXRzQ29udGFpbmVyLmpzXCI7XG5pbXBvcnQgeyBjbG9zZU1vZGFsIH0gZnJvbSBcIi4uL2hlbHBlcnMvbW9kYWxIZWxwZXJzLmpzXCI7XG5cbmNvbnN0IGhhbmRsZVRhc2tGb3JtU3VibWlzc2lvbiA9IChcbiAgZXZlbnQsXG4gIGl0ZW1UaXRsZUlucHV0LFxuICBpdGVtRGVzY3JpcHRpb25JbnB1dCxcbiAgaXRlbUR1ZURhdGVJbnB1dCxcbiAgc2VsZWN0ZWRQcmlvcml0eSxcbiAgcHJvamVjdFxuKSA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IHRvZG9MaXN0ID0gcHJvamVjdC5nZXRUb2RvTGlzdCgpO1xuICBjb25zdCB0b2RvTGlzdEl0ZW1zID0gcHJvamVjdC5nZXRUb2RvTGlzdCgpLmdldFRvZG9JdGVtcygpO1xuXG4gIGNvbnN0IHRpdGxlID0gaXRlbVRpdGxlSW5wdXQudmFsdWU7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gcHJvY2Vzc0Rlc2NyaXB0aW9uKGl0ZW1EZXNjcmlwdGlvbklucHV0KTtcbiAgY29uc3QgZHVlRGF0ZSA9IHByb2Nlc3NEYXRlKGl0ZW1EdWVEYXRlSW5wdXQpO1xuICBjb25zdCBwcmlvcml0eSA9IHByb2Nlc3NQcmlvcml0eShzZWxlY3RlZFByaW9yaXR5KTtcblxuICBjb25zdCBuZXdUb2RvSXRlbSA9IGNyZWF0ZVRvZG9JdGVtRnJvbUlucHV0KFxuICAgIHRpdGxlLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIGR1ZURhdGUsXG4gICAgcHJpb3JpdHlcbiAgKTtcbiAgdG9kb0xpc3QuYWRkSXRlbVRvRnJvbnQobmV3VG9kb0l0ZW0pO1xuICB1cGRhdGVUb2RvSXRlbVN0b3JhZ2UocHJvamVjdCk7XG4gIHVwZGF0ZVRhc2tUYWJsZShwcm9qZWN0LCB0b2RvTGlzdEl0ZW1zKTtcbiAgdXBkYXRlU3RhdHNDb250YWluZXIocHJvamVjdCk7XG4gIGNsb3NlTW9kYWwoXCIuYWRkLXRhc2stbW9kYWxcIik7XG59O1xuXG5jb25zdCBwcm9jZXNzRGVzY3JpcHRpb24gPSAoZGVzY3JpcHRpb25JbnB1dCkgPT4ge1xuICBpZiAoIWRlc2NyaXB0aW9uSW5wdXQudmFsdWUpIHtcbiAgICBkZXNjcmlwdGlvbklucHV0LnZhbHVlID0gXCIgXCI7XG4gIH1cbiAgcmV0dXJuIGRlc2NyaXB0aW9uSW5wdXQudmFsdWU7XG59O1xuXG5jb25zdCBwcm9jZXNzRGF0ZSA9IChkYXRlSW5wdXQpID0+IHtcbiAgaWYgKCFkYXRlSW5wdXQudmFsdWUpIHtcbiAgICBkYXRlSW5wdXQudmFsdWUgPSBmb3JtYXREYXRlRm9ySW5wdXQobmV3IERhdGUoKSk7XG4gIH1cbiAgcmV0dXJuIGRhdGVJbnB1dC52YWx1ZTtcbn07XG5cbmNvbnN0IHByb2Nlc3NQcmlvcml0eSA9IChwcmlvcml0eVZhbHVlKSA9PiB7XG4gIGlmIChwcmlvcml0eVZhbHVlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIFwiTG93XCI7XG4gIH1cbiAgcmV0dXJuIHByaW9yaXR5VmFsdWU7XG59O1xuXG5leHBvcnQgeyBoYW5kbGVUYXNrRm9ybVN1Ym1pc3Npb24gfTtcbiIsImltcG9ydCB7IHVwZGF0ZVRhc2tFbGVtZW50IH0gZnJvbSBcIi4uL3VpL3VwZGF0ZVRhc2tFbGVtZW50LmpzXCI7XG5pbXBvcnQgeyB1cGRhdGVUb2RvSXRlbVN0b3JhZ2UgfSBmcm9tIFwiLi4vc2VydmljZXMvcHJvamVjdExvY2FsU3RvcmFnZS5qc1wiO1xuXG5jb25zdCBoYW5kbGVUYXNrVGl0bGVCbHVyID0gKHByb2plY3QsIHRhc2tFbGVtZW50LCB0b2RvSXRlbSwgdGFza1RpdGxlKSA9PiB7XG4gIGNvbnN0IG5ld1RpdGxlID0gdGFza1RpdGxlLnRleHRDb250ZW50LnRyaW0oKTtcbiAgaWYgKG5ld1RpdGxlICE9PSB0b2RvSXRlbS5nZXRUaXRsZSgpKSB7XG4gICAgdG9kb0l0ZW0udXBkYXRlVGl0bGUobmV3VGl0bGUpO1xuICAgIHVwZGF0ZVRvZG9JdGVtU3RvcmFnZShwcm9qZWN0KTtcbiAgICB1cGRhdGVUYXNrRWxlbWVudChwcm9qZWN0LCB0YXNrRWxlbWVudCwgdG9kb0l0ZW0pO1xuICB9XG59O1xuXG5jb25zdCBoYW5kbGVUYXNrVGl0bGVLZXlEb3duID0gKGV2ZW50LCB0YXNrVGl0bGUpID0+IHtcbiAgaWYgKGV2ZW50LmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0YXNrVGl0bGUuYmx1cigpO1xuICB9XG59O1xuXG5leHBvcnQgeyBoYW5kbGVUYXNrVGl0bGVCbHVyLCBoYW5kbGVUYXNrVGl0bGVLZXlEb3duIH07XG4iLCJpbXBvcnQgeyBkaWZmZXJlbmNlSW5EYXlzLCBmb3JtYXQsIHBhcnNlSVNPIH0gZnJvbSBcImRhdGUtZm5zXCI7XG5cbmNvbnN0IGZvcm1hdERhdGVGb3JJbnB1dCA9IChkYXRlKSA9PiB7XG4gIHJldHVybiBmb3JtYXQoZGF0ZSwgXCJ5eXl5LU1NLWRkXCIpO1xufTtcblxuY29uc3QgcGFyc2VEYXRlRnJvbUlucHV0ID0gKGRhdGVTdHJpbmcpID0+IHtcbiAgcmV0dXJuIHBhcnNlSVNPKGRhdGVTdHJpbmcpO1xufTtcblxuY29uc3QgZHVlT25Nb250aFN0cmluZ0RhdGUgPSAoZGF0ZSkgPT4ge1xuICByZXR1cm4gYER1ZSBvbiAke2Zvcm1hdChkYXRlLCBcIk1NTU0gZG8sIHl5eXlcIil9YDtcbn07XG5cbmNvbnN0IGR1ZUluRGF5c1N0cmluZyA9IChkdWVEYXRlKSA9PiB7XG4gIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgY29uc3QgZGF5c1VudGlsRHVlID0gZGlmZmVyZW5jZUluRGF5cyhkdWVEYXRlLCB0b2RheSk7XG5cbiAgaWYgKGRheXNVbnRpbER1ZSA+IDApIHtcbiAgICByZXR1cm4gYER1ZSBpbiAke2RheXNVbnRpbER1ZX0gZGF5c2A7XG4gIH0gZWxzZSBpZiAoZGF5c1VudGlsRHVlID09PSAwKSB7XG4gICAgcmV0dXJuIGBEdWUgdG9kYXlgO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBgT3ZlcmR1ZSBieSAke01hdGguYWJzKGRheXNVbnRpbER1ZSl9IGRheXNgO1xuICB9XG59O1xuXG5leHBvcnQge1xuICBmb3JtYXREYXRlRm9ySW5wdXQsXG4gIHBhcnNlRGF0ZUZyb21JbnB1dCxcbiAgZHVlT25Nb250aFN0cmluZ0RhdGUsXG4gIGR1ZUluRGF5c1N0cmluZyxcbn07XG4iLCJleHBvcnQgY29uc3QgZmlsdGVyQnlDb21wbGV0ZWQgPSAoaXRlbSkgPT4gaXRlbS5nZXRDb21wbGV0ZWRTdGF0dXMoKTtcblxuZXhwb3J0IGNvbnN0IGZpbHRlckJ5SW5Qcm9ncmVzcyA9IChpdGVtKSA9PiBpdGVtLmdldEluUHJvZ3Jlc3NTdGF0dXMoKTtcblxuZXhwb3J0IGNvbnN0IGZpbHRlckJ5Tm90U3RhcnRlZCA9IChpdGVtKSA9PlxuICAhaXRlbS5nZXRJblByb2dyZXNzU3RhdHVzKCkgJiYgIWl0ZW0uZ2V0Q29tcGxldGVkU3RhdHVzKCk7XG4iLCJjb25zdCBjcmVhdGVNb2RhbEhlYWRlciA9IChoZWFkZXJUZXh0LCBpbnRyb0ltZ1BhdGgsIGludHJvVGV4dCkgPT4ge1xuICBjb25zdCBtb2RhbEhlYWRlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgY29uc3QgbW9kYWxJbnRybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IG1vZGFsQ2FydG9vbkltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgY29uc3QgbW9kYWxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cbiAgbW9kYWxJbnRyby5jbGFzc0xpc3QuYWRkKFwibW9kYWwtaW50cm9cIik7XG4gIG1vZGFsVGV4dC5jbGFzc0xpc3QuYWRkKFwibW9kYWwtdGV4dFwiKTtcblxuICBoZWFkZXIudGV4dENvbnRlbnQgPSBoZWFkZXJUZXh0O1xuICBtb2RhbENhcnRvb25JbWFnZS5jbGFzc0xpc3QuYWRkKFwibW9kYWwtaW1nXCIpO1xuICBtb2RhbENhcnRvb25JbWFnZS5zcmMgPSBpbnRyb0ltZ1BhdGg7XG4gIG1vZGFsVGV4dC50ZXh0Q29udGVudCA9IGludHJvVGV4dDtcblxuICBtb2RhbEludHJvLmFwcGVuZENoaWxkKG1vZGFsQ2FydG9vbkltYWdlKTtcbiAgbW9kYWxJbnRyby5hcHBlbmRDaGlsZChtb2RhbFRleHQpO1xuXG4gIG1vZGFsSGVhZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlcik7XG4gIG1vZGFsSGVhZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKG1vZGFsSW50cm8pO1xuXG4gIHJldHVybiBtb2RhbEhlYWRlckNvbnRhaW5lcjtcbn07XG5cbmNvbnN0IGNyZWF0ZU1vZGFsRm9ybUVsZW1lbnQgPSAoXG4gIHR5cGUsXG4gIGlkLFxuICBsYWJlbFRleHQsXG4gIGlzUmVxdWlyZWQsXG4gIHBsYWNlSG9sZGVyID0gZmFsc2VcbikgPT4ge1xuICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXG4gIGxhYmVsLmZvciA9IGlkO1xuICBsYWJlbC50ZXh0Q29udGVudCA9IGxhYmVsVGV4dDtcbiAgaW5wdXQudHlwZSA9IHR5cGU7XG4gIGlucHV0LmlkID0gaWQ7XG4gIGlmIChwbGFjZUhvbGRlcikgaW5wdXQucGxhY2Vob2xkZXIgPSBwbGFjZUhvbGRlcjtcbiAgaWYgKGlzUmVxdWlyZWQpIGlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcblxuICB3cmFwcGVyLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgd3JhcHBlci5hcHBlbmRDaGlsZChpbnB1dCk7XG4gIHJldHVybiB7IHdyYXBwZXIsIGlucHV0IH07XG59O1xuXG5jb25zdCBjcmVhdGVDbG9zZU1vZGFsQnRuID0gKG1vZGFsVHlwZSkgPT4ge1xuICBjb25zdCBjbG9zZU1vZGFsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY2xvc2VNb2RhbEJ0bi5jbGFzc0xpc3QuYWRkKFwiY2xvc2UtYnRuXCIpO1xuICBjbG9zZU1vZGFsQnRuLmlubmVySFRNTCA9IFwiJnRpbWVzO1wiO1xuICBjbG9zZU1vZGFsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBjbG9zZU1vZGFsKG1vZGFsVHlwZSkpO1xuICByZXR1cm4gY2xvc2VNb2RhbEJ0bjtcbn07XG5cbmNvbnN0IGNsb3NlTW9kYWwgPSAobW9kYWxUeXBlKSA9PiB7XG4gIHJlbW92ZU1vZGFsKG1vZGFsVHlwZSk7XG4gIHJlbW92ZU92ZXJsYXkoKTtcbn07XG5cbmNvbnN0IGRpc3BsYXlNb2RhbCA9IChtb2RhbCkgPT4ge1xuICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKG1vZGFsKTtcbn07XG5cbmNvbnN0IHJlbW92ZU1vZGFsID0gKG1vZGFsVHlwZUNsYXNzKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihtb2RhbFR5cGVDbGFzcyk7XG4gIGlmIChtb2RhbCkge1xuICAgIGNvbnRlbnRDb250YWluZXIucmVtb3ZlQ2hpbGQobW9kYWwpO1xuICB9XG59O1xuXG5jb25zdCBhZGRPdmVybGF5ID0gKCkgPT4ge1xuICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwib3ZlcmxheVwiKTtcblxuICBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY2xvc2VNb2RhbChcIi5hZGQtdGFzay1tb2RhbFwiKTtcbiAgICBjbG9zZU1vZGFsKFwiLmFkZC1wcm9qZWN0LW1vZGFsXCIpO1xuICAgIGNsb3NlTW9kYWwoXCIuYXR0cmlidXRpb24tbW9kYWxcIik7XG4gIH0pO1xuXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3ZlcmxheSk7XG59O1xuXG5jb25zdCByZW1vdmVPdmVybGF5ID0gKCkgPT4ge1xuICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdmVybGF5XCIpO1xuICBpZiAob3ZlcmxheSkge1xuICAgIG92ZXJsYXkucmVtb3ZlKCk7XG4gIH1cbn07XG5leHBvcnQge1xuICBjcmVhdGVNb2RhbEhlYWRlcixcbiAgY3JlYXRlQ2xvc2VNb2RhbEJ0bixcbiAgY3JlYXRlTW9kYWxGb3JtRWxlbWVudCxcbiAgZGlzcGxheU1vZGFsLFxuICBjbG9zZU1vZGFsLFxuICBhZGRPdmVybGF5LFxuICByZW1vdmVPdmVybGF5LFxufTtcbiIsImNvbnN0IHJlYXJyYW5nZVRvZG9MaXN0ID0gKG9yaWdpbmFsVG9kb0xpc3QsIHNlbGVjdGVkT3B0aW9uKSA9PiB7XG4gIGlmIChzZWxlY3RlZE9wdGlvbiA9PT0gXCJwcmlvcml0eVwiKSB7XG4gICAgcmV0dXJuIG9yaWdpbmFsVG9kb0xpc3QuZ2V0UHJpb3JpdHlTb3J0ZWRMaXN0KCk7XG4gIH0gZWxzZSBpZiAoc2VsZWN0ZWRPcHRpb24gPT09IFwiZHVlLWRhdGVcIikge1xuICAgIHJldHVybiBvcmlnaW5hbFRvZG9MaXN0LmdldER1ZURhdGVTb3J0ZWRMaXN0KCk7XG4gIH0gZWxzZSBpZiAoc2VsZWN0ZWRPcHRpb24gPT09IFwiY29tcGxldGVkXCIpIHtcbiAgICByZXR1cm4gb3JpZ2luYWxUb2RvTGlzdC5nZXRDb21wbGV0ZWRGaWx0ZXJlZExpc3QoKTtcbiAgfSBlbHNlIGlmIChzZWxlY3RlZE9wdGlvbiA9PT0gXCJpbi1wcm9ncmVzc1wiKSB7XG4gICAgcmV0dXJuIG9yaWdpbmFsVG9kb0xpc3QuZ2V0SW5Qcm9ncmVzc0ZpbHRlcmVkTGlzdCgpO1xuICB9IGVsc2UgaWYgKHNlbGVjdGVkT3B0aW9uID09PSBcIm5vdC1zdGFydGVkXCIpIHtcbiAgICByZXR1cm4gb3JpZ2luYWxUb2RvTGlzdC5nZXROb3RTdGFydGVkRmlsdGVyZWRMaXN0KCk7XG4gIH1cbn07XG5cbmV4cG9ydCB7IHJlYXJyYW5nZVRvZG9MaXN0IH07XG4iLCJjb25zdCBnZXRSYW5kb21EYXRlU3RyaW5nID0gKGRheXNSYW5nZSkgPT4ge1xuICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gIGNvbnN0IHJhbmRvbURheXMgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBkYXlzUmFuZ2UgKyAxKTtcbiAgY29uc3QgaXNGdXR1cmUgPSBnZXRSYW5kb21Cb29sZWFuKCk7XG4gIGNvbnN0IG11bHRpcGxpZXIgPSBpc0Z1dHVyZSA/IDEgOiAtMTtcbiAgY29uc3QgdGFyZ2V0RGF0ZSA9IG5ldyBEYXRlKFxuICAgIHRvZGF5LmdldFRpbWUoKSArIG11bHRpcGxpZXIgKiByYW5kb21EYXlzICogMjQgKiA2MCAqIDYwICogMTAwMFxuICApO1xuICByZXR1cm4gdGFyZ2V0RGF0ZS50b0lTT1N0cmluZygpLnNwbGl0KFwiVFwiKVswXTtcbn07XG5cbmNvbnN0IGdldFJhbmRvbUJvb2xlYW4gPSAoKSA9PiB7XG4gIHJldHVybiBNYXRoLnJhbmRvbSgpIDwgMC41O1xufTtcblxuY29uc3Qgc2V0UmFuZG9tSXRlbVN0YXR1cyA9ICgpID0+IHtcbiAgY29uc3Qgc3RhdHVzT3B0aW9ucyA9IFtcInBlbmRpbmdcIiwgXCJpblByb2dyZXNzXCIsIFwiY29tcGxldGVcIl07XG4gIGNvbnN0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogc3RhdHVzT3B0aW9ucy5sZW5ndGgpO1xuICByZXR1cm4gc3RhdHVzT3B0aW9uc1tyYW5kb21JbmRleF07XG59O1xuXG5leHBvcnQgeyBnZXRSYW5kb21EYXRlU3RyaW5nLCBzZXRSYW5kb21JdGVtU3RhdHVzIH07XG4iLCJjb25zdCBzdGF0dXNUZXh0ID0gKHBlcmNlbnRhZ2UsIHN0YXR1cykgPT4ge1xuICBjb25zdCB0ZXh0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3Qgcm91bmRlZFBlcmNlbnRhZ2UgPSBNYXRoLnJvdW5kKHBlcmNlbnRhZ2UpO1xuXG4gIGlmIChyb3VuZGVkUGVyY2VudGFnZSA9PT0gMCkge1xuICAgIHRleHRDb250YWluZXIudGV4dENvbnRlbnQgPSBg8J+OiSBIb29yYXkhIFlvdSBoYXZlIG5vIHRhc2tzICR7c3RhdHVzfS5gO1xuICB9IGVsc2UgaWYgKHJvdW5kZWRQZXJjZW50YWdlID4gMCAmJiByb3VuZGVkUGVyY2VudGFnZSA8PSAyMCkge1xuICAgIHRleHRDb250YWluZXIudGV4dENvbnRlbnQgPSBg8J+RjCBKdXN0ICR7cm91bmRlZFBlcmNlbnRhZ2V9JSBvZiB5b3VyIHRhc2tzIGFyZSAke3N0YXR1c30uIExldCdzIGZpeCB0aGF0IWA7XG4gIH0gZWxzZSBpZiAocm91bmRlZFBlcmNlbnRhZ2UgPiAyMCAmJiByb3VuZGVkUGVyY2VudGFnZSA8PSA0MCkge1xuICAgIHRleHRDb250YWluZXIudGV4dENvbnRlbnQgPSBg8J+nkCAke3JvdW5kZWRQZXJjZW50YWdlfSUgb2YgeW91ciB0YXNrcyBhcmUgJHtzdGF0dXN9LiBBIGxpdHRsZSBmb2N1cyBhbmQgeW91J2xsIGNsZWFyIHRoZW0gdXAhYDtcbiAgfSBlbHNlIGlmIChyb3VuZGVkUGVyY2VudGFnZSA+IDQwICYmIHJvdW5kZWRQZXJjZW50YWdlIDw9IDYwKSB7XG4gICAgdGV4dENvbnRhaW5lci50ZXh0Q29udGVudCA9IGDwn5iFICR7cm91bmRlZFBlcmNlbnRhZ2V9JSBvZiB5b3VyIHRhc2tzIGFyZSAke3N0YXR1c30uIFRpbWUgdG8gd29yayBoYXJkIWA7XG4gIH0gZWxzZSBpZiAocm91bmRlZFBlcmNlbnRhZ2UgPiA2MCAmJiByb3VuZGVkUGVyY2VudGFnZSA8PSA4MCkge1xuICAgIHRleHRDb250YWluZXIudGV4dENvbnRlbnQgPSBg8J+YnyAke3JvdW5kZWRQZXJjZW50YWdlfSUgb2YgeW91ciB0YXNrcyBhcmUgJHtzdGF0dXN9LiBMZXQncyB0YWNrbGUgdGhlbSBvbmUgYnkgb25lIWA7XG4gIH0gZWxzZSBpZiAocm91bmRlZFBlcmNlbnRhZ2UgPiA4MCAmJiByb3VuZGVkUGVyY2VudGFnZSA8IDEwMCkge1xuICAgIHRleHRDb250YWluZXIudGV4dENvbnRlbnQgPSBg8J+YsCAke3JvdW5kZWRQZXJjZW50YWdlfSUgb2YgeW91ciB0YXNrcyBhcmUgJHtzdGF0dXN9LiBBbG1vc3QgZXZlcnl0aGluZyBpcyAke3N0YXR1c30sIGxldCdzIGdldCBjcmFja2luZyFgO1xuICB9IGVsc2UgaWYgKHJvdW5kZWRQZXJjZW50YWdlID09PSAxMDApIHtcbiAgICB0ZXh0Q29udGFpbmVyLnRleHRDb250ZW50ID0gYPCfmqggWWlrZXMhIEFsbCB5b3VyIHRhc2tzIGFyZSAke3N0YXR1c30uIExldCdzIGRpdmUgaW4gYW5kIHN0YXJ0IGtub2NraW5nIHRoZW0gb3V0IWA7XG4gIH1cblxuICByZXR1cm4gdGV4dENvbnRhaW5lcjtcbn07XG5leHBvcnQgeyBzdGF0dXNUZXh0IH07XG4iLCJleHBvcnQgY29uc3Qgc29ydEJ5RHVlRGF0ZSA9IChhLCBiKSA9PiB7XG4gIHJldHVybiBhLmdldER1ZURhdGUoKSAtIGIuZ2V0RHVlRGF0ZSgpO1xufTtcblxuZXhwb3J0IGNvbnN0IHNvcnRCeVByaW9yaXR5ID0gKGEsIGIpID0+IHtcbiAgcmV0dXJuIGIuZ2V0UHJpb3JpdHlTdGF0dXMoKSAtIGEuZ2V0UHJpb3JpdHlTdGF0dXMoKTtcbn07XG4iLCJjb25zdCBwcm9qZWN0ID0gKG5hbWUsIGltYWdlUGF0aCwgdG9kb0xpc3QpID0+ICh7XG4gIG5hbWUsXG4gIGltYWdlUGF0aCxcbiAgdG9kb0xpc3QsXG5cbiAgdXBkYXRlTmFtZShuZXdOYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmV3TmFtZTtcbiAgfSxcblxuICB1cGRhdGVJbWFnZShuZXdJbWFnZSkge1xuICAgIHRoaXMuaW1hZ2VQYXRoID0gbmV3SW1hZ2U7XG4gIH0sXG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9LFxuXG4gIGdldEltYWdlUGF0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbWFnZVBhdGg7XG4gIH0sXG5cbiAgZ2V0VG9kb0xpc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9kb0xpc3Q7XG4gIH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgcHJvamVjdDtcbiIsImltcG9ydCB7IGRpZmZlcmVuY2VJbkRheXMgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCB7IHNvcnRCeUR1ZURhdGUgfSBmcm9tIFwiLi4vaGVscGVycy9zb3J0aW5nLmpzXCI7XG5cbmNvbnN0IHByb2plY3RMaXN0ID0gKCkgPT4gKHtcbiAgcHJvamVjdExpc3Q6IFtdLFxuXG4gIGFkZFByb2plY3QocHJvamVjdCkge1xuICAgIHRoaXMucHJvamVjdExpc3QucHVzaChwcm9qZWN0KTtcbiAgfSxcblxuICByZW1vdmVQcm9qZWN0KHByb2plY3QpIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMucHJvamVjdExpc3QuaW5kZXhPZihwcm9qZWN0KTtcbiAgICB0aGlzLnByb2plY3RMaXN0LnNwbGljZShpbmRleCwgMSk7XG4gIH0sXG5cbiAgZ2V0UHJvamVjdHMoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvamVjdExpc3Q7XG4gIH0sXG5cbiAgdG90YWxDb21wbGV0ZWRUYXNrc1BlcmNlbnRhZ2UoKSB7XG4gICAgcmV0dXJuICh0aGlzLmNhbGN1bGF0ZUNvbXBsZXRlZFRhc2tzKCkgLyB0aGlzLmNhbGN1bGF0ZVRvdGFsVGFza3MoKSkgKiAxMDA7XG4gIH0sXG5cbiAgdG90YWxOb3RTdGFydGVkVGFza3NQZXJjZW50YWdlKCkge1xuICAgIHJldHVybiAodGhpcy5jYWxjdWxhdGVOb3RTdGFydGVkVGFza3MoKSAvIHRoaXMuY2FsY3VsYXRlVG90YWxUYXNrcygpKSAqIDEwMDtcbiAgfSxcblxuICB0b3RhbEluUHJvZ3Jlc3NUYXNrc1BlcmNlbnRhZ2UoKSB7XG4gICAgcmV0dXJuICh0aGlzLmNhbGN1bGF0ZUluUHJvZ3Jlc3NUYXNrcygpIC8gdGhpcy5jYWxjdWxhdGVUb3RhbFRhc2tzKCkpICogMTAwO1xuICB9LFxuXG4gIHRvdGFsT3ZlcmR1ZVRhc2tzUGVyY2VudGFnZSgpIHtcbiAgICByZXR1cm4gKHRoaXMuZ2V0T3ZlcmR1ZVRhc2tzKCkubGVuZ3RoIC8gdGhpcy5jYWxjdWxhdGVUb3RhbFRhc2tzKCkpICogMTAwO1xuICB9LFxuXG4gIGNhbGN1bGF0ZVRvdGFsVGFza3MoKSB7XG4gICAgbGV0IHRvdGFsVGFza3MgPSAwO1xuICAgIHRoaXMucHJvamVjdExpc3QuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgY29uc3QgdG9kb0xpc3QgPSBwcm9qZWN0LmdldFRvZG9MaXN0KCk7XG4gICAgICB0b3RhbFRhc2tzICs9IHRvZG9MaXN0LmdldFRvZG9JdGVtcygpLmxlbmd0aDtcbiAgICB9KTtcbiAgICByZXR1cm4gdG90YWxUYXNrcztcbiAgfSxcblxuICBjYWxjdWxhdGVDb21wbGV0ZWRUYXNrcygpIHtcbiAgICBsZXQgY29tcGxldGVkVGFza3MgPSAwO1xuICAgIHRoaXMucHJvamVjdExpc3QuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgY29uc3QgdG9kb0xpc3QgPSBwcm9qZWN0LmdldFRvZG9MaXN0KCk7XG4gICAgICBjb21wbGV0ZWRUYXNrcyArPSB0b2RvTGlzdC5nZXRDb21wbGV0ZWRGaWx0ZXJlZExpc3QoKS5sZW5ndGg7XG4gICAgfSk7XG4gICAgcmV0dXJuIGNvbXBsZXRlZFRhc2tzO1xuICB9LFxuXG4gIGNhbGN1bGF0ZU5vdFN0YXJ0ZWRUYXNrcygpIHtcbiAgICBsZXQgbm90U3RhcnRlZFRhc2tzID0gMDtcbiAgICB0aGlzLnByb2plY3RMaXN0LmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgIGNvbnN0IHRvZG9MaXN0ID0gcHJvamVjdC5nZXRUb2RvTGlzdCgpO1xuICAgICAgbm90U3RhcnRlZFRhc2tzICs9IHRvZG9MaXN0LmdldE5vdFN0YXJ0ZWRGaWx0ZXJlZExpc3QoKS5sZW5ndGg7XG4gICAgfSk7XG4gICAgcmV0dXJuIG5vdFN0YXJ0ZWRUYXNrcztcbiAgfSxcblxuICBjYWxjdWxhdGVJblByb2dyZXNzVGFza3MoKSB7XG4gICAgbGV0IGluUHJvZ3Jlc3NUYXNrcyA9IDA7XG4gICAgdGhpcy5wcm9qZWN0TGlzdC5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICBjb25zdCB0b2RvTGlzdCA9IHByb2plY3QuZ2V0VG9kb0xpc3QoKTtcbiAgICAgIGluUHJvZ3Jlc3NUYXNrcyArPSB0b2RvTGlzdC5nZXRJblByb2dyZXNzRmlsdGVyZWRMaXN0KCkubGVuZ3RoO1xuICAgIH0pO1xuICAgIHJldHVybiBpblByb2dyZXNzVGFza3M7XG4gIH0sXG5cbiAgZ2V0VGFza3NCeUR1ZURhdGVDb25kaXRpb24oY29uZGl0aW9uLCBkYXlzVGhyZXNob2xkID0gMzApIHtcbiAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgZmlsdGVyZWRUYXNrcyA9IFtdO1xuXG4gICAgdGhpcy5wcm9qZWN0TGlzdC5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICBjb25zdCB0b2RvTGlzdCA9IHByb2plY3QuZ2V0VG9kb0xpc3QoKTtcbiAgICAgIGNvbnN0IG5vdFN0YXJ0ZWRUYXNrcyA9IHRvZG9MaXN0LmdldE5vdFN0YXJ0ZWRGaWx0ZXJlZExpc3QoKTtcbiAgICAgIGNvbnN0IGluUHJvZ3Jlc3NUYXNrcyA9IHRvZG9MaXN0LmdldEluUHJvZ3Jlc3NGaWx0ZXJlZExpc3QoKTtcbiAgICAgIGNvbnN0IGFsbFJlbGV2YW50VGFza3MgPSBbLi4ubm90U3RhcnRlZFRhc2tzLCAuLi5pblByb2dyZXNzVGFza3NdO1xuXG4gICAgICBjb25zdCB0YXNrc01hdGNoaW5nQ29uZGl0aW9uID0gYWxsUmVsZXZhbnRUYXNrcy5maWx0ZXIoKHRhc2spID0+IHtcbiAgICAgICAgY29uc3QgZHVlRGF0ZSA9IHRhc2suZ2V0RHVlRGF0ZSgpO1xuICAgICAgICBjb25zdCBkYXlzRGlmZiA9IGRpZmZlcmVuY2VJbkRheXMoZHVlRGF0ZSwgY3VycmVudERhdGUpO1xuICAgICAgICByZXR1cm4gY29uZGl0aW9uKGRheXNEaWZmLCBkYXlzVGhyZXNob2xkKTtcbiAgICAgIH0pO1xuXG4gICAgICB0YXNrc01hdGNoaW5nQ29uZGl0aW9uLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgZmlsdGVyZWRUYXNrcy5wdXNoKHsgdGFzaywgcHJvamVjdCB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGZpbHRlcmVkVGFza3Muc29ydCh0aGlzLnNvcnRUYXNrc0J5RHVlRGF0ZSk7XG4gICAgcmV0dXJuIGZpbHRlcmVkVGFza3M7XG4gIH0sXG5cbiAgZ2V0RHVlU29vblRhc2tzKGRheXNUaHJlc2hvbGQgPSAzMCkge1xuICAgIHJldHVybiB0aGlzLmdldFRhc2tzQnlEdWVEYXRlQ29uZGl0aW9uKFxuICAgICAgKGRheXNEaWZmLCB0aHJlc2hvbGQpID0+IGRheXNEaWZmIDw9IHRocmVzaG9sZCAmJiBkYXlzRGlmZiA+PSAwLFxuICAgICAgZGF5c1RocmVzaG9sZFxuICAgICk7XG4gIH0sXG5cbiAgZ2V0T3ZlcmR1ZVRhc2tzKCkge1xuICAgIHJldHVybiB0aGlzLmdldFRhc2tzQnlEdWVEYXRlQ29uZGl0aW9uKChkYXlzRGlmZikgPT4gZGF5c0RpZmYgPCAwKTtcbiAgfSxcblxuICBzb3J0VGFza3NCeUR1ZURhdGUoYSwgYikge1xuICAgIHJldHVybiBzb3J0QnlEdWVEYXRlKGEudGFzaywgYi50YXNrKTtcbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0TGlzdDtcbiIsImNvbnN0IHRvZG9JdGVtID0gKFxuICB0aXRsZSxcbiAgZGVzY3JpcHRpb24sXG4gIGR1ZURhdGUsXG4gIHByaW9yaXR5LFxuICBzdGF0dXMgPSBcInBlbmRpbmdcIlxuKSA9PiAoe1xuICB0aXRsZSxcbiAgZGVzY3JpcHRpb24sXG4gIGR1ZURhdGU6IG5ldyBEYXRlKGR1ZURhdGUpLFxuICBwcmlvcml0eTogcHJpb3JpdHlNYXBbcHJpb3JpdHkudG9Mb3dlckNhc2UoKV0sXG4gIGluUHJvZ3Jlc3M6IHN0YXR1c01hcFtzdGF0dXNdLmluUHJvZ3Jlc3MsXG4gIGNvbXBsZXRlZDogc3RhdHVzTWFwW3N0YXR1c10uY29tcGxldGVkLFxuICBzdGF0dXMsXG5cbiAgdG9nZ2xlQ29tcGxldGUoKSB7XG4gICAgdGhpcy5jb21wbGV0ZWQgPSAhdGhpcy5jb21wbGV0ZWQ7XG5cbiAgICBpZiAodGhpcy5jb21wbGV0ZWQgJiYgdGhpcy5pblByb2dyZXNzKSB7XG4gICAgICB0aGlzLmluUHJvZ3Jlc3MgPSBmYWxzZTtcbiAgICB9XG4gIH0sXG5cbiAgdG9nZ2xlSW5Qcm9ncmVzcygpIHtcbiAgICB0aGlzLmluUHJvZ3Jlc3MgPSAhdGhpcy5pblByb2dyZXNzO1xuXG4gICAgaWYgKHRoaXMuaW5Qcm9ncmVzcyAmJiB0aGlzLmNvbXBsZXRlZCkge1xuICAgICAgdGhpcy5jb21wbGV0ZWQgPSBmYWxzZTtcbiAgICB9XG4gIH0sXG5cbiAgdXBkYXRlVGl0bGUobmV3VGl0bGUpIHtcbiAgICB0aGlzLnRpdGxlID0gbmV3VGl0bGU7XG4gIH0sXG5cbiAgdXBkYXRlRGVzY3JpcHRpb24obmV3RGVzY3JpcHRpb24pIHtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XG4gIH0sXG5cbiAgdXBkYXRlUHJpb3JpdHkobmV3UHJpb3JpdHkpIHtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHlNYXBbbmV3UHJpb3JpdHkudG9Mb3dlckNhc2UoKV07XG4gIH0sXG5cbiAgdXBkYXRlRHVlRGF0ZShuZXdEdWVEYXRlKSB7XG4gICAgdGhpcy5kdWVEYXRlID0gbmV3RHVlRGF0ZTtcbiAgfSxcblxuICB1cGRhdGVTdGF0dXMoKSB7XG4gICAgY29uc3QgY3VycmVudFN0YXR1cyA9IHtcbiAgICAgIGluUHJvZ3Jlc3M6IHRoaXMuZ2V0SW5Qcm9ncmVzc1N0YXR1cygpLFxuICAgICAgY29tcGxldGVkOiB0aGlzLmdldENvbXBsZXRlZFN0YXR1cygpLFxuICAgIH07XG5cbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhzdGF0dXNNYXApKSB7XG4gICAgICBpZiAoXG4gICAgICAgIHZhbHVlLmluUHJvZ3Jlc3MgPT09IGN1cnJlbnRTdGF0dXMuaW5Qcm9ncmVzcyAmJlxuICAgICAgICB2YWx1ZS5jb21wbGV0ZWQgPT09IGN1cnJlbnRTdGF0dXMuY29tcGxldGVkXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBrZXk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgZ2V0VGl0bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudGl0bGU7XG4gIH0sXG5cbiAgZ2V0RGVzY3JpcHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb247XG4gIH0sXG5cbiAgZ2V0RHVlRGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kdWVEYXRlO1xuICB9LFxuXG4gIGdldFByaW9yaXR5U3RhdHVzKCkge1xuICAgIHJldHVybiB0aGlzLnByaW9yaXR5O1xuICB9LFxuXG4gIGdldFByaW9yaXR5U3RyaW5nU3RhdHVzKGludFZhbHVlKSB7XG4gICAgZm9yIChjb25zdCBbcHJpb3JpdHlTdHJpbmdWYWx1ZSwgcHJpb3JpdHlJbnRWYWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoXG4gICAgICBwcmlvcml0eU1hcFxuICAgICkpIHtcbiAgICAgIGlmIChwcmlvcml0eUludFZhbHVlID09PSBpbnRWYWx1ZSkge1xuICAgICAgICByZXR1cm4gcHJpb3JpdHlTdHJpbmdWYWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgZ2V0SW5Qcm9ncmVzc1N0YXR1cygpIHtcbiAgICByZXR1cm4gdGhpcy5pblByb2dyZXNzO1xuICB9LFxuXG4gIGdldENvbXBsZXRlZFN0YXR1cygpIHtcbiAgICByZXR1cm4gdGhpcy5jb21wbGV0ZWQ7XG4gIH0sXG5cbiAgZ2V0U3RhdHVzKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXR1cztcbiAgfSxcbn0pO1xuXG5jb25zdCBwcmlvcml0eU1hcCA9IHtcbiAgbG93OiAxLFxuICBtZWRpdW06IDIsXG4gIGhpZ2g6IDMsXG59O1xuXG5jb25zdCBzdGF0dXNNYXAgPSB7XG4gIHBlbmRpbmc6IHsgaW5Qcm9ncmVzczogZmFsc2UsIGNvbXBsZXRlZDogZmFsc2UgfSxcbiAgaW5Qcm9ncmVzczogeyBpblByb2dyZXNzOiB0cnVlLCBjb21wbGV0ZWQ6IGZhbHNlIH0sXG4gIGNvbXBsZXRlOiB7IGluUHJvZ3Jlc3M6IGZhbHNlLCBjb21wbGV0ZWQ6IHRydWUgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRvZG9JdGVtO1xuIiwiaW1wb3J0IHtcbiAgZmlsdGVyQnlDb21wbGV0ZWQsXG4gIGZpbHRlckJ5SW5Qcm9ncmVzcyxcbiAgZmlsdGVyQnlOb3RTdGFydGVkLFxufSBmcm9tIFwiLi4vaGVscGVycy9maWx0ZXIuanNcIjtcblxuaW1wb3J0IHsgc29ydEJ5RHVlRGF0ZSwgc29ydEJ5UHJpb3JpdHkgfSBmcm9tIFwiLi4vaGVscGVycy9zb3J0aW5nLmpzXCI7XG5cbmNvbnN0IHRvZG9MaXN0ID0gKCkgPT4gKHtcbiAgdG9kb0xpc3Q6IFtdLFxuICBjb21wbGV0ZWRQZXJjZW50YWdlOiAwLFxuICBpblByb2dyZXNzUGVyY2VudGFnZTogMCxcbiAgbm90U3RhcnRlZFBlcmNlbnRhZ2U6IDAsXG5cbiAgYWRkVG9kb0l0ZW0oaXRlbSkge1xuICAgIHRoaXMudG9kb0xpc3QucHVzaChpdGVtKTtcbiAgICB0aGlzLmNhbGN1bGF0ZVBlcmNlbnRhZ2VzKCk7XG4gIH0sXG5cbiAgYWRkSXRlbVRvRnJvbnQoaXRlbSkge1xuICAgIHRoaXMudG9kb0xpc3QudW5zaGlmdChpdGVtKTtcbiAgICB0aGlzLmNhbGN1bGF0ZVBlcmNlbnRhZ2VzKCk7XG4gIH0sXG5cbiAgcmVtb3ZlVG9kb0l0ZW0oaXRlbSkge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy50b2RvTGlzdC5pbmRleE9mKGl0ZW0pO1xuICAgIHRoaXMudG9kb0xpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICB0aGlzLmNhbGN1bGF0ZVBlcmNlbnRhZ2VzKCk7XG4gIH0sXG5cbiAgc29ydEl0ZW1zKHNvcnRGdW5jdGlvbikge1xuICAgIGNvbnN0IHNvcnRlZExpc3QgPSBbLi4udGhpcy50b2RvTGlzdF07XG4gICAgc29ydGVkTGlzdC5zb3J0KHNvcnRGdW5jdGlvbik7XG4gICAgcmV0dXJuIHNvcnRlZExpc3Q7XG4gIH0sXG5cbiAgZmlsdGVySXRlbXMoZmlsdGVyRnVuY3Rpb24pIHtcbiAgICBjb25zdCBmaWx0ZXJlZExpc3QgPSB0aGlzLnRvZG9MaXN0LmZpbHRlcihmaWx0ZXJGdW5jdGlvbik7XG4gICAgcmV0dXJuIGZpbHRlcmVkTGlzdDtcbiAgfSxcblxuICBnZXRUb2RvSXRlbXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9kb0xpc3Q7XG4gIH0sXG5cbiAgZ2V0RHVlRGF0ZVNvcnRlZExpc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuc29ydEl0ZW1zKHNvcnRCeUR1ZURhdGUpO1xuICB9LFxuXG4gIGdldFByaW9yaXR5U29ydGVkTGlzdCgpIHtcbiAgICByZXR1cm4gdGhpcy5zb3J0SXRlbXMoc29ydEJ5UHJpb3JpdHkpO1xuICB9LFxuXG4gIGdldENvbXBsZXRlZEZpbHRlcmVkTGlzdCgpIHtcbiAgICByZXR1cm4gdGhpcy5maWx0ZXJJdGVtcyhmaWx0ZXJCeUNvbXBsZXRlZCk7XG4gIH0sXG5cbiAgZ2V0SW5Qcm9ncmVzc0ZpbHRlcmVkTGlzdCgpIHtcbiAgICByZXR1cm4gdGhpcy5maWx0ZXJJdGVtcyhmaWx0ZXJCeUluUHJvZ3Jlc3MpO1xuICB9LFxuXG4gIGdldE5vdFN0YXJ0ZWRGaWx0ZXJlZExpc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsdGVySXRlbXMoZmlsdGVyQnlOb3RTdGFydGVkKTtcbiAgfSxcblxuICBnZXRDb21wbGV0ZWRQZXJjZW50YWdlKCkge1xuICAgIHJldHVybiB0aGlzLmNvbXBsZXRlZFBlcmNlbnRhZ2U7XG4gIH0sXG5cbiAgZ2V0SW5Qcm9ncmVzc1BlcmNlbnRhZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5Qcm9ncmVzc1BlcmNlbnRhZ2U7XG4gIH0sXG5cbiAgZ2V0Tm90U3RhcnRlZFBlcmNlbnRhZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMubm90U3RhcnRlZFBlcmNlbnRhZ2U7XG4gIH0sXG5cbiAgY2FsY3VsYXRlUGVyY2VudGFnZXMoKSB7XG4gICAgY29uc3QgY29tcGxldGVkSXRlbXMgPSB0aGlzLmZpbHRlckl0ZW1zKGZpbHRlckJ5Q29tcGxldGVkKTtcbiAgICBjb25zdCBpblByb2dyZXNzSXRlbXMgPSB0aGlzLmZpbHRlckl0ZW1zKGZpbHRlckJ5SW5Qcm9ncmVzcyk7XG4gICAgY29uc3Qgbm90U3RhcnRlZEl0ZW1zID0gdGhpcy5maWx0ZXJJdGVtcyhmaWx0ZXJCeU5vdFN0YXJ0ZWQpO1xuXG4gICAgY29uc3QgdG90YWxJdGVtcyA9IHRoaXMudG9kb0xpc3QubGVuZ3RoO1xuICAgIGNvbnN0IGNhbGN1bGF0ZVBlcmNlbnQgPSAoY291bnQpID0+XG4gICAgICB0b3RhbEl0ZW1zID09PSAwID8gMCA6IChjb3VudCAvIHRvdGFsSXRlbXMpICogMTAwO1xuXG4gICAgdGhpcy5jb21wbGV0ZWRQZXJjZW50YWdlID0gY2FsY3VsYXRlUGVyY2VudChjb21wbGV0ZWRJdGVtcy5sZW5ndGgpO1xuICAgIHRoaXMuaW5Qcm9ncmVzc1BlcmNlbnRhZ2UgPSBjYWxjdWxhdGVQZXJjZW50KGluUHJvZ3Jlc3NJdGVtcy5sZW5ndGgpO1xuICAgIHRoaXMubm90U3RhcnRlZFBlcmNlbnRhZ2UgPSBjYWxjdWxhdGVQZXJjZW50KG5vdFN0YXJ0ZWRJdGVtcy5sZW5ndGgpO1xuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHRvZG9MaXN0O1xuIiwiaW1wb3J0IHsgY3JlYXRlUHJvamVjdFBhZ2UgfSBmcm9tIFwiLi9wcm9qZWN0UGFnZS5qc1wiO1xuaW1wb3J0IHtcbiAgY3JlYXRlUGFnZUhlYWRlcixcbiAgY3JlYXRlQWxsUHJvamVjdFBhZ2VIZWFkZXJJbWcsXG59IGZyb20gXCIuLi91aS9jcmVhdGVUaXRsZS5qc1wiO1xuaW1wb3J0IHsgY3JlYXRlQWRkUHJvamVjdEJ0biB9IGZyb20gXCIuLi91aS9jcmVhdGVBZGRQcm9qZWN0QnRuLmpzXCI7XG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0TGlzdEZyb21EYXRhIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3Byb2plY3RMaXN0RmFjdG9yeS5qc1wiO1xuaW1wb3J0IHtcbiAgY3JlYXRlUmVtb3ZlUHJvamVjdEJ0bixcbiAgZGlzcGxheVJlbW92ZUJ0bixcbiAgaGlkZVJlbW92ZUJ0bixcbn0gZnJvbSBcIi4uL3VpL2NyZWF0ZVJlbW92ZUJ0bi5qc1wiO1xuXG5jb25zdCBjcmVhdGVBbGxQcm9qZWN0c1BhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG4gIGNvbnN0IHRpdGxlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wYWdlLXRpdGxlXCIpO1xuXG4gIGNvbnN0IGRhc2hib2FyZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRhc2hib2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChyZW5kZXJQcm9qZWN0TGlzdCgpKTtcblxuICB0aXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVQYWdlSGVhZGVyKFwiQWxsIFByb2plY3RzXCIpKTtcbiAgdGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlQWxsUHJvamVjdFBhZ2VIZWFkZXJJbWcoKSk7XG4gIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoZGFzaGJvYXJkQ29udGFpbmVyKTtcbn07XG5cbmNvbnN0IHJlbmRlclByb2plY3RMaXN0ID0gKCkgPT4ge1xuICBjb25zdCBhbGxQcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGFsbFByb2plY3RzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJkYXNoYm9hcmQtYWxsLXByb2plY3RzXCIpO1xuICBhbGxQcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVBZGRQcm9qZWN0QnRuKCkpO1xuXG4gIGNvbnN0IHByb2plY3RMaXN0ID0gY3JlYXRlUHJvamVjdExpc3RGcm9tRGF0YSgpO1xuICBjb25zdCBwcm9qZWN0cyA9IGNyZWF0ZVByb2plY3RMaXN0RnJvbURhdGEoKS5nZXRQcm9qZWN0cygpO1xuXG4gIHByb2plY3RzLmZvckVhY2goKHByb2plY3REYXRhKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdERpc3BsYXkgPSBjcmVhdGVQcm9qZWN0RGlzcGxheUJveChwcm9qZWN0RGF0YSwgcHJvamVjdExpc3QpO1xuICAgIGFsbFByb2plY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3REaXNwbGF5KTtcbiAgfSk7XG5cbiAgcmV0dXJuIGFsbFByb2plY3RzQ29udGFpbmVyO1xufTtcblxuY29uc3QgY3JlYXRlUHJvamVjdERpc3BsYXlCb3ggPSAocHJvamVjdCwgcHJvamVjdExpc3QpID0+IHtcbiAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHByb2plY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3QtYm94XCIpO1xuICBjb25zdCBwcm9qZWN0TmFtZSA9IHByb2plY3QuZ2V0TmFtZSgpO1xuICBjb25zdCBwcm9qZWN0UGF0aCA9IHByb2plY3QuZ2V0SW1hZ2VQYXRoKCk7XG4gIGNvbnN0IHByb2plY3RQZXJjZW50Q29tcGxldGUgPSBwcm9qZWN0LmdldFRvZG9MaXN0KCkuZ2V0Q29tcGxldGVkUGVyY2VudGFnZSgpO1xuXG4gIGNvbnN0IHByb2plY3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDVcIik7XG4gIGNvbnN0IHByb2plY3RJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cbiAgcHJvamVjdEhlYWRlci50ZXh0Q29udGVudCA9IHByb2plY3ROYW1lO1xuXG4gIGlmIChwcm9qZWN0UGF0aC5zdGFydHNXaXRoKFwiZGF0YTppbWFnZS9cIikpIHtcbiAgICBwcm9qZWN0SW1hZ2Uuc3JjID0gcHJvamVjdFBhdGg7XG4gIH0gZWxzZSB7XG4gICAgcHJvamVjdEltYWdlLnNyYyA9IHJlcXVpcmUoYC4uL2Fzc2V0cy9pbWFnZXMvJHtwcm9qZWN0UGF0aH1gKTtcbiAgfVxuXG4gIHByb2plY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3QtYm94XCIpO1xuICBwcm9qZWN0SW1hZ2UuY2xhc3NMaXN0LmFkZChcInByb2plY3QtaW1nXCIpO1xuXG4gIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlUmVtb3ZlUHJvamVjdEJ0bihwcm9qZWN0LCBwcm9qZWN0TGlzdCkpO1xuICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RIZWFkZXIpO1xuICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RJbWFnZSk7XG4gIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlUHJvZ3Jlc3NCYXIocHJvamVjdFBlcmNlbnRDb21wbGV0ZSkpO1xuXG4gIHByb2plY3RDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PiB7XG4gICAgZGlzcGxheVJlbW92ZUJ0bihwcm9qZWN0Q29udGFpbmVyLCBcInJlbW92ZS1wcm9qZWN0LWJ0blwiKTtcbiAgfSk7XG5cbiAgcHJvamVjdENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgKCkgPT4ge1xuICAgIGhpZGVSZW1vdmVCdG4ocHJvamVjdENvbnRhaW5lciwgXCJyZW1vdmUtcHJvamVjdC1idG5cIik7XG4gIH0pO1xuXG4gIHByb2plY3RDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+XG4gICAgY3JlYXRlUHJvamVjdFBhZ2UocHJvamVjdCwgY3JlYXRlQWxsUHJvamVjdHNQYWdlKVxuICApO1xuXG4gIHJldHVybiBwcm9qZWN0Q29udGFpbmVyO1xufTtcblxuY29uc3QgY3JlYXRlUHJvZ3Jlc3NCYXIgPSAocGVyY2VudENvbXBsZXRlZCkgPT4ge1xuICBjb25zdCBwcm9ncmVzc0JhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGNvbXBsZXRlQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgcHJvZ3Jlc3NCYXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cbiAgcHJvZ3Jlc3NCYXIuY2xhc3NMaXN0LmFkZChcInByb2dyZXNzLWJhclwiKTtcbiAgY29tcGxldGVCYXIuY2xhc3NMaXN0LmFkZChcInByb2dyZXNzLWJhci1jb21wbGV0ZWRcIik7XG4gIHByb2dyZXNzQmFyVGV4dC5jbGFzc0xpc3QuYWRkKFwicHJvZ3Jlc3MtYmFyLXRleHRcIik7XG5cbiAgcHJvZ3Jlc3NCYXIuYXBwZW5kQ2hpbGQoY29tcGxldGVCYXIpO1xuICBwcm9ncmVzc0Jhci5hcHBlbmRDaGlsZChwcm9ncmVzc0JhclRleHQpO1xuXG4gIHVwZGF0ZVByb2dyZXNzQmFyKHBlcmNlbnRDb21wbGV0ZWQsIHByb2dyZXNzQmFyKTtcbiAgcmV0dXJuIHByb2dyZXNzQmFyO1xufTtcblxuY29uc3QgdXBkYXRlUHJvZ3Jlc3NCYXIgPSAocGVyY2VudENvbXBsZXRlZCwgcHJvZ3Jlc3NCYXIpID0+IHtcbiAgY29uc3QgcHJvZ3Jlc3NCYXJDb21wbGV0ZWQgPSBwcm9ncmVzc0Jhci5xdWVyeVNlbGVjdG9yKFxuICAgIFwiLnByb2dyZXNzLWJhci1jb21wbGV0ZWRcIlxuICApO1xuICBjb25zdCBwcm9ncmVzc0JhclRleHQgPSBwcm9ncmVzc0Jhci5xdWVyeVNlbGVjdG9yKFwiLnByb2dyZXNzLWJhci10ZXh0XCIpO1xuXG4gIGlmIChwcm9ncmVzc0JhckNvbXBsZXRlZCkge1xuICAgIHByb2dyZXNzQmFyQ29tcGxldGVkLnN0eWxlLndpZHRoID0gYCR7cGVyY2VudENvbXBsZXRlZH0lYDtcbiAgICBwcm9ncmVzc0JhclRleHQudGV4dENvbnRlbnQgPSBgJHtwZXJjZW50Q29tcGxldGVkLnRvRml4ZWQoMCl9JSBDb21wbGV0ZWRgO1xuICB9XG59O1xuXG5leHBvcnQgeyBjcmVhdGVBbGxQcm9qZWN0c1BhZ2UsIHJlbmRlclByb2plY3RMaXN0IH07XG4iLCJpbXBvcnQge1xuICBjcmVhdGVQYWdlSGVhZGVyLFxuICBjcmVhdGVQcm9qZWN0UGFnZUhlYWRlckltZyxcbn0gZnJvbSBcIi4uL3VpL2NyZWF0ZVRpdGxlLmpzXCI7XG5pbXBvcnQgeyBjcmVhdGVIb21lUGFnZURhc2hib2FyZCB9IGZyb20gXCIuLi91aS9jcmVhdGVDb250ZW50LmpzXCI7XG5cbmNvbnN0IGNyZWF0ZUhvbWVQYWdlID0gKCkgPT4ge1xuICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuICBjb25zdCB0aXRsZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGFnZS10aXRsZVwiKTtcbiAgY29uc3QgZGFzaGJvYXJkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBkYXNoYm9hcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlSG9tZVBhZ2VEYXNoYm9hcmQoKSk7XG4gIHRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZVBhZ2VIZWFkZXIoXCJIb21lXCIpKTtcbiAgdGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlUHJvamVjdFBhZ2VIZWFkZXJJbWcoXCJraXR0ZW4tc2l0dGluZy5wbmdcIikpO1xuICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGRhc2hib2FyZENvbnRhaW5lcik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVIb21lUGFnZTtcbiIsImltcG9ydCB7IGNsZWFyQ29udGVudFRpdGxlRGlzcGxheSB9IGZyb20gXCIuLi91aS9jbGVhckRpc3BsYXkuanNcIjtcbmltcG9ydCB7XG4gIGNyZWF0ZVBhZ2VIZWFkZXIsXG4gIGNyZWF0ZVByb2plY3RQYWdlSGVhZGVySW1nLFxufSBmcm9tIFwiLi4vdWkvY3JlYXRlVGl0bGUuanNcIjtcbmltcG9ydCB7IGNyZWF0ZVByb2plY3RQYWdlRGFzaGJvYXJkIH0gZnJvbSBcIi4uL3VpL2NyZWF0ZUNvbnRlbnQuanNcIjtcblxuY29uc3QgY3JlYXRlUHJvamVjdFBhZ2UgPSAocHJvamVjdCwgcHJldmlvdXNQYWdlKSA9PiB7XG4gIGNsZWFyQ29udGVudFRpdGxlRGlzcGxheSgpO1xuXG4gIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG4gIGNvbnN0IHRpdGxlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wYWdlLXRpdGxlXCIpO1xuXG4gIGNvbnN0IHByb2plY3ROYW1lID0gcHJvamVjdC5nZXROYW1lKCk7XG4gIGNvbnN0IHByb2plY3RQYXRoID0gcHJvamVjdC5nZXRJbWFnZVBhdGgoKTtcblxuICB0aXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVQYWdlSGVhZGVyKHByb2plY3ROYW1lKSk7XG4gIHRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZVByb2plY3RQYWdlSGVhZGVySW1nKHByb2plY3RQYXRoKSk7XG4gIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlUHJvamVjdFBhZ2VEYXNoYm9hcmQocHJvamVjdCwgcHJldmlvdXNQYWdlKVxuICApO1xufTtcblxuZXhwb3J0IHsgY3JlYXRlUHJvamVjdFBhZ2UgfTtcbiIsImltcG9ydCBwcm9qZWN0IGZyb20gXCIuLi9tb2RlbHMvcHJvamVjdC5qc1wiO1xuaW1wb3J0IHRvZG9MaXN0IGZyb20gXCIuLi9tb2RlbHMvdG9kb0xpc3QuanNcIjtcbmltcG9ydCB0b2RvSXRlbSBmcm9tIFwiLi4vbW9kZWxzL3RvZG9JdGVtLmpzXCI7XG5cbmNvbnN0IGNyZWF0ZVByb2plY3RGcm9tRGF0YSA9IChwcm9qZWN0RGF0YSkgPT4ge1xuICBjb25zdCBwcm9qZWN0VG9kb0xpc3QgPSB0b2RvTGlzdCgpO1xuICBwcm9qZWN0RGF0YS50b2RvSXRlbXMuZm9yRWFjaCgodG9kb0l0ZW1EYXRhKSA9PiB7XG4gICAgY29uc3QgbmV3VG9kb0l0ZW0gPSB0b2RvSXRlbShcbiAgICAgIHRvZG9JdGVtRGF0YS50aXRsZSxcbiAgICAgIHRvZG9JdGVtRGF0YS5kZXNjcmlwdGlvbixcbiAgICAgIHRvZG9JdGVtRGF0YS5kdWVEYXRlLFxuICAgICAgdG9kb0l0ZW1EYXRhLnByaW9yaXR5LFxuICAgICAgdG9kb0l0ZW1EYXRhLnN0YXR1c1xuICAgICk7XG4gICAgcHJvamVjdFRvZG9MaXN0LmFkZFRvZG9JdGVtKG5ld1RvZG9JdGVtKTtcbiAgfSk7XG4gIHJldHVybiBwcm9qZWN0KHByb2plY3REYXRhLm5hbWUsIHByb2plY3REYXRhLnBhdGgsIHByb2plY3RUb2RvTGlzdCk7XG59O1xuXG5jb25zdCBjcmVhdGVQcm9qZWN0RnJvbUlucHV0ID0gKHByb2plY3ROYW1lLCBwcm9qZWN0SW1nUGF0aCkgPT4ge1xuICByZXR1cm4gcHJvamVjdChwcm9qZWN0TmFtZSwgcHJvamVjdEltZ1BhdGgsIHRvZG9MaXN0KCkpO1xufTtcbmV4cG9ydCB7IGNyZWF0ZVByb2plY3RGcm9tRGF0YSwgY3JlYXRlUHJvamVjdEZyb21JbnB1dCB9O1xuIiwiaW1wb3J0IHsgY3JlYXRlUHJvamVjdEZyb21EYXRhIH0gZnJvbSBcIi4vcHJvamVjdEZhY3RvcnkuanNcIjtcbmltcG9ydCBwcm9qZWN0TGlzdCBmcm9tIFwiLi4vbW9kZWxzL3Byb2plY3RMaXN0LmpzXCI7XG5pbXBvcnQgeyBnZXRQcm9qZWN0c0RhdGEgfSBmcm9tIFwiLi9wcm9qZWN0TG9jYWxTdG9yYWdlLmpzXCI7XG5cbmNvbnN0IGNyZWF0ZVByb2plY3RMaXN0RnJvbURhdGEgPSAoKSA9PiB7XG4gIGNvbnN0IHN0b3JlZERhdGEgPSBnZXRQcm9qZWN0c0RhdGEoKTtcbiAgY29uc3QgcHJvamVjdExpc3RJbnN0YW5jZSA9IHByb2plY3RMaXN0KCk7XG5cbiAgaWYgKHN0b3JlZERhdGEgJiYgQXJyYXkuaXNBcnJheShzdG9yZWREYXRhKSkge1xuICAgIHN0b3JlZERhdGEuZm9yRWFjaCgocHJvamVjdERhdGEpID0+IHtcbiAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBjcmVhdGVQcm9qZWN0RnJvbURhdGEocHJvamVjdERhdGEpO1xuICAgICAgcHJvamVjdExpc3RJbnN0YW5jZS5hZGRQcm9qZWN0KG5ld1Byb2plY3QpO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHByb2plY3RMaXN0SW5zdGFuY2U7XG59O1xuXG5leHBvcnQgeyBjcmVhdGVQcm9qZWN0TGlzdEZyb21EYXRhIH07XG4iLCJpbXBvcnQge1xuICBnZXRSYW5kb21EYXRlU3RyaW5nLFxuICBzZXRSYW5kb21JdGVtU3RhdHVzLFxufSBmcm9tIFwiLi4vaGVscGVycy9zZXRSYW5kb21QYXJhbWV0ZXJzLmpzXCI7XG5pbXBvcnQgZGVmYXVsdFByb2plY3REYXRhIGZyb20gXCIuLi9kYXRhL2RlZmF1bHRQcm9qZWN0RGF0YS5qc29uXCI7XG5cbmNvbnN0IGNvbnZlcnREZWZhdWx0UHJvamVjdERhdGEgPSAoKSA9PiB7XG4gIHJldHVybiBkZWZhdWx0UHJvamVjdERhdGEubWFwKChwcm9qZWN0RGF0YSkgPT4ge1xuICAgIGNvbnN0IHRvZG9JdGVtcyA9IHByb2plY3REYXRhLnRvZG9JdGVtcy5tYXAoKHRvZG9JdGVtRGF0YSkgPT4gKHtcbiAgICAgIHRpdGxlOiB0b2RvSXRlbURhdGEudGl0bGUsXG4gICAgICBkZXNjcmlwdGlvbjogdG9kb0l0ZW1EYXRhLmRlc2NyaXB0aW9uLFxuICAgICAgZHVlRGF0ZTogZ2V0UmFuZG9tRGF0ZVN0cmluZyh0b2RvSXRlbURhdGEuZGF5c1JhbmdlKSxcbiAgICAgIHByaW9yaXR5OiB0b2RvSXRlbURhdGEucHJpb3JpdHksXG4gICAgICBzdGF0dXM6IHNldFJhbmRvbUl0ZW1TdGF0dXMoKSxcbiAgICB9KSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6IHByb2plY3REYXRhLm5hbWUsXG4gICAgICBwYXRoOiBwcm9qZWN0RGF0YS5wYXRoLFxuICAgICAgdG9kb0l0ZW1zLFxuICAgIH07XG4gIH0pO1xufTtcblxuY29uc3QgY29udmVydFVzZXJQcm9qZWN0RGF0YSA9IChwcm9qZWN0KSA9PiB7XG4gIGNvbnN0IHRvZG9JdGVtcyA9IHByb2plY3RcbiAgICAuZ2V0VG9kb0xpc3QoKVxuICAgIC5nZXRUb2RvSXRlbXMoKVxuICAgIC5tYXAoKHRvZG9JdGVtKSA9PiB7XG4gICAgICBjb25zdCBwcmlvcml0eVZhbHVlID0gdG9kb0l0ZW0uZ2V0UHJpb3JpdHlTdGF0dXMoKTtcbiAgICAgIGNvbnN0IHByaW9yaXR5U3RyaW5nID0gdG9kb0l0ZW0uZ2V0UHJpb3JpdHlTdHJpbmdTdGF0dXMocHJpb3JpdHlWYWx1ZSk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRpdGxlOiB0b2RvSXRlbS5nZXRUaXRsZSgpLFxuICAgICAgICBkZXNjcmlwdGlvbjogdG9kb0l0ZW0uZ2V0RGVzY3JpcHRpb24oKSxcbiAgICAgICAgZHVlRGF0ZTogdG9kb0l0ZW0uZ2V0RHVlRGF0ZSgpLFxuICAgICAgICBwcmlvcml0eTogcHJpb3JpdHlTdHJpbmcsXG4gICAgICAgIHN0YXR1czogdG9kb0l0ZW0uZ2V0U3RhdHVzKCksXG4gICAgICB9O1xuICAgIH0pO1xuXG4gIHJldHVybiB7XG4gICAgbmFtZTogcHJvamVjdC5nZXROYW1lKCksXG4gICAgcGF0aDogcHJvamVjdC5nZXRJbWFnZVBhdGgoKSxcbiAgICB0b2RvSXRlbXMsXG4gIH07XG59O1xuXG5jb25zdCBpbml0aWFsaXplRGVmYXVsdFByb2plY3REYXRhID0gKCkgPT4ge1xuICBjb25zdCBleGlzdGluZ1Byb2plY3RzRGF0YSA9IGdldFByb2plY3RzRGF0YSgpO1xuICBpZiAoIWV4aXN0aW5nUHJvamVjdHNEYXRhKSB7XG4gICAgY29uc3QgY29udmVydGVkRGF0YSA9IGNvbnZlcnREZWZhdWx0UHJvamVjdERhdGEoKTtcbiAgICBzdG9yZVByb2plY3RzRGF0YShjb252ZXJ0ZWREYXRhKTtcbiAgfVxufTtcblxuY29uc3Qgc2F2ZVVzZXJQcm9qZWN0RGF0YSA9IChuZXdQcm9qZWN0KSA9PiB7XG4gIGNvbnN0IGV4aXN0aW5nUHJvamVjdHNEYXRhID0gZ2V0UHJvamVjdHNEYXRhKCk7XG4gIGNvbnN0IG5ld1Byb2plY3REYXRhID0gY29udmVydFVzZXJQcm9qZWN0RGF0YShuZXdQcm9qZWN0KTtcbiAgY29uc3QgdXBkYXRlZFByb2plY3RzRGF0YSA9IG1lcmdlRXhpc3RpbmdEYXRhKGV4aXN0aW5nUHJvamVjdHNEYXRhLCBbXG4gICAgbmV3UHJvamVjdERhdGEsXG4gIF0pO1xuICBzdG9yZVByb2plY3RzRGF0YSh1cGRhdGVkUHJvamVjdHNEYXRhKTtcbn07XG5cbmNvbnN0IG1lcmdlRXhpc3RpbmdEYXRhID0gKGV4aXN0aW5nRGF0YSwgbmV3RGF0YSkgPT4ge1xuICByZXR1cm4gWy4uLm5ld0RhdGEsIC4uLmV4aXN0aW5nRGF0YV07XG59O1xuXG5jb25zdCBzdG9yZVByb2plY3RzRGF0YSA9IChwcm9qZWN0c0RhdGEpID0+IHtcbiAgdHJ5IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RMaXN0XCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzRGF0YSkpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBzdG9yaW5nIGRhdGEgaW4gbG9jYWxTdG9yYWdlXCIsIGVycm9yKTtcbiAgfVxufTtcblxuY29uc3QgZ2V0UHJvamVjdHNEYXRhID0gKCkgPT4ge1xuICB0cnkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdExpc3RcIikpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciByZXRyaWV2aW5nIGRhdGEgZnJvbSBsb2NhbFN0b3JhZ2U6XCIsIGVycm9yKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufTtcblxuY29uc3QgdXBkYXRlVG9kb0l0ZW1TdG9yYWdlID0gKHVwZGF0ZWRQcm9qZWN0KSA9PiB7XG4gIGNvbnN0IGV4aXN0aW5nUHJvamVjdHNEYXRhID0gZ2V0UHJvamVjdHNEYXRhKCk7XG4gIGNvbnN0IHVwZGF0ZWRQcm9qZWN0c0RhdGEgPSBleGlzdGluZ1Byb2plY3RzRGF0YS5tYXAoKHByb2plY3REYXRhKSA9PiB7XG4gICAgaWYgKHByb2plY3REYXRhLm5hbWUgPT09IHVwZGF0ZWRQcm9qZWN0LmdldE5hbWUoKSkge1xuICAgICAgcmV0dXJuIGNvbnZlcnRVc2VyUHJvamVjdERhdGEodXBkYXRlZFByb2plY3QpO1xuICAgIH1cbiAgICByZXR1cm4gcHJvamVjdERhdGE7XG4gIH0pO1xuICBzdG9yZVByb2plY3RzRGF0YSh1cGRhdGVkUHJvamVjdHNEYXRhKTtcbn07XG5cbmNvbnN0IHJlbW92ZVRvZG9JdGVtRnJvbVN0b3JhZ2UgPSAocHJvamVjdCwgdG9kb0l0ZW0pID0+IHtcbiAgY29uc3QgZXhpc3RpbmdQcm9qZWN0c0RhdGEgPSBnZXRQcm9qZWN0c0RhdGEoKTtcbiAgY29uc3QgdXBkYXRlZFByb2plY3RzRGF0YSA9IGV4aXN0aW5nUHJvamVjdHNEYXRhLm1hcCgocHJvamVjdERhdGEpID0+IHtcbiAgICBpZiAocHJvamVjdERhdGEubmFtZSA9PT0gcHJvamVjdC5nZXROYW1lKCkpIHtcbiAgICAgIGNvbnN0IHVwZGF0ZVRvZG9JdGVtcyA9IHByb2plY3REYXRhLnRvZG9JdGVtcy5maWx0ZXIoXG4gICAgICAgIChpdGVtKSA9PiBpdGVtLnRpdGxlICE9PSB0b2RvSXRlbS5nZXRUaXRsZSgpXG4gICAgICApO1xuICAgICAgcmV0dXJuIHsgLi4ucHJvamVjdERhdGEsIHRvZG9JdGVtczogdXBkYXRlVG9kb0l0ZW1zIH07XG4gICAgfVxuICAgIHJldHVybiBwcm9qZWN0RGF0YTtcbiAgfSk7XG4gIHN0b3JlUHJvamVjdHNEYXRhKHVwZGF0ZWRQcm9qZWN0c0RhdGEpO1xufTtcblxuY29uc3QgcmVtb3ZlUHJvamVjdEZyb21TdG9yYWdlID0gKHByb2plY3RUb1JlbW92ZSkgPT4ge1xuICBjb25zdCBleGlzdGluZ1Byb2plY3RzRGF0YSA9IGdldFByb2plY3RzRGF0YSgpO1xuICBpZiAoIWV4aXN0aW5nUHJvamVjdHNEYXRhKSB7XG4gICAgY29uc29sZS53YXJuKFwiTm8gcHJvamVjdHMgZm91bmQgaW4gbG9jYWxTdG9yYWdlXCIpO1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCB1cGRhdGVkUHJvamVjdHNEYXRhID0gZXhpc3RpbmdQcm9qZWN0c0RhdGEuZmlsdGVyKFxuICAgIChwcm9qZWN0RGF0YSkgPT4gcHJvamVjdERhdGEubmFtZSAhPT0gcHJvamVjdFRvUmVtb3ZlLmdldE5hbWUoKVxuICApO1xuXG4gIHN0b3JlUHJvamVjdHNEYXRhKHVwZGF0ZWRQcm9qZWN0c0RhdGEpO1xufTtcblxuZXhwb3J0IHtcbiAgaW5pdGlhbGl6ZURlZmF1bHRQcm9qZWN0RGF0YSxcbiAgc2F2ZVVzZXJQcm9qZWN0RGF0YSxcbiAgZ2V0UHJvamVjdHNEYXRhLFxuICB1cGRhdGVUb2RvSXRlbVN0b3JhZ2UsXG4gIHJlbW92ZVRvZG9JdGVtRnJvbVN0b3JhZ2UsXG4gIHJlbW92ZVByb2plY3RGcm9tU3RvcmFnZSxcbn07XG4iLCJpbXBvcnQgdG9kb0l0ZW0gZnJvbSBcIi4uL21vZGVscy90b2RvSXRlbS5qc1wiO1xuXG5jb25zdCBjcmVhdGVUb2RvSXRlbUZyb21JbnB1dCA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSA9PiB7XG4gIHJldHVybiB0b2RvSXRlbSh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KTtcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZVRvZG9JdGVtRnJvbUlucHV0IH07XG4iLCJjb25zdCBjbGVhckNvbnRlbnRUaXRsZURpc3BsYXkgPSAoKSA9PiB7XG4gIGNsZWFyVGl0bGVDb250YWluZXIoKTtcbiAgY2xlYXJDb250ZW50Q29udGFpbmVyKCk7XG59O1xuXG5jb25zdCBjbGVhclRpdGxlQ29udGFpbmVyID0gKCkgPT4ge1xuICBjb25zdCB0aXRsZURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGFnZS10aXRsZVwiKTtcbiAgdGl0bGVEaXYuaW5uZXJIVE1MID0gXCJcIjtcbn07XG5cbmNvbnN0IGNsZWFyQ29udGVudENvbnRhaW5lciA9ICgpID0+IHtcbiAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbiAgY29udGVudERpdi5pbm5lckhUTUwgPSBcIlwiO1xufTtcblxuZXhwb3J0IHsgY2xlYXJDb250ZW50VGl0bGVEaXNwbGF5LCBjbGVhckNvbnRlbnRDb250YWluZXIgfTtcbiIsImltcG9ydCB7IGhhbmRsZUFkZFByb2plY3RCdG4gfSBmcm9tIFwiLi4vZXZlbnRIYW5kbGVycy9oYW5kbGVBZGRQcm9qZWN0QnRuLmpzXCI7XG5cbmNvbnN0IGNyZWF0ZUFkZFByb2plY3RCdG4gPSAoKSA9PiB7XG4gIGNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCBidG5JbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGFkZFByb2plY3RCdG4uY2xhc3NMaXN0LmFkZChcImFkZC1wcm9qZWN0LWJ0blwiKTtcbiAgYnRuSW1hZ2UuY2xhc3NMaXN0LmFkZChcImFkZC1wcm9qZWN0LWJ0bi1pbWdcIik7XG4gIGJ0bkltYWdlLnNyYyA9IHJlcXVpcmUoXCIuLi9hc3NldHMvaW1hZ2VzL2FkZC1wcm9qZWN0LWJ0bi0yLnBuZ1wiKTtcbiAgYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlQWRkUHJvamVjdEJ0bik7XG4gIGFkZFByb2plY3RCdG4uYXBwZW5kQ2hpbGQoYnRuSW1hZ2UpO1xuICByZXR1cm4gYWRkUHJvamVjdEJ0bjtcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZUFkZFByb2plY3RCdG4gfTtcbiIsImltcG9ydCB7IGhhbmRsZUFkZFRhc2tCdG4gfSBmcm9tIFwiLi4vZXZlbnRIYW5kbGVycy9oYW5kbGVBZGRUYXNrQnRuLmpzXCI7XG5cbmNvbnN0IGNyZWF0ZUFkZFRhc2tCdG4gPSAocHJvamVjdCkgPT4ge1xuICBjb25zdCBhZGRUYXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYWRkVGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYWRkLXRhc2stY29udGFpbmVyXCIpO1xuICBjb25zdCBhZGRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBhZGRCdG4uY2xhc3NMaXN0LmFkZChcImFkZC10YXNrLWJ0blwiKTtcbiAgY29uc3QgYWRkVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBhZGRCdG4udGV4dENvbnRlbnQgPSBcIitcIjtcbiAgYWRkVGV4dC50ZXh0Q29udGVudCA9IFwiQWRkIE5ldyBUYXNrXCI7XG5cbiAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgaGFuZGxlQWRkVGFza0J0bihwcm9qZWN0KTtcbiAgfSk7XG5cbiAgYWRkVGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRCdG4pO1xuICBhZGRUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFRleHQpO1xuXG4gIHJldHVybiBhZGRUYXNrQ29udGFpbmVyO1xufTtcbmV4cG9ydCB7IGNyZWF0ZUFkZFRhc2tCdG4gfTtcbiIsImltcG9ydCB7IGhhbmRsZUJhY2tCdG4gfSBmcm9tIFwiLi4vZXZlbnRIYW5kbGVycy9oYW5kbGVCYWNrQnRuLmpzXCI7XG5cbmNvbnN0IGNyZWF0ZUJhY2tCdG4gPSAocHJldmlvdXNQYWdlKSA9PiB7XG4gIGNvbnN0IGJhY2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBiYWNrQnRuLmNsYXNzTGlzdC5hZGQoXCJiYWNrLWJ1dHRvblwiKTtcbiAgYmFja0J0bi50ZXh0Q29udGVudCA9IFwiPCBHbyBCYWNrXCI7XG4gIGJhY2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGhhbmRsZUJhY2tCdG4ocHJldmlvdXNQYWdlKSk7XG4gIHJldHVybiBiYWNrQnRuO1xufTtcblxuZXhwb3J0IHsgY3JlYXRlQmFja0J0biB9O1xuIiwiY29uc3QgY3JlYXRlQmFkZ2UgPSAocGVyY2VudGFnZSwgbGV2ZWwpID0+IHtcbiAgY29uc3QgYmFkZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBiYWRnZS5jbGFzc0xpc3QuYWRkKFwiYmFkZ2VcIik7XG5cbiAgY29uc3QgaW1nID0gY3JlYXRlQmFkZ2VJbWFnZShsZXZlbCk7XG4gIGNvbnN0IHBlcmNlbnRUZXh0ID0gY3JlYXRlQmFkZ2VUZXh0KGxldmVsKTtcblxuICBhZGRPdmVybGF5KHBlcmNlbnRhZ2UsIGxldmVsLCBiYWRnZSk7XG5cbiAgYmFkZ2UuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgYmFkZ2UuYXBwZW5kQ2hpbGQocGVyY2VudFRleHQpO1xuICByZXR1cm4gYmFkZ2U7XG59O1xuXG5jb25zdCBjcmVhdGVCYWRnZUltYWdlID0gKGxldmVsKSA9PiB7XG4gIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGltZy5jbGFzc0xpc3QuYWRkKFwiYmFkZ2UtaW1nXCIpO1xuICBpbWcuc3JjID0gcmVxdWlyZShgLi4vYXNzZXRzL2ltYWdlcy9iYWRnZXMvbHZsLSR7bGV2ZWwgLyAyMH0ucG5nYCk7XG4gIGltZy5hbHQgPSBgTGV2ZWwgJHtsZXZlbH0lYDtcbiAgcmV0dXJuIGltZztcbn07XG5cbmNvbnN0IGNyZWF0ZUJhZGdlVGV4dCA9IChsZXZlbCkgPT4ge1xuICBjb25zdCBwZXJjZW50VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNlwiKTtcbiAgcGVyY2VudFRleHQudGV4dENvbnRlbnQgPSBsZXZlbE5hbWUobGV2ZWwgLyAyMCk7XG4gIHJldHVybiBwZXJjZW50VGV4dDtcbn07XG5cbmNvbnN0IGxldmVsTmFtZSA9IChsZXZlbCkgPT4ge1xuICBjb25zdCBsZXZlbE5hbWVzID0gW1xuICAgIFwiVGhyZWFkIEZpbmRlclwiLFxuICAgIFwiVW5yYXZlbGluZyBBcHByZW50aWNlXCIsXG4gICAgXCJEaWxpZ2VudCBEZS10YW5nbGVyXCIsXG4gICAgXCJGb2N1c2VkIFdlYXZlclwiLFxuICAgIFwiWWFybiBZb2RhXCIsXG4gIF07XG4gIHJldHVybiBsZXZlbE5hbWVzW2xldmVsIC0gMV07XG59O1xuXG5jb25zdCBhZGRPdmVybGF5ID0gKHBlcmNlbnRhZ2UsIGxldmVsLCBiYWRnZSkgPT4ge1xuICBjb25zdCBsZXZlbE1ldCA9IHBlcmNlbnRhZ2UgPj0gbGV2ZWw7XG4gIGlmIChwZXJjZW50YWdlID09PSAwIHx8ICFsZXZlbE1ldCkge1xuICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZChcImJhZGdlLW92ZXJsYXlcIik7XG4gICAgYmFkZ2UuYXBwZW5kQ2hpbGQob3ZlcmxheSk7XG4gIH1cbn07XG5cbmV4cG9ydCB7IGNyZWF0ZUJhZGdlIH07XG4iLCJpbXBvcnQgeyBjcmVhdGVQcm9qZWN0TGlzdEZyb21EYXRhIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3Byb2plY3RMaXN0RmFjdG9yeS5qc1wiO1xuaW1wb3J0IHsgY3JlYXRlQmFkZ2UgfSBmcm9tIFwiLi9jcmVhdGVCYWRnZS5qc1wiO1xuXG5jb25zdCBjcmVhdGVCYWRnZXNDb250YWluZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGJhZGdlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYmFkZ2VDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImJhZGdlLWNvbnRhaW5lclwiKTtcblxuICBjb25zdCBiYWRnZUhlYWRlciA9IGNyZWF0ZUJhZGdlSGVhZGVyKCk7XG5cbiAgY29uc3QgYWxsQmFkZ2VzQ29udGFpbmVyID0gY3JlYXRlQWxsQmFkZ2VzQ29udGFpbmVyKCk7XG5cbiAgYmFkZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQoYmFkZ2VIZWFkZXIpO1xuICBiYWRnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChhbGxCYWRnZXNDb250YWluZXIpO1xuXG4gIHJldHVybiBiYWRnZUNvbnRhaW5lcjtcbn07XG5cbmNvbnN0IGNyZWF0ZUJhZGdlSGVhZGVyID0gKCkgPT4ge1xuICBjb25zdCBiYWRnZUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcbiAgYmFkZ2VIZWFkZXIudGV4dENvbnRlbnQgPSBcIk1pbGVzdG9uZSBCYWRnZXNcIjtcbiAgcmV0dXJuIGJhZGdlSGVhZGVyO1xufTtcblxuY29uc3QgY3JlYXRlQWxsQmFkZ2VzQ29udGFpbmVyID0gKCkgPT4ge1xuICBjb25zdCBhbGxCYWRnZXNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBhbGxCYWRnZXNDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImFsbC1iYWRnZXNcIik7XG5cbiAgY29uc3QgYmFkZ2VMZXZlbHMgPSBbMjAsIDQwLCA2MCwgODAsIDEwMF07XG4gIGNvbnN0IHByb2plY3RMaXN0ID0gY3JlYXRlUHJvamVjdExpc3RGcm9tRGF0YSgpO1xuXG4gIGJhZGdlTGV2ZWxzLmZvckVhY2goKGxldmVsKSA9PiB7XG4gICAgY29uc3QgYmFkZ2UgPSBjcmVhdGVCYWRnZShcbiAgICAgIHByb2plY3RMaXN0LnRvdGFsQ29tcGxldGVkVGFza3NQZXJjZW50YWdlKCksXG4gICAgICBsZXZlbFxuICAgICk7XG4gICAgYWxsQmFkZ2VzQ29udGFpbmVyLmFwcGVuZENoaWxkKGJhZGdlKTtcbiAgfSk7XG4gIHJldHVybiBhbGxCYWRnZXNDb250YWluZXI7XG59O1xuXG5leHBvcnQgeyBjcmVhdGVCYWRnZXNDb250YWluZXIgfTtcbiIsImNvbnN0IGNyZWF0ZUNpcmN1bGFyUHJvZ3Jlc3NCYXIgPSAocGVyY2VudGFnZSwgc3RhdHVzKSA9PiB7XG4gIGNvbnN0IHByb2dyZXNzQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY2xhc3NOYW1lID0gcHJvZ3Jlc3NCYXJDb25maWdbc3RhdHVzXSB8fCBcImRlZmF1bHQtYmFyLWNvbG9yXCI7XG4gIHByb2dyZXNzQmFyLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgcHJvZ3Jlc3NCYXIucm9sZSA9IFwicHJvZ3Jlc3NiYXJcIjtcbiAgcHJvZ3Jlc3NCYXIuYXJpYVZhbHVlbm93ID0gcGVyY2VudGFnZTtcbiAgcHJvZ3Jlc3NCYXIuYXJpYVZhbHVlbWluID0gXCIwXCI7XG4gIHByb2dyZXNzQmFyLmFyaWFWYWx1ZW1heCA9IFwiMTAwXCI7XG4gIHByb2dyZXNzQmFyLnN0eWxlLnNldFByb3BlcnR5KFwiLS12YWx1ZVwiLCBwZXJjZW50YWdlKTtcbiAgcHJvZ3Jlc3NCYXIuZGF0YXNldC5wZXJjZW50YWdlID0gcGVyY2VudGFnZS50b0ZpeGVkKDApO1xuXG4gIHJldHVybiBwcm9ncmVzc0Jhcjtcbn07XG5cbmNvbnN0IHByb2dyZXNzQmFyQ29uZmlnID0ge1xuICBDb21wbGV0ZWQ6IFwiY29tcGxldGVkLWJhci1jb2xvclwiLFxuICBcIkluIFByb2dyZXNzXCI6IFwiaW4tcHJvZ3Jlc3MtYmFyLWNvbG9yXCIsXG4gIFwiTm90IFN0YXJ0ZWRcIjogXCJub3Qtc3RhcnRlZC1iYXItY29sb3JcIixcbiAgT3ZlcmR1ZTogXCJvdmVyZHVlLWJhci1jb2xvclwiLFxufTtcblxuZXhwb3J0IHsgY3JlYXRlQ2lyY3VsYXJQcm9ncmVzc0JhciB9O1xuIiwiaW1wb3J0IHsgY3JlYXRlQmFja0J0biB9IGZyb20gXCIuL2NyZWF0ZUJhY2tCdG4uanNcIjtcbmltcG9ydCB7IGNyZWF0ZVN0YXRzQ29udGFpbmVyIH0gZnJvbSBcIi4vY3JlYXRlU3RhdHNDb250YWluZXIuanNcIjtcbmltcG9ydCB7IGNyZWF0ZVRvZG9MaXN0Q29udGFpbmVyIH0gZnJvbSBcIi4vY3JlYXRlVG9kb0xpc3RDb250YWluZXIuanNcIjtcbmltcG9ydCB7IGNyZWF0ZUJhZGdlc0NvbnRhaW5lciB9IGZyb20gXCIuL2NyZWF0ZUJhZGdlc0NvbnRhaW5lci5qc1wiO1xuaW1wb3J0IHtcbiAgY3JlYXRlRHVlU29vbkNvbnRhaW5lcixcbiAgY3JlYXRlT3ZlcmR1ZUNvbnRhaW5lcixcbn0gZnJvbSBcIi4vY3JlYXRlVGltZVNlbnNpdGl2ZUNvbnRhaW5lci5qc1wiO1xuaW1wb3J0IHsgY3JlYXRlRm9jdXNQcm9qZWN0c0NvbnRhaW5lciB9IGZyb20gXCIuL2NyZWF0ZUZvY3VzUHJvamVjdHNDb250YWluZXIuanNcIjtcblxuY29uc3QgY3JlYXRlUHJvamVjdFBhZ2VEYXNoYm9hcmQgPSAocHJvamVjdCwgcHJldmlvdXNQYWdlKSA9PiB7XG4gIGNvbnN0IGRhc2hib2FyZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRhc2hib2FyZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1kYXNoYm9hcmRcIik7XG5cbiAgY29uc3QgY29tcGxldGVkUGVyY2VudGFnZSA9IHByb2plY3QuZ2V0VG9kb0xpc3QoKS5nZXRDb21wbGV0ZWRQZXJjZW50YWdlKCk7XG4gIGNvbnN0IGluUHJvZ3Jlc3NQZXJjZW50YWdlID0gcHJvamVjdC5nZXRUb2RvTGlzdCgpLmdldEluUHJvZ3Jlc3NQZXJjZW50YWdlKCk7XG4gIGNvbnN0IG5vdFN0YXJ0ZWRQZXJjZW50YWdlID0gcHJvamVjdC5nZXRUb2RvTGlzdCgpLmdldE5vdFN0YXJ0ZWRQZXJjZW50YWdlKCk7XG4gIGNvbnN0IHRvZG9MaXN0ID0gcHJvamVjdC5nZXRUb2RvTGlzdCgpO1xuICBjb25zdCB0b2RvSXRlbXMgPSBwcm9qZWN0LmdldFRvZG9MaXN0KCkuZ2V0VG9kb0l0ZW1zKCk7XG5cbiAgZGFzaGJvYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUJhY2tCdG4ocHJldmlvdXNQYWdlKSk7XG4gIGRhc2hib2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVTdGF0c0NvbnRhaW5lcihcbiAgICAgIGNvbXBsZXRlZFBlcmNlbnRhZ2UsXG4gICAgICBpblByb2dyZXNzUGVyY2VudGFnZSxcbiAgICAgIG5vdFN0YXJ0ZWRQZXJjZW50YWdlXG4gICAgKVxuICApO1xuICBkYXNoYm9hcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlVG9kb0xpc3RDb250YWluZXIocHJvamVjdCwgdG9kb0xpc3QsIHRvZG9JdGVtcylcbiAgKTtcbiAgcmV0dXJuIGRhc2hib2FyZENvbnRhaW5lcjtcbn07XG5cbmNvbnN0IGNyZWF0ZUhvbWVQYWdlRGFzaGJvYXJkID0gKCkgPT4ge1xuICBjb25zdCBkYXNoYm9hcmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkYXNoYm9hcmRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImhvbWUtZGFzaGJvYXJkXCIpO1xuXG4gIGRhc2hib2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVCYWRnZXNDb250YWluZXIoKSk7XG4gIGRhc2hib2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVEdWVTb29uQ29udGFpbmVyKCkpO1xuICBkYXNoYm9hcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlT3ZlcmR1ZUNvbnRhaW5lcigpKTtcbiAgZGFzaGJvYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUZvY3VzUHJvamVjdHNDb250YWluZXIoKSk7XG4gIHJldHVybiBkYXNoYm9hcmRDb250YWluZXI7XG59O1xuXG5leHBvcnQgeyBjcmVhdGVQcm9qZWN0UGFnZURhc2hib2FyZCwgY3JlYXRlSG9tZVBhZ2VEYXNoYm9hcmQgfTtcbiIsImltcG9ydCB7IGNyZWF0ZVByb2dyZXNzQ29udGFpbmVyIH0gZnJvbSBcIi4vY3JlYXRlUHJvZ3Jlc3NDb250YWluZXIuanNcIjtcbmltcG9ydCB7IGNyZWF0ZVByb2plY3RMaXN0RnJvbURhdGEgfSBmcm9tIFwiLi4vc2VydmljZXMvcHJvamVjdExpc3RGYWN0b3J5LmpzXCI7XG5pbXBvcnQgeyBzdGF0dXNUZXh0IH0gZnJvbSBcIi4uL2hlbHBlcnMvc2V0U3RhdHVzVGV4dC5qc1wiO1xuXG5jb25zdCBjcmVhdGVGb2N1c1Byb2plY3RzQ29udGFpbmVyID0gKCkgPT4ge1xuICBjb25zdCBwcm9qZWN0TGlzdCA9IGNyZWF0ZVByb2plY3RMaXN0RnJvbURhdGEoKTtcblxuICBjb25zdCBub3RTdGFydGVkUGVyY2VudGFnZSA9IHByb2plY3RMaXN0LnRvdGFsTm90U3RhcnRlZFRhc2tzUGVyY2VudGFnZSgpO1xuICBjb25zdCBpblByb2dyZXNzUGVyY2VudGFnZSA9IHByb2plY3RMaXN0LnRvdGFsSW5Qcm9ncmVzc1Rhc2tzUGVyY2VudGFnZSgpO1xuICBjb25zdCBvdmVyRHVlUGVyY2VudGFnZSA9IHByb2plY3RMaXN0LnRvdGFsT3ZlcmR1ZVRhc2tzUGVyY2VudGFnZSgpO1xuXG4gIGNvbnN0IGZvY3VzQ29udGFpbmVyID0gY3JlYXRlQ29udGFpbmVyKFwiZm9jdXMtc3RhdHMtY29udGFpbmVyXCIpO1xuXG4gIGNvbnN0IGZvY3VzSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xuICBmb2N1c0hlYWRlci50ZXh0Q29udGVudCA9IFwiU3RhdHMgWm9uZVwiO1xuXG4gIGNvbnN0IHN0YXRzQ29udGFpbmVyID0gY3JlYXRlQ29udGFpbmVyKFwiaG9tZS1zdGF0cy1jb250YWluZXJcIik7XG5cbiAgY29uc3QgaW5Qcm9ncmVzc1Rhc2tzQ29udGFpbmVyID0gY3JlYXRlQ29udGFpbmVyKFwiaG9tZS1pbi1wcm9ncmVzcy1iYXJcIik7XG4gIGNvbnN0IG5vdFN0YXJ0ZWRUYXNrc0NvbnRhaW5lciA9IGNyZWF0ZUNvbnRhaW5lcihcImhvbWUtbm90LXN0YXJ0ZWQtYmFyXCIpO1xuICBjb25zdCBvdmVyZHVlVGFza3NDb250YWluZXIgPSBjcmVhdGVDb250YWluZXIoXCJob21lLW92ZXJkdWUtYmFyXCIpO1xuXG4gIGluUHJvZ3Jlc3NUYXNrc0NvbnRhaW5lci5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVQcm9ncmVzc0NvbnRhaW5lcihpblByb2dyZXNzUGVyY2VudGFnZSwgXCJJbiBQcm9ncmVzc1wiKVxuICApO1xuICBpblByb2dyZXNzVGFza3NDb250YWluZXIuYXBwZW5kQ2hpbGQoXG4gICAgc3RhdHVzVGV4dChpblByb2dyZXNzUGVyY2VudGFnZSwgXCJpbiBwcm9ncmVzc1wiKVxuICApO1xuXG4gIG5vdFN0YXJ0ZWRUYXNrc0NvbnRhaW5lci5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVQcm9ncmVzc0NvbnRhaW5lcihub3RTdGFydGVkUGVyY2VudGFnZSwgXCJOb3QgU3RhcnRlZFwiKVxuICApO1xuICBub3RTdGFydGVkVGFza3NDb250YWluZXIuYXBwZW5kQ2hpbGQoXG4gICAgc3RhdHVzVGV4dChub3RTdGFydGVkUGVyY2VudGFnZSwgXCJub3Qgc3RhcnRlZFwiKVxuICApO1xuXG4gIG92ZXJkdWVUYXNrc0NvbnRhaW5lci5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVQcm9ncmVzc0NvbnRhaW5lcihvdmVyRHVlUGVyY2VudGFnZSwgXCJPdmVyZHVlXCIpXG4gICk7XG4gIG92ZXJkdWVUYXNrc0NvbnRhaW5lci5hcHBlbmRDaGlsZChzdGF0dXNUZXh0KG92ZXJEdWVQZXJjZW50YWdlLCBcIm92ZXJkdWVcIikpO1xuXG4gIHN0YXRzQ29udGFpbmVyLmFwcGVuZENoaWxkKGluUHJvZ3Jlc3NUYXNrc0NvbnRhaW5lcik7XG4gIHN0YXRzQ29udGFpbmVyLmFwcGVuZENoaWxkKG5vdFN0YXJ0ZWRUYXNrc0NvbnRhaW5lcik7XG4gIHN0YXRzQ29udGFpbmVyLmFwcGVuZENoaWxkKG92ZXJkdWVUYXNrc0NvbnRhaW5lcik7XG5cbiAgZm9jdXNDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9jdXNIZWFkZXIpO1xuICBmb2N1c0NvbnRhaW5lci5hcHBlbmRDaGlsZChzdGF0c0NvbnRhaW5lcik7XG5cbiAgcmV0dXJuIGZvY3VzQ29udGFpbmVyO1xufTtcblxuY29uc3QgY3JlYXRlQ29udGFpbmVyID0gKGNsYXNzTmFtZSkgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICByZXR1cm4gY29udGFpbmVyO1xufTtcblxuZXhwb3J0IHsgY3JlYXRlRm9jdXNQcm9qZWN0c0NvbnRhaW5lciB9O1xuIiwiaW1wb3J0IHtcbiAgY3JlYXRlTW9kYWxIZWFkZXIsXG4gIGNyZWF0ZUNsb3NlTW9kYWxCdG4sXG4gIGNyZWF0ZU1vZGFsRm9ybUVsZW1lbnQsXG59IGZyb20gXCIuLi9oZWxwZXJzL21vZGFsSGVscGVycy5qc1wiO1xuaW1wb3J0IHsgaGFuZGxlUHJvamVjdEZvcm1TdWJtaXNzaW9uIH0gZnJvbSBcIi4uL2V2ZW50SGFuZGxlcnMvaGFuZGxlUHJvamVjdEZvcm1TdWJtaXNzaW9uLmpzXCI7XG5pbXBvcnQgeyBoYW5kbGVUYXNrRm9ybVN1Ym1pc3Npb24gfSBmcm9tIFwiLi4vZXZlbnRIYW5kbGVycy9oYW5kbGVUYXNrRm9ybVN1Ym1pc3Npb24uanNcIjtcbmltcG9ydCBraXR0ZW5Pbk1vb24gZnJvbSBcIi4uL2Fzc2V0cy9pbWFnZXMva2l0dGVuLW9uLW1vb24ucG5nXCI7XG5pbXBvcnQga2l0dGVuWWFyblBsYXkgZnJvbSBcIi4uL2Fzc2V0cy9pbWFnZXMvcGxheWluZy15YXJuLnBuZ1wiO1xuXG5jb25zdCBjcmVhdGVBZGRUYXNrTW9kYWwgPSAocHJvamVjdCkgPT4ge1xuICBjb25zdCBuZXdUb2RvVGFza01vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbmV3VG9kb1Rhc2tNb2RhbC5jbGFzc0xpc3QuYWRkKFwiYWRkLXRhc2stbW9kYWxcIik7XG5cbiAgbmV3VG9kb1Rhc2tNb2RhbC5hcHBlbmRDaGlsZChjcmVhdGVDbG9zZU1vZGFsQnRuKFwiLmFkZC10YXNrLW1vZGFsXCIpKTtcbiAgbmV3VG9kb1Rhc2tNb2RhbC5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVNb2RhbEhlYWRlcihcbiAgICAgIFwiQ3JlYXRlIEEgTmV3IFRhc2tcIixcbiAgICAgIGtpdHRlbk9uTW9vbixcbiAgICAgIFwiR3JlYXQgam9iISBZb3UncmUgbWFraW5nIHByb2dyZXNzIHdpdGggZXZlcnkgdGFzay4gTGV0J3Mga2VlcCB0aGUgbW9tZW50dW0gZ29pbmchXCJcbiAgICApXG4gICk7XG4gIG5ld1RvZG9UYXNrTW9kYWwuYXBwZW5kQ2hpbGQoY3JlYXRlVGFza0Zvcm0ocHJvamVjdCkpO1xuXG4gIHJldHVybiBuZXdUb2RvVGFza01vZGFsO1xufTtcblxuY29uc3QgY3JlYXRlVGFza0Zvcm0gPSAocHJvamVjdCkgPT4ge1xuICBjb25zdCBpdGVtRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gIGl0ZW1Gb3JtLmNsYXNzTGlzdC5hZGQoXCJhZGQtdGFzay1mb3JtXCIpO1xuICBzdWJtaXRCdG4uY2xhc3NMaXN0LmFkZChcImFkZC10YXNrLXN1Ym1pdC1idG5cIik7XG4gIHN1Ym1pdEJ0bi50ZXh0Q29udGVudCA9IFwiQ3JlYXRlIFByb2plY3RcIjtcblxuICBzdWJtaXRCdG4udGV4dENvbnRlbnQgPSBcIkFkZCBUYXNrXCI7XG5cbiAgY29uc3QgeyB3cmFwcGVyOiBpdGVtVGl0bGVXcmFwcGVyLCBpbnB1dDogaXRlbVRpdGxlSW5wdXQgfSA9XG4gICAgY3JlYXRlTW9kYWxGb3JtRWxlbWVudChcbiAgICAgIFwidGV4dFwiLFxuICAgICAgXCJpdGVtVGl0bGVcIixcbiAgICAgIFwiVGl0bGU6XCIsXG4gICAgICB0cnVlLFxuICAgICAgXCJXaGF0IHdpbGwgeW91IGNvbnF1ZXIgbmV4dD9cIlxuICAgICk7XG4gIGNvbnN0IHsgd3JhcHBlcjogaXRlbURlc2NyaXB0aW9uV3JhcHBlciwgaW5wdXQ6IGl0ZW1EZXNjcmlwdGlvbklucHV0IH0gPVxuICAgIGNyZWF0ZU1vZGFsRm9ybUVsZW1lbnQoXG4gICAgICBcInRleHRcIixcbiAgICAgIFwiaXRlbURlc2NyaXB0aW9uXCIsXG4gICAgICBcIkRlc2NyaXB0aW9uOlwiLFxuICAgICAgZmFsc2UsXG4gICAgICBcIihPcHRpb25hbClcIlxuICAgICk7XG4gIGNvbnN0IHsgd3JhcHBlcjogaXRlbURhdGVXcmFwcGVyLCBpbnB1dDogaXRlbURhdGVJbnB1dCB9ID1cbiAgICBjcmVhdGVNb2RhbEZvcm1FbGVtZW50KFwiZGF0ZVwiLCBcIml0ZW1EYXRlXCIsIFwiRHVlIERhdGU6XCIsIGZhbHNlKTtcblxuICBsZXQgc2VsZWN0ZWRQcmlvcml0eSA9IG51bGw7XG5cbiAgY29uc3QgaXRlbVByaW9yaXR5V3JhcHBlciA9IHByaW9yaXR5V3JhcHBlcigocHJpb3JpdHkpID0+IHtcbiAgICBzZWxlY3RlZFByaW9yaXR5ID0gcHJpb3JpdHk7XG4gIH0pO1xuXG4gIGl0ZW1Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2ZW50KSA9PlxuICAgIGhhbmRsZVRhc2tGb3JtU3VibWlzc2lvbihcbiAgICAgIGV2ZW50LFxuICAgICAgaXRlbVRpdGxlSW5wdXQsXG4gICAgICBpdGVtRGVzY3JpcHRpb25JbnB1dCxcbiAgICAgIGl0ZW1EYXRlSW5wdXQsXG4gICAgICBzZWxlY3RlZFByaW9yaXR5LFxuICAgICAgcHJvamVjdFxuICAgIClcbiAgKTtcblxuICBpdGVtRm9ybS5hcHBlbmRDaGlsZChpdGVtVGl0bGVXcmFwcGVyKTtcbiAgaXRlbUZvcm0uYXBwZW5kQ2hpbGQoaXRlbURlc2NyaXB0aW9uV3JhcHBlcik7XG4gIGl0ZW1Gb3JtLmFwcGVuZENoaWxkKGl0ZW1EYXRlV3JhcHBlcik7XG4gIGl0ZW1Gb3JtLmFwcGVuZENoaWxkKGl0ZW1Qcmlvcml0eVdyYXBwZXIpO1xuICBpdGVtRm9ybS5hcHBlbmRDaGlsZChzdWJtaXRCdG4pO1xuICByZXR1cm4gaXRlbUZvcm07XG59O1xuXG5jb25zdCBwcmlvcml0eVdyYXBwZXIgPSAoc2V0UHJpb3JpdHkpID0+IHtcbiAgY29uc3QgYnV0dG9uc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcblxuICBsYWJlbC50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHk6IFwiO1xuXG4gIGNvbnN0IHByaW9yaXR5VmFsdWVzID0gW1wiTG93XCIsIFwiTWVkaXVtXCIsIFwiSGlnaFwiXTtcbiAgZm9yIChsZXQgcHJpb3JpdHkgb2YgcHJpb3JpdHlWYWx1ZXMpIHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IHByaW9yaXR5O1xuICAgIGJ1dHRvbi52YWx1ZSA9IHByaW9yaXR5O1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgc2V0UHJpb3JpdHkocHJpb3JpdHkpO1xuICAgIH0pO1xuICAgIGJ1dHRvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgfVxuXG4gIHdyYXBwZXIuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICB3cmFwcGVyLmFwcGVuZENoaWxkKGJ1dHRvbnNDb250YWluZXIpO1xuICByZXR1cm4gd3JhcHBlcjtcbn07XG5cbmNvbnN0IGNyZWF0ZUFkZFByb2plY3RNb2RhbCA9ICgpID0+IHtcbiAgY29uc3QgbmV3UHJvamVjdE1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbmV3UHJvamVjdE1vZGFsLmNsYXNzTGlzdC5hZGQoXCJhZGQtcHJvamVjdC1tb2RhbFwiKTtcblxuICBuZXdQcm9qZWN0TW9kYWwuYXBwZW5kQ2hpbGQoY3JlYXRlQ2xvc2VNb2RhbEJ0bihcIi5hZGQtcHJvamVjdC1tb2RhbFwiKSk7XG4gIG5ld1Byb2plY3RNb2RhbC5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVNb2RhbEhlYWRlcihcbiAgICAgIFwiQ3JlYXRlIEEgTmV3IFByb2plY3RcIixcbiAgICAgIGtpdHRlbllhcm5QbGF5LFxuICAgICAgXCJIb29yYXkhIFlvdSdyZSBzdGFydGluZyBhIG5ldyBwcm9qZWN0ISBMZXQncyB1bnJhdmVsIHRoaXMgdG9nZXRoZXIsIG9uZSB0aHJlYWQgYXQgYSB0aW1lIVwiXG4gICAgKVxuICApO1xuICBuZXdQcm9qZWN0TW9kYWwuYXBwZW5kQ2hpbGQoY3JlYXRlUHJvamVjdEZvcm0oKSk7XG5cbiAgcmV0dXJuIG5ld1Byb2plY3RNb2RhbDtcbn07XG5cbmNvbnN0IGNyZWF0ZVByb2plY3RGb3JtID0gKCkgPT4ge1xuICBjb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gIHByb2plY3RGb3JtLmNsYXNzTGlzdC5hZGQoXCJhZGQtcHJvamVjdC1mb3JtXCIpO1xuICBzdWJtaXRCdG4uY2xhc3NMaXN0LmFkZChcImFkZC1wcm9qZWN0LXN1Ym1pdC1idG5cIik7XG4gIHN1Ym1pdEJ0bi50ZXh0Q29udGVudCA9IFwiQ3JlYXRlIFByb2plY3RcIjtcblxuICBjb25zdCB7IHdyYXBwZXI6IHByb2plY3ROYW1lV3JhcHBlciwgaW5wdXQ6IHByb2plY3ROYW1lSW5wdXQgfSA9XG4gICAgY3JlYXRlTW9kYWxGb3JtRWxlbWVudChcbiAgICAgIFwidGV4dFwiLFxuICAgICAgXCJwcm9qZWN0TmFtZVwiLFxuICAgICAgXCJQcm9qZWN0IE5hbWU6XCIsXG4gICAgICB0cnVlLFxuICAgICAgXCJTdGFydCB1bnJhdmVsaW5nISBFbnRlciB5b3VyIHByb2plY3QgbmFtZS5cIlxuICAgICk7XG4gIGNvbnN0IHsgd3JhcHBlcjogcHJvamVjdEltZ1dyYXBwZXIsIGlucHV0OiBwcm9qZWN0SW1nSW5wdXQgfSA9XG4gICAgY3JlYXRlTW9kYWxGb3JtRWxlbWVudChcImZpbGVcIiwgXCJwcm9qZWN0SW1nXCIsIFwiQWRkIFByb2plY3QgSW1hZ2U6XCIsIGZhbHNlKTtcblxuICBwcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZVdyYXBwZXIpO1xuICBwcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0SW1nV3JhcHBlcik7XG4gIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEJ0bik7XG5cbiAgcHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZlbnQpID0+XG4gICAgaGFuZGxlUHJvamVjdEZvcm1TdWJtaXNzaW9uKGV2ZW50LCBwcm9qZWN0TmFtZUlucHV0LCBwcm9qZWN0SW1nSW5wdXQpXG4gICk7XG5cbiAgcmV0dXJuIHByb2plY3RGb3JtO1xufTtcblxuZXhwb3J0IHsgY3JlYXRlQWRkVGFza01vZGFsLCBjcmVhdGVBZGRQcm9qZWN0TW9kYWwsIGNyZWF0ZVByb2plY3RGb3JtIH07XG4iLCJjb25zdCByZW5kZXJOb1Rhc2tzTWVzc2FnZSA9ICh0YXNrVGFibGVDb250YWluZXIpID0+IHtcbiAgY29uc3Qgbm9UYXNrc01lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBub1Rhc2tzTWVzc2FnZS5jbGFzc0xpc3QuYWRkKFwibm8tdGFza3MtbWVzc2FnZVwiKTtcblxuICBub1Rhc2tzTWVzc2FnZS5hcHBlbmRDaGlsZChjcmVhdGVJbWdDb250YWluZXIoKSk7XG4gIG5vVGFza3NNZXNzYWdlLmFwcGVuZENoaWxkKGNyZWF0ZU1lc3NhZ2VUZXh0KCkpO1xuXG4gIHRhc2tUYWJsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChub1Rhc2tzTWVzc2FnZSk7XG59O1xuXG5jb25zdCBjcmVhdGVJbWdDb250YWluZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGltYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaW1hZ2VDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm5vLXRhc2tzLWNvbnRhaW5lclwiKTtcblxuICBpbWFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVOb1Rhc2tJbWcoKSk7XG5cbiAgcmV0dXJuIGltYWdlQ29udGFpbmVyO1xufTtcblxuY29uc3QgY3JlYXRlTWVzc2FnZVRleHQgPSAoKSA9PiB7XG4gIGNvbnN0IG1lc3NhZ2VUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIG1lc3NhZ2VUZXh0LnRleHRDb250ZW50ID0gXCJObyB0YXNrcyB0byBkbyFcIjtcbiAgcmV0dXJuIG1lc3NhZ2VUZXh0O1xufTtcblxuY29uc3QgY3JlYXRlTm9UYXNrSW1nID0gKCkgPT4ge1xuICBjb25zdCBub1Rhc2tJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBub1Rhc2tJbWcuY2xhc3NMaXN0LmFkZChcIm5vLXRhc2tzLWltZ1wiKTtcbiAgbm9UYXNrSW1nLnNyYyA9IHJlcXVpcmUoXCIuLi9hc3NldHMvaW1hZ2VzL2tpdHRlbi1zbGVlcGluZy5wbmdcIik7XG4gIG5vVGFza0ltZy5hbHQgPSBcIktpdHRlbiBvbiBtb29uXCI7XG4gIHJldHVybiBub1Rhc2tJbWc7XG59O1xuXG5leHBvcnQgeyByZW5kZXJOb1Rhc2tzTWVzc2FnZSB9O1xuIiwiaW1wb3J0IHsgaGFuZGxlTWVudVNlbGVjdGlvbiB9IGZyb20gXCIuLi9ldmVudEhhbmRsZXJzL2hhbmRsZU1lbnVTZWxlY3Rpb24uanNcIjtcblxuY29uc3QgY3JlYXRlT3JnYW5pemVCeU1lbnUgPSAocHJvamVjdCwgdG9kb0xpc3QpID0+IHtcbiAgY29uc3Qgb3JnYW5pemVNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgb3JnYW5pemVNZW51LmNsYXNzTGlzdC5hZGQoXCJvcmdhbml6ZS1tZW51XCIpO1xuXG4gIG9yZ2FuaXplTWVudS5hcHBlbmRDaGlsZChjcmVhdGVNZW51TGFiZWwoKSk7XG4gIG9yZ2FuaXplTWVudS5hcHBlbmRDaGlsZChjcmVhdGVNZW51U2VsZWN0KHByb2plY3QsIHRvZG9MaXN0KSk7XG5cbiAgcmV0dXJuIG9yZ2FuaXplTWVudTtcbn07XG5cbmNvbnN0IGNyZWF0ZU1lbnVMYWJlbCA9ICgpID0+IHtcbiAgY29uc3QgbWVudUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBtZW51TGFiZWwudGV4dENvbnRlbnQgPSBcIk9yZ2FuaXplIGJ5XCI7XG4gIG1lbnVMYWJlbC5mb3IgPSBcIm9yZ2FuaXplXCI7XG4gIHJldHVybiBtZW51TGFiZWw7XG59O1xuXG5jb25zdCBjcmVhdGVNZW51U2VsZWN0ID0gKHByb2plY3QsIHRvZG9MaXN0KSA9PiB7XG4gIGNvbnN0IGN1c3RvbVNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGN1c3RvbVNlbGVjdC5jbGFzc0xpc3QuYWRkKFwiY3VzdG9tLXNlbGVjdFwiKTtcblxuICBjb25zdCBtZW51U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgbWVudVNlbGVjdC5pZCA9IFwib3JnYW5pemVcIjtcbiAgbWVudVNlbGVjdC5jbGFzc0xpc3QuYWRkKFwibWVudS1zZWxlY3RcIik7XG5cbiAgbWVudVNlbGVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChldmVudCkgPT5cbiAgICBoYW5kbGVNZW51U2VsZWN0aW9uKGV2ZW50LCBwcm9qZWN0LCB0b2RvTGlzdClcbiAgKTtcblxuICBtZW51U2VsZWN0LmFwcGVuZENoaWxkKGNyZWF0ZVNlbGVjdFByb21wdE9wdGlvbigpKTtcbiAgbWVudVNlbGVjdC5hcHBlbmRDaGlsZChjcmVhdGVTb3J0T3B0Z3JvdXAoKSk7XG4gIG1lbnVTZWxlY3QuYXBwZW5kQ2hpbGQoY3JlYXRlRmlsdGVyT3B0Z3JvdXAoKSk7XG4gIGN1c3RvbVNlbGVjdC5hcHBlbmRDaGlsZChtZW51U2VsZWN0KTtcbiAgcmV0dXJuIGN1c3RvbVNlbGVjdDtcbn07XG5cbmNvbnN0IGNyZWF0ZVNlbGVjdFByb21wdE9wdGlvbiA9ICgpID0+IHtcbiAgY29uc3Qgc2VsZWN0UHJvbXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgc2VsZWN0UHJvbXB0LnZhbHVlID0gXCJcIjtcbiAgc2VsZWN0UHJvbXB0LmRpc2FibGVkID0gdHJ1ZTtcbiAgc2VsZWN0UHJvbXB0LnNlbGVjdGVkID0gdHJ1ZTtcbiAgc2VsZWN0UHJvbXB0LnRleHRDb250ZW50ID0gXCJTZWxlY3QgYW4gb3B0aW9uXCI7XG4gIHJldHVybiBzZWxlY3RQcm9tcHQ7XG59O1xuXG5jb25zdCBjcmVhdGVQcmlvcml0eU9wdGlvbiA9ICgpID0+IHtcbiAgY29uc3QgcHJpb3JpdHlPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICBwcmlvcml0eU9wdGlvbi52YWx1ZSA9IFwicHJpb3JpdHlcIjtcbiAgcHJpb3JpdHlPcHRpb24udGV4dENvbnRlbnQgPSBcIlByaW9yaXR5XCI7XG4gIHJldHVybiBwcmlvcml0eU9wdGlvbjtcbn07XG5cbmNvbnN0IGNyZWF0ZUR1ZURhdGVPcHRpb24gPSAoKSA9PiB7XG4gIGNvbnN0IGR1ZURhdGVPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICBkdWVEYXRlT3B0aW9uLnZhbHVlID0gXCJkdWUtZGF0ZVwiO1xuICBkdWVEYXRlT3B0aW9uLnRleHRDb250ZW50ID0gXCJEdWUgRGF0ZVwiO1xuICByZXR1cm4gZHVlRGF0ZU9wdGlvbjtcbn07XG5cbmNvbnN0IGNyZWF0ZUNvbXBsZXRlT3B0aW9uID0gKCkgPT4ge1xuICBjb25zdCBjb21wbGV0ZU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIGNvbXBsZXRlT3B0aW9uLnZhbHVlID0gXCJjb21wbGV0ZWRcIjtcbiAgY29tcGxldGVPcHRpb24udGV4dENvbnRlbnQgPSBcIkNvbXBsZXRlZFwiO1xuICByZXR1cm4gY29tcGxldGVPcHRpb247XG59O1xuXG5jb25zdCBjcmVhdGVJblByb2dyZXNzT3B0aW9uID0gKCkgPT4ge1xuICBjb25zdCBpblByb2dyZXNzT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgaW5Qcm9ncmVzc09wdGlvbi52YWx1ZSA9IFwiaW4tcHJvZ3Jlc3NcIjtcbiAgaW5Qcm9ncmVzc09wdGlvbi50ZXh0Q29udGVudCA9IFwiSW4gUHJvZ3Jlc3NcIjtcbiAgcmV0dXJuIGluUHJvZ3Jlc3NPcHRpb247XG59O1xuXG5jb25zdCBjcmVhdGVOb3RTdGFydGVkT3B0aW9uID0gKCkgPT4ge1xuICBjb25zdCBub3RTdGFydGVkT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgbm90U3RhcnRlZE9wdGlvbi52YWx1ZSA9IFwibm90LXN0YXJ0ZWRcIjtcbiAgbm90U3RhcnRlZE9wdGlvbi50ZXh0Q29udGVudCA9IFwiTm90IFN0YXJ0ZWRcIjtcbiAgcmV0dXJuIG5vdFN0YXJ0ZWRPcHRpb247XG59O1xuXG5jb25zdCBjcmVhdGVTb3J0T3B0Z3JvdXAgPSAoKSA9PiB7XG4gIGNvbnN0IHNvcnRPcHRncm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRncm91cFwiKTtcbiAgc29ydE9wdGdyb3VwLmxhYmVsID0gXCJTb3J0XCI7XG5cbiAgc29ydE9wdGdyb3VwLmFwcGVuZENoaWxkKGNyZWF0ZVByaW9yaXR5T3B0aW9uKCkpO1xuICBzb3J0T3B0Z3JvdXAuYXBwZW5kQ2hpbGQoY3JlYXRlRHVlRGF0ZU9wdGlvbigpKTtcblxuICByZXR1cm4gc29ydE9wdGdyb3VwO1xufTtcblxuY29uc3QgY3JlYXRlRmlsdGVyT3B0Z3JvdXAgPSAoKSA9PiB7XG4gIGNvbnN0IGZpbHRlck9wdGdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGdyb3VwXCIpO1xuICBmaWx0ZXJPcHRncm91cC5sYWJlbCA9IFwiRmlsdGVyXCI7XG5cbiAgZmlsdGVyT3B0Z3JvdXAuYXBwZW5kQ2hpbGQoY3JlYXRlQ29tcGxldGVPcHRpb24oKSk7XG4gIGZpbHRlck9wdGdyb3VwLmFwcGVuZENoaWxkKGNyZWF0ZUluUHJvZ3Jlc3NPcHRpb24oKSk7XG4gIGZpbHRlck9wdGdyb3VwLmFwcGVuZENoaWxkKGNyZWF0ZU5vdFN0YXJ0ZWRPcHRpb24oKSk7XG5cbiAgcmV0dXJuIGZpbHRlck9wdGdyb3VwO1xufTtcblxuZXhwb3J0IHsgY3JlYXRlT3JnYW5pemVCeU1lbnUgfTtcbiIsImltcG9ydCB7IGNyZWF0ZUNpcmN1bGFyUHJvZ3Jlc3NCYXIgfSBmcm9tIFwiLi9jcmVhdGVDaXJjdWxhclByb2dyZXNzQmFyLmpzXCI7XG5cbmNvbnN0IGNyZWF0ZVByb2dyZXNzQ29udGFpbmVyID0gKHBlcmNlbnRhZ2UsIHN0YXR1cykgPT4ge1xuICBjb25zdCBwcm9ncmVzc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHByb2dyZXNzSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuXG4gIHByb2dyZXNzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwcm9ncmVzcy1jb250YWluZXJcIik7XG4gIHByb2dyZXNzSGVhZGVyLnRleHRDb250ZW50ID0gc3RhdHVzO1xuXG4gIHByb2dyZXNzQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2dyZXNzSGVhZGVyKTtcbiAgcHJvZ3Jlc3NDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlQ2lyY3VsYXJQcm9ncmVzc0JhcihwZXJjZW50YWdlLCBzdGF0dXMpKTtcblxuICByZXR1cm4gcHJvZ3Jlc3NDb250YWluZXI7XG59O1xuXG5leHBvcnQgeyBjcmVhdGVQcm9ncmVzc0NvbnRhaW5lciB9O1xuIiwiaW1wb3J0IHsgaGFuZGxlUmVtb3ZlSXRlbUJ0biB9IGZyb20gXCIuLi9ldmVudEhhbmRsZXJzL2hhbmRsZVJlbW92ZUl0ZW1CdG4uanNcIjtcbmltcG9ydCB7IGhhbmRsZVJlbW92ZVByb2plY3RCdG4gfSBmcm9tIFwiLi4vZXZlbnRIYW5kbGVycy9oYW5kbGVSZW1vdmVQcm9qZWN0QnRuLmpzXCI7XG5cbmNvbnN0IGNyZWF0ZVJlbW92ZUl0ZW1CdG4gPSAocHJvamVjdCwgdG9kb0l0ZW0pID0+IHtcbiAgY29uc3QgcmVtb3ZlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgcmVtb3ZlQnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgcmVtb3ZlQnRuLnRleHRDb250ZW50ID0gXCJ4XCI7XG4gIHJlbW92ZUJ0bi5jbGFzc0xpc3QuYWRkKFwicmVtb3ZlLWl0ZW0tYnRuXCIpO1xuICByZW1vdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBoYW5kbGVSZW1vdmVJdGVtQnRuKHByb2plY3QsIHRvZG9JdGVtKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHJlbW92ZUJ0bjtcbn07XG5cbmNvbnN0IGRpc3BsYXlSZW1vdmVCdG4gPSAodGFza0VsZW1lbnQsIGNsYXNzTmFtZSkgPT4ge1xuICBjb25zdCByZW1vdmVCdG4gPSB0YXNrRWxlbWVudC5xdWVyeVNlbGVjdG9yKGAuJHtjbGFzc05hbWV9YCk7XG4gIHJlbW92ZUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xufTtcblxuY29uc3QgaGlkZVJlbW92ZUJ0biA9ICh0YXNrRWxlbWVudCwgY2xhc3NOYW1lKSA9PiB7XG4gIGNvbnN0IHJlbW92ZUJ0biA9IHRhc2tFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2NsYXNzTmFtZX1gKTtcbiAgcmVtb3ZlQnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn07XG5cbmNvbnN0IGNyZWF0ZVJlbW92ZVByb2plY3RCdG4gPSAocHJvamVjdCwgcHJvamVjdExpc3QpID0+IHtcbiAgY29uc3QgcmVtb3ZlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgcmVtb3ZlQnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgcmVtb3ZlQnRuLnRleHRDb250ZW50ID0gXCJ4XCI7XG4gIHJlbW92ZUJ0bi5jbGFzc0xpc3QuYWRkKFwicmVtb3ZlLXByb2plY3QtYnRuXCIpO1xuICByZW1vdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGhhbmRsZVJlbW92ZVByb2plY3RCdG4ocHJvamVjdCwgcHJvamVjdExpc3QpO1xuICB9KTtcblxuICByZXR1cm4gcmVtb3ZlQnRuO1xufTtcblxuZXhwb3J0IHtcbiAgY3JlYXRlUmVtb3ZlSXRlbUJ0bixcbiAgY3JlYXRlUmVtb3ZlUHJvamVjdEJ0bixcbiAgZGlzcGxheVJlbW92ZUJ0bixcbiAgaGlkZVJlbW92ZUJ0bixcbn07XG4iLCJpbXBvcnQgeyBjcmVhdGVQcm9ncmVzc0NvbnRhaW5lciB9IGZyb20gXCIuL2NyZWF0ZVByb2dyZXNzQ29udGFpbmVyLmpzXCI7XG5cbmNvbnN0IGNyZWF0ZVN0YXRzQ29udGFpbmVyID0gKFxuICBjb21wbGV0ZWRQZXJjZW50YWdlLFxuICBpblByb2dyZXNzUGVyY2VudGFnZSxcbiAgbm90U3RhcnRlZFBlcmNlbnRhZ2VcbikgPT4ge1xuICBjb25zdCBzdGF0c0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHN0YXRzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJzdGF0cy1jb250YWluZXJcIik7XG5cbiAgc3RhdHNDb250YWluZXIuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlUHJvZ3Jlc3NDb250YWluZXIoY29tcGxldGVkUGVyY2VudGFnZSwgXCJDb21wbGV0ZWRcIilcbiAgKTtcbiAgc3RhdHNDb250YWluZXIuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlUHJvZ3Jlc3NDb250YWluZXIoaW5Qcm9ncmVzc1BlcmNlbnRhZ2UsIFwiSW4gUHJvZ3Jlc3NcIilcbiAgKTtcbiAgc3RhdHNDb250YWluZXIuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlUHJvZ3Jlc3NDb250YWluZXIobm90U3RhcnRlZFBlcmNlbnRhZ2UsIFwiTm90IFN0YXJ0ZWRcIilcbiAgKTtcblxuICByZXR1cm4gc3RhdHNDb250YWluZXI7XG59O1xuXG5leHBvcnQgeyBjcmVhdGVTdGF0c0NvbnRhaW5lciB9O1xuIiwiaW1wb3J0IHsgaGFuZGxlQ29tcGxldGVkQ2hlY2tib3ggfSBmcm9tIFwiLi4vZXZlbnRIYW5kbGVycy9oYW5kbGVDb21wbGV0ZWRDaGVja2JveC5qc1wiO1xuaW1wb3J0IHsgaGFuZGxlSW5Qcm9ncmVzc1JhZGlvQm94IH0gZnJvbSBcIi4uL2V2ZW50SGFuZGxlcnMvaGFuZGxlSW5Qcm9ncmVzc1JhZGlvQm94LmpzXCI7XG5pbXBvcnQgeyBoYW5kbGVQcmlvcml0eVNlbGVjdGlvbiB9IGZyb20gXCIuLi9ldmVudEhhbmRsZXJzL2hhbmRsZVByaW9yaXR5U2VsZWN0aW9uLmpzXCI7XG5pbXBvcnQge1xuICBoYW5kbGVUYXNrVGl0bGVCbHVyLFxuICBoYW5kbGVUYXNrVGl0bGVLZXlEb3duLFxufSBmcm9tIFwiLi4vZXZlbnRIYW5kbGVycy9oYW5kbGVUYXNrVGl0bGUuanNcIjtcbmltcG9ydCB7XG4gIGhhbmRsZVRhc2tEZXNjcmlwdGlvbkJsdXIsXG4gIGhhbmRsZVRhc2tEZXNjcmlwdGlvbktleURvd24sXG59IGZyb20gXCIuLi9ldmVudEhhbmRsZXJzL2hhbmRsZVRhc2tEZXNjcmlwdGlvbi5qc1wiO1xuaW1wb3J0IHsgc2hvd0RhdGVQaWNrZXIgfSBmcm9tIFwiLi4vZXZlbnRIYW5kbGVycy9oYW5kbGVEdWVEYXRlQ2hhbmdlLmpzXCI7XG5pbXBvcnQgeyBkdWVPbk1vbnRoU3RyaW5nRGF0ZSB9IGZyb20gXCIuLi9oZWxwZXJzL2RhdGVGb3JtYXR0ZXIuanNcIjtcbmltcG9ydCB7XG4gIGNyZWF0ZVJlbW92ZUl0ZW1CdG4sXG4gIGRpc3BsYXlSZW1vdmVCdG4sXG4gIGhpZGVSZW1vdmVCdG4sXG59IGZyb20gXCIuL2NyZWF0ZVJlbW92ZUJ0bi5qc1wiO1xuaW1wb3J0IHsgZHVlSW5EYXlzU3RyaW5nIH0gZnJvbSBcIi4uL2hlbHBlcnMvZGF0ZUZvcm1hdHRlci5qc1wiO1xuaW1wb3J0IHsgY3JlYXRlUHJvamVjdFBhZ2UgfSBmcm9tIFwiLi4vcGFnZXMvcHJvamVjdFBhZ2UuanNcIjtcbmltcG9ydCBjcmVhdGVIb21lUGFnZSBmcm9tIFwiLi4vcGFnZXMvaG9tZVBhZ2UuanNcIjtcblxuY29uc3QgY3JlYXRlVGFza0VsZW1lbnQgPSAocHJvamVjdCwgdG9kb0l0ZW0pID0+IHtcbiAgY29uc3QgdGFza0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0YXNrRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwidG9kby1saXN0LWl0ZW1cIik7XG5cbiAgdGFza0VsZW1lbnQuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlQ29tcGxldGVkQ2hlY2tib3gocHJvamVjdCwgdGFza0VsZW1lbnQsIHRvZG9JdGVtKVxuICApO1xuICB0YXNrRWxlbWVudC5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVUYXNrSW5mb0NvbnRhaW5lcihwcm9qZWN0LCB0YXNrRWxlbWVudCwgdG9kb0l0ZW0pXG4gICk7XG4gIHRhc2tFbGVtZW50LmFwcGVuZENoaWxkKGNyZWF0ZUR1ZURhdGVUZXh0KHByb2plY3QsIHRhc2tFbGVtZW50LCB0b2RvSXRlbSkpO1xuICB0YXNrRWxlbWVudC5hcHBlbmRDaGlsZChjcmVhdGVQcmlvcml0eVNlbGVjdChwcm9qZWN0LCB0YXNrRWxlbWVudCwgdG9kb0l0ZW0pKTtcbiAgdGFza0VsZW1lbnQuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlSW5Qcm9ncmVzc1JhZGlvQm94KHByb2plY3QsIHRhc2tFbGVtZW50LCB0b2RvSXRlbSlcbiAgKTtcbiAgdGFza0VsZW1lbnQuYXBwZW5kQ2hpbGQoY3JlYXRlUmVtb3ZlSXRlbUJ0bihwcm9qZWN0LCB0b2RvSXRlbSkpO1xuXG4gIHRhc2tFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKCkgPT4ge1xuICAgIGRpc3BsYXlSZW1vdmVCdG4odGFza0VsZW1lbnQsIFwicmVtb3ZlLWl0ZW0tYnRuXCIpO1xuICB9KTtcblxuICB0YXNrRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgKCkgPT4ge1xuICAgIGhpZGVSZW1vdmVCdG4odGFza0VsZW1lbnQsIFwicmVtb3ZlLWl0ZW0tYnRuXCIpO1xuICB9KTtcblxuICByZXR1cm4gdGFza0VsZW1lbnQ7XG59O1xuXG5jb25zdCBjcmVhdGVUYXNrSW5mb0NvbnRhaW5lciA9IChwcm9qZWN0LCB0YXNrRWxlbWVudCwgdG9kb0l0ZW0pID0+IHtcbiAgY29uc3QgdGFza0luZm9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0YXNrSW5mb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGFzay1pbmZvLWNvbnRhaW5lclwiKTtcbiAgdGFza0luZm9Db250YWluZXIuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlVGFza1RpdGxlKHByb2plY3QsIHRhc2tFbGVtZW50LCB0b2RvSXRlbSlcbiAgKTtcbiAgdGFza0luZm9Db250YWluZXIuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlVGFza0Rlc2NyaXB0aW9uKHByb2plY3QsIHRhc2tFbGVtZW50LCB0b2RvSXRlbSlcbiAgKTtcblxuICByZXR1cm4gdGFza0luZm9Db250YWluZXI7XG59O1xuXG5jb25zdCBjcmVhdGVDb21wbGV0ZWRDaGVja2JveCA9IChwcm9qZWN0LCB0YXNrRWxlbWVudCwgdG9kb0l0ZW0pID0+IHtcbiAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGxhYmVsLmNsYXNzTGlzdC5hZGQoXCJjdXN0b20tY2hlY2tib3hcIik7XG5cbiAgY29uc3QgY29tcGxldGVkQ2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGNvbXBsZXRlZENoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCI7XG4gIGNvbXBsZXRlZENoZWNrYm94LmNoZWNrZWQgPSB0b2RvSXRlbS5nZXRDb21wbGV0ZWRTdGF0dXMoKTtcblxuICBhcHBseUNvbXBsZXRlZENsYXNzKHRhc2tFbGVtZW50LCB0b2RvSXRlbSk7XG5cbiAgY29tcGxldGVkQ2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBoYW5kbGVDb21wbGV0ZWRDaGVja2JveChwcm9qZWN0LCB0YXNrRWxlbWVudCwgdG9kb0l0ZW0pO1xuICB9KTtcblxuICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHNwYW4uY2xhc3NMaXN0LmFkZChcImNoZWNrbWFya1wiKTtcblxuICBsYWJlbC5hcHBlbmRDaGlsZChjb21wbGV0ZWRDaGVja2JveCk7XG4gIGxhYmVsLmFwcGVuZENoaWxkKHNwYW4pO1xuXG4gIHJldHVybiBsYWJlbDtcbn07XG5cbmNvbnN0IGFwcGx5Q29tcGxldGVkQ2xhc3MgPSAodGFza0VsZW1lbnQsIHRvZG9JdGVtKSA9PiB7XG4gIGlmICh0b2RvSXRlbS5nZXRDb21wbGV0ZWRTdGF0dXMoKSkge1xuICAgIHRhc2tFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJjb21wbGV0ZWQtY2hlY2tlZFwiKTtcbiAgfSBlbHNlIHtcbiAgICB0YXNrRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiY29tcGxldGVkLWNoZWNrZWRcIik7XG4gIH1cbn07XG5cbmNvbnN0IGNyZWF0ZVRhc2tUaXRsZSA9IChwcm9qZWN0LCB0YXNrRWxlbWVudCwgdG9kb0l0ZW0pID0+IHtcbiAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xuICB0YXNrVGl0bGUuY2xhc3NMaXN0LmFkZChcInRhc2stdGl0bGVcIik7XG4gIHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IHRvZG9JdGVtLmdldFRpdGxlKCk7XG4gIHRhc2tUaXRsZS5jb250ZW50RWRpdGFibGUgPSB0cnVlO1xuICB0YXNrVGl0bGUuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgKCkgPT5cbiAgICBoYW5kbGVUYXNrVGl0bGVCbHVyKHByb2plY3QsIHRhc2tFbGVtZW50LCB0b2RvSXRlbSwgdGFza1RpdGxlKVxuICApO1xuICB0YXNrVGl0bGUuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGV2ZW50KSA9PlxuICAgIGhhbmRsZVRhc2tUaXRsZUtleURvd24oZXZlbnQsIHRhc2tUaXRsZSlcbiAgKTtcblxuICB0YXNrVGl0bGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICB0YXNrVGl0bGUuY2xhc3NMaXN0LnRvZ2dsZShcImV4cGFuZGVkXCIpO1xuICB9KTtcblxuICByZXR1cm4gdGFza1RpdGxlO1xufTtcblxuY29uc3QgY3JlYXRlVGFza0Rlc2NyaXB0aW9uID0gKHByb2plY3QsIHRhc2tFbGVtZW50LCB0b2RvSXRlbSkgPT4ge1xuICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0YXNrRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcInRhc2stZGVzY3JpcHRpb25cIik7XG4gIHRhc2tEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHRvZG9JdGVtLmdldERlc2NyaXB0aW9uKCk7XG4gIHRhc2tEZXNjcmlwdGlvbi5jb250ZW50RWRpdGFibGUgPSB0cnVlO1xuICB0YXNrRGVzY3JpcHRpb24uYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgKCkgPT5cbiAgICBoYW5kbGVUYXNrRGVzY3JpcHRpb25CbHVyKHByb2plY3QsIHRhc2tFbGVtZW50LCB0b2RvSXRlbSwgdGFza0Rlc2NyaXB0aW9uKVxuICApO1xuXG4gIHRhc2tEZXNjcmlwdGlvbi5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZXZlbnQpID0+XG4gICAgaGFuZGxlVGFza0Rlc2NyaXB0aW9uS2V5RG93bihldmVudCwgdGFza0Rlc2NyaXB0aW9uKVxuICApO1xuXG4gIHRhc2tEZXNjcmlwdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHRhc2tEZXNjcmlwdGlvbi5jbGFzc0xpc3QudG9nZ2xlKFwiZXhwYW5kZWRcIik7XG4gIH0pO1xuXG4gIHJldHVybiB0YXNrRGVzY3JpcHRpb247XG59O1xuXG5jb25zdCBjcmVhdGVEdWVEYXRlVGV4dCA9IChwcm9qZWN0LCB0YXNrRWxlbWVudCwgdG9kb0l0ZW0pID0+IHtcbiAgY29uc3QgZGF0ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGR1ZURhdGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cbiAgZGF0ZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZHVlLWRhdGUtY29udGFpbmVyXCIpO1xuICBkdWVEYXRlVGV4dC50ZXh0Q29udGVudCA9IGR1ZU9uTW9udGhTdHJpbmdEYXRlKHRvZG9JdGVtLmdldER1ZURhdGUoKSk7XG5cbiAgZHVlRGF0ZVRleHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+XG4gICAgc2hvd0RhdGVQaWNrZXIocHJvamVjdCwgdGFza0VsZW1lbnQsIHRvZG9JdGVtLCBkYXRlQ29udGFpbmVyKVxuICApO1xuICBkYXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKGR1ZURhdGVUZXh0KTtcbiAgcmV0dXJuIGRhdGVDb250YWluZXI7XG59O1xuXG5jb25zdCBjcmVhdGVJblByb2dyZXNzUmFkaW9Cb3ggPSAocHJvamVjdCwgdGFza0VsZW1lbnQsIHRvZG9JdGVtKSA9PiB7XG4gIGNvbnN0IGluUHJvZ3Jlc3NXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaW5Qcm9ncmVzc1dyYXBwZXIuY2xhc3NMaXN0LmFkZChcImluLXByb2dyZXNzLXJhZGlvLWNvbnRhaW5lclwiKTtcblxuICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgbGFiZWwuY2xhc3NMaXN0LmFkZChcImN1c3RvbS1yYWRpby1ib3hcIik7XG5cbiAgY29uc3QgaW5Qcm9ncmVzc1JhZGlvQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBpblByb2dyZXNzUmFkaW9Cb3gudHlwZSA9IFwicmFkaW9cIjtcbiAgaW5Qcm9ncmVzc1JhZGlvQm94LmNoZWNrZWQgPSB0b2RvSXRlbS5nZXRJblByb2dyZXNzU3RhdHVzKCk7XG5cbiAgYXBwbHlJblByb2dyZXNzQ2xhc3ModGFza0VsZW1lbnQsIHRvZG9JdGVtKTtcblxuICBjb25zdCBpblByb2dyZXNzVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBpblByb2dyZXNzVGV4dC50ZXh0Q29udGVudCA9IFwiSW4gUHJvZ3Jlc3NcIjtcbiAgaW5Qcm9ncmVzc1RleHQuY2xhc3NMaXN0LmFkZChcImluLXByb2dyZXNzLXRleHRcIik7XG5cbiAgdXBkYXRlSW5Qcm9ncmVzc1RleHQoaW5Qcm9ncmVzc1JhZGlvQm94LmNoZWNrZWQsIGluUHJvZ3Jlc3NUZXh0KTtcblxuICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHNwYW4uY2xhc3NMaXN0LmFkZChcImNoZWNrZG90XCIpO1xuXG4gIGluUHJvZ3Jlc3NSYWRpb0JveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGhhbmRsZUluUHJvZ3Jlc3NSYWRpb0JveChwcm9qZWN0LCB0YXNrRWxlbWVudCwgdG9kb0l0ZW0pO1xuICAgIHVwZGF0ZUluUHJvZ3Jlc3NUZXh0KGluUHJvZ3Jlc3NSYWRpb0JveC5jaGVja2VkLCBpblByb2dyZXNzVGV4dCk7XG4gIH0pO1xuXG4gIGxhYmVsLmFwcGVuZENoaWxkKGluUHJvZ3Jlc3NSYWRpb0JveCk7XG4gIGxhYmVsLmFwcGVuZENoaWxkKHNwYW4pO1xuXG4gIGluUHJvZ3Jlc3NXcmFwcGVyLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgaW5Qcm9ncmVzc1dyYXBwZXIuYXBwZW5kQ2hpbGQoaW5Qcm9ncmVzc1RleHQpO1xuXG4gIHJldHVybiBpblByb2dyZXNzV3JhcHBlcjtcbn07XG5cbmNvbnN0IGFwcGx5SW5Qcm9ncmVzc0NsYXNzID0gKHRhc2tFbGVtZW50LCB0b2RvSXRlbSkgPT4ge1xuICBpZiAodG9kb0l0ZW0uZ2V0SW5Qcm9ncmVzc1N0YXR1cygpKSB7XG4gICAgdGFza0VsZW1lbnQuY2xhc3NMaXN0LmFkZChcImluLXByb2dyZXNzLWNoZWNrZWRcIik7XG4gIH0gZWxzZSB7XG4gICAgdGFza0VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImluLXByb2dyZXNzLWNoZWNrZWRcIik7XG4gIH1cbn07XG5cbmNvbnN0IHVwZGF0ZUluUHJvZ3Jlc3NUZXh0ID0gKGJveENoZWNrZWRTdGF0dXMsIGluUHJvZ3Jlc3NUZXh0KSA9PiB7XG4gIGlmIChib3hDaGVja2VkU3RhdHVzKSB7XG4gICAgaW5Qcm9ncmVzc1RleHQuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lXCI7XG4gIH0gZWxzZSB7XG4gICAgaW5Qcm9ncmVzc1RleHQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9XG59O1xuXG5jb25zdCBjcmVhdGVQcmlvcml0eVNlbGVjdCA9IChwcm9qZWN0LCB0YXNrRWxlbWVudCwgdG9kb0l0ZW0pID0+IHtcbiAgY29uc3QgaXRlbVByaW9yaXR5V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHByaW9yaXR5U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcblxuICBpdGVtUHJpb3JpdHlXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eS1jb250YWluZXJcIik7XG4gIHByaW9yaXR5U2VsZWN0LmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eS1zZWxlY3RcIik7XG5cbiAgY29uc3QgcHJpb3JpdHlWYWx1ZSA9IHRvZG9JdGVtLmdldFByaW9yaXR5U3RhdHVzKCk7XG4gIGNvbnN0IHNlbGVjdGVkU3RyaW5nID0gdG9kb0l0ZW0uZ2V0UHJpb3JpdHlTdHJpbmdTdGF0dXMocHJpb3JpdHlWYWx1ZSk7XG4gIGFwcGx5UHJpb3JpdHlDbGFzcyh0YXNrRWxlbWVudCwgdG9kb0l0ZW0pO1xuXG4gIHByaW9yaXR5U2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGV2ZW50KSA9PlxuICAgIGhhbmRsZVByaW9yaXR5U2VsZWN0aW9uKGV2ZW50LCBwcm9qZWN0LCB0YXNrRWxlbWVudCwgdG9kb0l0ZW0pXG4gICk7XG5cbiAgcHJpb3JpdHlTZWxlY3QuYXBwZW5kQ2hpbGQoY3JlYXRlTG93T3B0aW9uKHNlbGVjdGVkU3RyaW5nKSk7XG4gIHByaW9yaXR5U2VsZWN0LmFwcGVuZENoaWxkKGNyZWF0ZU1lZGl1bU9wdGlvbihzZWxlY3RlZFN0cmluZykpO1xuICBwcmlvcml0eVNlbGVjdC5hcHBlbmRDaGlsZChjcmVhdGVIaWdoT3B0aW9uKHNlbGVjdGVkU3RyaW5nKSk7XG4gIGl0ZW1Qcmlvcml0eVdyYXBwZXIuYXBwZW5kQ2hpbGQocHJpb3JpdHlTZWxlY3QpO1xuXG4gIHJldHVybiBpdGVtUHJpb3JpdHlXcmFwcGVyO1xufTtcblxuY29uc3QgYXBwbHlTZWxlY3RlZCA9IChzZWxlY3RlZFN0cmluZywgbG93T3B0aW9uKSA9PiB7XG4gIHJldHVybiBzZWxlY3RlZFN0cmluZyA9PT0gbG93T3B0aW9uO1xufTtcblxuY29uc3QgY3JlYXRlTG93T3B0aW9uID0gKHNlbGVjdGVkU3RyaW5nKSA9PiB7XG4gIGNvbnN0IGxvd09wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIGxvd09wdGlvbi50ZXh0Q29udGVudCA9IFwiTG93XCI7XG4gIGNvbnN0IG9wdGlvblN0cmluZyA9IGxvd09wdGlvbi50ZXh0Q29udGVudC50b0xvd2VyQ2FzZSgpO1xuICBsb3dPcHRpb24uc2VsZWN0ZWQgPSBhcHBseVNlbGVjdGVkKHNlbGVjdGVkU3RyaW5nLCBvcHRpb25TdHJpbmcpO1xuICByZXR1cm4gbG93T3B0aW9uO1xufTtcblxuY29uc3QgY3JlYXRlTWVkaXVtT3B0aW9uID0gKHNlbGVjdGVkU3RyaW5nKSA9PiB7XG4gIGNvbnN0IG1lZGl1bU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIG1lZGl1bU9wdGlvbi50ZXh0Q29udGVudCA9IFwiTWVkaXVtXCI7XG4gIGNvbnN0IG9wdGlvblN0cmluZyA9IG1lZGl1bU9wdGlvbi50ZXh0Q29udGVudC50b0xvd2VyQ2FzZSgpO1xuICBtZWRpdW1PcHRpb24uc2VsZWN0ZWQgPSBhcHBseVNlbGVjdGVkKHNlbGVjdGVkU3RyaW5nLCBvcHRpb25TdHJpbmcpO1xuICByZXR1cm4gbWVkaXVtT3B0aW9uO1xufTtcblxuY29uc3QgY3JlYXRlSGlnaE9wdGlvbiA9IChzZWxlY3RlZFN0cmluZykgPT4ge1xuICBjb25zdCBoaWdoT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgaGlnaE9wdGlvbi50ZXh0Q29udGVudCA9IFwiSGlnaFwiO1xuICBjb25zdCBvcHRpb25TdHJpbmcgPSBoaWdoT3B0aW9uLnRleHRDb250ZW50LnRvTG93ZXJDYXNlKCk7XG4gIGhpZ2hPcHRpb24uc2VsZWN0ZWQgPSBhcHBseVNlbGVjdGVkKHNlbGVjdGVkU3RyaW5nLCBvcHRpb25TdHJpbmcpO1xuICByZXR1cm4gaGlnaE9wdGlvbjtcbn07XG5cbmNvbnN0IGFwcGx5UHJpb3JpdHlDbGFzcyA9ICh0YXNrRWxlbWVudCwgdG9kb0l0ZW0pID0+IHtcbiAgdGFza0VsZW1lbnQuY2xhc3NMaXN0LmFkZChgcHJpb3JpdHktJHt0b2RvSXRlbS5nZXRQcmlvcml0eVN0YXR1cygpfWApO1xufTtcblxuY29uc3QgY3JlYXRlVGltZVNlbnNpdGl2ZVRhc2tFbGVtZW50ID0gKHRhc2ssIHByb2plY3QsIGNsYXNzTmFtZSkgPT4ge1xuICBjb25zdCB0YXNrRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGFwcGx5UHJpb3JpdHlDbGFzcyh0YXNrRWxlbWVudCwgdGFzayk7XG4gIHRhc2tFbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgY29uc3QgdGFza1RpdGxlID0gdGFzay5nZXRUaXRsZSgpO1xuICBjb25zdCB0YXNrRHVlRGF0ZSA9IHRhc2suZ2V0RHVlRGF0ZSgpO1xuXG4gIGNvbnN0IHRpdGxlVGV4dCA9IGNyZWF0ZVNlbnNpdGl2ZVRhc2tUaXRsZSh0YXNrVGl0bGUpO1xuICBjb25zdCBkdWVEYXRlVGV4dCA9IGNyZWF0ZVNlbnNpdGl2ZUR1ZURhdGVUZXh0KHRhc2tEdWVEYXRlKTtcbiAgdGFza0VsZW1lbnQuYXBwZW5kQ2hpbGQodGl0bGVUZXh0KTtcbiAgdGFza0VsZW1lbnQuYXBwZW5kQ2hpbGQoZHVlRGF0ZVRleHQpO1xuXG4gIHRhc2tFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY3JlYXRlUHJvamVjdFBhZ2UocHJvamVjdCwgY3JlYXRlSG9tZVBhZ2UpO1xuICB9KTtcbiAgcmV0dXJuIHRhc2tFbGVtZW50O1xufTtcblxuY29uc3QgY3JlYXRlU2Vuc2l0aXZlVGFza1RpdGxlID0gKHRhc2tUaXRsZSkgPT4ge1xuICBjb25zdCB0aXRsZVRleHRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0aXRsZVRleHRDb250YWluZXIudGV4dENvbnRlbnQgPSB0YXNrVGl0bGU7XG4gIHJldHVybiB0aXRsZVRleHRDb250YWluZXI7XG59O1xuXG5jb25zdCBjcmVhdGVTZW5zaXRpdmVEdWVEYXRlVGV4dCA9ICh0YXNrRHVlRGF0ZSkgPT4ge1xuICBjb25zdCBkYXRlVGV4dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRhdGVUZXh0Q29udGFpbmVyLnRleHRDb250ZW50ID0gZHVlSW5EYXlzU3RyaW5nKHRhc2tEdWVEYXRlKTtcbiAgcmV0dXJuIGRhdGVUZXh0Q29udGFpbmVyO1xufTtcblxuZXhwb3J0IHsgY3JlYXRlVGFza0VsZW1lbnQsIGNyZWF0ZVRpbWVTZW5zaXRpdmVUYXNrRWxlbWVudCB9O1xuIiwiaW1wb3J0IHtcbiAgY3JlYXRlVGFza0VsZW1lbnQsXG4gIGNyZWF0ZVRpbWVTZW5zaXRpdmVUYXNrRWxlbWVudCxcbn0gZnJvbSBcIi4vY3JlYXRlVGFza0VsZW1lbnQuanNcIjtcbmltcG9ydCB7IHJlbmRlck5vVGFza3NNZXNzYWdlIH0gZnJvbSBcIi4vY3JlYXRlTm9UYXNrc01lc3NhZ2UuanNcIjtcblxuY29uc3QgY3JlYXRlVGFza1RhYmxlID0gKHByb2plY3QsIHRvZG9JdGVtcykgPT4ge1xuICBjb25zdCB0YXNrVGFibGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0YXNrVGFibGVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRhc2tzLXRhYmxlLWNvbnRhaW5lclwiKTtcblxuICBpZiAodG9kb0l0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgIHJlbmRlck5vVGFza3NNZXNzYWdlKHRhc2tUYWJsZUNvbnRhaW5lcik7XG4gIH0gZWxzZSB7XG4gICAgdG9kb0l0ZW1zLmZvckVhY2goKHRvZG9JdGVtKSA9PiB7XG4gICAgICBjb25zdCB0b2RvRWxlbWVudCA9IGNyZWF0ZVRhc2tFbGVtZW50KHByb2plY3QsIHRvZG9JdGVtKTtcbiAgICAgIHRhc2tUYWJsZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvRWxlbWVudCk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gdGFza1RhYmxlQ29udGFpbmVyO1xufTtcblxuY29uc3QgY3JlYXRlRHVlU29vblRhc2tUYWJsZSA9IChkdWVTb29uVGFza0xpc3QpID0+IHtcbiAgY29uc3QgdGFza1RhYmxlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGFza1RhYmxlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJkdWUtc29vbi10YWJsZS1jb250YWluZXJcIik7XG4gIGR1ZVNvb25UYXNrTGlzdC5mb3JFYWNoKCh7IHRhc2ssIHByb2plY3QgfSkgPT4ge1xuICAgIGNvbnN0IGR1ZVNvb25FbGVtZW50ID0gY3JlYXRlVGltZVNlbnNpdGl2ZVRhc2tFbGVtZW50KFxuICAgICAgdGFzayxcbiAgICAgIHByb2plY3QsXG4gICAgICBcImR1ZS1zb29uLWxpc3QtaXRlbVwiXG4gICAgKTtcbiAgICB0YXNrVGFibGVDb250YWluZXIuYXBwZW5kQ2hpbGQoZHVlU29vbkVsZW1lbnQpO1xuICB9KTtcbiAgcmV0dXJuIHRhc2tUYWJsZUNvbnRhaW5lcjtcbn07XG5cbmNvbnN0IGNyZWF0ZU92ZXJkdWVUYXNrVGFibGUgPSAob3ZlcmR1ZVRhc2tMaXN0KSA9PiB7XG4gIGNvbnN0IHRhc2tUYWJsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRhc2tUYWJsZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwib3ZlcmR1ZS10YWJsZS1jb250YWluZXJcIik7XG4gIG92ZXJkdWVUYXNrTGlzdC5mb3JFYWNoKCh7IHRhc2ssIHByb2plY3QgfSkgPT4ge1xuICAgIGNvbnN0IG92ZXJkdWVFbGVtZW50ID0gY3JlYXRlVGltZVNlbnNpdGl2ZVRhc2tFbGVtZW50KFxuICAgICAgdGFzayxcbiAgICAgIHByb2plY3QsXG4gICAgICBcIm92ZXJkdWUtbGlzdC1pdGVtXCJcbiAgICApO1xuICAgIHRhc2tUYWJsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChvdmVyZHVlRWxlbWVudCk7XG4gIH0pO1xuICByZXR1cm4gdGFza1RhYmxlQ29udGFpbmVyO1xufTtcblxuZXhwb3J0IHsgY3JlYXRlVGFza1RhYmxlLCBjcmVhdGVEdWVTb29uVGFza1RhYmxlLCBjcmVhdGVPdmVyZHVlVGFza1RhYmxlIH07XG4iLCJpbXBvcnQge1xuICBjcmVhdGVEdWVTb29uVGFza1RhYmxlLFxuICBjcmVhdGVPdmVyZHVlVGFza1RhYmxlLFxufSBmcm9tIFwiLi9jcmVhdGVUYXNrVGFibGUuanNcIjtcbmltcG9ydCB7IGNyZWF0ZVByb2plY3RMaXN0RnJvbURhdGEgfSBmcm9tIFwiLi4vc2VydmljZXMvcHJvamVjdExpc3RGYWN0b3J5LmpzXCI7XG5cbmNvbnN0IGNyZWF0ZUR1ZVNvb25Db250YWluZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGR1ZVNvb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkdWVTb29uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJkdWUtc29vbi1jb250YWluZXJcIik7XG5cbiAgY29uc3QgY29udGFpbmVySGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xuICBjb250YWluZXJIZWFkZXIudGV4dENvbnRlbnQgPSBcIlRhc2tzIER1ZSBTb29uXCI7XG4gIGNvbnN0IHByb2plY3RMaXN0ID0gY3JlYXRlUHJvamVjdExpc3RGcm9tRGF0YSgpO1xuICBjb25zdCBkdWVTb29uVGFza0xpc3QgPSBwcm9qZWN0TGlzdC5nZXREdWVTb29uVGFza3MoKTtcblxuICBjb25zdCBkdWVTb29uVGFza1RhYmxlID0gY3JlYXRlRHVlU29vblRhc2tUYWJsZShkdWVTb29uVGFza0xpc3QpO1xuXG4gIGR1ZVNvb25Db250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFpbmVySGVhZGVyKTtcbiAgZHVlU29vbkNvbnRhaW5lci5hcHBlbmRDaGlsZChkdWVTb29uVGFza1RhYmxlKTtcbiAgcmV0dXJuIGR1ZVNvb25Db250YWluZXI7XG59O1xuXG5jb25zdCBjcmVhdGVPdmVyZHVlQ29udGFpbmVyID0gKCkgPT4ge1xuICBjb25zdCBvdmVyZHVlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgb3ZlcmR1ZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwib3ZlcmR1ZS1jb250YWluZXJcIik7XG5cbiAgY29uc3QgY29udGFpbmVySGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xuICBjb250YWluZXJIZWFkZXIudGV4dENvbnRlbnQgPSBcIk92ZXJkdWUgVGFza3NcIjtcbiAgY29uc3QgcHJvamVjdExpc3QgPSBjcmVhdGVQcm9qZWN0TGlzdEZyb21EYXRhKCk7XG4gIGNvbnN0IGR1ZVNvb25UYXNrTGlzdCA9IHByb2plY3RMaXN0LmdldE92ZXJkdWVUYXNrcygpO1xuXG4gIGNvbnN0IG92ZXJkdWVUYXNrVGFibGUgPSBjcmVhdGVPdmVyZHVlVGFza1RhYmxlKGR1ZVNvb25UYXNrTGlzdCk7XG5cbiAgb3ZlcmR1ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWluZXJIZWFkZXIpO1xuICBvdmVyZHVlQ29udGFpbmVyLmFwcGVuZENoaWxkKG92ZXJkdWVUYXNrVGFibGUpO1xuICByZXR1cm4gb3ZlcmR1ZUNvbnRhaW5lcjtcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZUR1ZVNvb25Db250YWluZXIsIGNyZWF0ZU92ZXJkdWVDb250YWluZXIgfTtcbiIsImNvbnN0IGNyZWF0ZVBhZ2VIZWFkZXIgPSAocHJvamVjdE5hbWUpID0+IHtcbiAgY29uc3QgcGFnZUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgcGFnZUhlYWRlci50ZXh0Q29udGVudCA9IHByb2plY3ROYW1lO1xuXG4gIHJldHVybiBwYWdlSGVhZGVyO1xufTtcblxuY29uc3QgY3JlYXRlUHJvamVjdFBhZ2VIZWFkZXJJbWcgPSAocGF0aCkgPT4ge1xuICBjb25zdCBjYXJ0b29uSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBjYXJ0b29uSW1hZ2UuY2xhc3NMaXN0LmFkZChcInRpdGxlLWltZ1wiKTtcbiAgaWYgKHBhdGguc3RhcnRzV2l0aChcImRhdGE6aW1hZ2UvXCIpKSB7XG4gICAgY2FydG9vbkltYWdlLnNyYyA9IHBhdGg7XG4gIH0gZWxzZSB7XG4gICAgY2FydG9vbkltYWdlLnNyYyA9IHJlcXVpcmUoYC4uL2Fzc2V0cy9pbWFnZXMvJHtwYXRofWApO1xuICB9XG4gIHJldHVybiBjYXJ0b29uSW1hZ2U7XG59O1xuXG5jb25zdCBjcmVhdGVBbGxQcm9qZWN0UGFnZUhlYWRlckltZyA9ICgpID0+IHtcbiAgY29uc3QgY2FydG9vbkltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgY2FydG9vbkltYWdlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZS1pbWdcIik7XG4gIGNhcnRvb25JbWFnZS5zcmMgPSByZXF1aXJlKFwiLi4vYXNzZXRzL2ltYWdlcy9raXR0ZW4taW4taG9sZS5wbmdcIik7XG5cbiAgcmV0dXJuIGNhcnRvb25JbWFnZTtcbn07XG5cbmV4cG9ydCB7XG4gIGNyZWF0ZVBhZ2VIZWFkZXIsXG4gIGNyZWF0ZVByb2plY3RQYWdlSGVhZGVySW1nLFxuICBjcmVhdGVBbGxQcm9qZWN0UGFnZUhlYWRlckltZyxcbn07XG4iLCJpbXBvcnQgeyBjcmVhdGVPcmdhbml6ZUJ5TWVudSB9IGZyb20gXCIuL2NyZWF0ZU9yZ2FuaXplQnlNZW51LmpzXCI7XG5pbXBvcnQgeyBjcmVhdGVUYXNrVGFibGUgfSBmcm9tIFwiLi9jcmVhdGVUYXNrVGFibGUuanNcIjtcbmltcG9ydCB7IGNyZWF0ZUFkZFRhc2tCdG4gfSBmcm9tIFwiLi9jcmVhdGVBZGRUYXNrQnRuLmpzXCI7XG5cbmNvbnN0IGNyZWF0ZVRvZG9MaXN0Q29udGFpbmVyID0gKHByb2plY3QsIHRvZG9MaXN0LCB0b2RvSXRlbXMpID0+IHtcbiAgY29uc3QgdG9kb0xpc3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0b2RvTGlzdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidG9kby1saXN0LWNvbnRhaW5lclwiKTtcblxuICB0b2RvTGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVPcmdhbml6ZUJ5TWVudShwcm9qZWN0LCB0b2RvTGlzdCkpO1xuICB0b2RvTGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVBZGRUYXNrQnRuKHByb2plY3QpKTtcbiAgdG9kb0xpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlVGFza1RhYmxlKHByb2plY3QsIHRvZG9JdGVtcykpO1xuICByZXR1cm4gdG9kb0xpc3RDb250YWluZXI7XG59O1xuXG5leHBvcnQgeyBjcmVhdGVUb2RvTGlzdENvbnRhaW5lciB9O1xuIiwiaW1wb3J0IHsgZGlzcGxheU1vZGFsLCBhZGRPdmVybGF5IH0gZnJvbSBcIi4uL2hlbHBlcnMvbW9kYWxIZWxwZXJzLmpzXCI7XG5cbmNvbnN0IGNyZWF0ZUF0dHJpYnV0aW9uc01vZGFsID0gKCkgPT4ge1xuICBjb25zdCBhdHRyaWJ1dGlvbk1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYXR0cmlidXRpb25UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgY29uc3QgYXR0cmlidXRpb25MaXN0ID0gYXR0cmlidXRpb25zVW5vcmRlcmVkTGlzdCgpO1xuXG4gIGF0dHJpYnV0aW9uVGl0bGUudGV4dENvbnRlbnQgPSBcIkltYWdlIEF0dHJpYnV0aW9uc1wiO1xuXG4gIGF0dHJpYnV0aW9uTW9kYWwuY2xhc3NMaXN0LmFkZChcImF0dHJpYnV0aW9uLW1vZGFsXCIpO1xuXG4gIGF0dHJpYnV0aW9uTW9kYWwuYXBwZW5kQ2hpbGQoYXR0cmlidXRpb25UaXRsZSk7XG4gIGF0dHJpYnV0aW9uTW9kYWwuYXBwZW5kQ2hpbGQoYXR0cmlidXRpb25MaXN0KTtcblxuICByZXR1cm4gYXR0cmlidXRpb25Nb2RhbDtcbn07XG5cbmNvbnN0IHJlbmRlckF0dHJpYnV0aW9uc01vZGFsID0gKCkgPT4ge1xuICBjb25zdCBzaWRlYmFyRm9vdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlYmFyLWZvb3RlclwiKTtcbiAgc2lkZWJhckZvb3Rlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGRpc3BsYXlNb2RhbChjcmVhdGVBdHRyaWJ1dGlvbnNNb2RhbCgpKTtcbiAgICBhZGRPdmVybGF5KCk7XG4gIH0pO1xufTtcblxuY29uc3QgYXR0cmlidXRpb25zVW5vcmRlcmVkTGlzdCA9ICgpID0+IHtcbiAgY29uc3QgYXR0cmlidXRpb25MaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICBhdHRyaWJ1dGlvbkxpc3QuY2xhc3NMaXN0LmFkZChcImF0dHJpYnV0aW9ucy1saXN0XCIpO1xuXG4gIGF0dHJpYnV0aW9ucy5mb3JFYWNoKChhdHRyaWJ1dGlvbikgPT4ge1xuICAgIGNvbnN0IGF0dHJpYnV0aW9uSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBhdHRyaWJ1dGlvbkl0ZW0uaW5uZXJIVE1MID0gYDxhIGhyZWY9XCIke2F0dHJpYnV0aW9uLmxpbmt9XCIgdGFyZ2V0PVwiX2JsYW5rXCIgdGl0bGU9XCIke2F0dHJpYnV0aW9uLnRpdGxlfVwiPiR7YXR0cmlidXRpb24udGl0bGV9IGJ5ICR7YXR0cmlidXRpb24uY3JlYXRvcn08L2E+YDtcbiAgICBhdHRyaWJ1dGlvbkxpc3QuYXBwZW5kQ2hpbGQoYXR0cmlidXRpb25JdGVtKTtcbiAgfSk7XG4gIHJldHVybiBhdHRyaWJ1dGlvbkxpc3Q7XG59O1xuXG5jb25zdCBhdHRyaWJ1dGlvbnMgPSBbXG4gIC8vIExvZ29cbiAge1xuICAgIHRpdGxlOiBcIkxvZ29cIixcbiAgICBsaW5rOiBcImh0dHBzOi8vd3d3LmZsYXRpY29uLmNvbS9mcmVlLWljb25zL3lhcm5cIixcbiAgICBjcmVhdG9yOiBcIllsaXZkZXNpZ24gLSBGbGF0aWNvblwiLFxuICB9LFxuXG4gIC8vIFRhYiBJY29uc1xuICB7XG4gICAgdGl0bGU6IFwiSG9tZSBJY29uXCIsXG4gICAgbGluazogXCJodHRwczovL3d3dy5mcmVlcGlrLmNvbS9pY29uL2hvbWVfMTk0NjQzNiNmcm9tVmlldz1zZWFyY2gmcGFnZT0xJnBvc2l0aW9uPTAmdXVpZD0yNTFmY2FmZS1jNmNiLTRkNTAtYjA4Yi00YmIyZjdlZmQ3ZjVcIixcbiAgICBjcmVhdG9yOiBcIkZyZWVwaWtcIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIlByb2plY3RzIEljb25cIixcbiAgICBsaW5rOiBcImh0dHBzOi8vd3d3LmZyZWVwaWsuY29tL2ljb24vZmlsZXMtY29weS1pbnRlcmZhY2Utc3ltYm9sXzU0ODUzI2Zyb21WaWV3PXNlYXJjaCZwYWdlPTEmcG9zaXRpb249MzkmdXVpZD1lNjAzODhjOS1mNWM2LTRiZTAtYmVmZC04MzM4OGU0YjI1ZWRcIixcbiAgICBjcmVhdG9yOiBcIkNhdGFsaW4gRmVydHVcIixcbiAgfSxcblxuICAvLyBQcm9qZWN0IEltYWdlc1xuICB7XG4gICAgdGl0bGU6IFwiS2l0Y2hlbiBJY29uXCIsXG4gICAgbGluazogXCJodHRwczovL3d3dy5mbGF0aWNvbi5jb20vZnJlZS1pY29ucy9raXRjaGVuXCIsXG4gICAgY3JlYXRvcjogXCJGcmVlcGlrIC0gRmxhdGljb25cIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIlRyYXZlbCBCYWcgSWNvblwiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly93d3cuZmxhdGljb24uY29tL2ZyZWUtaWNvbnMvdHJhdmVsLWJhZ1wiLFxuICAgIGNyZWF0b3I6IFwicGhvdG8zaWRlYV9zdHVkaW8gLSBGbGF0aWNvblwiLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiQnVkZ2V0IEljb25cIixcbiAgICBsaW5rOiBcImh0dHBzOi8vd3d3LmZsYXRpY29uLmNvbS9mcmVlLWljb25zL2J1ZGdldFwiLFxuICAgIGNyZWF0b3I6IFwiRnJlZXBpayAtIEZsYXRpY29uXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJDb2RlIEljb25cIixcbiAgICBsaW5rOiBcImh0dHBzOi8vd3d3LmZsYXRpY29uLmNvbS9mcmVlLWljb25zL2NvZGVcIixcbiAgICBjcmVhdG9yOiBcIlNtYXNoaWNvbnMgLSBGbGF0aWNvblwiLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiU3Ryb25nIEljb25cIixcbiAgICBsaW5rOiBcImh0dHBzOi8vd3d3LmZsYXRpY29uLmNvbS9mcmVlLWljb25zL3N0cm9uZ1wiLFxuICAgIGNyZWF0b3I6IFwiRnJlZXBpayAtIEZsYXRpY29uXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJSZW5vdmF0aW9uIEljb25cIixcbiAgICBsaW5rOiBcImh0dHBzOi8vd3d3LmZsYXRpY29uLmNvbS9mcmVlLWljb25zL3Jlbm92YXRpb25cIixcbiAgICBjcmVhdG9yOiBcIlRhdWZpayBSYW1hZGhhbiAtIEZsYXRpY29uXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJHYXJkZW5pbmcgSWNvblwiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly93d3cuZmxhdGljb24uY29tL2ZyZWUtaWNvbnMvZ2FyZGVuaW5nXCIsXG4gICAgY3JlYXRvcjogXCJGcmVlcGlrIC0gRmxhdGljb25cIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIkxhbmd1YWdlcyBJY29uXCIsXG4gICAgbGluazogXCJodHRwczovL3d3dy5mbGF0aWNvbi5jb20vZnJlZS1pY29ucy9sYW5ndWFnZXNcIixcbiAgICBjcmVhdG9yOiBcIkZyZWVwaWsgLSBGbGF0aWNvblwiLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiU3RhcnR1cCBJY29uXCIsXG4gICAgbGluazogXCJodHRwczovL3d3dy5mbGF0aWNvbi5jb20vZnJlZS1pY29ucy9zdGFydHVwXCIsXG4gICAgY3JlYXRvcjogXCJTbWFzaGljb25zIC0gRmxhdGljb25cIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIldyaXRpbmcgSWNvblwiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly93d3cuZmxhdGljb24uY29tL2ZyZWUtaWNvbnMvd3JpdGluZ1wiLFxuICAgIGNyZWF0b3I6IFwiU21hc2hpY29ucyAtIEZsYXRpY29uXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJBcnRpc3QgSWNvblwiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly93d3cuZmxhdGljb24uY29tL2ZyZWUtaWNvbnMvYXJ0aXN0XCIsXG4gICAgY3JlYXRvcjogXCJqdXN0aWNvbiAtIEZsYXRpY29uXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJJbnNlcnQgSWNvblwiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly93d3cuZmxhdGljb24uY29tL2ZyZWUtaWNvbnMvaW5zZXJ0XCIsXG4gICAgY3JlYXRvcjogXCJTbWFzaGljb25zIC0gRmxhdGljb25cIixcbiAgfSxcblxuICAvLyBDYXJ0b29uIEljb25zXG4gIHtcbiAgICB0aXRsZTogXCJDYXQgaW4gSG9sZSBJY29uXCIsXG4gICAgbGluazogXCJodHRwczovL3d3dy5mcmVlcGlrLmNvbS9mcmVlLXZlY3Rvci9jdXRlLWNhdC1ob2xlLWNhcnRvb24tdmVjdG9yLWljb24taWxsdXN0cmF0aW9uLWFuaW1hbC1uYXR1cmUtaWNvbi1jb25jZXB0LWlzb2xhdGVkLXByZW1pdW0tdmVjdG9yLWZsYXQtY2FydG9vbi1zdHlsZV8yMzAwNjcwOS5odG0jcXVlcnk9Y2F0JnBvc2l0aW9uPTI5JmZyb21fdmlldz1hdXRob3ImdXVpZD03YzczMTA2NC1kZTI5LTRjM2QtYjM5ZC0xMGQ3NzRiZjZmYjFcIixcbiAgICBjcmVhdG9yOiBcImNhdGFseXN0c3R1ZmYgb24gRnJlZXBpa1wiLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiQ2F0IFBsYXlpbmcgd2l0aCBZYXJuIEJhbGwgSWNvbiAxXCIsXG4gICAgbGluazogXCJodHRwczovL3d3dy5mcmVlcGlrLmNvbS9mcmVlLXZlY3Rvci9jdXRlLWNhdC1wbGF5aW5nLXlhcm4tYmFsbC1jYXJ0b29uLXZlY3Rvci1pY29uLWlsbHVzdHJhdGlvbi1hbmltYWwtbmF0dXJlLWljb24tY29uY2VwdC1pc29sYXRlZF82NTA5NjQ2OC5odG0jcGFnZT02JnF1ZXJ5PWNhdCZwb3NpdGlvbj0xNiZmcm9tX3ZpZXc9YXV0aG9yJnV1aWQ9YWJkNGY3YzMtZGY5Yi00MTE2LWIxNTQtZThlODgzMmUxN2U2XCIsXG4gICAgY3JlYXRvcjogXCJjYXRhbHlzdHN0dWZmIG9uIEZyZWVwaWtcIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIkNhdCBGaXNoaW5nIEljb25cIixcbiAgICBsaW5rOiBcImh0dHBzOi8vd3d3LmZyZWVwaWsuY29tL2ZyZWUtdmVjdG9yL2N1dGUtY2F0LWZpc2hpbmctZmlzaC1tb29uLWNhcnRvb24tdmVjdG9yLWljb24taWxsdXN0cmF0aW9uLWFuaW1hbC1zcG9ydC1pY29uLWNvbmNlcHQtaXNvbGF0ZWRfNjY2MDYxNTYuaHRtI3BhZ2U9NSZxdWVyeT1jYXQmcG9zaXRpb249MiZmcm9tX3ZpZXc9YXV0aG9yJnV1aWQ9YWJkNGY3YzMtZGY5Yi00MTE2LWIxNTQtZThlODgzMmUxN2U2XCIsXG4gICAgY3JlYXRvcjogXCJjYXRhbHlzdHN0dWZmIG9uIEZyZWVwaWtcIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIkNhdCBQbGF5aW5nIHdpdGggWWFybiBCYWxsIEljb24gMlwiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly93d3cuZnJlZXBpay5jb20vZnJlZS12ZWN0b3IvY3V0ZS1jYXQtcGxheWluZy15YXJuLWJhbGwtY2FydG9vbi12ZWN0b3ItaWNvbi1pbGx1c3RyYXRpb24tYW5pbWFsLW5hdHVyZS1pY29uLWNvbmNlcHQtaXNvbGF0ZWRfMjkyODk1NjcuaHRtI3BhZ2U9MiZxdWVyeT1jYXQmcG9zaXRpb249MTgmZnJvbV92aWV3PWF1dGhvciZ1dWlkPWFiZDRmN2MzLWRmOWItNDExNi1iMTU0LWU4ZTg4MzJlMTdlNlwiLFxuICAgIGNyZWF0b3I6IFwiY2F0YWx5c3RzdHVmZiBvbiBGcmVlcGlrXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJDYXQgU2xlZXBpbmcgb24gVHJlZSBJY29uXCIsXG4gICAgbGluazogXCJodHRwczovL3d3dy5mcmVlcGlrLmNvbS9mcmVlLXZlY3Rvci9jdXRlLWNhdC1zbGVlcGluZy10cmVlLXdpdGgtd29vbC1iYWxsLWNhcnRvb24tdmVjdG9yLWljb24taWxsdXN0cmF0aW9uLWFuaW1hbC1uYXR1cmUtaXNvbGF0ZWRfMzY0NDA4MzguaHRtI3BhZ2U9MiZxdWVyeT1jYXQmcG9zaXRpb249MTYmZnJvbV92aWV3PWF1dGhvciZ1dWlkPWFiZDRmN2MzLWRmOWItNDExNi1iMTU0LWU4ZTg4MzJlMTdlNlwiLFxuICAgIGNyZWF0b3I6IFwiY2F0YWx5c3RzdHVmZiBvbiBGcmVlcGlrXCIsXG4gIH0sXG5cbiAgLy8gQWRkIEljb25cbiAge1xuICAgIHRpdGxlOiBcIkFkZCBCdXR0b24gSWNvblwiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly93d3cuZmxhdGljb24uY29tL2ZyZWUtaWNvbnMvYWRkLWJ1dHRvblwiLFxuICAgIGNyZWF0b3I6IFwiU21hc2hpY29ucyAtIEZsYXRpY29uXCIsXG4gIH0sXG5cbiAgLy8gQWNoaWV2ZW1lbnQgQmFkZ2VzXG4gIHtcbiAgICB0aXRsZTogXCJSZXdhcmQgSWNvbiAxXCIsXG4gICAgbGluazogXCJodHRwczovL3d3dy5mbGF0aWNvbi5jb20vZnJlZS1pY29ucy9yZXdhcmRcIixcbiAgICBjcmVhdG9yOiBcIlZlY3RvcnMgTWFya2V0IC0gRmxhdGljb25cIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIlJld2FyZCBJY29uIDJcIixcbiAgICBsaW5rOiBcImh0dHBzOi8vd3d3LmZsYXRpY29uLmNvbS9mcmVlLWljb25zL3Jld2FyZFwiLFxuICAgIGNyZWF0b3I6IFwiVmVjdG9ycyBNYXJrZXQgLSBGbGF0aWNvblwiLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiTWVkYWwgSWNvblwiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly93d3cuZmxhdGljb24uY29tL2ZyZWUtaWNvbnMvbWVkYWxcIixcbiAgICBjcmVhdG9yOiBcIlZlY3RvcnMgTWFya2V0IC0gRmxhdGljb25cIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIkNoYW1waW9uIEljb25cIixcbiAgICBsaW5rOiBcImh0dHBzOi8vd3d3LmZsYXRpY29uLmNvbS9mcmVlLWljb25zL2NoYW1waW9uXCIsXG4gICAgY3JlYXRvcjogXCJWZWN0b3JzIE1hcmtldCAtIEZsYXRpY29uXCIsXG4gIH0sXG5cbiAgLy8gTG9ja1xuICB7XG4gICAgdGl0bGU6IFwiTG9jayBJY29uXCIsXG4gICAgbGluazogXCJodHRwczovL3d3dy5mbGF0aWNvbi5jb20vZnJlZS1pY29ucy9sb2NrXCIsXG4gICAgY3JlYXRvcjogXCJGcmVlcGlrIC0gRmxhdGljb25cIixcbiAgfSxcbl07XG5cbmV4cG9ydCB7IHJlbmRlckF0dHJpYnV0aW9uc01vZGFsIH07XG4iLCJpbXBvcnQgeyBjbGVhckNvbnRlbnRDb250YWluZXIgfSBmcm9tIFwiLi4vdWkvY2xlYXJEaXNwbGF5LmpzXCI7XG5pbXBvcnQgeyByZW5kZXJQcm9qZWN0TGlzdCB9IGZyb20gXCIuLi9wYWdlcy9hbGxQcm9qZWN0c1BhZ2UuanNcIjtcblxuY29uc3QgdXBkYXRlRGFzaGJvYXJkQ29udGFpbmVyID0gKCkgPT4ge1xuICBjbGVhckNvbnRlbnRDb250YWluZXIoKTtcbiAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbiAgY29uc3QgZGFzaGJvYXJkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBkYXNoYm9hcmRDb250YWluZXIuYXBwZW5kQ2hpbGQocmVuZGVyUHJvamVjdExpc3QoKSk7XG4gIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoZGFzaGJvYXJkQ29udGFpbmVyKTtcbn07XG5cbmV4cG9ydCB7IHVwZGF0ZURhc2hib2FyZENvbnRhaW5lciB9O1xuIiwiaW1wb3J0IHsgY3JlYXRlU3RhdHNDb250YWluZXIgfSBmcm9tIFwiLi9jcmVhdGVTdGF0c0NvbnRhaW5lci5qc1wiO1xuXG5jb25zdCB1cGRhdGVTdGF0c0NvbnRhaW5lciA9IChwcm9qZWN0KSA9PiB7XG4gIGNvbnN0IHRvZG9MaXN0ID0gcHJvamVjdC5nZXRUb2RvTGlzdCgpO1xuICB0b2RvTGlzdC5jYWxjdWxhdGVQZXJjZW50YWdlcygpO1xuICBjb25zdCBjb21wbGV0ZWRQZXJjZW50YWdlID0gdG9kb0xpc3QuZ2V0Q29tcGxldGVkUGVyY2VudGFnZSgpO1xuICBjb25zdCBpblByb2dyZXNzUGVyY2VudGFnZSA9IHRvZG9MaXN0LmdldEluUHJvZ3Jlc3NQZXJjZW50YWdlKCk7XG4gIGNvbnN0IG5vdFN0YXJ0ZWRQZXJjZW50YWdlID0gdG9kb0xpc3QuZ2V0Tm90U3RhcnRlZFBlcmNlbnRhZ2UoKTtcbiAgY29uc3Qgc3RhdHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN0YXRzLWNvbnRhaW5lclwiKTtcbiAgc3RhdHNDb250YWluZXIucmVwbGFjZVdpdGgoXG4gICAgY3JlYXRlU3RhdHNDb250YWluZXIoXG4gICAgICBjb21wbGV0ZWRQZXJjZW50YWdlLFxuICAgICAgaW5Qcm9ncmVzc1BlcmNlbnRhZ2UsXG4gICAgICBub3RTdGFydGVkUGVyY2VudGFnZVxuICAgIClcbiAgKTtcbn07XG5leHBvcnQgeyB1cGRhdGVTdGF0c0NvbnRhaW5lciB9O1xuIiwiaW1wb3J0IHsgY3JlYXRlVGFza0VsZW1lbnQgfSBmcm9tIFwiLi9jcmVhdGVUYXNrRWxlbWVudC5qc1wiO1xuXG5jb25zdCB1cGRhdGVUYXNrRWxlbWVudCA9IChwcm9qZWN0LCB0YXNrRWxlbWVudCwgdG9kb0l0ZW0pID0+IHtcbiAgY29uc3QgbmV3VGFza0VsZW1lbnQgPSBjcmVhdGVUYXNrRWxlbWVudChwcm9qZWN0LCB0b2RvSXRlbSk7XG4gIHRhc2tFbGVtZW50LnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG5ld1Rhc2tFbGVtZW50LCB0YXNrRWxlbWVudCk7XG59O1xuXG5leHBvcnQgeyB1cGRhdGVUYXNrRWxlbWVudCB9O1xuIiwiaW1wb3J0IHsgY3JlYXRlVGFza0VsZW1lbnQgfSBmcm9tIFwiLi9jcmVhdGVUYXNrRWxlbWVudC5qc1wiO1xuaW1wb3J0IHsgcmVuZGVyTm9UYXNrc01lc3NhZ2UgfSBmcm9tIFwiLi9jcmVhdGVOb1Rhc2tzTWVzc2FnZS5qc1wiO1xuXG5jb25zdCB1cGRhdGVUYXNrVGFibGUgPSAocHJvamVjdCwgdG9kb0xpc3QpID0+IHtcbiAgY29uc3QgdGFza1RhYmxlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrcy10YWJsZS1jb250YWluZXJcIik7XG4gIHRhc2tUYWJsZUNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuXG4gIGlmICh0b2RvTGlzdC5sZW5ndGggPT09IDApIHtcbiAgICByZW5kZXJOb1Rhc2tzTWVzc2FnZSh0YXNrVGFibGVDb250YWluZXIpO1xuICB9IGVsc2Uge1xuICAgIHRvZG9MaXN0LmZvckVhY2goKHRvZG8pID0+IHtcbiAgICAgIGNvbnN0IHRvZG9FbGVtZW50ID0gY3JlYXRlVGFza0VsZW1lbnQocHJvamVjdCwgdG9kbyk7XG4gICAgICB0YXNrVGFibGVDb250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0VsZW1lbnQpO1xuICAgIH0pO1xuICB9XG59O1xuZXhwb3J0IHsgdXBkYXRlVGFza1RhYmxlIH07XG4iLCJleHBvcnQgZnVuY3Rpb24gYWRkTGVhZGluZ1plcm9zKG51bWJlciwgdGFyZ2V0TGVuZ3RoKSB7XG4gIGNvbnN0IHNpZ24gPSBudW1iZXIgPCAwID8gXCItXCIgOiBcIlwiO1xuICBjb25zdCBvdXRwdXQgPSBNYXRoLmFicyhudW1iZXIpLnRvU3RyaW5nKCkucGFkU3RhcnQodGFyZ2V0TGVuZ3RoLCBcIjBcIik7XG4gIHJldHVybiBzaWduICsgb3V0cHV0O1xufVxuIiwibGV0IGRlZmF1bHRPcHRpb25zID0ge307XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0T3B0aW9ucygpIHtcbiAgcmV0dXJuIGRlZmF1bHRPcHRpb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0RGVmYXVsdE9wdGlvbnMobmV3T3B0aW9ucykge1xuICBkZWZhdWx0T3B0aW9ucyA9IG5ld09wdGlvbnM7XG59XG4iLCJpbXBvcnQgeyBnZXREYXlPZlllYXIgfSBmcm9tIFwiLi4vLi4vZ2V0RGF5T2ZZZWFyLm1qc1wiO1xuaW1wb3J0IHsgZ2V0SVNPV2VlayB9IGZyb20gXCIuLi8uLi9nZXRJU09XZWVrLm1qc1wiO1xuaW1wb3J0IHsgZ2V0SVNPV2Vla1llYXIgfSBmcm9tIFwiLi4vLi4vZ2V0SVNPV2Vla1llYXIubWpzXCI7XG5pbXBvcnQgeyBnZXRXZWVrIH0gZnJvbSBcIi4uLy4uL2dldFdlZWsubWpzXCI7XG5pbXBvcnQgeyBnZXRXZWVrWWVhciB9IGZyb20gXCIuLi8uLi9nZXRXZWVrWWVhci5tanNcIjtcbmltcG9ydCB7IGFkZExlYWRpbmdaZXJvcyB9IGZyb20gXCIuLi9hZGRMZWFkaW5nWmVyb3MubWpzXCI7XG5pbXBvcnQgeyBsaWdodEZvcm1hdHRlcnMgfSBmcm9tIFwiLi9saWdodEZvcm1hdHRlcnMubWpzXCI7XG5cbmNvbnN0IGRheVBlcmlvZEVudW0gPSB7XG4gIGFtOiBcImFtXCIsXG4gIHBtOiBcInBtXCIsXG4gIG1pZG5pZ2h0OiBcIm1pZG5pZ2h0XCIsXG4gIG5vb246IFwibm9vblwiLFxuICBtb3JuaW5nOiBcIm1vcm5pbmdcIixcbiAgYWZ0ZXJub29uOiBcImFmdGVybm9vblwiLFxuICBldmVuaW5nOiBcImV2ZW5pbmdcIixcbiAgbmlnaHQ6IFwibmlnaHRcIixcbn07XG5cbi8qXG4gKiB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8ICBhICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBBKiB8IE1pbGxpc2Vjb25kcyBpbiBkYXkgICAgICAgICAgICB8XG4gKiB8ICBiICB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICB8ICBCICB8IEZsZXhpYmxlIGRheSBwZXJpb2QgICAgICAgICAgICB8XG4gKiB8ICBjICB8IFN0YW5kLWFsb25lIGxvY2FsIGRheSBvZiB3ZWVrICB8ICBDKiB8IExvY2FsaXplZCBob3VyIHcvIGRheSBwZXJpb2QgICB8XG4gKiB8ICBkICB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICB8ICBEICB8IERheSBvZiB5ZWFyICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBlICB8IExvY2FsIGRheSBvZiB3ZWVrICAgICAgICAgICAgICB8ICBFICB8IERheSBvZiB3ZWVrICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBmICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBGKiB8IERheSBvZiB3ZWVrIGluIG1vbnRoICAgICAgICAgICB8XG4gKiB8ICBnKiB8IE1vZGlmaWVkIEp1bGlhbiBkYXkgICAgICAgICAgICB8ICBHICB8IEVyYSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBoICB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICB8ICBIICB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBpISB8IElTTyBkYXkgb2Ygd2VlayAgICAgICAgICAgICAgICB8ICBJISB8IElTTyB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgICB8XG4gKiB8ICBqKiB8IExvY2FsaXplZCBob3VyIHcvIGRheSBwZXJpb2QgICB8ICBKKiB8IExvY2FsaXplZCBob3VyIHcvbyBkYXkgcGVyaW9kICB8XG4gKiB8ICBrICB8IEhvdXIgWzEtMjRdICAgICAgICAgICAgICAgICAgICB8ICBLICB8IEhvdXIgWzAtMTFdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBsKiB8IChkZXByZWNhdGVkKSAgICAgICAgICAgICAgICAgICB8ICBMICB8IFN0YW5kLWFsb25lIG1vbnRoICAgICAgICAgICAgICB8XG4gKiB8ICBtICB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBNICB8IE1vbnRoICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBuICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBOICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBvISB8IE9yZGluYWwgbnVtYmVyIG1vZGlmaWVyICAgICAgICB8ICBPICB8IFRpbWV6b25lIChHTVQpICAgICAgICAgICAgICAgICB8XG4gKiB8ICBwISB8IExvbmcgbG9jYWxpemVkIHRpbWUgICAgICAgICAgICB8ICBQISB8IExvbmcgbG9jYWxpemVkIGRhdGUgICAgICAgICAgICB8XG4gKiB8ICBxICB8IFN0YW5kLWFsb25lIHF1YXJ0ZXIgICAgICAgICAgICB8ICBRICB8IFF1YXJ0ZXIgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICByKiB8IFJlbGF0ZWQgR3JlZ29yaWFuIHllYXIgICAgICAgICB8ICBSISB8IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgICB8XG4gKiB8ICBzICB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICB8ICBTICB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICB8XG4gKiB8ICB0ISB8IFNlY29uZHMgdGltZXN0YW1wICAgICAgICAgICAgICB8ICBUISB8IE1pbGxpc2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICB8XG4gKiB8ICB1ICB8IEV4dGVuZGVkIHllYXIgICAgICAgICAgICAgICAgICB8ICBVKiB8IEN5Y2xpYyB5ZWFyICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICB2KiB8IFRpbWV6b25lIChnZW5lcmljIG5vbi1sb2NhdC4pICB8ICBWKiB8IFRpbWV6b25lIChsb2NhdGlvbikgICAgICAgICAgICB8XG4gKiB8ICB3ICB8IExvY2FsIHdlZWsgb2YgeWVhciAgICAgICAgICAgICB8ICBXKiB8IFdlZWsgb2YgbW9udGggICAgICAgICAgICAgICAgICB8XG4gKiB8ICB4ICB8IFRpbWV6b25lIChJU08tODYwMSB3L28gWikgICAgICB8ICBYICB8IFRpbWV6b25lIChJU08tODYwMSkgICAgICAgICAgICB8XG4gKiB8ICB5ICB8IFllYXIgKGFicykgICAgICAgICAgICAgICAgICAgICB8ICBZICB8IExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICB8XG4gKiB8ICB6ICB8IFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXQuKSB8ICBaKiB8IFRpbWV6b25lIChhbGlhc2VzKSAgICAgICAgICAgICB8XG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgKiBhcmUgbm90IGltcGxlbWVudGVkIGJ1dCByZXNlcnZlZCBieSBVbmljb2RlIHN0YW5kYXJkLlxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICEgYXJlIG5vbi1zdGFuZGFyZCwgYnV0IGltcGxlbWVudGVkIGJ5IGRhdGUtZm5zOlxuICogLSBgb2AgbW9kaWZpZXMgdGhlIHByZXZpb3VzIHRva2VuIHRvIHR1cm4gaXQgaW50byBhbiBvcmRpbmFsIChzZWUgYGZvcm1hdGAgZG9jcylcbiAqIC0gYGlgIGlzIElTTyBkYXkgb2Ygd2Vlay4gRm9yIGBpYCBhbmQgYGlpYCBpcyByZXR1cm5zIG51bWVyaWMgSVNPIHdlZWsgZGF5cyxcbiAqICAgaS5lLiA3IGZvciBTdW5kYXksIDEgZm9yIE1vbmRheSwgZXRjLlxuICogLSBgSWAgaXMgSVNPIHdlZWsgb2YgeWVhciwgYXMgb3Bwb3NlZCB0byBgd2Agd2hpY2ggaXMgbG9jYWwgd2VlayBvZiB5ZWFyLlxuICogLSBgUmAgaXMgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIsIGFzIG9wcG9zZWQgdG8gYFlgIHdoaWNoIGlzIGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIuXG4gKiAgIGBSYCBpcyBzdXBwb3NlZCB0byBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYElgIGFuZCBgaWBcbiAqICAgZm9yIHVuaXZlcnNhbCBJU08gd2Vlay1udW1iZXJpbmcgZGF0ZSwgd2hlcmVhc1xuICogICBgWWAgaXMgc3VwcG9zZWQgdG8gYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGB3YCBhbmQgYGVgXG4gKiAgIGZvciB3ZWVrLW51bWJlcmluZyBkYXRlIHNwZWNpZmljIHRvIHRoZSBsb2NhbGUuXG4gKiAtIGBQYCBpcyBsb25nIGxvY2FsaXplZCBkYXRlIGZvcm1hdFxuICogLSBgcGAgaXMgbG9uZyBsb2NhbGl6ZWQgdGltZSBmb3JtYXRcbiAqL1xuXG5leHBvcnQgY29uc3QgZm9ybWF0dGVycyA9IHtcbiAgLy8gRXJhXG4gIEc6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBlcmEgPSBkYXRlLmdldEZ1bGxZZWFyKCkgPiAwID8gMSA6IDA7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gQUQsIEJDXG4gICAgICBjYXNlIFwiR1wiOlxuICAgICAgY2FzZSBcIkdHXCI6XG4gICAgICBjYXNlIFwiR0dHXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7IHdpZHRoOiBcImFiYnJldmlhdGVkXCIgfSk7XG4gICAgICAvLyBBLCBCXG4gICAgICBjYXNlIFwiR0dHR0dcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHsgd2lkdGg6IFwibmFycm93XCIgfSk7XG4gICAgICAvLyBBbm5vIERvbWluaSwgQmVmb3JlIENocmlzdFxuICAgICAgY2FzZSBcIkdHR0dcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7IHdpZHRoOiBcIndpZGVcIiB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gWWVhclxuICB5OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgLy8gT3JkaW5hbCBudW1iZXJcbiAgICBpZiAodG9rZW4gPT09IFwieW9cIikge1xuICAgICAgY29uc3Qgc2lnbmVkWWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgIC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG4gICAgICBjb25zdCB5ZWFyID0gc2lnbmVkWWVhciA+IDAgPyBzaWduZWRZZWFyIDogMSAtIHNpZ25lZFllYXI7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih5ZWFyLCB7IHVuaXQ6IFwieWVhclwiIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMueShkYXRlLCB0b2tlbik7XG4gIH0sXG5cbiAgLy8gTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhclxuICBZOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgY29uc3Qgc2lnbmVkV2Vla1llYXIgPSBnZXRXZWVrWWVhcihkYXRlLCBvcHRpb25zKTtcbiAgICAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuICAgIGNvbnN0IHdlZWtZZWFyID0gc2lnbmVkV2Vla1llYXIgPiAwID8gc2lnbmVkV2Vla1llYXIgOiAxIC0gc2lnbmVkV2Vla1llYXI7XG5cbiAgICAvLyBUd28gZGlnaXQgeWVhclxuICAgIGlmICh0b2tlbiA9PT0gXCJZWVwiKSB7XG4gICAgICBjb25zdCB0d29EaWdpdFllYXIgPSB3ZWVrWWVhciAlIDEwMDtcbiAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModHdvRGlnaXRZZWFyLCAyKTtcbiAgICB9XG5cbiAgICAvLyBPcmRpbmFsIG51bWJlclxuICAgIGlmICh0b2tlbiA9PT0gXCJZb1wiKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih3ZWVrWWVhciwgeyB1bml0OiBcInllYXJcIiB9KTtcbiAgICB9XG5cbiAgICAvLyBQYWRkaW5nXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh3ZWVrWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBJU08gd2Vlay1udW1iZXJpbmcgeWVhclxuICBSOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICBjb25zdCBpc29XZWVrWWVhciA9IGdldElTT1dlZWtZZWFyKGRhdGUpO1xuXG4gICAgLy8gUGFkZGluZ1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvV2Vla1llYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gRXh0ZW5kZWQgeWVhci4gVGhpcyBpcyBhIHNpbmdsZSBudW1iZXIgZGVzaWduYXRpbmcgdGhlIHllYXIgb2YgdGhpcyBjYWxlbmRhciBzeXN0ZW0uXG4gIC8vIFRoZSBtYWluIGRpZmZlcmVuY2UgYmV0d2VlbiBgeWAgYW5kIGB1YCBsb2NhbGl6ZXJzIGFyZSBCLkMuIHllYXJzOlxuICAvLyB8IFllYXIgfCBgeWAgfCBgdWAgfFxuICAvLyB8LS0tLS0tfC0tLS0tfC0tLS0tfFxuICAvLyB8IEFDIDEgfCAgIDEgfCAgIDEgfFxuICAvLyB8IEJDIDEgfCAgIDEgfCAgIDAgfFxuICAvLyB8IEJDIDIgfCAgIDIgfCAgLTEgfFxuICAvLyBBbHNvIGB5eWAgYWx3YXlzIHJldHVybnMgdGhlIGxhc3QgdHdvIGRpZ2l0cyBvZiBhIHllYXIsXG4gIC8vIHdoaWxlIGB1dWAgcGFkcyBzaW5nbGUgZGlnaXQgeWVhcnMgdG8gMiBjaGFyYWN0ZXJzIGFuZCByZXR1cm5zIG90aGVyIHllYXJzIHVuY2hhbmdlZC5cbiAgdTogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gUXVhcnRlclxuICBROiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgcXVhcnRlciA9IE1hdGguY2VpbCgoZGF0ZS5nZXRNb250aCgpICsgMSkgLyAzKTtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAzLCA0XG4gICAgICBjYXNlIFwiUVwiOlxuICAgICAgICByZXR1cm4gU3RyaW5nKHF1YXJ0ZXIpO1xuICAgICAgLy8gMDEsIDAyLCAwMywgMDRcbiAgICAgIGNhc2UgXCJRUVwiOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHF1YXJ0ZXIsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIDNyZCwgNHRoXG4gICAgICBjYXNlIFwiUW9cIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIocXVhcnRlciwgeyB1bml0OiBcInF1YXJ0ZXJcIiB9KTtcbiAgICAgIC8vIFExLCBRMiwgUTMsIFE0XG4gICAgICBjYXNlIFwiUVFRXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIDEsIDIsIDMsIDQgKG5hcnJvdyBxdWFydGVyOyBjb3VsZCBiZSBub3QgbnVtZXJpY2FsKVxuICAgICAgY2FzZSBcIlFRUVFRXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLlxuICAgICAgY2FzZSBcIlFRUVFcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogXCJ3aWRlXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBTdGFuZC1hbG9uZSBxdWFydGVyXG4gIHE6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBxdWFydGVyID0gTWF0aC5jZWlsKChkYXRlLmdldE1vbnRoKCkgKyAxKSAvIDMpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIDMsIDRcbiAgICAgIGNhc2UgXCJxXCI6XG4gICAgICAgIHJldHVybiBTdHJpbmcocXVhcnRlcik7XG4gICAgICAvLyAwMSwgMDIsIDAzLCAwNFxuICAgICAgY2FzZSBcInFxXCI6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MocXVhcnRlciwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgM3JkLCA0dGhcbiAgICAgIGNhc2UgXCJxb1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihxdWFydGVyLCB7IHVuaXQ6IFwicXVhcnRlclwiIH0pO1xuICAgICAgLy8gUTEsIFEyLCBRMywgUTRcbiAgICAgIGNhc2UgXCJxcXFcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJzdGFuZGFsb25lXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gMSwgMiwgMywgNCAobmFycm93IHF1YXJ0ZXI7IGNvdWxkIGJlIG5vdCBudW1lcmljYWwpXG4gICAgICBjYXNlIFwicXFxcXFcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uXG4gICAgICBjYXNlIFwicXFxcVwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiBcIndpZGVcIixcbiAgICAgICAgICBjb250ZXh0OiBcInN0YW5kYWxvbmVcIixcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIE1vbnRoXG4gIE06IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKTtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlIFwiTVwiOlxuICAgICAgY2FzZSBcIk1NXCI6XG4gICAgICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuTShkYXRlLCB0b2tlbik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCAxMnRoXG4gICAgICBjYXNlIFwiTW9cIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobW9udGggKyAxLCB7IHVuaXQ6IFwibW9udGhcIiB9KTtcbiAgICAgIC8vIEphbiwgRmViLCAuLi4sIERlY1xuICAgICAgY2FzZSBcIk1NTVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIEosIEYsIC4uLiwgRFxuICAgICAgY2FzZSBcIk1NTU1NXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyXG4gICAgICBjYXNlIFwiTU1NTVwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7IHdpZHRoOiBcIndpZGVcIiwgY29udGV4dDogXCJmb3JtYXR0aW5nXCIgfSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIFN0YW5kLWFsb25lIG1vbnRoXG4gIEw6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKTtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAuLi4sIDEyXG4gICAgICBjYXNlIFwiTFwiOlxuICAgICAgICByZXR1cm4gU3RyaW5nKG1vbnRoICsgMSk7XG4gICAgICAvLyAwMSwgMDIsIC4uLiwgMTJcbiAgICAgIGNhc2UgXCJMTFwiOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKG1vbnRoICsgMSwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCAxMnRoXG4gICAgICBjYXNlIFwiTG9cIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobW9udGggKyAxLCB7IHVuaXQ6IFwibW9udGhcIiB9KTtcbiAgICAgIC8vIEphbiwgRmViLCAuLi4sIERlY1xuICAgICAgY2FzZSBcIkxMTFwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIEosIEYsIC4uLiwgRFxuICAgICAgY2FzZSBcIkxMTExMXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyXG4gICAgICBjYXNlIFwiTExMTFwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7IHdpZHRoOiBcIndpZGVcIiwgY29udGV4dDogXCJzdGFuZGFsb25lXCIgfSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIExvY2FsIHdlZWsgb2YgeWVhclxuICB3OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgY29uc3Qgd2VlayA9IGdldFdlZWsoZGF0ZSwgb3B0aW9ucyk7XG5cbiAgICBpZiAodG9rZW4gPT09IFwid29cIikge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIod2VlaywgeyB1bml0OiBcIndlZWtcIiB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHdlZWssIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gSVNPIHdlZWsgb2YgeWVhclxuICBJOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgaXNvV2VlayA9IGdldElTT1dlZWsoZGF0ZSk7XG5cbiAgICBpZiAodG9rZW4gPT09IFwiSW9cIikge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaXNvV2VlaywgeyB1bml0OiBcIndlZWtcIiB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb1dlZWssIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gRGF5IG9mIHRoZSBtb250aFxuICBkOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSBcImRvXCIpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0RGF0ZSgpLCB7IHVuaXQ6IFwiZGF0ZVwiIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuZChkYXRlLCB0b2tlbik7XG4gIH0sXG5cbiAgLy8gRGF5IG9mIHllYXJcbiAgRDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IGRheU9mWWVhciA9IGdldERheU9mWWVhcihkYXRlKTtcblxuICAgIGlmICh0b2tlbiA9PT0gXCJEb1wiKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXlPZlllYXIsIHsgdW5pdDogXCJkYXlPZlllYXJcIiB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRheU9mWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBEYXkgb2Ygd2Vla1xuICBFOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgZGF5T2ZXZWVrID0gZGF0ZS5nZXREYXkoKTtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBUdWVcbiAgICAgIGNhc2UgXCJFXCI6XG4gICAgICBjYXNlIFwiRUVcIjpcbiAgICAgIGNhc2UgXCJFRUVcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFRcbiAgICAgIGNhc2UgXCJFRUVFRVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG4gICAgICBjYXNlIFwiRUVFRUVFXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwic2hvcnRcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG4gICAgICBjYXNlIFwiRUVFRVwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJ3aWRlXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBMb2NhbCBkYXkgb2Ygd2Vla1xuICBlOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgY29uc3QgZGF5T2ZXZWVrID0gZGF0ZS5nZXREYXkoKTtcbiAgICBjb25zdCBsb2NhbERheU9mV2VlayA9IChkYXlPZldlZWsgLSBvcHRpb25zLndlZWtTdGFydHNPbiArIDgpICUgNyB8fCA3O1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIE51bWVyaWNhbCB2YWx1ZSAoTnRoIGRheSBvZiB3ZWVrIHdpdGggY3VycmVudCBsb2NhbGUgb3Igd2Vla1N0YXJ0c09uKVxuICAgICAgY2FzZSBcImVcIjpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhsb2NhbERheU9mV2Vlayk7XG4gICAgICAvLyBQYWRkZWQgbnVtZXJpY2FsIHZhbHVlXG4gICAgICBjYXNlIFwiZWVcIjpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhsb2NhbERheU9mV2VlaywgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCA3dGhcbiAgICAgIGNhc2UgXCJlb1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihsb2NhbERheU9mV2VlaywgeyB1bml0OiBcImRheVwiIH0pO1xuICAgICAgY2FzZSBcImVlZVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuICAgICAgY2FzZSBcImVlZWVlXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcbiAgICAgIGNhc2UgXCJlZWVlZWVcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJzaG9ydFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcbiAgICAgIGNhc2UgXCJlZWVlXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcIndpZGVcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIFN0YW5kLWFsb25lIGxvY2FsIGRheSBvZiB3ZWVrXG4gIGM6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICBjb25zdCBkYXlPZldlZWsgPSBkYXRlLmdldERheSgpO1xuICAgIGNvbnN0IGxvY2FsRGF5T2ZXZWVrID0gKGRheU9mV2VlayAtIG9wdGlvbnMud2Vla1N0YXJ0c09uICsgOCkgJSA3IHx8IDc7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gTnVtZXJpY2FsIHZhbHVlIChzYW1lIGFzIGluIGBlYClcbiAgICAgIGNhc2UgXCJjXCI6XG4gICAgICAgIHJldHVybiBTdHJpbmcobG9jYWxEYXlPZldlZWspO1xuICAgICAgLy8gUGFkZGVkIG51bWVyaWNhbCB2YWx1ZVxuICAgICAgY2FzZSBcImNjXCI6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobG9jYWxEYXlPZldlZWssIHRva2VuLmxlbmd0aCk7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCA3dGhcbiAgICAgIGNhc2UgXCJjb1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihsb2NhbERheU9mV2VlaywgeyB1bml0OiBcImRheVwiIH0pO1xuICAgICAgY2FzZSBcImNjY1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJzdGFuZGFsb25lXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuICAgICAgY2FzZSBcImNjY2NjXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJzdGFuZGFsb25lXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcbiAgICAgIGNhc2UgXCJjY2NjY2NcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJzaG9ydFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcbiAgICAgIGNhc2UgXCJjY2NjXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcIndpZGVcIixcbiAgICAgICAgICBjb250ZXh0OiBcInN0YW5kYWxvbmVcIixcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIElTTyBkYXkgb2Ygd2Vla1xuICBpOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgZGF5T2ZXZWVrID0gZGF0ZS5nZXREYXkoKTtcbiAgICBjb25zdCBpc29EYXlPZldlZWsgPSBkYXlPZldlZWsgPT09IDAgPyA3IDogZGF5T2ZXZWVrO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDJcbiAgICAgIGNhc2UgXCJpXCI6XG4gICAgICAgIHJldHVybiBTdHJpbmcoaXNvRGF5T2ZXZWVrKTtcbiAgICAgIC8vIDAyXG4gICAgICBjYXNlIFwiaWlcIjpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29EYXlPZldlZWssIHRva2VuLmxlbmd0aCk7XG4gICAgICAvLyAybmRcbiAgICAgIGNhc2UgXCJpb1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihpc29EYXlPZldlZWssIHsgdW5pdDogXCJkYXlcIiB9KTtcbiAgICAgIC8vIFR1ZVxuICAgICAgY2FzZSBcImlpaVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuICAgICAgY2FzZSBcImlpaWlpXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcbiAgICAgIGNhc2UgXCJpaWlpaWlcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJzaG9ydFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcbiAgICAgIGNhc2UgXCJpaWlpXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcIndpZGVcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIEFNIG9yIFBNXG4gIGE6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKTtcbiAgICBjb25zdCBkYXlQZXJpb2RFbnVtVmFsdWUgPSBob3VycyAvIDEyID49IDEgPyBcInBtXCIgOiBcImFtXCI7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlIFwiYVwiOlxuICAgICAgY2FzZSBcImFhXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICBjYXNlIFwiYWFhXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZVxuICAgICAgICAgIC5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgICAgfSlcbiAgICAgICAgICAudG9Mb3dlckNhc2UoKTtcbiAgICAgIGNhc2UgXCJhYWFhYVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIGNhc2UgXCJhYWFhXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiBcIndpZGVcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIEFNLCBQTSwgbWlkbmlnaHQsIG5vb25cbiAgYjogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpO1xuICAgIGxldCBkYXlQZXJpb2RFbnVtVmFsdWU7XG4gICAgaWYgKGhvdXJzID09PSAxMikge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5ub29uO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPT09IDApIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubWlkbmlnaHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGhvdXJzIC8gMTIgPj0gMSA/IFwicG1cIiA6IFwiYW1cIjtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlIFwiYlwiOlxuICAgICAgY2FzZSBcImJiXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICBjYXNlIFwiYmJiXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZVxuICAgICAgICAgIC5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgICAgfSlcbiAgICAgICAgICAudG9Mb3dlckNhc2UoKTtcbiAgICAgIGNhc2UgXCJiYmJiYlwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIGNhc2UgXCJiYmJiXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiBcIndpZGVcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIGluIHRoZSBtb3JuaW5nLCBpbiB0aGUgYWZ0ZXJub29uLCBpbiB0aGUgZXZlbmluZywgYXQgbmlnaHRcbiAgQjogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpO1xuICAgIGxldCBkYXlQZXJpb2RFbnVtVmFsdWU7XG4gICAgaWYgKGhvdXJzID49IDE3KSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLmV2ZW5pbmc7XG4gICAgfSBlbHNlIGlmIChob3VycyA+PSAxMikge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5hZnRlcm5vb247XG4gICAgfSBlbHNlIGlmIChob3VycyA+PSA0KSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm1vcm5pbmc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubmlnaHQ7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSBcIkJcIjpcbiAgICAgIGNhc2UgXCJCQlwiOlxuICAgICAgY2FzZSBcIkJCQlwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSBcIkJCQkJCXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSBcIkJCQkJcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6IFwid2lkZVwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gSG91ciBbMS0xMl1cbiAgaDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gXCJob1wiKSB7XG4gICAgICBsZXQgaG91cnMgPSBkYXRlLmdldEhvdXJzKCkgJSAxMjtcbiAgICAgIGlmIChob3VycyA9PT0gMCkgaG91cnMgPSAxMjtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7IHVuaXQ6IFwiaG91clwiIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuaChkYXRlLCB0b2tlbik7XG4gIH0sXG5cbiAgLy8gSG91ciBbMC0yM11cbiAgSDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gXCJIb1wiKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldEhvdXJzKCksIHsgdW5pdDogXCJob3VyXCIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5IKGRhdGUsIHRva2VuKTtcbiAgfSxcblxuICAvLyBIb3VyIFswLTExXVxuICBLOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgaG91cnMgPSBkYXRlLmdldEhvdXJzKCkgJSAxMjtcblxuICAgIGlmICh0b2tlbiA9PT0gXCJLb1wiKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3VycywgeyB1bml0OiBcImhvdXJcIiB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGhvdXJzLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIEhvdXIgWzEtMjRdXG4gIGs6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBsZXQgaG91cnMgPSBkYXRlLmdldEhvdXJzKCk7XG4gICAgaWYgKGhvdXJzID09PSAwKSBob3VycyA9IDI0O1xuXG4gICAgaWYgKHRva2VuID09PSBcImtvXCIpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7IHVuaXQ6IFwiaG91clwiIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaG91cnMsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gTWludXRlXG4gIG06IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09IFwibW9cIikge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRNaW51dGVzKCksIHsgdW5pdDogXCJtaW51dGVcIiB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLm0oZGF0ZSwgdG9rZW4pO1xuICB9LFxuXG4gIC8vIFNlY29uZFxuICBzOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSBcInNvXCIpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0U2Vjb25kcygpLCB7IHVuaXQ6IFwic2Vjb25kXCIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5zKGRhdGUsIHRva2VuKTtcbiAgfSxcblxuICAvLyBGcmFjdGlvbiBvZiBzZWNvbmRcbiAgUzogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5TKGRhdGUsIHRva2VuKTtcbiAgfSxcblxuICAvLyBUaW1lem9uZSAoSVNPLTg2MDEuIElmIG9mZnNldCBpcyAwLCBvdXRwdXQgaXMgYWx3YXlzIGAnWidgKVxuICBYOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSkge1xuICAgIGNvbnN0IHRpbWV6b25lT2Zmc2V0ID0gZGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgaWYgKHRpbWV6b25lT2Zmc2V0ID09PSAwKSB7XG4gICAgICByZXR1cm4gXCJaXCI7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gSG91cnMgYW5kIG9wdGlvbmFsIG1pbnV0ZXNcbiAgICAgIGNhc2UgXCJYXCI6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXModGltZXpvbmVPZmZzZXQpO1xuXG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGBYWGBcbiAgICAgIGNhc2UgXCJYWFhYXCI6XG4gICAgICBjYXNlIFwiWFhcIjogLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCk7XG5cbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYFhYWGBcbiAgICAgIGNhc2UgXCJYWFhYWFwiOlxuICAgICAgY2FzZSBcIlhYWFwiOiAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgXCI6XCIpO1xuICAgIH1cbiAgfSxcblxuICAvLyBUaW1lem9uZSAoSVNPLTg2MDEuIElmIG9mZnNldCBpcyAwLCBvdXRwdXQgaXMgYCcrMDA6MDAnYCBvciBlcXVpdmFsZW50KVxuICB4OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSkge1xuICAgIGNvbnN0IHRpbWV6b25lT2Zmc2V0ID0gZGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gSG91cnMgYW5kIG9wdGlvbmFsIG1pbnV0ZXNcbiAgICAgIGNhc2UgXCJ4XCI6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXModGltZXpvbmVPZmZzZXQpO1xuXG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGB4eGBcbiAgICAgIGNhc2UgXCJ4eHh4XCI6XG4gICAgICBjYXNlIFwieHhcIjogLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCk7XG5cbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYHh4eGBcbiAgICAgIGNhc2UgXCJ4eHh4eFwiOlxuICAgICAgY2FzZSBcInh4eFwiOiAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgXCI6XCIpO1xuICAgIH1cbiAgfSxcblxuICAvLyBUaW1lem9uZSAoR01UKVxuICBPOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSkge1xuICAgIGNvbnN0IHRpbWV6b25lT2Zmc2V0ID0gZGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gU2hvcnRcbiAgICAgIGNhc2UgXCJPXCI6XG4gICAgICBjYXNlIFwiT09cIjpcbiAgICAgIGNhc2UgXCJPT09cIjpcbiAgICAgICAgcmV0dXJuIFwiR01UXCIgKyBmb3JtYXRUaW1lem9uZVNob3J0KHRpbWV6b25lT2Zmc2V0LCBcIjpcIik7XG4gICAgICAvLyBMb25nXG4gICAgICBjYXNlIFwiT09PT1wiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIFwiR01UXCIgKyBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgXCI6XCIpO1xuICAgIH1cbiAgfSxcblxuICAvLyBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0aW9uKVxuICB6OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSkge1xuICAgIGNvbnN0IHRpbWV6b25lT2Zmc2V0ID0gZGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gU2hvcnRcbiAgICAgIGNhc2UgXCJ6XCI6XG4gICAgICBjYXNlIFwienpcIjpcbiAgICAgIGNhc2UgXCJ6enpcIjpcbiAgICAgICAgcmV0dXJuIFwiR01UXCIgKyBmb3JtYXRUaW1lem9uZVNob3J0KHRpbWV6b25lT2Zmc2V0LCBcIjpcIik7XG4gICAgICAvLyBMb25nXG4gICAgICBjYXNlIFwienp6elwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIFwiR01UXCIgKyBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgXCI6XCIpO1xuICAgIH1cbiAgfSxcblxuICAvLyBTZWNvbmRzIHRpbWVzdGFtcFxuICB0OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSkge1xuICAgIGNvbnN0IHRpbWVzdGFtcCA9IE1hdGgudHJ1bmMoZGF0ZS5nZXRUaW1lKCkgLyAxMDAwKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRpbWVzdGFtcCwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBNaWxsaXNlY29uZHMgdGltZXN0YW1wXG4gIFQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplKSB7XG4gICAgY29uc3QgdGltZXN0YW1wID0gZGF0ZS5nZXRUaW1lKCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0aW1lc3RhbXAsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG59O1xuXG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZVNob3J0KG9mZnNldCwgZGVsaW1pdGVyID0gXCJcIikge1xuICBjb25zdCBzaWduID0gb2Zmc2V0ID4gMCA/IFwiLVwiIDogXCIrXCI7XG4gIGNvbnN0IGFic09mZnNldCA9IE1hdGguYWJzKG9mZnNldCk7XG4gIGNvbnN0IGhvdXJzID0gTWF0aC50cnVuYyhhYnNPZmZzZXQgLyA2MCk7XG4gIGNvbnN0IG1pbnV0ZXMgPSBhYnNPZmZzZXQgJSA2MDtcbiAgaWYgKG1pbnV0ZXMgPT09IDApIHtcbiAgICByZXR1cm4gc2lnbiArIFN0cmluZyhob3Vycyk7XG4gIH1cbiAgcmV0dXJuIHNpZ24gKyBTdHJpbmcoaG91cnMpICsgZGVsaW1pdGVyICsgYWRkTGVhZGluZ1plcm9zKG1pbnV0ZXMsIDIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXMob2Zmc2V0LCBkZWxpbWl0ZXIpIHtcbiAgaWYgKG9mZnNldCAlIDYwID09PSAwKSB7XG4gICAgY29uc3Qgc2lnbiA9IG9mZnNldCA+IDAgPyBcIi1cIiA6IFwiK1wiO1xuICAgIHJldHVybiBzaWduICsgYWRkTGVhZGluZ1plcm9zKE1hdGguYWJzKG9mZnNldCkgLyA2MCwgMik7XG4gIH1cbiAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKG9mZnNldCwgZGVsaW1pdGVyKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmUob2Zmc2V0LCBkZWxpbWl0ZXIgPSBcIlwiKSB7XG4gIGNvbnN0IHNpZ24gPSBvZmZzZXQgPiAwID8gXCItXCIgOiBcIitcIjtcbiAgY29uc3QgYWJzT2Zmc2V0ID0gTWF0aC5hYnMob2Zmc2V0KTtcbiAgY29uc3QgaG91cnMgPSBhZGRMZWFkaW5nWmVyb3MoTWF0aC50cnVuYyhhYnNPZmZzZXQgLyA2MCksIDIpO1xuICBjb25zdCBtaW51dGVzID0gYWRkTGVhZGluZ1plcm9zKGFic09mZnNldCAlIDYwLCAyKTtcbiAgcmV0dXJuIHNpZ24gKyBob3VycyArIGRlbGltaXRlciArIG1pbnV0ZXM7XG59XG4iLCJpbXBvcnQgeyBhZGRMZWFkaW5nWmVyb3MgfSBmcm9tIFwiLi4vYWRkTGVhZGluZ1plcm9zLm1qc1wiO1xuXG4vKlxuICogfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAgYSAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgfCAgQSogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZCAgfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgfCAgRCAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaCAgfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgfCAgSCAgfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbSAgfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTSAgfCBNb250aCAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgcyAgfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgfCAgUyAgfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgfFxuICogfCAgeSAgfCBZZWFyIChhYnMpICAgICAgICAgICAgICAgICAgICAgfCAgWSAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICogYXJlIG5vdCBpbXBsZW1lbnRlZCBidXQgcmVzZXJ2ZWQgYnkgVW5pY29kZSBzdGFuZGFyZC5cbiAqL1xuXG5leHBvcnQgY29uc3QgbGlnaHRGb3JtYXR0ZXJzID0ge1xuICAvLyBZZWFyXG4gIHkoZGF0ZSwgdG9rZW4pIHtcbiAgICAvLyBGcm9tIGh0dHA6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtMzEvdHIzNS1kYXRlcy5odG1sI0RhdGVfRm9ybWF0X3Rva2Vuc1xuICAgIC8vIHwgWWVhciAgICAgfCAgICAgeSB8IHl5IHwgICB5eXkgfCAgeXl5eSB8IHl5eXl5IHxcbiAgICAvLyB8LS0tLS0tLS0tLXwtLS0tLS0tfC0tLS18LS0tLS0tLXwtLS0tLS0tfC0tLS0tLS18XG4gICAgLy8gfCBBRCAxICAgICB8ICAgICAxIHwgMDEgfCAgIDAwMSB8ICAwMDAxIHwgMDAwMDEgfFxuICAgIC8vIHwgQUQgMTIgICAgfCAgICAxMiB8IDEyIHwgICAwMTIgfCAgMDAxMiB8IDAwMDEyIHxcbiAgICAvLyB8IEFEIDEyMyAgIHwgICAxMjMgfCAyMyB8ICAgMTIzIHwgIDAxMjMgfCAwMDEyMyB8XG4gICAgLy8gfCBBRCAxMjM0ICB8ICAxMjM0IHwgMzQgfCAgMTIzNCB8ICAxMjM0IHwgMDEyMzQgfFxuICAgIC8vIHwgQUQgMTIzNDUgfCAxMjM0NSB8IDQ1IHwgMTIzNDUgfCAxMjM0NSB8IDEyMzQ1IHxcblxuICAgIGNvbnN0IHNpZ25lZFllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcbiAgICBjb25zdCB5ZWFyID0gc2lnbmVkWWVhciA+IDAgPyBzaWduZWRZZWFyIDogMSAtIHNpZ25lZFllYXI7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0b2tlbiA9PT0gXCJ5eVwiID8geWVhciAlIDEwMCA6IHllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gTW9udGhcbiAgTShkYXRlLCB0b2tlbikge1xuICAgIGNvbnN0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpO1xuICAgIHJldHVybiB0b2tlbiA9PT0gXCJNXCIgPyBTdHJpbmcobW9udGggKyAxKSA6IGFkZExlYWRpbmdaZXJvcyhtb250aCArIDEsIDIpO1xuICB9LFxuXG4gIC8vIERheSBvZiB0aGUgbW9udGhcbiAgZChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXREYXRlKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gQU0gb3IgUE1cbiAgYShkYXRlLCB0b2tlbikge1xuICAgIGNvbnN0IGRheVBlcmlvZEVudW1WYWx1ZSA9IGRhdGUuZ2V0SG91cnMoKSAvIDEyID49IDEgPyBcInBtXCIgOiBcImFtXCI7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlIFwiYVwiOlxuICAgICAgY2FzZSBcImFhXCI6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWUudG9VcHBlckNhc2UoKTtcbiAgICAgIGNhc2UgXCJhYWFcIjpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZTtcbiAgICAgIGNhc2UgXCJhYWFhYVwiOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlWzBdO1xuICAgICAgY2FzZSBcImFhYWFcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWUgPT09IFwiYW1cIiA/IFwiYS5tLlwiIDogXCJwLm0uXCI7XG4gICAgfVxuICB9LFxuXG4gIC8vIEhvdXIgWzEtMTJdXG4gIGgoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0SG91cnMoKSAlIDEyIHx8IDEyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIEhvdXIgWzAtMjNdXG4gIEgoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0SG91cnMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBNaW51dGVcbiAgbShkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRNaW51dGVzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gU2Vjb25kXG4gIHMoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0U2Vjb25kcygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIEZyYWN0aW9uIG9mIHNlY29uZFxuICBTKGRhdGUsIHRva2VuKSB7XG4gICAgY29uc3QgbnVtYmVyT2ZEaWdpdHMgPSB0b2tlbi5sZW5ndGg7XG4gICAgY29uc3QgbWlsbGlzZWNvbmRzID0gZGF0ZS5nZXRNaWxsaXNlY29uZHMoKTtcbiAgICBjb25zdCBmcmFjdGlvbmFsU2Vjb25kcyA9IE1hdGgudHJ1bmMoXG4gICAgICBtaWxsaXNlY29uZHMgKiBNYXRoLnBvdygxMCwgbnVtYmVyT2ZEaWdpdHMgLSAzKSxcbiAgICApO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZnJhY3Rpb25hbFNlY29uZHMsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG59O1xuIiwiY29uc3QgZGF0ZUxvbmdGb3JtYXR0ZXIgPSAocGF0dGVybiwgZm9ybWF0TG9uZykgPT4ge1xuICBzd2l0Y2ggKHBhdHRlcm4pIHtcbiAgICBjYXNlIFwiUFwiOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7IHdpZHRoOiBcInNob3J0XCIgfSk7XG4gICAgY2FzZSBcIlBQXCI6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHsgd2lkdGg6IFwibWVkaXVtXCIgfSk7XG4gICAgY2FzZSBcIlBQUFwiOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7IHdpZHRoOiBcImxvbmdcIiB9KTtcbiAgICBjYXNlIFwiUFBQUFwiOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHsgd2lkdGg6IFwiZnVsbFwiIH0pO1xuICB9XG59O1xuXG5jb25zdCB0aW1lTG9uZ0Zvcm1hdHRlciA9IChwYXR0ZXJuLCBmb3JtYXRMb25nKSA9PiB7XG4gIHN3aXRjaCAocGF0dGVybikge1xuICAgIGNhc2UgXCJwXCI6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHsgd2lkdGg6IFwic2hvcnRcIiB9KTtcbiAgICBjYXNlIFwicHBcIjpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoeyB3aWR0aDogXCJtZWRpdW1cIiB9KTtcbiAgICBjYXNlIFwicHBwXCI6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHsgd2lkdGg6IFwibG9uZ1wiIH0pO1xuICAgIGNhc2UgXCJwcHBwXCI6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoeyB3aWR0aDogXCJmdWxsXCIgfSk7XG4gIH1cbn07XG5cbmNvbnN0IGRhdGVUaW1lTG9uZ0Zvcm1hdHRlciA9IChwYXR0ZXJuLCBmb3JtYXRMb25nKSA9PiB7XG4gIGNvbnN0IG1hdGNoUmVzdWx0ID0gcGF0dGVybi5tYXRjaCgvKFArKShwKyk/LykgfHwgW107XG4gIGNvbnN0IGRhdGVQYXR0ZXJuID0gbWF0Y2hSZXN1bHRbMV07XG4gIGNvbnN0IHRpbWVQYXR0ZXJuID0gbWF0Y2hSZXN1bHRbMl07XG5cbiAgaWYgKCF0aW1lUGF0dGVybikge1xuICAgIHJldHVybiBkYXRlTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKTtcbiAgfVxuXG4gIGxldCBkYXRlVGltZUZvcm1hdDtcblxuICBzd2l0Y2ggKGRhdGVQYXR0ZXJuKSB7XG4gICAgY2FzZSBcIlBcIjpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7IHdpZHRoOiBcInNob3J0XCIgfSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiUFBcIjpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7IHdpZHRoOiBcIm1lZGl1bVwiIH0pO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIlBQUFwiOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHsgd2lkdGg6IFwibG9uZ1wiIH0pO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIlBQUFBcIjpcbiAgICBkZWZhdWx0OlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHsgd2lkdGg6IFwiZnVsbFwiIH0pO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gZGF0ZVRpbWVGb3JtYXRcbiAgICAucmVwbGFjZShcInt7ZGF0ZX19XCIsIGRhdGVMb25nRm9ybWF0dGVyKGRhdGVQYXR0ZXJuLCBmb3JtYXRMb25nKSlcbiAgICAucmVwbGFjZShcInt7dGltZX19XCIsIHRpbWVMb25nRm9ybWF0dGVyKHRpbWVQYXR0ZXJuLCBmb3JtYXRMb25nKSk7XG59O1xuXG5leHBvcnQgY29uc3QgbG9uZ0Zvcm1hdHRlcnMgPSB7XG4gIHA6IHRpbWVMb25nRm9ybWF0dGVyLFxuICBQOiBkYXRlVGltZUxvbmdGb3JtYXR0ZXIsXG59O1xuIiwiaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4uL3RvRGF0ZS5tanNcIjtcblxuLyoqXG4gKiBHb29nbGUgQ2hyb21lIGFzIG9mIDY3LjAuMzM5Ni44NyBpbnRyb2R1Y2VkIHRpbWV6b25lcyB3aXRoIG9mZnNldCB0aGF0IGluY2x1ZGVzIHNlY29uZHMuXG4gKiBUaGV5IHVzdWFsbHkgYXBwZWFyIGZvciBkYXRlcyB0aGF0IGRlbm90ZSB0aW1lIGJlZm9yZSB0aGUgdGltZXpvbmVzIHdlcmUgaW50cm9kdWNlZFxuICogKGUuZy4gZm9yICdFdXJvcGUvUHJhZ3VlJyB0aW1lem9uZSB0aGUgb2Zmc2V0IGlzIEdNVCswMDo1Nzo0NCBiZWZvcmUgMSBPY3RvYmVyIDE4OTFcbiAqIGFuZCBHTVQrMDE6MDA6MDAgYWZ0ZXIgdGhhdCBkYXRlKVxuICpcbiAqIERhdGUjZ2V0VGltZXpvbmVPZmZzZXQgcmV0dXJucyB0aGUgb2Zmc2V0IGluIG1pbnV0ZXMgYW5kIHdvdWxkIHJldHVybiA1NyBmb3IgdGhlIGV4YW1wbGUgYWJvdmUsXG4gKiB3aGljaCB3b3VsZCBsZWFkIHRvIGluY29ycmVjdCBjYWxjdWxhdGlvbnMuXG4gKlxuICogVGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSB0aW1lem9uZSBvZmZzZXQgaW4gbWlsbGlzZWNvbmRzIHRoYXQgdGFrZXMgc2Vjb25kcyBpbiBhY2NvdW50LlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhkYXRlKSB7XG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUpO1xuICBjb25zdCB1dGNEYXRlID0gbmV3IERhdGUoXG4gICAgRGF0ZS5VVEMoXG4gICAgICBfZGF0ZS5nZXRGdWxsWWVhcigpLFxuICAgICAgX2RhdGUuZ2V0TW9udGgoKSxcbiAgICAgIF9kYXRlLmdldERhdGUoKSxcbiAgICAgIF9kYXRlLmdldEhvdXJzKCksXG4gICAgICBfZGF0ZS5nZXRNaW51dGVzKCksXG4gICAgICBfZGF0ZS5nZXRTZWNvbmRzKCksXG4gICAgICBfZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSxcbiAgICApLFxuICApO1xuICB1dGNEYXRlLnNldFVUQ0Z1bGxZZWFyKF9kYXRlLmdldEZ1bGxZZWFyKCkpO1xuICByZXR1cm4gK2RhdGUgLSArdXRjRGF0ZTtcbn1cbiIsImNvbnN0IGRheU9mWWVhclRva2VuUkUgPSAvXkQrJC87XG5jb25zdCB3ZWVrWWVhclRva2VuUkUgPSAvXlkrJC87XG5cbmNvbnN0IHRocm93VG9rZW5zID0gW1wiRFwiLCBcIkREXCIsIFwiWVlcIiwgXCJZWVlZXCJdO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbih0b2tlbikge1xuICByZXR1cm4gZGF5T2ZZZWFyVG9rZW5SRS50ZXN0KHRva2VuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbih0b2tlbikge1xuICByZXR1cm4gd2Vla1llYXJUb2tlblJFLnRlc3QodG9rZW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gd2Fybk9yVGhyb3dQcm90ZWN0ZWRFcnJvcih0b2tlbiwgZm9ybWF0LCBpbnB1dCkge1xuICBjb25zdCBfbWVzc2FnZSA9IG1lc3NhZ2UodG9rZW4sIGZvcm1hdCwgaW5wdXQpO1xuICBjb25zb2xlLndhcm4oX21lc3NhZ2UpO1xuICBpZiAodGhyb3dUb2tlbnMuaW5jbHVkZXModG9rZW4pKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcihfbWVzc2FnZSk7XG59XG5cbmZ1bmN0aW9uIG1lc3NhZ2UodG9rZW4sIGZvcm1hdCwgaW5wdXQpIHtcbiAgY29uc3Qgc3ViamVjdCA9IHRva2VuWzBdID09PSBcIllcIiA/IFwieWVhcnNcIiA6IFwiZGF5cyBvZiB0aGUgbW9udGhcIjtcbiAgcmV0dXJuIGBVc2UgXFxgJHt0b2tlbi50b0xvd2VyQ2FzZSgpfVxcYCBpbnN0ZWFkIG9mIFxcYCR7dG9rZW59XFxgIChpbiBcXGAke2Zvcm1hdH1cXGApIGZvciBmb3JtYXR0aW5nICR7c3ViamVjdH0gdG8gdGhlIGlucHV0IFxcYCR7aW5wdXR9XFxgOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRgO1xufVxuIiwiLyoqXG4gKiBAbW9kdWxlIGNvbnN0YW50c1xuICogQHN1bW1hcnkgVXNlZnVsIGNvbnN0YW50c1xuICogQGRlc2NyaXB0aW9uXG4gKiBDb2xsZWN0aW9uIG9mIHVzZWZ1bCBkYXRlIGNvbnN0YW50cy5cbiAqXG4gKiBUaGUgY29uc3RhbnRzIGNvdWxkIGJlIGltcG9ydGVkIGZyb20gYGRhdGUtZm5zL2NvbnN0YW50c2A6XG4gKlxuICogYGBgdHNcbiAqIGltcG9ydCB7IG1heFRpbWUsIG1pblRpbWUgfSBmcm9tIFwiLi9jb25zdGFudHMvZGF0ZS1mbnMvY29uc3RhbnRzXCI7XG4gKlxuICogZnVuY3Rpb24gaXNBbGxvd2VkVGltZSh0aW1lKSB7XG4gKiAgIHJldHVybiB0aW1lIDw9IG1heFRpbWUgJiYgdGltZSA+PSBtaW5UaW1lO1xuICogfVxuICogYGBgXG4gKi9cblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIGRheXNJbldlZWtcbiAqIEBzdW1tYXJ5IERheXMgaW4gMSB3ZWVrLlxuICovXG5leHBvcnQgY29uc3QgZGF5c0luV2VlayA9IDc7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBkYXlzSW5ZZWFyXG4gKiBAc3VtbWFyeSBEYXlzIGluIDEgeWVhci5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEhvdyBtYW55IGRheXMgaW4gYSB5ZWFyLlxuICpcbiAqIE9uZSB5ZWFycyBlcXVhbHMgMzY1LjI0MjUgZGF5cyBhY2NvcmRpbmcgdG8gdGhlIGZvcm11bGE6XG4gKlxuICogPiBMZWFwIHllYXIgb2NjdXJlcyBldmVyeSA0IHllYXJzLCBleGNlcHQgZm9yIHllYXJzIHRoYXQgYXJlIGRpdmlzYWJsZSBieSAxMDAgYW5kIG5vdCBkaXZpc2FibGUgYnkgNDAwLlxuICogPiAxIG1lYW4geWVhciA9ICgzNjUrMS80LTEvMTAwKzEvNDAwKSBkYXlzID0gMzY1LjI0MjUgZGF5c1xuICovXG5leHBvcnQgY29uc3QgZGF5c0luWWVhciA9IDM2NS4yNDI1O1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWF4VGltZVxuICogQHN1bW1hcnkgTWF4aW11bSBhbGxvd2VkIHRpbWUuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IG1heFRpbWUgfSBmcm9tIFwiLi9jb25zdGFudHMvZGF0ZS1mbnMvY29uc3RhbnRzXCI7XG4gKlxuICogY29uc3QgaXNWYWxpZCA9IDg2NDAwMDAwMDAwMDAwMDEgPD0gbWF4VGltZTtcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBuZXcgRGF0ZSg4NjQwMDAwMDAwMDAwMDAxKTtcbiAqIC8vPT4gSW52YWxpZCBEYXRlXG4gKi9cbmV4cG9ydCBjb25zdCBtYXhUaW1lID0gTWF0aC5wb3coMTAsIDgpICogMjQgKiA2MCAqIDYwICogMTAwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pblRpbWVcbiAqIEBzdW1tYXJ5IE1pbmltdW0gYWxsb3dlZCB0aW1lLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBtaW5UaW1lIH0gZnJvbSBcIi4vY29uc3RhbnRzL2RhdGUtZm5zL2NvbnN0YW50c1wiO1xuICpcbiAqIGNvbnN0IGlzVmFsaWQgPSAtODY0MDAwMDAwMDAwMDAwMSA+PSBtaW5UaW1lO1xuICogLy89PiBmYWxzZVxuICpcbiAqIG5ldyBEYXRlKC04NjQwMDAwMDAwMDAwMDAxKVxuICogLy89PiBJbnZhbGlkIERhdGVcbiAqL1xuZXhwb3J0IGNvbnN0IG1pblRpbWUgPSAtbWF4VGltZTtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luV2Vla1xuICogQHN1bW1hcnkgTWlsbGlzZWNvbmRzIGluIDEgd2Vlay5cbiAqL1xuZXhwb3J0IGNvbnN0IG1pbGxpc2Vjb25kc0luV2VlayA9IDYwNDgwMDAwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luRGF5XG4gKiBAc3VtbWFyeSBNaWxsaXNlY29uZHMgaW4gMSBkYXkuXG4gKi9cbmV4cG9ydCBjb25zdCBtaWxsaXNlY29uZHNJbkRheSA9IDg2NDAwMDAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5NaW51dGVcbiAqIEBzdW1tYXJ5IE1pbGxpc2Vjb25kcyBpbiAxIG1pbnV0ZVxuICovXG5leHBvcnQgY29uc3QgbWlsbGlzZWNvbmRzSW5NaW51dGUgPSA2MDAwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luSG91clxuICogQHN1bW1hcnkgTWlsbGlzZWNvbmRzIGluIDEgaG91clxuICovXG5leHBvcnQgY29uc3QgbWlsbGlzZWNvbmRzSW5Ib3VyID0gMzYwMDAwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luU2Vjb25kXG4gKiBAc3VtbWFyeSBNaWxsaXNlY29uZHMgaW4gMSBzZWNvbmRcbiAqL1xuZXhwb3J0IGNvbnN0IG1pbGxpc2Vjb25kc0luU2Vjb25kID0gMTAwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbnV0ZXNJblllYXJcbiAqIEBzdW1tYXJ5IE1pbnV0ZXMgaW4gMSB5ZWFyLlxuICovXG5leHBvcnQgY29uc3QgbWludXRlc0luWWVhciA9IDUyNTYwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbnV0ZXNJbk1vbnRoXG4gKiBAc3VtbWFyeSBNaW51dGVzIGluIDEgbW9udGguXG4gKi9cbmV4cG9ydCBjb25zdCBtaW51dGVzSW5Nb250aCA9IDQzMjAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWludXRlc0luRGF5XG4gKiBAc3VtbWFyeSBNaW51dGVzIGluIDEgZGF5LlxuICovXG5leHBvcnQgY29uc3QgbWludXRlc0luRGF5ID0gMTQ0MDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbnV0ZXNJbkhvdXJcbiAqIEBzdW1tYXJ5IE1pbnV0ZXMgaW4gMSBob3VyLlxuICovXG5leHBvcnQgY29uc3QgbWludXRlc0luSG91ciA9IDYwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbW9udGhzSW5RdWFydGVyXG4gKiBAc3VtbWFyeSBNb250aHMgaW4gMSBxdWFydGVyLlxuICovXG5leHBvcnQgY29uc3QgbW9udGhzSW5RdWFydGVyID0gMztcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1vbnRoc0luWWVhclxuICogQHN1bW1hcnkgTW9udGhzIGluIDEgeWVhci5cbiAqL1xuZXhwb3J0IGNvbnN0IG1vbnRoc0luWWVhciA9IDEyO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgcXVhcnRlcnNJblllYXJcbiAqIEBzdW1tYXJ5IFF1YXJ0ZXJzIGluIDEgeWVhclxuICovXG5leHBvcnQgY29uc3QgcXVhcnRlcnNJblllYXIgPSA0O1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgc2Vjb25kc0luSG91clxuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIGhvdXIuXG4gKi9cbmV4cG9ydCBjb25zdCBzZWNvbmRzSW5Ib3VyID0gMzYwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJbk1pbnV0ZVxuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIG1pbnV0ZS5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlY29uZHNJbk1pbnV0ZSA9IDYwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgc2Vjb25kc0luRGF5XG4gKiBAc3VtbWFyeSBTZWNvbmRzIGluIDEgZGF5LlxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luRGF5ID0gc2Vjb25kc0luSG91ciAqIDI0O1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgc2Vjb25kc0luV2Vla1xuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIHdlZWsuXG4gKi9cbmV4cG9ydCBjb25zdCBzZWNvbmRzSW5XZWVrID0gc2Vjb25kc0luRGF5ICogNztcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJblllYXJcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSB5ZWFyLlxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luWWVhciA9IHNlY29uZHNJbkRheSAqIGRheXNJblllYXI7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBzZWNvbmRzSW5Nb250aFxuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIG1vbnRoXG4gKi9cbmV4cG9ydCBjb25zdCBzZWNvbmRzSW5Nb250aCA9IHNlY29uZHNJblllYXIgLyAxMjtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJblF1YXJ0ZXJcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSBxdWFydGVyLlxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luUXVhcnRlciA9IHNlY29uZHNJbk1vbnRoICogMztcbiIsIi8qKlxuICogQG5hbWUgY29uc3RydWN0RnJvbVxuICogQGNhdGVnb3J5IEdlbmVyaWMgSGVscGVyc1xuICogQHN1bW1hcnkgQ29uc3RydWN0cyBhIGRhdGUgdXNpbmcgdGhlIHJlZmVyZW5jZSBkYXRlIGFuZCB0aGUgdmFsdWVcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoZSBmdW5jdGlvbiBjb25zdHJ1Y3RzIGEgbmV3IGRhdGUgdXNpbmcgdGhlIGNvbnN0cnVjdG9yIGZyb20gdGhlIHJlZmVyZW5jZVxuICogZGF0ZSBhbmQgdGhlIGdpdmVuIHZhbHVlLiBJdCBoZWxwcyB0byBidWlsZCBnZW5lcmljIGZ1bmN0aW9ucyB0aGF0IGFjY2VwdFxuICogZGF0ZSBleHRlbnNpb25zLlxuICpcbiAqIEl0IGRlZmF1bHRzIHRvIGBEYXRlYCBpZiB0aGUgcGFzc2VkIHJlZmVyZW5jZSBkYXRlIGlzIGEgbnVtYmVyIG9yIGEgc3RyaW5nLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIHJlZmVyZW5jZSBkYXRlIHRvIHRha2UgY29uc3RydWN0b3IgZnJvbVxuICogQHBhcmFtIHZhbHVlIC0gVGhlIHZhbHVlIHRvIGNyZWF0ZSB0aGUgZGF0ZVxuICpcbiAqIEByZXR1cm5zIERhdGUgaW5pdGlhbGl6ZWQgdXNpbmcgdGhlIGdpdmVuIGRhdGUgYW5kIHZhbHVlXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IGNvbnN0cnVjdEZyb20gfSBmcm9tICdkYXRlLWZucydcbiAqXG4gKiAvLyBBIGZ1bmN0aW9uIHRoYXQgY2xvbmVzIGEgZGF0ZSBwcmVzZXJ2aW5nIHRoZSBvcmlnaW5hbCB0eXBlXG4gKiBmdW5jdGlvbiBjbG9uZURhdGU8RGF0ZVR5cGUgZXh0ZW5kcyBEYXRlKGRhdGU6IERhdGVUeXBlKTogRGF0ZVR5cGUge1xuICogICByZXR1cm4gY29uc3RydWN0RnJvbShcbiAqICAgICBkYXRlLCAvLyBVc2UgY29udHJ1c3RvciBmcm9tIHRoZSBnaXZlbiBkYXRlXG4gKiAgICAgZGF0ZS5nZXRUaW1lKCkgLy8gVXNlIHRoZSBkYXRlIHZhbHVlIHRvIGNyZWF0ZSBhIG5ldyBkYXRlXG4gKiAgIClcbiAqIH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbnN0cnVjdEZyb20oZGF0ZSwgdmFsdWUpIHtcbiAgaWYgKGRhdGUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgcmV0dXJuIG5ldyBkYXRlLmNvbnN0cnVjdG9yKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbmV3IERhdGUodmFsdWUpO1xuICB9XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgY29uc3RydWN0RnJvbTtcbiIsImltcG9ydCB7IG1pbGxpc2Vjb25kc0luRGF5IH0gZnJvbSBcIi4vY29uc3RhbnRzLm1qc1wiO1xuaW1wb3J0IHsgc3RhcnRPZkRheSB9IGZyb20gXCIuL3N0YXJ0T2ZEYXkubWpzXCI7XG5pbXBvcnQgeyBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzIH0gZnJvbSBcIi4vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5c1xuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIG51bWJlciBvZiBjYWxlbmRhciBkYXlzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgZGF5cyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy4gVGhpcyBtZWFucyB0aGF0IHRoZSB0aW1lcyBhcmUgcmVtb3ZlZFxuICogZnJvbSB0aGUgZGF0ZXMgYW5kIHRoZW4gdGhlIGRpZmZlcmVuY2UgaW4gZGF5cyBpcyBjYWxjdWxhdGVkLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlTGVmdCAtIFRoZSBsYXRlciBkYXRlXG4gKiBAcGFyYW0gZGF0ZVJpZ2h0IC0gVGhlIGVhcmxpZXIgZGF0ZVxuICpcbiAqIEByZXR1cm5zIFRoZSBudW1iZXIgb2YgY2FsZW5kYXIgZGF5c1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBjYWxlbmRhciBkYXlzIGFyZSBiZXR3ZWVuXG4gKiAvLyAyIEp1bHkgMjAxMSAyMzowMDowMCBhbmQgMiBKdWx5IDIwMTIgMDA6MDA6MDA/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMoXG4gKiAgIG5ldyBEYXRlKDIwMTIsIDYsIDIsIDAsIDApLFxuICogICBuZXcgRGF0ZSgyMDExLCA2LCAyLCAyMywgMClcbiAqIClcbiAqIC8vPT4gMzY2XG4gKiAvLyBIb3cgbWFueSBjYWxlbmRhciBkYXlzIGFyZSBiZXR3ZWVuXG4gKiAvLyAyIEp1bHkgMjAxMSAyMzo1OTowMCBhbmQgMyBKdWx5IDIwMTEgMDA6MDE6MDA/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMoXG4gKiAgIG5ldyBEYXRlKDIwMTEsIDYsIDMsIDAsIDEpLFxuICogICBuZXcgRGF0ZSgyMDExLCA2LCAyLCAyMywgNTkpXG4gKiApXG4gKiAvLz0+IDFcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KSB7XG4gIGNvbnN0IHN0YXJ0T2ZEYXlMZWZ0ID0gc3RhcnRPZkRheShkYXRlTGVmdCk7XG4gIGNvbnN0IHN0YXJ0T2ZEYXlSaWdodCA9IHN0YXJ0T2ZEYXkoZGF0ZVJpZ2h0KTtcblxuICBjb25zdCB0aW1lc3RhbXBMZWZ0ID1cbiAgICArc3RhcnRPZkRheUxlZnQgLSBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKHN0YXJ0T2ZEYXlMZWZ0KTtcbiAgY29uc3QgdGltZXN0YW1wUmlnaHQgPVxuICAgICtzdGFydE9mRGF5UmlnaHQgLSBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKHN0YXJ0T2ZEYXlSaWdodCk7XG5cbiAgLy8gUm91bmQgdGhlIG51bWJlciBvZiBkYXlzIHRvIHRoZSBuZWFyZXN0IGludGVnZXIgYmVjYXVzZSB0aGUgbnVtYmVyIG9mXG4gIC8vIG1pbGxpc2Vjb25kcyBpbiBhIGRheSBpcyBub3QgY29uc3RhbnQgKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIHdlZWsgb2ZcbiAgLy8gdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KS5cbiAgcmV0dXJuIE1hdGgucm91bmQoKHRpbWVzdGFtcExlZnQgLSB0aW1lc3RhbXBSaWdodCkgLyBtaWxsaXNlY29uZHNJbkRheSk7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzO1xuIiwiaW1wb3J0IHsgZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzIH0gZnJvbSBcIi4vZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzLm1qc1wiO1xuaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGRpZmZlcmVuY2VJbkRheXNcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2YgZnVsbCBkYXlzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBudW1iZXIgb2YgZnVsbCBkYXkgcGVyaW9kcyBiZXR3ZWVuIHR3byBkYXRlcy4gRnJhY3Rpb25hbCBkYXlzIGFyZVxuICogdHJ1bmNhdGVkIHRvd2FyZHMgemVyby5cbiAqXG4gKiBPbmUgXCJmdWxsIGRheVwiIGlzIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIGEgbG9jYWwgdGltZSBpbiBvbmUgZGF5IHRvIHRoZSBzYW1lXG4gKiBsb2NhbCB0aW1lIG9uIHRoZSBuZXh0IG9yIHByZXZpb3VzIGRheS4gQSBmdWxsIGRheSBjYW4gc29tZXRpbWVzIGJlIGxlc3MgdGhhblxuICogb3IgbW9yZSB0aGFuIDI0IGhvdXJzIGlmIGEgZGF5bGlnaHQgc2F2aW5ncyBjaGFuZ2UgaGFwcGVucyBiZXR3ZWVuIHR3byBkYXRlcy5cbiAqXG4gKiBUbyBpZ25vcmUgRFNUIGFuZCBvbmx5IG1lYXN1cmUgZXhhY3QgMjQtaG91ciBwZXJpb2RzLCB1c2UgdGhpcyBpbnN0ZWFkOlxuICogYE1hdGgudHJ1bmMoZGlmZmVyZW5jZUluSG91cnMoZGF0ZUxlZnQsIGRhdGVSaWdodCkvMjQpfDBgLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlTGVmdCAtIFRoZSBsYXRlciBkYXRlXG4gKiBAcGFyYW0gZGF0ZVJpZ2h0IC0gVGhlIGVhcmxpZXIgZGF0ZVxuICpcbiAqIEByZXR1cm5zIFRoZSBudW1iZXIgb2YgZnVsbCBkYXlzIGFjY29yZGluZyB0byB0aGUgbG9jYWwgdGltZXpvbmVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgZnVsbCBkYXlzIGFyZSBiZXR3ZWVuXG4gKiAvLyAyIEp1bHkgMjAxMSAyMzowMDowMCBhbmQgMiBKdWx5IDIwMTIgMDA6MDA6MDA/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5EYXlzKFxuICogICBuZXcgRGF0ZSgyMDEyLCA2LCAyLCAwLCAwKSxcbiAqICAgbmV3IERhdGUoMjAxMSwgNiwgMiwgMjMsIDApXG4gKiApXG4gKiAvLz0+IDM2NVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBmdWxsIGRheXMgYXJlIGJldHdlZW5cbiAqIC8vIDIgSnVseSAyMDExIDIzOjU5OjAwIGFuZCAzIEp1bHkgMjAxMSAwMDowMTowMD9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJbkRheXMoXG4gKiAgIG5ldyBEYXRlKDIwMTEsIDYsIDMsIDAsIDEpLFxuICogICBuZXcgRGF0ZSgyMDExLCA2LCAyLCAyMywgNTkpXG4gKiApXG4gKiAvLz0+IDBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgZnVsbCBkYXlzIGFyZSBiZXR3ZWVuXG4gKiAvLyAxIE1hcmNoIDIwMjAgMDowMCBhbmQgMSBKdW5lIDIwMjAgMDowMCA/XG4gKiAvLyBOb3RlOiBiZWNhdXNlIGxvY2FsIHRpbWUgaXMgdXNlZCwgdGhlXG4gKiAvLyByZXN1bHQgd2lsbCBhbHdheXMgYmUgOTIgZGF5cywgZXZlbiBpblxuICogLy8gdGltZSB6b25lcyB3aGVyZSBEU1Qgc3RhcnRzIGFuZCB0aGVcbiAqIC8vIHBlcmlvZCBoYXMgb25seSA5MioyNC0xIGhvdXJzLlxuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluRGF5cyhcbiAqICAgbmV3IERhdGUoMjAyMCwgNSwgMSksXG4gKiAgIG5ldyBEYXRlKDIwMjAsIDIsIDEpXG4gKiApXG4gKiAvLz0+IDkyXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaWZmZXJlbmNlSW5EYXlzKGRhdGVMZWZ0LCBkYXRlUmlnaHQpIHtcbiAgY29uc3QgX2RhdGVMZWZ0ID0gdG9EYXRlKGRhdGVMZWZ0KTtcbiAgY29uc3QgX2RhdGVSaWdodCA9IHRvRGF0ZShkYXRlUmlnaHQpO1xuXG4gIGNvbnN0IHNpZ24gPSBjb21wYXJlTG9jYWxBc2MoX2RhdGVMZWZ0LCBfZGF0ZVJpZ2h0KTtcbiAgY29uc3QgZGlmZmVyZW5jZSA9IE1hdGguYWJzKGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhfZGF0ZUxlZnQsIF9kYXRlUmlnaHQpKTtcblxuICBfZGF0ZUxlZnQuc2V0RGF0ZShfZGF0ZUxlZnQuZ2V0RGF0ZSgpIC0gc2lnbiAqIGRpZmZlcmVuY2UpO1xuXG4gIC8vIE1hdGguYWJzKGRpZmYgaW4gZnVsbCBkYXlzIC0gZGlmZiBpbiBjYWxlbmRhciBkYXlzKSA9PT0gMSBpZiBsYXN0IGNhbGVuZGFyIGRheSBpcyBub3QgZnVsbFxuICAvLyBJZiBzbywgcmVzdWx0IG11c3QgYmUgZGVjcmVhc2VkIGJ5IDEgaW4gYWJzb2x1dGUgdmFsdWVcbiAgY29uc3QgaXNMYXN0RGF5Tm90RnVsbCA9IE51bWJlcihcbiAgICBjb21wYXJlTG9jYWxBc2MoX2RhdGVMZWZ0LCBfZGF0ZVJpZ2h0KSA9PT0gLXNpZ24sXG4gICk7XG4gIGNvbnN0IHJlc3VsdCA9IHNpZ24gKiAoZGlmZmVyZW5jZSAtIGlzTGFzdERheU5vdEZ1bGwpO1xuICAvLyBQcmV2ZW50IG5lZ2F0aXZlIHplcm9cbiAgcmV0dXJuIHJlc3VsdCA9PT0gMCA/IDAgOiByZXN1bHQ7XG59XG5cbi8vIExpa2UgYGNvbXBhcmVBc2NgIGJ1dCB1c2VzIGxvY2FsIHRpbWUgbm90IFVUQywgd2hpY2ggaXMgbmVlZGVkXG4vLyBmb3IgYWNjdXJhdGUgZXF1YWxpdHkgY29tcGFyaXNvbnMgb2YgVVRDIHRpbWVzdGFtcHMgdGhhdCBlbmQgdXBcbi8vIGhhdmluZyB0aGUgc2FtZSByZXByZXNlbnRhdGlvbiBpbiBsb2NhbCB0aW1lLCBlLmcuIG9uZSBob3VyIGJlZm9yZVxuLy8gRFNUIGVuZHMgdnMuIHRoZSBpbnN0YW50IHRoYXQgRFNUIGVuZHMuXG5mdW5jdGlvbiBjb21wYXJlTG9jYWxBc2MoZGF0ZUxlZnQsIGRhdGVSaWdodCkge1xuICBjb25zdCBkaWZmID1cbiAgICBkYXRlTGVmdC5nZXRGdWxsWWVhcigpIC0gZGF0ZVJpZ2h0LmdldEZ1bGxZZWFyKCkgfHxcbiAgICBkYXRlTGVmdC5nZXRNb250aCgpIC0gZGF0ZVJpZ2h0LmdldE1vbnRoKCkgfHxcbiAgICBkYXRlTGVmdC5nZXREYXRlKCkgLSBkYXRlUmlnaHQuZ2V0RGF0ZSgpIHx8XG4gICAgZGF0ZUxlZnQuZ2V0SG91cnMoKSAtIGRhdGVSaWdodC5nZXRIb3VycygpIHx8XG4gICAgZGF0ZUxlZnQuZ2V0TWludXRlcygpIC0gZGF0ZVJpZ2h0LmdldE1pbnV0ZXMoKSB8fFxuICAgIGRhdGVMZWZ0LmdldFNlY29uZHMoKSAtIGRhdGVSaWdodC5nZXRTZWNvbmRzKCkgfHxcbiAgICBkYXRlTGVmdC5nZXRNaWxsaXNlY29uZHMoKSAtIGRhdGVSaWdodC5nZXRNaWxsaXNlY29uZHMoKTtcblxuICBpZiAoZGlmZiA8IDApIHtcbiAgICByZXR1cm4gLTE7XG4gIH0gZWxzZSBpZiAoZGlmZiA+IDApIHtcbiAgICByZXR1cm4gMTtcbiAgICAvLyBSZXR1cm4gMCBpZiBkaWZmIGlzIDA7IHJldHVybiBOYU4gaWYgZGlmZiBpcyBOYU5cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZGlmZjtcbiAgfVxufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGRpZmZlcmVuY2VJbkRheXM7XG4iLCJpbXBvcnQgeyBkZWZhdWx0TG9jYWxlIH0gZnJvbSBcIi4vX2xpYi9kZWZhdWx0TG9jYWxlLm1qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi9fbGliL2RlZmF1bHRPcHRpb25zLm1qc1wiO1xuaW1wb3J0IHsgZm9ybWF0dGVycyB9IGZyb20gXCIuL19saWIvZm9ybWF0L2Zvcm1hdHRlcnMubWpzXCI7XG5pbXBvcnQgeyBsb25nRm9ybWF0dGVycyB9IGZyb20gXCIuL19saWIvZm9ybWF0L2xvbmdGb3JtYXR0ZXJzLm1qc1wiO1xuaW1wb3J0IHtcbiAgaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbixcbiAgaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuLFxuICB3YXJuT3JUaHJvd1Byb3RlY3RlZEVycm9yLFxufSBmcm9tIFwiLi9fbGliL3Byb3RlY3RlZFRva2Vucy5tanNcIjtcbmltcG9ydCB7IGlzVmFsaWQgfSBmcm9tIFwiLi9pc1ZhbGlkLm1qc1wiO1xuaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vLyBSZXhwb3J0cyBvZiBpbnRlcm5hbCBmb3IgbGlicmFyaWVzIHRvIHVzZS5cbi8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNjM4I2lzc3VlY29tbWVudC0xODc3MDgyODc0XG5leHBvcnQgeyBmb3JtYXR0ZXJzLCBsb25nRm9ybWF0dGVycyB9O1xuXG4vLyBUaGlzIFJlZ0V4cCBjb25zaXN0cyBvZiB0aHJlZSBwYXJ0cyBzZXBhcmF0ZWQgYnkgYHxgOlxuLy8gLSBbeVlRcU1Md0lkRGVjaWhIS2ttc11vIG1hdGNoZXMgYW55IGF2YWlsYWJsZSBvcmRpbmFsIG51bWJlciB0b2tlblxuLy8gICAob25lIG9mIHRoZSBjZXJ0YWluIGxldHRlcnMgZm9sbG93ZWQgYnkgYG9gKVxuLy8gLSAoXFx3KVxcMSogbWF0Y2hlcyBhbnkgc2VxdWVuY2VzIG9mIHRoZSBzYW1lIGxldHRlclxuLy8gLSAnJyBtYXRjaGVzIHR3byBxdW90ZSBjaGFyYWN0ZXJzIGluIGEgcm93XG4vLyAtICcoJyd8W14nXSkrKCd8JCkgbWF0Y2hlcyBhbnl0aGluZyBzdXJyb3VuZGVkIGJ5IHR3byBxdW90ZSBjaGFyYWN0ZXJzICgnKSxcbi8vICAgZXhjZXB0IGEgc2luZ2xlIHF1b3RlIHN5bWJvbCwgd2hpY2ggZW5kcyB0aGUgc2VxdWVuY2UuXG4vLyAgIFR3byBxdW90ZSBjaGFyYWN0ZXJzIGRvIG5vdCBlbmQgdGhlIHNlcXVlbmNlLlxuLy8gICBJZiB0aGVyZSBpcyBubyBtYXRjaGluZyBzaW5nbGUgcXVvdGVcbi8vICAgdGhlbiB0aGUgc2VxdWVuY2Ugd2lsbCBjb250aW51ZSB1bnRpbCB0aGUgZW5kIG9mIHRoZSBzdHJpbmcuXG4vLyAtIC4gbWF0Y2hlcyBhbnkgc2luZ2xlIGNoYXJhY3RlciB1bm1hdGNoZWQgYnkgcHJldmlvdXMgcGFydHMgb2YgdGhlIFJlZ0V4cHNcbmNvbnN0IGZvcm1hdHRpbmdUb2tlbnNSZWdFeHAgPVxuICAvW3lZUXFNTHdJZERlY2loSEtrbXNdb3woXFx3KVxcMSp8Jyd8JygnJ3xbXiddKSsoJ3wkKXwuL2c7XG5cbi8vIFRoaXMgUmVnRXhwIGNhdGNoZXMgc3ltYm9scyBlc2NhcGVkIGJ5IHF1b3RlcywgYW5kIGFsc29cbi8vIHNlcXVlbmNlcyBvZiBzeW1ib2xzIFAsIHAsIGFuZCB0aGUgY29tYmluYXRpb25zIGxpa2UgYFBQUFBQUFBwcHBwcGBcbmNvbnN0IGxvbmdGb3JtYXR0aW5nVG9rZW5zUmVnRXhwID0gL1ArcCt8UCt8cCt8Jyd8JygnJ3xbXiddKSsoJ3wkKXwuL2c7XG5cbmNvbnN0IGVzY2FwZWRTdHJpbmdSZWdFeHAgPSAvXicoW15dKj8pJz8kLztcbmNvbnN0IGRvdWJsZVF1b3RlUmVnRXhwID0gLycnL2c7XG5jb25zdCB1bmVzY2FwZWRMYXRpbkNoYXJhY3RlclJlZ0V4cCA9IC9bYS16QS1aXS87XG5cbmV4cG9ydCB7IGZvcm1hdCBhcyBmb3JtYXREYXRlIH07XG5cbi8qKlxuICogVGhlIHtAbGluayBmb3JtYXR9IGZ1bmN0aW9uIG9wdGlvbnMuXG4gKi9cblxuLyoqXG4gKiBAbmFtZSBmb3JtYXRcbiAqIEBhbGlhcyBmb3JtYXREYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEZvcm1hdCB0aGUgZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgZm9ybWF0dGVkIGRhdGUgc3RyaW5nIGluIHRoZSBnaXZlbiBmb3JtYXQuIFRoZSByZXN1bHQgbWF5IHZhcnkgYnkgbG9jYWxlLlxuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhlIGBmb3JtYXRgIHRva2VucyBkaWZmZXIgZnJvbSBNb21lbnQuanMgYW5kIG90aGVyIGxpYnJhcmllcy5cbiAqID4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKlxuICogVGhlIGNoYXJhY3RlcnMgd3JhcHBlZCBiZXR3ZWVuIHR3byBzaW5nbGUgcXVvdGVzIGNoYXJhY3RlcnMgKCcpIGFyZSBlc2NhcGVkLlxuICogVHdvIHNpbmdsZSBxdW90ZXMgaW4gYSByb3csIHdoZXRoZXIgaW5zaWRlIG9yIG91dHNpZGUgYSBxdW90ZWQgc2VxdWVuY2UsIHJlcHJlc2VudCBhICdyZWFsJyBzaW5nbGUgcXVvdGUuXG4gKiAoc2VlIHRoZSBsYXN0IGV4YW1wbGUpXG4gKlxuICogRm9ybWF0IG9mIHRoZSBzdHJpbmcgaXMgYmFzZWQgb24gVW5pY29kZSBUZWNobmljYWwgU3RhbmRhcmQgIzM1OlxuICogaHR0cHM6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtZGF0ZXMuaHRtbCNEYXRlX0ZpZWxkX1N5bWJvbF9UYWJsZVxuICogd2l0aCBhIGZldyBhZGRpdGlvbnMgKHNlZSBub3RlIDcgYmVsb3cgdGhlIHRhYmxlKS5cbiAqXG4gKiBBY2NlcHRlZCBwYXR0ZXJuczpcbiAqIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBhdHRlcm4gfCBSZXN1bHQgZXhhbXBsZXMgICAgICAgICAgICAgICAgICAgfCBOb3RlcyB8XG4gKiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tfFxuICogfCBFcmEgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRy4uR0dHICB8IEFELCBCQyAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEdHR0cgICAgfCBBbm5vIERvbWluaSwgQmVmb3JlIENocmlzdCAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHR0dHRyAgIHwgQSwgQiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBDYWxlbmRhciB5ZWFyICAgICAgICAgICAgICAgICAgIHwgeSAgICAgICB8IDQ0LCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHlvICAgICAgfCA0NHRoLCAxc3QsIDB0aCwgMTd0aCAgICAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eSAgICAgIHwgNDQsIDAxLCAwMCwgMTcgICAgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5ICAgICB8IDA0NCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eXkgICAgfCAwMDQ0LCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXl5eSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgIHwgWSAgICAgICB8IDQ0LCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlvICAgICAgfCA0NHRoLCAxc3QsIDE5MDB0aCwgMjAxN3RoICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWSAgICAgIHwgNDQsIDAxLCAwMCwgMTcgICAgICAgICAgICAgICAgICAgIHwgNSw4ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZICAgICB8IDA0NCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWVkgICAgfCAwMDQ0LCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgfCA1LDggICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVlZWSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBJU08gd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICAgIHwgUiAgICAgICB8IC00MywgMCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSICAgICAgfCAtNDMsIDAwLCAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlIgICAgIHwgLTA0MywgMDAwLCAwMDEsIDE5MDAsIDIwMTcgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSUiAgICB8IC0wMDQzLCAwMDAwLCAwMDAxLCAxOTAwLCAyMDE3ICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUlJSICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUsNyB8XG4gKiB8IEV4dGVuZGVkIHllYXIgICAgICAgICAgICAgICAgICAgfCB1ICAgICAgIHwgLTQzLCAwLCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXUgICAgICB8IC00MywgMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dSAgICAgfCAtMDQzLCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXV1ICAgIHwgLTAwNDMsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1dXUgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgUXVhcnRlciAoZm9ybWF0dGluZykgICAgICAgICAgICB8IFEgICAgICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRbyAgICAgIHwgMXN0LCAybmQsIDNyZCwgNHRoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVEgICAgICB8IDAxLCAwMiwgMDMsIDA0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUSAgICAgfCBRMSwgUTIsIFEzLCBRNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVFRICAgIHwgMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRUVEgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8IDQgICAgIHxcbiAqIHwgUXVhcnRlciAoc3RhbmQtYWxvbmUpICAgICAgICAgICB8IHEgICAgICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxbyAgICAgIHwgMXN0LCAybmQsIDNyZCwgNHRoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXEgICAgICB8IDAxLCAwMiwgMDMsIDA0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcSAgICAgfCBRMSwgUTIsIFEzLCBRNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXFxICAgIHwgMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxcXEgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8IDQgICAgIHxcbiAqIHwgTW9udGggKGZvcm1hdHRpbmcpICAgICAgICAgICAgICB8IE0gICAgICAgfCAxLCAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTJ0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU0gICAgICB8IDAxLCAwMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTSAgICAgfCBKYW4sIEZlYiwgLi4uLCBEZWMgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU1NICAgIHwgSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXIgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NTU0gICB8IEosIEYsIC4uLiwgRCAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTW9udGggKHN0YW5kLWFsb25lKSAgICAgICAgICAgICB8IEwgICAgICAgfCAxLCAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTJ0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTEwgICAgICB8IDAxLCAwMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTCAgICAgfCBKYW4sIEZlYiwgLi4uLCBEZWMgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTExMICAgIHwgSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXIgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMTEwgICB8IEosIEYsIC4uLiwgRCAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTG9jYWwgd2VlayBvZiB5ZWFyICAgICAgICAgICAgICB8IHcgICAgICAgfCAxLCAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB3byAgICAgIHwgMXN0LCAybmQsIC4uLiwgNTN0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgd3cgICAgICB8IDAxLCAwMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSVNPIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgICB8IEkgICAgICAgfCAxLCAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBJbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgNTN0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSUkgICAgICB8IDAxLCAwMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgICB8IGQgICAgICAgfCAxLCAyLCAuLi4sIDMxICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBkbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMzFzdCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZGQgICAgICB8IDAxLCAwMiwgLi4uLCAzMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRGF5IG9mIHllYXIgICAgICAgICAgICAgICAgICAgICB8IEQgICAgICAgfCAxLCAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICAgICAgfCA5ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMzY1dGgsIDM2NnRoICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgREQgICAgICB8IDAxLCAwMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgICB8IDkgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IERERCAgICAgfCAwMDEsIDAwMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEREREICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyAgICAgfFxuICogfCBEYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgICAgICAgIHwgRS4uRUVFICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUUgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFRSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRUVFICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgSVNPIGRheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgICB8IGkgICAgICAgfCAxLCAyLCAzLCAuLi4sIDcgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgN3RoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWkgICAgICB8IDAxLCAwMiwgLi4uLCAwNyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaSAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaWkgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWlpaSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCA3ICAgICB8XG4gKiB8IExvY2FsIGRheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgfCBlICAgICAgIHwgMiwgMywgNCwgLi4uLCAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZW8gICAgICB8IDJuZCwgM3JkLCAuLi4sIDFzdCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlICAgICAgfCAwMiwgMDMsIC4uLiwgMDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWUgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWVlICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlZWUgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBMb2NhbCBkYXkgb2Ygd2VlayAoc3RhbmQtYWxvbmUpIHwgYyAgICAgICB8IDIsIDMsIDQsIC4uLiwgMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNvICAgICAgfCAybmQsIDNyZCwgLi4uLCAxc3QgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjYyAgICAgIHwgMDIsIDAzLCAuLi4sIDAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2MgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjYyAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjY2NjICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgICB8IGEuLmFhICAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWEgICAgIHwgYW0sIHBtICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhYSAgICB8IGEubS4sIHAubS4gICAgICAgICAgICAgICAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYWFhICAgfCBhLCBwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgfCBiLi5iYiAgIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiICAgICB8IGFtLCBwbSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYmIgICAgfCBhLm0uLCBwLm0uLCBub29uLCBtaWRuaWdodCAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmJiYiAgIHwgYSwgcCwgbiwgbWkgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBGbGV4aWJsZSBkYXkgcGVyaW9kICAgICAgICAgICAgIHwgQi4uQkJCICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEJCQkIgICAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBCQkJCQiAgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgICAgICAgfFxuICogfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgIHwgaCAgICAgICB8IDEsIDIsIC4uLiwgMTEsIDEyICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGhvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMXRoLCAxMnRoICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBoaCAgICAgIHwgMDEsIDAyLCAuLi4sIDExLCAxMiAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgIHwgSCAgICAgICB8IDAsIDEsIDIsIC4uLiwgMjMgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEhvICAgICAgfCAwdGgsIDFzdCwgMm5kLCAuLi4sIDIzcmQgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBISCAgICAgIHwgMDAsIDAxLCAwMiwgLi4uLCAyMyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFswLTExXSAgICAgICAgICAgICAgICAgICAgIHwgSyAgICAgICB8IDEsIDIsIC4uLiwgMTEsIDAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEtvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMXRoLCAwdGggICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBLSyAgICAgIHwgMDEsIDAyLCAuLi4sIDExLCAwMCAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFsxLTI0XSAgICAgICAgICAgICAgICAgICAgIHwgayAgICAgICB8IDI0LCAxLCAyLCAuLi4sIDIzICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGtvICAgICAgfCAyNHRoLCAxc3QsIDJuZCwgLi4uLCAyM3JkICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBrayAgICAgIHwgMjQsIDAxLCAwMiwgLi4uLCAyMyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbSAgICAgICB8IDAsIDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG1vICAgICAgfCAwdGgsIDFzdCwgLi4uLCA1OXRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtbSAgICAgIHwgMDAsIDAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcyAgICAgICB8IDAsIDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHNvICAgICAgfCAwdGgsIDFzdCwgLi4uLCA1OXRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzcyAgICAgIHwgMDAsIDAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgIHwgUyAgICAgICB8IDAsIDEsIC4uLiwgOSAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTICAgICAgfCAwMCwgMDEsIC4uLiwgOTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTU1MgICAgIHwgMDAwLCAwMDEsIC4uLiwgOTk5ICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1NTUyAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMgICAgIHxcbiAqIHwgVGltZXpvbmUgKElTTy04NjAxIHcvIFopICAgICAgICB8IFggICAgICAgfCAtMDgsICswNTMwLCBaICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWCAgICAgIHwgLTA4MDAsICswNTMwLCBaICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYICAgICB8IC0wODowMCwgKzA1OjMwLCBaICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWFggICAgfCAtMDgwMCwgKzA1MzAsIFosICsxMjM0NTYgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFhYWCAgIHwgLTA4OjAwLCArMDU6MzAsIFosICsxMjozNDo1NiAgICAgIHwgICAgICAgfFxuICogfCBUaW1lem9uZSAoSVNPLTg2MDEgdy9vIFopICAgICAgIHwgeCAgICAgICB8IC0wOCwgKzA1MzAsICswMCAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4ICAgICAgfCAtMDgwMCwgKzA1MzAsICswMDAwICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHggICAgIHwgLTA4OjAwLCArMDU6MzAsICswMDowMCAgICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4eCAgICB8IC0wODAwLCArMDUzMCwgKzAwMDAsICsxMjM0NTYgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eHh4ICAgfCAtMDg6MDAsICswNTozMCwgKzAwOjAwLCArMTI6MzQ6NTYgfCAgICAgICB8XG4gKiB8IFRpbWV6b25lIChHTVQpICAgICAgICAgICAgICAgICAgfCBPLi4uT09PIHwgR01ULTgsIEdNVCs1OjMwLCBHTVQrMCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgT09PTyAgICB8IEdNVC0wODowMCwgR01UKzA1OjMwLCBHTVQrMDA6MDAgICB8IDIgICAgIHxcbiAqIHwgVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdC4pICB8IHouLi56enogfCBHTVQtOCwgR01UKzU6MzAsIEdNVCswICAgICAgICAgICAgfCA2ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB6enp6ICAgIHwgR01ULTA4OjAwLCBHTVQrMDU6MzAsIEdNVCswMDowMCAgIHwgMiw2ICAgfFxuICogfCBTZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICAgICAgIHwgdCAgICAgICB8IDUxMjk2OTUyMCAgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHR0ICAgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDcgICB8XG4gKiB8IE1pbGxpc2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgfCBUICAgICAgIHwgNTEyOTY5NTIwOTAwICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgVFQgICAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNyAgIHxcbiAqIHwgTG9uZyBsb2NhbGl6ZWQgZGF0ZSAgICAgICAgICAgICB8IFAgICAgICAgfCAwNC8yOS8xNDUzICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUCAgICAgIHwgQXByIDI5LCAxNDUzICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQICAgICB8IEFwcmlsIDI5dGgsIDE0NTMgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUFAgICAgfCBGcmlkYXksIEFwcmlsIDI5dGgsIDE0NTMgICAgICAgICAgfCAyLDcgICB8XG4gKiB8IExvbmcgbG9jYWxpemVkIHRpbWUgICAgICAgICAgICAgfCBwICAgICAgIHwgMTI6MDAgQU0gICAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHAgICAgICB8IDEyOjAwOjAwIEFNICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwcCAgICAgfCAxMjowMDowMCBBTSBHTVQrMiAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcHBwICAgIHwgMTI6MDA6MDAgQU0gR01UKzAyOjAwICAgICAgICAgICAgIHwgMiw3ICAgfFxuICogfCBDb21iaW5hdGlvbiBvZiBkYXRlIGFuZCB0aW1lICAgIHwgUHAgICAgICB8IDA0LzI5LzE0NTMsIDEyOjAwIEFNICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQcHAgICAgfCBBcHIgMjksIDE0NTMsIDEyOjAwOjAwIEFNICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBwcHAgIHwgQXByaWwgMjl0aCwgMTQ1MyBhdCAuLi4gICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQUHBwcHB8IEZyaWRheSwgQXByaWwgMjl0aCwgMTQ1MyBhdCAuLi4gICB8IDIsNyAgIHxcbiAqIE5vdGVzOlxuICogMS4gXCJGb3JtYXR0aW5nXCIgdW5pdHMgKGUuZy4gZm9ybWF0dGluZyBxdWFydGVyKSBpbiB0aGUgZGVmYXVsdCBlbi1VUyBsb2NhbGVcbiAqICAgIGFyZSB0aGUgc2FtZSBhcyBcInN0YW5kLWFsb25lXCIgdW5pdHMsIGJ1dCBhcmUgZGlmZmVyZW50IGluIHNvbWUgbGFuZ3VhZ2VzLlxuICogICAgXCJGb3JtYXR0aW5nXCIgdW5pdHMgYXJlIGRlY2xpbmVkIGFjY29yZGluZyB0byB0aGUgcnVsZXMgb2YgdGhlIGxhbmd1YWdlXG4gKiAgICBpbiB0aGUgY29udGV4dCBvZiBhIGRhdGUuIFwiU3RhbmQtYWxvbmVcIiB1bml0cyBhcmUgYWx3YXlzIG5vbWluYXRpdmUgc2luZ3VsYXI6XG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdkbyBMTExMJywge2xvY2FsZTogY3N9KSAvLz0+ICc2LiBsaXN0b3BhZCdgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdkbyBNTU1NJywge2xvY2FsZTogY3N9KSAvLz0+ICc2LiBsaXN0b3BhZHUnYFxuICpcbiAqIDIuIEFueSBzZXF1ZW5jZSBvZiB0aGUgaWRlbnRpY2FsIGxldHRlcnMgaXMgYSBwYXR0ZXJuLCB1bmxlc3MgaXQgaXMgZXNjYXBlZCBieVxuICogICAgdGhlIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzIChzZWUgYmVsb3cpLlxuICogICAgSWYgdGhlIHNlcXVlbmNlIGlzIGxvbmdlciB0aGFuIGxpc3RlZCBpbiB0YWJsZSAoZS5nLiBgRUVFRUVFRUVFRUVgKVxuICogICAgdGhlIG91dHB1dCB3aWxsIGJlIHRoZSBzYW1lIGFzIGRlZmF1bHQgcGF0dGVybiBmb3IgdGhpcyB1bml0LCB1c3VhbGx5XG4gKiAgICB0aGUgbG9uZ2VzdCBvbmUgKGluIGNhc2Ugb2YgSVNPIHdlZWtkYXlzLCBgRUVFRWApLiBEZWZhdWx0IHBhdHRlcm5zIGZvciB1bml0c1xuICogICAgYXJlIG1hcmtlZCB3aXRoIFwiMlwiIGluIHRoZSBsYXN0IGNvbHVtbiBvZiB0aGUgdGFibGUuXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU0nKSAvLz0+ICdOb3YnYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NJykgLy89PiAnTidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqIDMuIFNvbWUgcGF0dGVybnMgY291bGQgYmUgdW5saW1pdGVkIGxlbmd0aCAoc3VjaCBhcyBgeXl5eXl5eXlgKS5cbiAqICAgIFRoZSBvdXRwdXQgd2lsbCBiZSBwYWRkZWQgd2l0aCB6ZXJvcyB0byBtYXRjaCB0aGUgbGVuZ3RoIG9mIHRoZSBwYXR0ZXJuLlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAneXl5eXl5eXknKSAvLz0+ICcwMDAwMjAxNydgXG4gKlxuICogNC4gYFFRUVFRYCBhbmQgYHFxcXFxYCBjb3VsZCBiZSBub3Qgc3RyaWN0bHkgbnVtZXJpY2FsIGluIHNvbWUgbG9jYWxlcy5cbiAqICAgIFRoZXNlIHRva2VucyByZXByZXNlbnQgdGhlIHNob3J0ZXN0IGZvcm0gb2YgdGhlIHF1YXJ0ZXIuXG4gKlxuICogNS4gVGhlIG1haW4gZGlmZmVyZW5jZSBiZXR3ZWVuIGB5YCBhbmQgYHVgIHBhdHRlcm5zIGFyZSBCLkMuIHllYXJzOlxuICpcbiAqICAgIHwgWWVhciB8IGB5YCB8IGB1YCB8XG4gKiAgICB8LS0tLS0tfC0tLS0tfC0tLS0tfFxuICogICAgfCBBQyAxIHwgICAxIHwgICAxIHxcbiAqICAgIHwgQkMgMSB8ICAgMSB8ICAgMCB8XG4gKiAgICB8IEJDIDIgfCAgIDIgfCAgLTEgfFxuICpcbiAqICAgIEFsc28gYHl5YCBhbHdheXMgcmV0dXJucyB0aGUgbGFzdCB0d28gZGlnaXRzIG9mIGEgeWVhcixcbiAqICAgIHdoaWxlIGB1dWAgcGFkcyBzaW5nbGUgZGlnaXQgeWVhcnMgdG8gMiBjaGFyYWN0ZXJzIGFuZCByZXR1cm5zIG90aGVyIHllYXJzIHVuY2hhbmdlZDpcbiAqXG4gKiAgICB8IFllYXIgfCBgeXlgIHwgYHV1YCB8XG4gKiAgICB8LS0tLS0tfC0tLS0tLXwtLS0tLS18XG4gKiAgICB8IDEgICAgfCAgIDAxIHwgICAwMSB8XG4gKiAgICB8IDE0ICAgfCAgIDE0IHwgICAxNCB8XG4gKiAgICB8IDM3NiAgfCAgIDc2IHwgIDM3NiB8XG4gKiAgICB8IDE0NTMgfCAgIDUzIHwgMTQ1MyB8XG4gKlxuICogICAgVGhlIHNhbWUgZGlmZmVyZW5jZSBpcyB0cnVlIGZvciBsb2NhbCBhbmQgSVNPIHdlZWstbnVtYmVyaW5nIHllYXJzIChgWWAgYW5kIGBSYCksXG4gKiAgICBleGNlcHQgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhcnMgYXJlIGRlcGVuZGVudCBvbiBgb3B0aW9ucy53ZWVrU3RhcnRzT25gXG4gKiAgICBhbmQgYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCAoY29tcGFyZSBbZ2V0SVNPV2Vla1llYXJdKGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvZ2V0SVNPV2Vla1llYXIpXG4gKiAgICBhbmQgW2dldFdlZWtZZWFyXShodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL2dldFdlZWtZZWFyKSkuXG4gKlxuICogNi4gU3BlY2lmaWMgbm9uLWxvY2F0aW9uIHRpbWV6b25lcyBhcmUgY3VycmVudGx5IHVuYXZhaWxhYmxlIGluIGBkYXRlLWZuc2AsXG4gKiAgICBzbyByaWdodCBub3cgdGhlc2UgdG9rZW5zIGZhbGwgYmFjayB0byBHTVQgdGltZXpvbmVzLlxuICpcbiAqIDcuIFRoZXNlIHBhdHRlcm5zIGFyZSBub3QgaW4gdGhlIFVuaWNvZGUgVGVjaG5pY2FsIFN0YW5kYXJkICMzNTpcbiAqICAgIC0gYGlgOiBJU08gZGF5IG9mIHdlZWtcbiAqICAgIC0gYElgOiBJU08gd2VlayBvZiB5ZWFyXG4gKiAgICAtIGBSYDogSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcbiAqICAgIC0gYHRgOiBzZWNvbmRzIHRpbWVzdGFtcFxuICogICAgLSBgVGA6IG1pbGxpc2Vjb25kcyB0aW1lc3RhbXBcbiAqICAgIC0gYG9gOiBvcmRpbmFsIG51bWJlciBtb2RpZmllclxuICogICAgLSBgUGA6IGxvbmcgbG9jYWxpemVkIGRhdGVcbiAqICAgIC0gYHBgOiBsb25nIGxvY2FsaXplZCB0aW1lXG4gKlxuICogOC4gYFlZYCBhbmQgYFlZWVlgIHRva2VucyByZXByZXNlbnQgd2Vlay1udW1iZXJpbmcgeWVhcnMgYnV0IHRoZXkgYXJlIG9mdGVuIGNvbmZ1c2VkIHdpdGggeWVhcnMuXG4gKiAgICBZb3Ugc2hvdWxkIGVuYWJsZSBgb3B0aW9ucy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnNgIHRvIHVzZSB0aGVtLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqXG4gKiA5LiBgRGAgYW5kIGBERGAgdG9rZW5zIHJlcHJlc2VudCBkYXlzIG9mIHRoZSB5ZWFyIGJ1dCB0aGV5IGFyZSBvZnRlbiBjb25mdXNlZCB3aXRoIGRheXMgb2YgdGhlIG1vbnRoLlxuICogICAgWW91IHNob3VsZCBlbmFibGUgYG9wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2Vuc2AgdG8gdXNlIHRoZW0uIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSBmb3JtYXQgLSBUaGUgc3RyaW5nIG9mIHRva2Vuc1xuICogQHBhcmFtIG9wdGlvbnMgLSBBbiBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKlxuICogQHJldHVybnMgVGhlIGZvcm1hdHRlZCBkYXRlIHN0cmluZ1xuICpcbiAqIEB0aHJvd3MgYGRhdGVgIG11c3Qgbm90IGJlIEludmFsaWQgRGF0ZVxuICogQHRocm93cyBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgbG9jYWxpemVgIHByb3BlcnR5XG4gKiBAdGhyb3dzIGBvcHRpb25zLmxvY2FsZWAgbXVzdCBjb250YWluIGBmb3JtYXRMb25nYCBwcm9wZXJ0eVxuICogQHRocm93cyB1c2UgYHl5eXlgIGluc3RlYWQgb2YgYFlZWVlgIGZvciBmb3JtYXR0aW5nIHllYXJzIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3MgdXNlIGB5eWAgaW5zdGVhZCBvZiBgWVlgIGZvciBmb3JtYXR0aW5nIHllYXJzIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3MgdXNlIGBkYCBpbnN0ZWFkIG9mIGBEYCBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIHVzZSBgZGRgIGluc3RlYWQgb2YgYEREYCBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIGZvcm1hdCBzdHJpbmcgY29udGFpbnMgYW4gdW5lc2NhcGVkIGxhdGluIGFscGhhYmV0IGNoYXJhY3RlclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBSZXByZXNlbnQgMTEgRmVicnVhcnkgMjAxNCBpbiBtaWRkbGUtZW5kaWFuIGZvcm1hdDpcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCAxLCAxMSksICdNTS9kZC95eXl5JylcbiAqIC8vPT4gJzAyLzExLzIwMTQnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFJlcHJlc2VudCAyIEp1bHkgMjAxNCBpbiBFc3BlcmFudG86XG4gKiBpbXBvcnQgeyBlb0xvY2FsZSB9IGZyb20gJ2RhdGUtZm5zL2xvY2FsZS9lbydcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCA2LCAyKSwgXCJkbyAnZGUnIE1NTU0geXl5eVwiLCB7XG4gKiAgIGxvY2FsZTogZW9Mb2NhbGVcbiAqIH0pXG4gKiAvLz0+ICcyLWEgZGUganVsaW8gMjAxNCdcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRXNjYXBlIHN0cmluZyBieSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVyczpcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxNSksIFwiaCAnbycnY2xvY2snXCIpXG4gKiAvLz0+IFwiMyBvJ2Nsb2NrXCJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdChkYXRlLCBmb3JtYXRTdHIsIG9wdGlvbnMpIHtcbiAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICBjb25zdCBsb2NhbGUgPSBvcHRpb25zPy5sb2NhbGUgPz8gZGVmYXVsdE9wdGlvbnMubG9jYWxlID8/IGRlZmF1bHRMb2NhbGU7XG5cbiAgY29uc3QgZmlyc3RXZWVrQ29udGFpbnNEYXRlID1cbiAgICBvcHRpb25zPy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICBvcHRpb25zPy5sb2NhbGU/Lm9wdGlvbnM/LmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIGRlZmF1bHRPcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIGRlZmF1bHRPcHRpb25zLmxvY2FsZT8ub3B0aW9ucz8uZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgMTtcblxuICBjb25zdCB3ZWVrU3RhcnRzT24gPVxuICAgIG9wdGlvbnM/LndlZWtTdGFydHNPbiA/P1xuICAgIG9wdGlvbnM/LmxvY2FsZT8ub3B0aW9ucz8ud2Vla1N0YXJ0c09uID8/XG4gICAgZGVmYXVsdE9wdGlvbnMud2Vla1N0YXJ0c09uID8/XG4gICAgZGVmYXVsdE9wdGlvbnMubG9jYWxlPy5vcHRpb25zPy53ZWVrU3RhcnRzT24gPz9cbiAgICAwO1xuXG4gIGNvbnN0IG9yaWdpbmFsRGF0ZSA9IHRvRGF0ZShkYXRlKTtcblxuICBpZiAoIWlzVmFsaWQob3JpZ2luYWxEYXRlKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiSW52YWxpZCB0aW1lIHZhbHVlXCIpO1xuICB9XG5cbiAgbGV0IHBhcnRzID0gZm9ybWF0U3RyXG4gICAgLm1hdGNoKGxvbmdGb3JtYXR0aW5nVG9rZW5zUmVnRXhwKVxuICAgIC5tYXAoKHN1YnN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZmlyc3RDaGFyYWN0ZXIgPSBzdWJzdHJpbmdbMF07XG4gICAgICBpZiAoZmlyc3RDaGFyYWN0ZXIgPT09IFwicFwiIHx8IGZpcnN0Q2hhcmFjdGVyID09PSBcIlBcIikge1xuICAgICAgICBjb25zdCBsb25nRm9ybWF0dGVyID0gbG9uZ0Zvcm1hdHRlcnNbZmlyc3RDaGFyYWN0ZXJdO1xuICAgICAgICByZXR1cm4gbG9uZ0Zvcm1hdHRlcihzdWJzdHJpbmcsIGxvY2FsZS5mb3JtYXRMb25nKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzdWJzdHJpbmc7XG4gICAgfSlcbiAgICAuam9pbihcIlwiKVxuICAgIC5tYXRjaChmb3JtYXR0aW5nVG9rZW5zUmVnRXhwKVxuICAgIC5tYXAoKHN1YnN0cmluZykgPT4ge1xuICAgICAgLy8gUmVwbGFjZSB0d28gc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnMgd2l0aCBvbmUgc2luZ2xlIHF1b3RlIGNoYXJhY3RlclxuICAgICAgaWYgKHN1YnN0cmluZyA9PT0gXCInJ1wiKSB7XG4gICAgICAgIHJldHVybiB7IGlzVG9rZW46IGZhbHNlLCB2YWx1ZTogXCInXCIgfTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZmlyc3RDaGFyYWN0ZXIgPSBzdWJzdHJpbmdbMF07XG4gICAgICBpZiAoZmlyc3RDaGFyYWN0ZXIgPT09IFwiJ1wiKSB7XG4gICAgICAgIHJldHVybiB7IGlzVG9rZW46IGZhbHNlLCB2YWx1ZTogY2xlYW5Fc2NhcGVkU3RyaW5nKHN1YnN0cmluZykgfTtcbiAgICAgIH1cblxuICAgICAgaWYgKGZvcm1hdHRlcnNbZmlyc3RDaGFyYWN0ZXJdKSB7XG4gICAgICAgIHJldHVybiB7IGlzVG9rZW46IHRydWUsIHZhbHVlOiBzdWJzdHJpbmcgfTtcbiAgICAgIH1cblxuICAgICAgaWYgKGZpcnN0Q2hhcmFjdGVyLm1hdGNoKHVuZXNjYXBlZExhdGluQ2hhcmFjdGVyUmVnRXhwKSkge1xuICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcbiAgICAgICAgICBcIkZvcm1hdCBzdHJpbmcgY29udGFpbnMgYW4gdW5lc2NhcGVkIGxhdGluIGFscGhhYmV0IGNoYXJhY3RlciBgXCIgK1xuICAgICAgICAgICAgZmlyc3RDaGFyYWN0ZXIgK1xuICAgICAgICAgICAgXCJgXCIsXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7IGlzVG9rZW46IGZhbHNlLCB2YWx1ZTogc3Vic3RyaW5nIH07XG4gICAgfSk7XG5cbiAgLy8gaW52b2tlIGxvY2FsaXplIHByZXByb2Nlc3NvciAob25seSBmb3IgZnJlbmNoIGxvY2FsZXMgYXQgdGhlIG1vbWVudClcbiAgaWYgKGxvY2FsZS5sb2NhbGl6ZS5wcmVwcm9jZXNzb3IpIHtcbiAgICBwYXJ0cyA9IGxvY2FsZS5sb2NhbGl6ZS5wcmVwcm9jZXNzb3Iob3JpZ2luYWxEYXRlLCBwYXJ0cyk7XG4gIH1cblxuICBjb25zdCBmb3JtYXR0ZXJPcHRpb25zID0ge1xuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSxcbiAgICB3ZWVrU3RhcnRzT24sXG4gICAgbG9jYWxlLFxuICB9O1xuXG4gIHJldHVybiBwYXJ0c1xuICAgIC5tYXAoKHBhcnQpID0+IHtcbiAgICAgIGlmICghcGFydC5pc1Rva2VuKSByZXR1cm4gcGFydC52YWx1ZTtcblxuICAgICAgY29uc3QgdG9rZW4gPSBwYXJ0LnZhbHVlO1xuXG4gICAgICBpZiAoXG4gICAgICAgICghb3B0aW9ucz8udXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zICYmXG4gICAgICAgICAgaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuKHRva2VuKSkgfHxcbiAgICAgICAgKCFvcHRpb25zPy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zICYmXG4gICAgICAgICAgaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbih0b2tlbikpXG4gICAgICApIHtcbiAgICAgICAgd2Fybk9yVGhyb3dQcm90ZWN0ZWRFcnJvcih0b2tlbiwgZm9ybWF0U3RyLCBTdHJpbmcoZGF0ZSkpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBmb3JtYXR0ZXIgPSBmb3JtYXR0ZXJzW3Rva2VuWzBdXTtcbiAgICAgIHJldHVybiBmb3JtYXR0ZXIob3JpZ2luYWxEYXRlLCB0b2tlbiwgbG9jYWxlLmxvY2FsaXplLCBmb3JtYXR0ZXJPcHRpb25zKTtcbiAgICB9KVxuICAgIC5qb2luKFwiXCIpO1xufVxuXG5mdW5jdGlvbiBjbGVhbkVzY2FwZWRTdHJpbmcoaW5wdXQpIHtcbiAgY29uc3QgbWF0Y2hlZCA9IGlucHV0Lm1hdGNoKGVzY2FwZWRTdHJpbmdSZWdFeHApO1xuXG4gIGlmICghbWF0Y2hlZCkge1xuICAgIHJldHVybiBpbnB1dDtcbiAgfVxuXG4gIHJldHVybiBtYXRjaGVkWzFdLnJlcGxhY2UoZG91YmxlUXVvdGVSZWdFeHAsIFwiJ1wiKTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBmb3JtYXQ7XG4iLCJpbXBvcnQgeyBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMgfSBmcm9tIFwiLi9kaWZmZXJlbmNlSW5DYWxlbmRhckRheXMubWpzXCI7XG5pbXBvcnQgeyBzdGFydE9mWWVhciB9IGZyb20gXCIuL3N0YXJ0T2ZZZWFyLm1qc1wiO1xuaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGdldERheU9mWWVhclxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIGRheSBvZiB0aGUgeWVhciBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgZGF5IG9mIHRoZSB5ZWFyIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGdpdmVuIGRhdGVcbiAqXG4gKiBAcmV0dXJucyBUaGUgZGF5IG9mIHllYXJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggZGF5IG9mIHRoZSB5ZWFyIGlzIDIgSnVseSAyMDE0P1xuICogY29uc3QgcmVzdWx0ID0gZ2V0RGF5T2ZZZWFyKG5ldyBEYXRlKDIwMTQsIDYsIDIpKVxuICogLy89PiAxODNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldERheU9mWWVhcihkYXRlKSB7XG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUpO1xuICBjb25zdCBkaWZmID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKF9kYXRlLCBzdGFydE9mWWVhcihfZGF0ZSkpO1xuICBjb25zdCBkYXlPZlllYXIgPSBkaWZmICsgMTtcbiAgcmV0dXJuIGRheU9mWWVhcjtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBnZXREYXlPZlllYXI7XG4iLCJpbXBvcnQgeyBtaWxsaXNlY29uZHNJbldlZWsgfSBmcm9tIFwiLi9jb25zdGFudHMubWpzXCI7XG5pbXBvcnQgeyBzdGFydE9mSVNPV2VlayB9IGZyb20gXCIuL3N0YXJ0T2ZJU09XZWVrLm1qc1wiO1xuaW1wb3J0IHsgc3RhcnRPZklTT1dlZWtZZWFyIH0gZnJvbSBcIi4vc3RhcnRPZklTT1dlZWtZZWFyLm1qc1wiO1xuaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGdldElTT1dlZWtcbiAqIEBjYXRlZ29yeSBJU08gV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIElTTyB3ZWVrIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBJU08gd2VlayBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBJU08gd2Vlay1udW1iZXJpbmcgeWVhcjogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZ2l2ZW4gZGF0ZVxuICpcbiAqIEByZXR1cm5zIFRoZSBJU08gd2Vla1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCB3ZWVrIG9mIHRoZSBJU08td2VlayBudW1iZXJpbmcgeWVhciBpcyAyIEphbnVhcnkgMjAwNT9cbiAqIGNvbnN0IHJlc3VsdCA9IGdldElTT1dlZWsobmV3IERhdGUoMjAwNSwgMCwgMikpXG4gKiAvLz0+IDUzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRJU09XZWVrKGRhdGUpIHtcbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIGNvbnN0IGRpZmYgPSArc3RhcnRPZklTT1dlZWsoX2RhdGUpIC0gK3N0YXJ0T2ZJU09XZWVrWWVhcihfZGF0ZSk7XG5cbiAgLy8gUm91bmQgdGhlIG51bWJlciBvZiB3ZWVrcyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyIGJlY2F1c2UgdGhlIG51bWJlciBvZlxuICAvLyBtaWxsaXNlY29uZHMgaW4gYSB3ZWVrIGlzIG5vdCBjb25zdGFudCAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZlxuICAvLyB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpLlxuICByZXR1cm4gTWF0aC5yb3VuZChkaWZmIC8gbWlsbGlzZWNvbmRzSW5XZWVrKSArIDE7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgZ2V0SVNPV2VlaztcbiIsImltcG9ydCB7IGNvbnN0cnVjdEZyb20gfSBmcm9tIFwiLi9jb25zdHJ1Y3RGcm9tLm1qc1wiO1xuaW1wb3J0IHsgc3RhcnRPZklTT1dlZWsgfSBmcm9tIFwiLi9zdGFydE9mSVNPV2Vlay5tanNcIjtcbmltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBnZXRJU09XZWVrWWVhclxuICogQGNhdGVnb3J5IElTTyBXZWVrLU51bWJlcmluZyBZZWFyIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyIG9mIHRoZSBnaXZlbiBkYXRlLFxuICogd2hpY2ggYWx3YXlzIHN0YXJ0cyAzIGRheXMgYmVmb3JlIHRoZSB5ZWFyJ3MgZmlyc3QgVGh1cnNkYXkuXG4gKlxuICogSVNPIHdlZWstbnVtYmVyaW5nIHllYXI6IGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPX3dlZWtfZGF0ZVxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGdpdmVuIGRhdGVcbiAqXG4gKiBAcmV0dXJucyBUaGUgSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggSVNPLXdlZWsgbnVtYmVyaW5nIHllYXIgaXMgMiBKYW51YXJ5IDIwMDU/XG4gKiBjb25zdCByZXN1bHQgPSBnZXRJU09XZWVrWWVhcihuZXcgRGF0ZSgyMDA1LCAwLCAyKSlcbiAqIC8vPT4gMjAwNFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0SVNPV2Vla1llYXIoZGF0ZSkge1xuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgY29uc3QgeWVhciA9IF9kYXRlLmdldEZ1bGxZZWFyKCk7XG5cbiAgY29uc3QgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhciA9IGNvbnN0cnVjdEZyb20oZGF0ZSwgMCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIuc2V0RnVsbFllYXIoeWVhciArIDEsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICBjb25zdCBzdGFydE9mTmV4dFllYXIgPSBzdGFydE9mSVNPV2Vlayhmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyKTtcblxuICBjb25zdCBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyID0gY29uc3RydWN0RnJvbShkYXRlLCAwKTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhci5zZXRGdWxsWWVhcih5ZWFyLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhci5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgY29uc3Qgc3RhcnRPZlRoaXNZZWFyID0gc3RhcnRPZklTT1dlZWsoZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhcik7XG5cbiAgaWYgKF9kYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mTmV4dFllYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXIgKyAxO1xuICB9IGVsc2UgaWYgKF9kYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mVGhpc1llYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHllYXIgLSAxO1xuICB9XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgZ2V0SVNPV2Vla1llYXI7XG4iLCJpbXBvcnQgeyBtaWxsaXNlY29uZHNJbldlZWsgfSBmcm9tIFwiLi9jb25zdGFudHMubWpzXCI7XG5pbXBvcnQgeyBzdGFydE9mV2VlayB9IGZyb20gXCIuL3N0YXJ0T2ZXZWVrLm1qc1wiO1xuaW1wb3J0IHsgc3RhcnRPZldlZWtZZWFyIH0gZnJvbSBcIi4vc3RhcnRPZldlZWtZZWFyLm1qc1wiO1xuaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIFRoZSB7QGxpbmsgZ2V0V2Vla30gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIGdldFdlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbG9jYWwgd2VlayBpbmRleCBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbG9jYWwgd2VlayBpbmRleCBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSBleGFjdCBjYWxjdWxhdGlvbiBkZXBlbmRzIG9uIHRoZSB2YWx1ZXMgb2ZcbiAqIGBvcHRpb25zLndlZWtTdGFydHNPbmAgKHdoaWNoIGlzIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrKVxuICogYW5kIGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgKHdoaWNoIGlzIHRoZSBkYXkgb2YgSmFudWFyeSwgd2hpY2ggaXMgYWx3YXlzIGluXG4gKiB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgd2Vlay1udW1iZXJpbmcgeWVhcilcbiAqXG4gKiBXZWVrIG51bWJlcmluZzogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvV2VlayNUaGVfSVNPX3dlZWtfZGF0ZV9zeXN0ZW1cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBnaXZlbiBkYXRlXG4gKiBAcGFyYW0gb3B0aW9ucyAtIEFuIG9iamVjdCB3aXRoIG9wdGlvbnNcbiAqXG4gKiBAcmV0dXJucyBUaGUgd2Vla1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCB3ZWVrIG9mIHRoZSBsb2NhbCB3ZWVrIG51bWJlcmluZyB5ZWFyIGlzIDIgSmFudWFyeSAyMDA1IHdpdGggZGVmYXVsdCBvcHRpb25zP1xuICogY29uc3QgcmVzdWx0ID0gZ2V0V2VlayhuZXcgRGF0ZSgyMDA1LCAwLCAyKSlcbiAqIC8vPT4gMlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCB3ZWVrIG9mIHRoZSBsb2NhbCB3ZWVrIG51bWJlcmluZyB5ZWFyIGlzIDIgSmFudWFyeSAyMDA1LFxuICogLy8gaWYgTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWssXG4gKiAvLyBhbmQgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIgYWx3YXlzIGNvbnRhaW5zIDQgSmFudWFyeT9cbiAqIGNvbnN0IHJlc3VsdCA9IGdldFdlZWsobmV3IERhdGUoMjAwNSwgMCwgMiksIHtcbiAqICAgd2Vla1N0YXJ0c09uOiAxLFxuICogICBmaXJzdFdlZWtDb250YWluc0RhdGU6IDRcbiAqIH0pXG4gKiAvLz0+IDUzXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFdlZWsoZGF0ZSwgb3B0aW9ucykge1xuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgY29uc3QgZGlmZiA9ICtzdGFydE9mV2VlayhfZGF0ZSwgb3B0aW9ucykgLSArc3RhcnRPZldlZWtZZWFyKF9kYXRlLCBvcHRpb25zKTtcblxuICAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIHdlZWtzIHRvIHRoZSBuZWFyZXN0IGludGVnZXIgYmVjYXVzZSB0aGUgbnVtYmVyIG9mXG4gIC8vIG1pbGxpc2Vjb25kcyBpbiBhIHdlZWsgaXMgbm90IGNvbnN0YW50IChlLmcuIGl0J3MgZGlmZmVyZW50IGluIHRoZSB3ZWVrIG9mXG4gIC8vIHRoZSBkYXlsaWdodCBzYXZpbmcgdGltZSBjbG9jayBzaGlmdCkuXG4gIHJldHVybiBNYXRoLnJvdW5kKGRpZmYgLyBtaWxsaXNlY29uZHNJbldlZWspICsgMTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBnZXRXZWVrO1xuIiwiaW1wb3J0IHsgY29uc3RydWN0RnJvbSB9IGZyb20gXCIuL2NvbnN0cnVjdEZyb20ubWpzXCI7XG5pbXBvcnQgeyBzdGFydE9mV2VlayB9IGZyb20gXCIuL3N0YXJ0T2ZXZWVrLm1qc1wiO1xuaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi9fbGliL2RlZmF1bHRPcHRpb25zLm1qc1wiO1xuXG4vKipcbiAqIFRoZSB7QGxpbmsgZ2V0V2Vla1llYXJ9IGZ1bmN0aW9uIG9wdGlvbnMuXG4gKi9cblxuLyoqXG4gKiBAbmFtZSBnZXRXZWVrWWVhclxuICogQGNhdGVnb3J5IFdlZWstTnVtYmVyaW5nIFllYXIgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyIG9mIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIGV4YWN0IGNhbGN1bGF0aW9uIGRlcGVuZHMgb24gdGhlIHZhbHVlcyBvZlxuICogYG9wdGlvbnMud2Vla1N0YXJ0c09uYCAod2hpY2ggaXMgdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWspXG4gKiBhbmQgYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCAod2hpY2ggaXMgdGhlIGRheSBvZiBKYW51YXJ5LCB3aGljaCBpcyBhbHdheXMgaW5cbiAqIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB3ZWVrLW51bWJlcmluZyB5ZWFyKVxuICpcbiAqIFdlZWsgbnVtYmVyaW5nOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9XZWVrI1RoZV9JU09fd2Vla19kYXRlX3N5c3RlbVxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGdpdmVuIGRhdGVcbiAqIEBwYXJhbSBvcHRpb25zIC0gQW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqXG4gKiBAcmV0dXJucyBUaGUgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCB3ZWVrIG51bWJlcmluZyB5ZWFyIGlzIDI2IERlY2VtYmVyIDIwMDQgd2l0aCB0aGUgZGVmYXVsdCBzZXR0aW5ncz9cbiAqIGNvbnN0IHJlc3VsdCA9IGdldFdlZWtZZWFyKG5ldyBEYXRlKDIwMDQsIDExLCAyNikpXG4gKiAvLz0+IDIwMDVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggd2VlayBudW1iZXJpbmcgeWVhciBpcyAyNiBEZWNlbWJlciAyMDA0IGlmIHdlZWsgc3RhcnRzIG9uIFNhdHVyZGF5P1xuICogY29uc3QgcmVzdWx0ID0gZ2V0V2Vla1llYXIobmV3IERhdGUoMjAwNCwgMTEsIDI2KSwgeyB3ZWVrU3RhcnRzT246IDYgfSlcbiAqIC8vPT4gMjAwNFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCB3ZWVrIG51bWJlcmluZyB5ZWFyIGlzIDI2IERlY2VtYmVyIDIwMDQgaWYgdGhlIGZpcnN0IHdlZWsgY29udGFpbnMgNCBKYW51YXJ5P1xuICogY29uc3QgcmVzdWx0ID0gZ2V0V2Vla1llYXIobmV3IERhdGUoMjAwNCwgMTEsIDI2KSwgeyBmaXJzdFdlZWtDb250YWluc0RhdGU6IDQgfSlcbiAqIC8vPT4gMjAwNFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0V2Vla1llYXIoZGF0ZSwgb3B0aW9ucykge1xuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgY29uc3QgeWVhciA9IF9kYXRlLmdldEZ1bGxZZWFyKCk7XG5cbiAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICBjb25zdCBmaXJzdFdlZWtDb250YWluc0RhdGUgPVxuICAgIG9wdGlvbnM/LmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIG9wdGlvbnM/LmxvY2FsZT8ub3B0aW9ucz8uZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgZGVmYXVsdE9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgZGVmYXVsdE9wdGlvbnMubG9jYWxlPy5vcHRpb25zPy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICAxO1xuXG4gIGNvbnN0IGZpcnN0V2Vla09mTmV4dFllYXIgPSBjb25zdHJ1Y3RGcm9tKGRhdGUsIDApO1xuICBmaXJzdFdlZWtPZk5leHRZZWFyLnNldEZ1bGxZZWFyKHllYXIgKyAxLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWtPZk5leHRZZWFyLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICBjb25zdCBzdGFydE9mTmV4dFllYXIgPSBzdGFydE9mV2VlayhmaXJzdFdlZWtPZk5leHRZZWFyLCBvcHRpb25zKTtcblxuICBjb25zdCBmaXJzdFdlZWtPZlRoaXNZZWFyID0gY29uc3RydWN0RnJvbShkYXRlLCAwKTtcbiAgZmlyc3RXZWVrT2ZUaGlzWWVhci5zZXRGdWxsWWVhcih5ZWFyLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWtPZlRoaXNZZWFyLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICBjb25zdCBzdGFydE9mVGhpc1llYXIgPSBzdGFydE9mV2VlayhmaXJzdFdlZWtPZlRoaXNZZWFyLCBvcHRpb25zKTtcblxuICBpZiAoX2RhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZOZXh0WWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhciArIDE7XG4gIH0gZWxzZSBpZiAoX2RhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZUaGlzWWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhcjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geWVhciAtIDE7XG4gIH1cbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBnZXRXZWVrWWVhcjtcbiIsIi8qKlxuICogQG5hbWUgaXNEYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiB2YWx1ZSBhIGRhdGU/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGFuIGluc3RhbmNlIG9mIERhdGUuIFRoZSBmdW5jdGlvbiB3b3JrcyBmb3IgZGF0ZXMgdHJhbnNmZXJyZWQgYWNyb3NzIGlmcmFtZXMuXG4gKlxuICogQHBhcmFtIHZhbHVlIC0gVGhlIHZhbHVlIHRvIGNoZWNrXG4gKlxuICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYSBkYXRlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhIHZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUobmV3IERhdGUoKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYW4gaW52YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKG5ldyBEYXRlKE5hTikpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHNvbWUgdmFsdWU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUoJzIwMTQtMDItMzEnKVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYW4gb2JqZWN0OlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKHt9KVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNEYXRlKHZhbHVlKSB7XG4gIHJldHVybiAoXG4gICAgdmFsdWUgaW5zdGFuY2VvZiBEYXRlIHx8XG4gICAgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gXCJbb2JqZWN0IERhdGVdXCIpXG4gICk7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgaXNEYXRlO1xuIiwiaW1wb3J0IHsgaXNEYXRlIH0gZnJvbSBcIi4vaXNEYXRlLm1qc1wiO1xuaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGlzVmFsaWRcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdmFsaWQ/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm5zIGZhbHNlIGlmIGFyZ3VtZW50IGlzIEludmFsaWQgRGF0ZSBhbmQgdHJ1ZSBvdGhlcndpc2UuXG4gKiBBcmd1bWVudCBpcyBjb252ZXJ0ZWQgdG8gRGF0ZSB1c2luZyBgdG9EYXRlYC4gU2VlIFt0b0RhdGVdKGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvdG9EYXRlKVxuICogSW52YWxpZCBEYXRlIGlzIGEgRGF0ZSwgd2hvc2UgdGltZSB2YWx1ZSBpcyBOYU4uXG4gKlxuICogVGltZSB2YWx1ZSBvZiBEYXRlOiBodHRwOi8vZXM1LmdpdGh1Yi5pby8jeDE1LjkuMS4xXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZGF0ZSB0byBjaGVja1xuICpcbiAqIEByZXR1cm5zIFRoZSBkYXRlIGlzIHZhbGlkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgdmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQobmV3IERhdGUoMjAxNCwgMSwgMzEpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgdmFsdWUsIGNvbnZlcnRhYmxlIGludG8gYSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZCgxMzkzODA0ODAwMDAwKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgaW52YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZChuZXcgRGF0ZSgnJykpXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1ZhbGlkKGRhdGUpIHtcbiAgaWYgKCFpc0RhdGUoZGF0ZSkgJiYgdHlwZW9mIGRhdGUgIT09IFwibnVtYmVyXCIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIHJldHVybiAhaXNOYU4oTnVtYmVyKF9kYXRlKSk7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgaXNWYWxpZDtcbiIsImV4cG9ydCBmdW5jdGlvbiBidWlsZEZvcm1hdExvbmdGbihhcmdzKSB7XG4gIHJldHVybiAob3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgLy8gVE9ETzogUmVtb3ZlIFN0cmluZygpXG4gICAgY29uc3Qgd2lkdGggPSBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgY29uc3QgZm9ybWF0ID0gYXJncy5mb3JtYXRzW3dpZHRoXSB8fCBhcmdzLmZvcm1hdHNbYXJncy5kZWZhdWx0V2lkdGhdO1xuICAgIHJldHVybiBmb3JtYXQ7XG4gIH07XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuXG4vKipcbiAqIFRoZSBsb2NhbGl6ZSBmdW5jdGlvbiBhcmd1bWVudCBjYWxsYmFjayB3aGljaCBhbGxvd3MgdG8gY29udmVydCByYXcgdmFsdWUgdG9cbiAqIHRoZSBhY3R1YWwgdHlwZS5cbiAqXG4gKiBAcGFyYW0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gY29udmVydFxuICpcbiAqIEByZXR1cm5zIFRoZSBjb252ZXJ0ZWQgdmFsdWVcbiAqL1xuXG4vKipcbiAqIFRoZSBtYXAgb2YgbG9jYWxpemVkIHZhbHVlcyBmb3IgZWFjaCB3aWR0aC5cbiAqL1xuXG4vKipcbiAqIFRoZSBpbmRleCB0eXBlIG9mIHRoZSBsb2NhbGUgdW5pdCB2YWx1ZS4gSXQgdHlwZXMgY29udmVyc2lvbiBvZiB1bml0cyBvZlxuICogdmFsdWVzIHRoYXQgZG9uJ3Qgc3RhcnQgYXQgMCAoaS5lLiBxdWFydGVycykuXG4gKi9cblxuLyoqXG4gKiBDb252ZXJ0cyB0aGUgdW5pdCB2YWx1ZSB0byB0aGUgdHVwbGUgb2YgdmFsdWVzLlxuICovXG5cbi8qKlxuICogVGhlIHR1cGxlIG9mIGxvY2FsaXplZCBlcmEgdmFsdWVzLiBUaGUgZmlyc3QgZWxlbWVudCByZXByZXNlbnRzIEJDLFxuICogdGhlIHNlY29uZCBlbGVtZW50IHJlcHJlc2VudHMgQUQuXG4gKi9cblxuLyoqXG4gKiBUaGUgdHVwbGUgb2YgbG9jYWxpemVkIHF1YXJ0ZXIgdmFsdWVzLiBUaGUgZmlyc3QgZWxlbWVudCByZXByZXNlbnRzIFExLlxuICovXG5cbi8qKlxuICogVGhlIHR1cGxlIG9mIGxvY2FsaXplZCBkYXkgdmFsdWVzLiBUaGUgZmlyc3QgZWxlbWVudCByZXByZXNlbnRzIFN1bmRheS5cbiAqL1xuXG4vKipcbiAqIFRoZSB0dXBsZSBvZiBsb2NhbGl6ZWQgbW9udGggdmFsdWVzLiBUaGUgZmlyc3QgZWxlbWVudCByZXByZXNlbnRzIEphbnVhcnkuXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkTG9jYWxpemVGbihhcmdzKSB7XG4gIHJldHVybiAodmFsdWUsIG9wdGlvbnMpID0+IHtcbiAgICBjb25zdCBjb250ZXh0ID0gb3B0aW9ucz8uY29udGV4dCA/IFN0cmluZyhvcHRpb25zLmNvbnRleHQpIDogXCJzdGFuZGFsb25lXCI7XG5cbiAgICBsZXQgdmFsdWVzQXJyYXk7XG4gICAgaWYgKGNvbnRleHQgPT09IFwiZm9ybWF0dGluZ1wiICYmIGFyZ3MuZm9ybWF0dGluZ1ZhbHVlcykge1xuICAgICAgY29uc3QgZGVmYXVsdFdpZHRoID0gYXJncy5kZWZhdWx0Rm9ybWF0dGluZ1dpZHRoIHx8IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgICAgY29uc3Qgd2lkdGggPSBvcHRpb25zPy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGRlZmF1bHRXaWR0aDtcblxuICAgICAgdmFsdWVzQXJyYXkgPVxuICAgICAgICBhcmdzLmZvcm1hdHRpbmdWYWx1ZXNbd2lkdGhdIHx8IGFyZ3MuZm9ybWF0dGluZ1ZhbHVlc1tkZWZhdWx0V2lkdGhdO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBkZWZhdWx0V2lkdGggPSBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICAgIGNvbnN0IHdpZHRoID0gb3B0aW9ucz8ud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBhcmdzLmRlZmF1bHRXaWR0aDtcblxuICAgICAgdmFsdWVzQXJyYXkgPSBhcmdzLnZhbHVlc1t3aWR0aF0gfHwgYXJncy52YWx1ZXNbZGVmYXVsdFdpZHRoXTtcbiAgICB9XG4gICAgY29uc3QgaW5kZXggPSBhcmdzLmFyZ3VtZW50Q2FsbGJhY2sgPyBhcmdzLmFyZ3VtZW50Q2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG5cbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gRm9yIHNvbWUgcmVhc29uIFR5cGVTY3JpcHQganVzdCBkb24ndCB3YW50IHRvIG1hdGNoIGl0LCBubyBtYXR0ZXIgaG93IGhhcmQgd2UgdHJ5LiBJIGNoYWxsZW5nZSB5b3UgdG8gdHJ5IHRvIHJlbW92ZSBpdCFcbiAgICByZXR1cm4gdmFsdWVzQXJyYXlbaW5kZXhdO1xuICB9O1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkTWF0Y2hGbihhcmdzKSB7XG4gIHJldHVybiAoc3RyaW5nLCBvcHRpb25zID0ge30pID0+IHtcbiAgICBjb25zdCB3aWR0aCA9IG9wdGlvbnMud2lkdGg7XG5cbiAgICBjb25zdCBtYXRjaFBhdHRlcm4gPVxuICAgICAgKHdpZHRoICYmIGFyZ3MubWF0Y2hQYXR0ZXJuc1t3aWR0aF0pIHx8XG4gICAgICBhcmdzLm1hdGNoUGF0dGVybnNbYXJncy5kZWZhdWx0TWF0Y2hXaWR0aF07XG4gICAgY29uc3QgbWF0Y2hSZXN1bHQgPSBzdHJpbmcubWF0Y2gobWF0Y2hQYXR0ZXJuKTtcblxuICAgIGlmICghbWF0Y2hSZXN1bHQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCBtYXRjaGVkU3RyaW5nID0gbWF0Y2hSZXN1bHRbMF07XG5cbiAgICBjb25zdCBwYXJzZVBhdHRlcm5zID1cbiAgICAgICh3aWR0aCAmJiBhcmdzLnBhcnNlUGF0dGVybnNbd2lkdGhdKSB8fFxuICAgICAgYXJncy5wYXJzZVBhdHRlcm5zW2FyZ3MuZGVmYXVsdFBhcnNlV2lkdGhdO1xuXG4gICAgY29uc3Qga2V5ID0gQXJyYXkuaXNBcnJheShwYXJzZVBhdHRlcm5zKVxuICAgICAgPyBmaW5kSW5kZXgocGFyc2VQYXR0ZXJucywgKHBhdHRlcm4pID0+IHBhdHRlcm4udGVzdChtYXRjaGVkU3RyaW5nKSlcbiAgICAgIDogLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkgLS0gSSBjaGFsbGFuZ2UgeW91IHRvIGZpeCB0aGUgdHlwZVxuICAgICAgICBmaW5kS2V5KHBhcnNlUGF0dGVybnMsIChwYXR0ZXJuKSA9PiBwYXR0ZXJuLnRlc3QobWF0Y2hlZFN0cmluZykpO1xuXG4gICAgbGV0IHZhbHVlO1xuXG4gICAgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2sgPyBhcmdzLnZhbHVlQ2FsbGJhY2soa2V5KSA6IGtleTtcbiAgICB2YWx1ZSA9IG9wdGlvbnMudmFsdWVDYWxsYmFja1xuICAgICAgPyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueSAtLSBJIGNoYWxsYW5nZSB5b3UgdG8gZml4IHRoZSB0eXBlXG4gICAgICAgIG9wdGlvbnMudmFsdWVDYWxsYmFjayh2YWx1ZSlcbiAgICAgIDogdmFsdWU7XG5cbiAgICBjb25zdCByZXN0ID0gc3RyaW5nLnNsaWNlKG1hdGNoZWRTdHJpbmcubGVuZ3RoKTtcblxuICAgIHJldHVybiB7IHZhbHVlLCByZXN0IH07XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZpbmRLZXkob2JqZWN0LCBwcmVkaWNhdGUpIHtcbiAgZm9yIChjb25zdCBrZXkgaW4gb2JqZWN0KSB7XG4gICAgaWYgKFxuICAgICAgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSAmJlxuICAgICAgcHJlZGljYXRlKG9iamVjdFtrZXldKVxuICAgICkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gZmluZEluZGV4KGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgZm9yIChsZXQga2V5ID0gMDsga2V5IDwgYXJyYXkubGVuZ3RoOyBrZXkrKykge1xuICAgIGlmIChwcmVkaWNhdGUoYXJyYXlba2V5XSkpIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gYnVpbGRNYXRjaFBhdHRlcm5GbihhcmdzKSB7XG4gIHJldHVybiAoc3RyaW5nLCBvcHRpb25zID0ge30pID0+IHtcbiAgICBjb25zdCBtYXRjaFJlc3VsdCA9IHN0cmluZy5tYXRjaChhcmdzLm1hdGNoUGF0dGVybik7XG4gICAgaWYgKCFtYXRjaFJlc3VsdCkgcmV0dXJuIG51bGw7XG4gICAgY29uc3QgbWF0Y2hlZFN0cmluZyA9IG1hdGNoUmVzdWx0WzBdO1xuXG4gICAgY29uc3QgcGFyc2VSZXN1bHQgPSBzdHJpbmcubWF0Y2goYXJncy5wYXJzZVBhdHRlcm4pO1xuICAgIGlmICghcGFyc2VSZXN1bHQpIHJldHVybiBudWxsO1xuICAgIGxldCB2YWx1ZSA9IGFyZ3MudmFsdWVDYWxsYmFja1xuICAgICAgPyBhcmdzLnZhbHVlQ2FsbGJhY2socGFyc2VSZXN1bHRbMF0pXG4gICAgICA6IHBhcnNlUmVzdWx0WzBdO1xuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkgLS0gSSBjaGFsbGFuZ2UgeW91IHRvIGZpeCB0aGUgdHlwZVxuICAgIHZhbHVlID0gb3B0aW9ucy52YWx1ZUNhbGxiYWNrID8gb3B0aW9ucy52YWx1ZUNhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuXG4gICAgY29uc3QgcmVzdCA9IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aCk7XG5cbiAgICByZXR1cm4geyB2YWx1ZSwgcmVzdCB9O1xuICB9O1xufVxuIiwiaW1wb3J0IHsgZm9ybWF0RGlzdGFuY2UgfSBmcm9tIFwiLi9lbi1VUy9fbGliL2Zvcm1hdERpc3RhbmNlLm1qc1wiO1xuaW1wb3J0IHsgZm9ybWF0TG9uZyB9IGZyb20gXCIuL2VuLVVTL19saWIvZm9ybWF0TG9uZy5tanNcIjtcbmltcG9ydCB7IGZvcm1hdFJlbGF0aXZlIH0gZnJvbSBcIi4vZW4tVVMvX2xpYi9mb3JtYXRSZWxhdGl2ZS5tanNcIjtcbmltcG9ydCB7IGxvY2FsaXplIH0gZnJvbSBcIi4vZW4tVVMvX2xpYi9sb2NhbGl6ZS5tanNcIjtcbmltcG9ydCB7IG1hdGNoIH0gZnJvbSBcIi4vZW4tVVMvX2xpYi9tYXRjaC5tanNcIjtcblxuLyoqXG4gKiBAY2F0ZWdvcnkgTG9jYWxlc1xuICogQHN1bW1hcnkgRW5nbGlzaCBsb2NhbGUgKFVuaXRlZCBTdGF0ZXMpLlxuICogQGxhbmd1YWdlIEVuZ2xpc2hcbiAqIEBpc28tNjM5LTIgZW5nXG4gKiBAYXV0aG9yIFNhc2hhIEtvc3MgW0Brb3Nzbm9jb3JwXShodHRwczovL2dpdGh1Yi5jb20va29zc25vY29ycClcbiAqIEBhdXRob3IgTGVzaGEgS29zcyBbQGxlc2hha29zc10oaHR0cHM6Ly9naXRodWIuY29tL2xlc2hha29zcylcbiAqL1xuZXhwb3J0IGNvbnN0IGVuVVMgPSB7XG4gIGNvZGU6IFwiZW4tVVNcIixcbiAgZm9ybWF0RGlzdGFuY2U6IGZvcm1hdERpc3RhbmNlLFxuICBmb3JtYXRMb25nOiBmb3JtYXRMb25nLFxuICBmb3JtYXRSZWxhdGl2ZTogZm9ybWF0UmVsYXRpdmUsXG4gIGxvY2FsaXplOiBsb2NhbGl6ZSxcbiAgbWF0Y2g6IG1hdGNoLFxuICBvcHRpb25zOiB7XG4gICAgd2Vla1N0YXJ0c09uOiAwIC8qIFN1bmRheSAqLyxcbiAgICBmaXJzdFdlZWtDb250YWluc0RhdGU6IDEsXG4gIH0sXG59O1xuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGVuVVM7XG4iLCJjb25zdCBmb3JtYXREaXN0YW5jZUxvY2FsZSA9IHtcbiAgbGVzc1RoYW5YU2Vjb25kczoge1xuICAgIG9uZTogXCJsZXNzIHRoYW4gYSBzZWNvbmRcIixcbiAgICBvdGhlcjogXCJsZXNzIHRoYW4ge3tjb3VudH19IHNlY29uZHNcIixcbiAgfSxcblxuICB4U2Vjb25kczoge1xuICAgIG9uZTogXCIxIHNlY29uZFwiLFxuICAgIG90aGVyOiBcInt7Y291bnR9fSBzZWNvbmRzXCIsXG4gIH0sXG5cbiAgaGFsZkFNaW51dGU6IFwiaGFsZiBhIG1pbnV0ZVwiLFxuXG4gIGxlc3NUaGFuWE1pbnV0ZXM6IHtcbiAgICBvbmU6IFwibGVzcyB0aGFuIGEgbWludXRlXCIsXG4gICAgb3RoZXI6IFwibGVzcyB0aGFuIHt7Y291bnR9fSBtaW51dGVzXCIsXG4gIH0sXG5cbiAgeE1pbnV0ZXM6IHtcbiAgICBvbmU6IFwiMSBtaW51dGVcIixcbiAgICBvdGhlcjogXCJ7e2NvdW50fX0gbWludXRlc1wiLFxuICB9LFxuXG4gIGFib3V0WEhvdXJzOiB7XG4gICAgb25lOiBcImFib3V0IDEgaG91clwiLFxuICAgIG90aGVyOiBcImFib3V0IHt7Y291bnR9fSBob3Vyc1wiLFxuICB9LFxuXG4gIHhIb3Vyczoge1xuICAgIG9uZTogXCIxIGhvdXJcIixcbiAgICBvdGhlcjogXCJ7e2NvdW50fX0gaG91cnNcIixcbiAgfSxcblxuICB4RGF5czoge1xuICAgIG9uZTogXCIxIGRheVwiLFxuICAgIG90aGVyOiBcInt7Y291bnR9fSBkYXlzXCIsXG4gIH0sXG5cbiAgYWJvdXRYV2Vla3M6IHtcbiAgICBvbmU6IFwiYWJvdXQgMSB3ZWVrXCIsXG4gICAgb3RoZXI6IFwiYWJvdXQge3tjb3VudH19IHdlZWtzXCIsXG4gIH0sXG5cbiAgeFdlZWtzOiB7XG4gICAgb25lOiBcIjEgd2Vla1wiLFxuICAgIG90aGVyOiBcInt7Y291bnR9fSB3ZWVrc1wiLFxuICB9LFxuXG4gIGFib3V0WE1vbnRoczoge1xuICAgIG9uZTogXCJhYm91dCAxIG1vbnRoXCIsXG4gICAgb3RoZXI6IFwiYWJvdXQge3tjb3VudH19IG1vbnRoc1wiLFxuICB9LFxuXG4gIHhNb250aHM6IHtcbiAgICBvbmU6IFwiMSBtb250aFwiLFxuICAgIG90aGVyOiBcInt7Y291bnR9fSBtb250aHNcIixcbiAgfSxcblxuICBhYm91dFhZZWFyczoge1xuICAgIG9uZTogXCJhYm91dCAxIHllYXJcIixcbiAgICBvdGhlcjogXCJhYm91dCB7e2NvdW50fX0geWVhcnNcIixcbiAgfSxcblxuICB4WWVhcnM6IHtcbiAgICBvbmU6IFwiMSB5ZWFyXCIsXG4gICAgb3RoZXI6IFwie3tjb3VudH19IHllYXJzXCIsXG4gIH0sXG5cbiAgb3ZlclhZZWFyczoge1xuICAgIG9uZTogXCJvdmVyIDEgeWVhclwiLFxuICAgIG90aGVyOiBcIm92ZXIge3tjb3VudH19IHllYXJzXCIsXG4gIH0sXG5cbiAgYWxtb3N0WFllYXJzOiB7XG4gICAgb25lOiBcImFsbW9zdCAxIHllYXJcIixcbiAgICBvdGhlcjogXCJhbG1vc3Qge3tjb3VudH19IHllYXJzXCIsXG4gIH0sXG59O1xuXG5leHBvcnQgY29uc3QgZm9ybWF0RGlzdGFuY2UgPSAodG9rZW4sIGNvdW50LCBvcHRpb25zKSA9PiB7XG4gIGxldCByZXN1bHQ7XG5cbiAgY29uc3QgdG9rZW5WYWx1ZSA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXTtcbiAgaWYgKHR5cGVvZiB0b2tlblZhbHVlID09PSBcInN0cmluZ1wiKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZTtcbiAgfSBlbHNlIGlmIChjb3VudCA9PT0gMSkge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub25lO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub3RoZXIucmVwbGFjZShcInt7Y291bnR9fVwiLCBjb3VudC50b1N0cmluZygpKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zPy5hZGRTdWZmaXgpIHtcbiAgICBpZiAob3B0aW9ucy5jb21wYXJpc29uICYmIG9wdGlvbnMuY29tcGFyaXNvbiA+IDApIHtcbiAgICAgIHJldHVybiBcImluIFwiICsgcmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcmVzdWx0ICsgXCIgYWdvXCI7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCJpbXBvcnQgeyBidWlsZEZvcm1hdExvbmdGbiB9IGZyb20gXCIuLi8uLi9fbGliL2J1aWxkRm9ybWF0TG9uZ0ZuLm1qc1wiO1xuXG5jb25zdCBkYXRlRm9ybWF0cyA9IHtcbiAgZnVsbDogXCJFRUVFLCBNTU1NIGRvLCB5XCIsXG4gIGxvbmc6IFwiTU1NTSBkbywgeVwiLFxuICBtZWRpdW06IFwiTU1NIGQsIHlcIixcbiAgc2hvcnQ6IFwiTU0vZGQveXl5eVwiLFxufTtcblxuY29uc3QgdGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6IFwiaDptbTpzcyBhIHp6enpcIixcbiAgbG9uZzogXCJoOm1tOnNzIGEgelwiLFxuICBtZWRpdW06IFwiaDptbTpzcyBhXCIsXG4gIHNob3J0OiBcImg6bW0gYVwiLFxufTtcblxuY29uc3QgZGF0ZVRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiBcInt7ZGF0ZX19ICdhdCcge3t0aW1lfX1cIixcbiAgbG9uZzogXCJ7e2RhdGV9fSAnYXQnIHt7dGltZX19XCIsXG4gIG1lZGl1bTogXCJ7e2RhdGV9fSwge3t0aW1lfX1cIixcbiAgc2hvcnQ6IFwie3tkYXRlfX0sIHt7dGltZX19XCIsXG59O1xuXG5leHBvcnQgY29uc3QgZm9ybWF0TG9uZyA9IHtcbiAgZGF0ZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IGRhdGVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogXCJmdWxsXCIsXG4gIH0pLFxuXG4gIHRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiB0aW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6IFwiZnVsbFwiLFxuICB9KSxcblxuICBkYXRlVGltZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IGRhdGVUaW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6IFwiZnVsbFwiLFxuICB9KSxcbn07XG4iLCJjb25zdCBmb3JtYXRSZWxhdGl2ZUxvY2FsZSA9IHtcbiAgbGFzdFdlZWs6IFwiJ2xhc3QnIGVlZWUgJ2F0JyBwXCIsXG4gIHllc3RlcmRheTogXCIneWVzdGVyZGF5IGF0JyBwXCIsXG4gIHRvZGF5OiBcIid0b2RheSBhdCcgcFwiLFxuICB0b21vcnJvdzogXCIndG9tb3Jyb3cgYXQnIHBcIixcbiAgbmV4dFdlZWs6IFwiZWVlZSAnYXQnIHBcIixcbiAgb3RoZXI6IFwiUFwiLFxufTtcblxuZXhwb3J0IGNvbnN0IGZvcm1hdFJlbGF0aXZlID0gKHRva2VuLCBfZGF0ZSwgX2Jhc2VEYXRlLCBfb3B0aW9ucykgPT5cbiAgZm9ybWF0UmVsYXRpdmVMb2NhbGVbdG9rZW5dO1xuIiwiaW1wb3J0IHsgYnVpbGRMb2NhbGl6ZUZuIH0gZnJvbSBcIi4uLy4uL19saWIvYnVpbGRMb2NhbGl6ZUZuLm1qc1wiO1xuXG5jb25zdCBlcmFWYWx1ZXMgPSB7XG4gIG5hcnJvdzogW1wiQlwiLCBcIkFcIl0sXG4gIGFiYnJldmlhdGVkOiBbXCJCQ1wiLCBcIkFEXCJdLFxuICB3aWRlOiBbXCJCZWZvcmUgQ2hyaXN0XCIsIFwiQW5ubyBEb21pbmlcIl0sXG59O1xuXG5jb25zdCBxdWFydGVyVmFsdWVzID0ge1xuICBuYXJyb3c6IFtcIjFcIiwgXCIyXCIsIFwiM1wiLCBcIjRcIl0sXG4gIGFiYnJldmlhdGVkOiBbXCJRMVwiLCBcIlEyXCIsIFwiUTNcIiwgXCJRNFwiXSxcbiAgd2lkZTogW1wiMXN0IHF1YXJ0ZXJcIiwgXCIybmQgcXVhcnRlclwiLCBcIjNyZCBxdWFydGVyXCIsIFwiNHRoIHF1YXJ0ZXJcIl0sXG59O1xuXG4vLyBOb3RlOiBpbiBFbmdsaXNoLCB0aGUgbmFtZXMgb2YgZGF5cyBvZiB0aGUgd2VlayBhbmQgbW9udGhzIGFyZSBjYXBpdGFsaXplZC5cbi8vIElmIHlvdSBhcmUgbWFraW5nIGEgbmV3IGxvY2FsZSBiYXNlZCBvbiB0aGlzIG9uZSwgY2hlY2sgaWYgdGhlIHNhbWUgaXMgdHJ1ZSBmb3IgdGhlIGxhbmd1YWdlIHlvdSdyZSB3b3JraW5nIG9uLlxuLy8gR2VuZXJhbGx5LCBmb3JtYXR0ZWQgZGF0ZXMgc2hvdWxkIGxvb2sgbGlrZSB0aGV5IGFyZSBpbiB0aGUgbWlkZGxlIG9mIGEgc2VudGVuY2UsXG4vLyBlLmcuIGluIFNwYW5pc2ggbGFuZ3VhZ2UgdGhlIHdlZWtkYXlzIGFuZCBtb250aHMgc2hvdWxkIGJlIGluIHRoZSBsb3dlcmNhc2UuXG5jb25zdCBtb250aFZhbHVlcyA9IHtcbiAgbmFycm93OiBbXCJKXCIsIFwiRlwiLCBcIk1cIiwgXCJBXCIsIFwiTVwiLCBcIkpcIiwgXCJKXCIsIFwiQVwiLCBcIlNcIiwgXCJPXCIsIFwiTlwiLCBcIkRcIl0sXG4gIGFiYnJldmlhdGVkOiBbXG4gICAgXCJKYW5cIixcbiAgICBcIkZlYlwiLFxuICAgIFwiTWFyXCIsXG4gICAgXCJBcHJcIixcbiAgICBcIk1heVwiLFxuICAgIFwiSnVuXCIsXG4gICAgXCJKdWxcIixcbiAgICBcIkF1Z1wiLFxuICAgIFwiU2VwXCIsXG4gICAgXCJPY3RcIixcbiAgICBcIk5vdlwiLFxuICAgIFwiRGVjXCIsXG4gIF0sXG5cbiAgd2lkZTogW1xuICAgIFwiSmFudWFyeVwiLFxuICAgIFwiRmVicnVhcnlcIixcbiAgICBcIk1hcmNoXCIsXG4gICAgXCJBcHJpbFwiLFxuICAgIFwiTWF5XCIsXG4gICAgXCJKdW5lXCIsXG4gICAgXCJKdWx5XCIsXG4gICAgXCJBdWd1c3RcIixcbiAgICBcIlNlcHRlbWJlclwiLFxuICAgIFwiT2N0b2JlclwiLFxuICAgIFwiTm92ZW1iZXJcIixcbiAgICBcIkRlY2VtYmVyXCIsXG4gIF0sXG59O1xuXG5jb25zdCBkYXlWYWx1ZXMgPSB7XG4gIG5hcnJvdzogW1wiU1wiLCBcIk1cIiwgXCJUXCIsIFwiV1wiLCBcIlRcIiwgXCJGXCIsIFwiU1wiXSxcbiAgc2hvcnQ6IFtcIlN1XCIsIFwiTW9cIiwgXCJUdVwiLCBcIldlXCIsIFwiVGhcIiwgXCJGclwiLCBcIlNhXCJdLFxuICBhYmJyZXZpYXRlZDogW1wiU3VuXCIsIFwiTW9uXCIsIFwiVHVlXCIsIFwiV2VkXCIsIFwiVGh1XCIsIFwiRnJpXCIsIFwiU2F0XCJdLFxuICB3aWRlOiBbXG4gICAgXCJTdW5kYXlcIixcbiAgICBcIk1vbmRheVwiLFxuICAgIFwiVHVlc2RheVwiLFxuICAgIFwiV2VkbmVzZGF5XCIsXG4gICAgXCJUaHVyc2RheVwiLFxuICAgIFwiRnJpZGF5XCIsXG4gICAgXCJTYXR1cmRheVwiLFxuICBdLFxufTtcblxuY29uc3QgZGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogXCJhXCIsXG4gICAgcG06IFwicFwiLFxuICAgIG1pZG5pZ2h0OiBcIm1pXCIsXG4gICAgbm9vbjogXCJuXCIsXG4gICAgbW9ybmluZzogXCJtb3JuaW5nXCIsXG4gICAgYWZ0ZXJub29uOiBcImFmdGVybm9vblwiLFxuICAgIGV2ZW5pbmc6IFwiZXZlbmluZ1wiLFxuICAgIG5pZ2h0OiBcIm5pZ2h0XCIsXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06IFwiQU1cIixcbiAgICBwbTogXCJQTVwiLFxuICAgIG1pZG5pZ2h0OiBcIm1pZG5pZ2h0XCIsXG4gICAgbm9vbjogXCJub29uXCIsXG4gICAgbW9ybmluZzogXCJtb3JuaW5nXCIsXG4gICAgYWZ0ZXJub29uOiBcImFmdGVybm9vblwiLFxuICAgIGV2ZW5pbmc6IFwiZXZlbmluZ1wiLFxuICAgIG5pZ2h0OiBcIm5pZ2h0XCIsXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogXCJhLm0uXCIsXG4gICAgcG06IFwicC5tLlwiLFxuICAgIG1pZG5pZ2h0OiBcIm1pZG5pZ2h0XCIsXG4gICAgbm9vbjogXCJub29uXCIsXG4gICAgbW9ybmluZzogXCJtb3JuaW5nXCIsXG4gICAgYWZ0ZXJub29uOiBcImFmdGVybm9vblwiLFxuICAgIGV2ZW5pbmc6IFwiZXZlbmluZ1wiLFxuICAgIG5pZ2h0OiBcIm5pZ2h0XCIsXG4gIH0sXG59O1xuXG5jb25zdCBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogXCJhXCIsXG4gICAgcG06IFwicFwiLFxuICAgIG1pZG5pZ2h0OiBcIm1pXCIsXG4gICAgbm9vbjogXCJuXCIsXG4gICAgbW9ybmluZzogXCJpbiB0aGUgbW9ybmluZ1wiLFxuICAgIGFmdGVybm9vbjogXCJpbiB0aGUgYWZ0ZXJub29uXCIsXG4gICAgZXZlbmluZzogXCJpbiB0aGUgZXZlbmluZ1wiLFxuICAgIG5pZ2h0OiBcImF0IG5pZ2h0XCIsXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06IFwiQU1cIixcbiAgICBwbTogXCJQTVwiLFxuICAgIG1pZG5pZ2h0OiBcIm1pZG5pZ2h0XCIsXG4gICAgbm9vbjogXCJub29uXCIsXG4gICAgbW9ybmluZzogXCJpbiB0aGUgbW9ybmluZ1wiLFxuICAgIGFmdGVybm9vbjogXCJpbiB0aGUgYWZ0ZXJub29uXCIsXG4gICAgZXZlbmluZzogXCJpbiB0aGUgZXZlbmluZ1wiLFxuICAgIG5pZ2h0OiBcImF0IG5pZ2h0XCIsXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogXCJhLm0uXCIsXG4gICAgcG06IFwicC5tLlwiLFxuICAgIG1pZG5pZ2h0OiBcIm1pZG5pZ2h0XCIsXG4gICAgbm9vbjogXCJub29uXCIsXG4gICAgbW9ybmluZzogXCJpbiB0aGUgbW9ybmluZ1wiLFxuICAgIGFmdGVybm9vbjogXCJpbiB0aGUgYWZ0ZXJub29uXCIsXG4gICAgZXZlbmluZzogXCJpbiB0aGUgZXZlbmluZ1wiLFxuICAgIG5pZ2h0OiBcImF0IG5pZ2h0XCIsXG4gIH0sXG59O1xuXG5jb25zdCBvcmRpbmFsTnVtYmVyID0gKGRpcnR5TnVtYmVyLCBfb3B0aW9ucykgPT4ge1xuICBjb25zdCBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuXG4gIC8vIElmIG9yZGluYWwgbnVtYmVycyBkZXBlbmQgb24gY29udGV4dCwgZm9yIGV4YW1wbGUsXG4gIC8vIGlmIHRoZXkgYXJlIGRpZmZlcmVudCBmb3IgZGlmZmVyZW50IGdyYW1tYXRpY2FsIGdlbmRlcnMsXG4gIC8vIHVzZSBgb3B0aW9ucy51bml0YC5cbiAgLy9cbiAgLy8gYHVuaXRgIGNhbiBiZSAneWVhcicsICdxdWFydGVyJywgJ21vbnRoJywgJ3dlZWsnLCAnZGF0ZScsICdkYXlPZlllYXInLFxuICAvLyAnZGF5JywgJ2hvdXInLCAnbWludXRlJywgJ3NlY29uZCcuXG5cbiAgY29uc3QgcmVtMTAwID0gbnVtYmVyICUgMTAwO1xuICBpZiAocmVtMTAwID4gMjAgfHwgcmVtMTAwIDwgMTApIHtcbiAgICBzd2l0Y2ggKHJlbTEwMCAlIDEwKSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyBcInN0XCI7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyBcIm5kXCI7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyBcInJkXCI7XG4gICAgfVxuICB9XG4gIHJldHVybiBudW1iZXIgKyBcInRoXCI7XG59O1xuXG5leHBvcnQgY29uc3QgbG9jYWxpemUgPSB7XG4gIG9yZGluYWxOdW1iZXIsXG5cbiAgZXJhOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZXJhVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogXCJ3aWRlXCIsXG4gIH0pLFxuXG4gIHF1YXJ0ZXI6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBxdWFydGVyVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogXCJ3aWRlXCIsXG4gICAgYXJndW1lbnRDYWxsYmFjazogKHF1YXJ0ZXIpID0+IHF1YXJ0ZXIgLSAxLFxuICB9KSxcblxuICBtb250aDogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IG1vbnRoVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogXCJ3aWRlXCIsXG4gIH0pLFxuXG4gIGRheTogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGRheVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6IFwid2lkZVwiLFxuICB9KSxcblxuICBkYXlQZXJpb2Q6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBkYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiBcIndpZGVcIixcbiAgICBmb3JtYXR0aW5nVmFsdWVzOiBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRGb3JtYXR0aW5nV2lkdGg6IFwid2lkZVwiLFxuICB9KSxcbn07XG4iLCJpbXBvcnQgeyBidWlsZE1hdGNoRm4gfSBmcm9tIFwiLi4vLi4vX2xpYi9idWlsZE1hdGNoRm4ubWpzXCI7XG5pbXBvcnQgeyBidWlsZE1hdGNoUGF0dGVybkZuIH0gZnJvbSBcIi4uLy4uL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi5tanNcIjtcblxuY29uc3QgbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9eKFxcZCspKHRofHN0fG5kfHJkKT8vaTtcbmNvbnN0IHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXFxkKy9pO1xuXG5jb25zdCBtYXRjaEVyYVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKGJ8YSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGJcXC4/XFxzP2NcXC4/fGJcXC4/XFxzP2NcXC4/XFxzP2VcXC4/fGFcXC4/XFxzP2RcXC4/fGNcXC4/XFxzP2VcXC4/KS9pLFxuICB3aWRlOiAvXihiZWZvcmUgY2hyaXN0fGJlZm9yZSBjb21tb24gZXJhfGFubm8gZG9taW5pfGNvbW1vbiBlcmEpL2ksXG59O1xuY29uc3QgcGFyc2VFcmFQYXR0ZXJucyA9IHtcbiAgYW55OiBbL15iL2ksIC9eKGF8YykvaV0sXG59O1xuXG5jb25zdCBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXlsxMjM0XS9pLFxuICBhYmJyZXZpYXRlZDogL15xWzEyMzRdL2ksXG4gIHdpZGU6IC9eWzEyMzRdKHRofHN0fG5kfHJkKT8gcXVhcnRlci9pLFxufTtcbmNvbnN0IHBhcnNlUXVhcnRlclBhdHRlcm5zID0ge1xuICBhbnk6IFsvMS9pLCAvMi9pLCAvMy9pLCAvNC9pXSxcbn07XG5cbmNvbnN0IG1hdGNoTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXltqZm1hc29uZF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGphbnxmZWJ8bWFyfGFwcnxtYXl8anVufGp1bHxhdWd8c2VwfG9jdHxub3Z8ZGVjKS9pLFxuICB3aWRlOiAvXihqYW51YXJ5fGZlYnJ1YXJ5fG1hcmNofGFwcmlsfG1heXxqdW5lfGp1bHl8YXVndXN0fHNlcHRlbWJlcnxvY3RvYmVyfG5vdmVtYmVyfGRlY2VtYmVyKS9pLFxufTtcbmNvbnN0IHBhcnNlTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbXG4gICAgL15qL2ksXG4gICAgL15mL2ksXG4gICAgL15tL2ksXG4gICAgL15hL2ksXG4gICAgL15tL2ksXG4gICAgL15qL2ksXG4gICAgL15qL2ksXG4gICAgL15hL2ksXG4gICAgL15zL2ksXG4gICAgL15vL2ksXG4gICAgL15uL2ksXG4gICAgL15kL2ksXG4gIF0sXG5cbiAgYW55OiBbXG4gICAgL15qYS9pLFxuICAgIC9eZi9pLFxuICAgIC9ebWFyL2ksXG4gICAgL15hcC9pLFxuICAgIC9ebWF5L2ksXG4gICAgL15qdW4vaSxcbiAgICAvXmp1bC9pLFxuICAgIC9eYXUvaSxcbiAgICAvXnMvaSxcbiAgICAvXm8vaSxcbiAgICAvXm4vaSxcbiAgICAvXmQvaSxcbiAgXSxcbn07XG5cbmNvbnN0IG1hdGNoRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bc210d2ZdL2ksXG4gIHNob3J0OiAvXihzdXxtb3x0dXx3ZXx0aHxmcnxzYSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKHN1bnxtb258dHVlfHdlZHx0aHV8ZnJpfHNhdCkvaSxcbiAgd2lkZTogL14oc3VuZGF5fG1vbmRheXx0dWVzZGF5fHdlZG5lc2RheXx0aHVyc2RheXxmcmlkYXl8c2F0dXJkYXkpL2ksXG59O1xuY29uc3QgcGFyc2VEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL15zL2ksIC9ebS9pLCAvXnQvaSwgL153L2ksIC9edC9pLCAvXmYvaSwgL15zL2ldLFxuICBhbnk6IFsvXnN1L2ksIC9ebS9pLCAvXnR1L2ksIC9edy9pLCAvXnRoL2ksIC9eZi9pLCAvXnNhL2ldLFxufTtcblxuY29uc3QgbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihhfHB8bWl8bnwoaW4gdGhlfGF0KSAobW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodCkpL2ksXG4gIGFueTogL14oW2FwXVxcLj9cXHM/bVxcLj98bWlkbmlnaHR8bm9vbnwoaW4gdGhlfGF0KSAobW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodCkpL2ksXG59O1xuY29uc3QgcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgYW55OiB7XG4gICAgYW06IC9eYS9pLFxuICAgIHBtOiAvXnAvaSxcbiAgICBtaWRuaWdodDogL15taS9pLFxuICAgIG5vb246IC9ebm8vaSxcbiAgICBtb3JuaW5nOiAvbW9ybmluZy9pLFxuICAgIGFmdGVybm9vbjogL2FmdGVybm9vbi9pLFxuICAgIGV2ZW5pbmc6IC9ldmVuaW5nL2ksXG4gICAgbmlnaHQ6IC9uaWdodC9pLFxuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IG1hdGNoID0ge1xuICBvcmRpbmFsTnVtYmVyOiBidWlsZE1hdGNoUGF0dGVybkZuKHtcbiAgICBtYXRjaFBhdHRlcm46IG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgcGFyc2VQYXR0ZXJuOiBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHZhbHVlQ2FsbGJhY2s6ICh2YWx1ZSkgPT4gcGFyc2VJbnQodmFsdWUsIDEwKSxcbiAgfSksXG5cbiAgZXJhOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6IFwid2lkZVwiLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6IFwiYW55XCIsXG4gIH0pLFxuXG4gIHF1YXJ0ZXI6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6IFwid2lkZVwiLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiBcImFueVwiLFxuICAgIHZhbHVlQ2FsbGJhY2s6IChpbmRleCkgPT4gaW5kZXggKyAxLFxuICB9KSxcblxuICBtb250aDogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaE1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6IFwid2lkZVwiLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogXCJhbnlcIixcbiAgfSksXG5cbiAgZGF5OiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6IFwid2lkZVwiLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6IFwiYW55XCIsXG4gIH0pLFxuXG4gIGRheVBlcmlvZDogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiBcImFueVwiLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6IFwiYW55XCIsXG4gIH0pLFxufTtcbiIsImltcG9ydCB7IG1pbGxpc2Vjb25kc0luSG91ciwgbWlsbGlzZWNvbmRzSW5NaW51dGUgfSBmcm9tIFwiLi9jb25zdGFudHMubWpzXCI7XG5cbi8qKlxuICogVGhlIHtAbGluayBwYXJzZUlTT30gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIHBhcnNlSVNPXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFBhcnNlIElTTyBzdHJpbmdcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFBhcnNlIHRoZSBnaXZlbiBzdHJpbmcgaW4gSVNPIDg2MDEgZm9ybWF0IGFuZCByZXR1cm4gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBGdW5jdGlvbiBhY2NlcHRzIGNvbXBsZXRlIElTTyA4NjAxIGZvcm1hdHMgYXMgd2VsbCBhcyBwYXJ0aWFsIGltcGxlbWVudGF0aW9ucy5cbiAqIElTTyA4NjAxOiBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT184NjAxXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzbid0IGEgc3RyaW5nLCB0aGUgZnVuY3Rpb24gY2Fubm90IHBhcnNlIHRoZSBzdHJpbmcgb3JcbiAqIHRoZSB2YWx1ZXMgYXJlIGludmFsaWQsIGl0IHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBhcmd1bWVudCAtIFRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcGFyYW0gb3B0aW9ucyAtIEFuIG9iamVjdCB3aXRoIG9wdGlvbnNcbiAqXG4gKiBAcmV0dXJucyBUaGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHN0cmluZyAnMjAxNC0wMi0xMVQxMTozMDozMCcgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHBhcnNlSVNPKCcyMDE0LTAyLTExVDExOjMwOjMwJylcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgc3RyaW5nICcrMDIwMTQxMDEnIHRvIGRhdGUsXG4gKiAvLyBpZiB0aGUgYWRkaXRpb25hbCBudW1iZXIgb2YgZGlnaXRzIGluIHRoZSBleHRlbmRlZCB5ZWFyIGZvcm1hdCBpcyAxOlxuICogY29uc3QgcmVzdWx0ID0gcGFyc2VJU08oJyswMjAxNDEwMScsIHsgYWRkaXRpb25hbERpZ2l0czogMSB9KVxuICogLy89PiBGcmkgQXByIDExIDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlSVNPKGFyZ3VtZW50LCBvcHRpb25zKSB7XG4gIGNvbnN0IGFkZGl0aW9uYWxEaWdpdHMgPSBvcHRpb25zPy5hZGRpdGlvbmFsRGlnaXRzID8/IDI7XG4gIGNvbnN0IGRhdGVTdHJpbmdzID0gc3BsaXREYXRlU3RyaW5nKGFyZ3VtZW50KTtcblxuICBsZXQgZGF0ZTtcbiAgaWYgKGRhdGVTdHJpbmdzLmRhdGUpIHtcbiAgICBjb25zdCBwYXJzZVllYXJSZXN1bHQgPSBwYXJzZVllYXIoZGF0ZVN0cmluZ3MuZGF0ZSwgYWRkaXRpb25hbERpZ2l0cyk7XG4gICAgZGF0ZSA9IHBhcnNlRGF0ZShwYXJzZVllYXJSZXN1bHQucmVzdERhdGVTdHJpbmcsIHBhcnNlWWVhclJlc3VsdC55ZWFyKTtcbiAgfVxuXG4gIGlmICghZGF0ZSB8fCBpc05hTihkYXRlLmdldFRpbWUoKSkpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxuXG4gIGNvbnN0IHRpbWVzdGFtcCA9IGRhdGUuZ2V0VGltZSgpO1xuICBsZXQgdGltZSA9IDA7XG4gIGxldCBvZmZzZXQ7XG5cbiAgaWYgKGRhdGVTdHJpbmdzLnRpbWUpIHtcbiAgICB0aW1lID0gcGFyc2VUaW1lKGRhdGVTdHJpbmdzLnRpbWUpO1xuICAgIGlmIChpc05hTih0aW1lKSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuICB9XG5cbiAgaWYgKGRhdGVTdHJpbmdzLnRpbWV6b25lKSB7XG4gICAgb2Zmc2V0ID0gcGFyc2VUaW1lem9uZShkYXRlU3RyaW5ncy50aW1lem9uZSk7XG4gICAgaWYgKGlzTmFOKG9mZnNldCkpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBjb25zdCBkaXJ0eURhdGUgPSBuZXcgRGF0ZSh0aW1lc3RhbXAgKyB0aW1lKTtcbiAgICAvLyBKUyBwYXJzZWQgc3RyaW5nIGFzc3VtaW5nIGl0J3MgaW4gVVRDIHRpbWV6b25lXG4gICAgLy8gYnV0IHdlIG5lZWQgaXQgdG8gYmUgcGFyc2VkIGluIG91ciB0aW1lem9uZVxuICAgIC8vIHNvIHdlIHVzZSB1dGMgdmFsdWVzIHRvIGJ1aWxkIGRhdGUgaW4gb3VyIHRpbWV6b25lLlxuICAgIC8vIFllYXIgdmFsdWVzIGZyb20gMCB0byA5OSBtYXAgdG8gdGhlIHllYXJzIDE5MDAgdG8gMTk5OVxuICAgIC8vIHNvIHNldCB5ZWFyIGV4cGxpY2l0bHkgd2l0aCBzZXRGdWxsWWVhci5cbiAgICBjb25zdCByZXN1bHQgPSBuZXcgRGF0ZSgwKTtcbiAgICByZXN1bHQuc2V0RnVsbFllYXIoXG4gICAgICBkaXJ0eURhdGUuZ2V0VVRDRnVsbFllYXIoKSxcbiAgICAgIGRpcnR5RGF0ZS5nZXRVVENNb250aCgpLFxuICAgICAgZGlydHlEYXRlLmdldFVUQ0RhdGUoKSxcbiAgICApO1xuICAgIHJlc3VsdC5zZXRIb3VycyhcbiAgICAgIGRpcnR5RGF0ZS5nZXRVVENIb3VycygpLFxuICAgICAgZGlydHlEYXRlLmdldFVUQ01pbnV0ZXMoKSxcbiAgICAgIGRpcnR5RGF0ZS5nZXRVVENTZWNvbmRzKCksXG4gICAgICBkaXJ0eURhdGUuZ2V0VVRDTWlsbGlzZWNvbmRzKCksXG4gICAgKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcmV0dXJuIG5ldyBEYXRlKHRpbWVzdGFtcCArIHRpbWUgKyBvZmZzZXQpO1xufVxuXG5jb25zdCBwYXR0ZXJucyA9IHtcbiAgZGF0ZVRpbWVEZWxpbWl0ZXI6IC9bVCBdLyxcbiAgdGltZVpvbmVEZWxpbWl0ZXI6IC9bWiBdL2ksXG4gIHRpbWV6b25lOiAvKFtaKy1dLiopJC8sXG59O1xuXG5jb25zdCBkYXRlUmVnZXggPVxuICAvXi0/KD86KFxcZHszfSl8KFxcZHsyfSkoPzotPyhcXGR7Mn0pKT98VyhcXGR7Mn0pKD86LT8oXFxkezF9KSk/fCkkLztcbmNvbnN0IHRpbWVSZWdleCA9XG4gIC9eKFxcZHsyfSg/OlsuLF1cXGQqKT8pKD86Oj8oXFxkezJ9KD86Wy4sXVxcZCopPykpPyg/Ojo/KFxcZHsyfSg/OlsuLF1cXGQqKT8pKT8kLztcbmNvbnN0IHRpbWV6b25lUmVnZXggPSAvXihbKy1dKShcXGR7Mn0pKD86Oj8oXFxkezJ9KSk/JC87XG5cbmZ1bmN0aW9uIHNwbGl0RGF0ZVN0cmluZyhkYXRlU3RyaW5nKSB7XG4gIGNvbnN0IGRhdGVTdHJpbmdzID0ge307XG4gIGNvbnN0IGFycmF5ID0gZGF0ZVN0cmluZy5zcGxpdChwYXR0ZXJucy5kYXRlVGltZURlbGltaXRlcik7XG4gIGxldCB0aW1lU3RyaW5nO1xuXG4gIC8vIFRoZSByZWdleCBtYXRjaCBzaG91bGQgb25seSByZXR1cm4gYXQgbWF4aW11bSB0d28gYXJyYXkgZWxlbWVudHMuXG4gIC8vIFtkYXRlXSwgW3RpbWVdLCBvciBbZGF0ZSwgdGltZV0uXG4gIGlmIChhcnJheS5sZW5ndGggPiAyKSB7XG4gICAgcmV0dXJuIGRhdGVTdHJpbmdzO1xuICB9XG5cbiAgaWYgKC86Ly50ZXN0KGFycmF5WzBdKSkge1xuICAgIHRpbWVTdHJpbmcgPSBhcnJheVswXTtcbiAgfSBlbHNlIHtcbiAgICBkYXRlU3RyaW5ncy5kYXRlID0gYXJyYXlbMF07XG4gICAgdGltZVN0cmluZyA9IGFycmF5WzFdO1xuICAgIGlmIChwYXR0ZXJucy50aW1lWm9uZURlbGltaXRlci50ZXN0KGRhdGVTdHJpbmdzLmRhdGUpKSB7XG4gICAgICBkYXRlU3RyaW5ncy5kYXRlID0gZGF0ZVN0cmluZy5zcGxpdChwYXR0ZXJucy50aW1lWm9uZURlbGltaXRlcilbMF07XG4gICAgICB0aW1lU3RyaW5nID0gZGF0ZVN0cmluZy5zdWJzdHIoXG4gICAgICAgIGRhdGVTdHJpbmdzLmRhdGUubGVuZ3RoLFxuICAgICAgICBkYXRlU3RyaW5nLmxlbmd0aCxcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHRpbWVTdHJpbmcpIHtcbiAgICBjb25zdCB0b2tlbiA9IHBhdHRlcm5zLnRpbWV6b25lLmV4ZWModGltZVN0cmluZyk7XG4gICAgaWYgKHRva2VuKSB7XG4gICAgICBkYXRlU3RyaW5ncy50aW1lID0gdGltZVN0cmluZy5yZXBsYWNlKHRva2VuWzFdLCBcIlwiKTtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWV6b25lID0gdG9rZW5bMV07XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWUgPSB0aW1lU3RyaW5nO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkYXRlU3RyaW5ncztcbn1cblxuZnVuY3Rpb24gcGFyc2VZZWFyKGRhdGVTdHJpbmcsIGFkZGl0aW9uYWxEaWdpdHMpIHtcbiAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKFxuICAgIFwiXig/OihcXFxcZHs0fXxbKy1dXFxcXGR7XCIgK1xuICAgICAgKDQgKyBhZGRpdGlvbmFsRGlnaXRzKSArXG4gICAgICBcIn0pfChcXFxcZHsyfXxbKy1dXFxcXGR7XCIgK1xuICAgICAgKDIgKyBhZGRpdGlvbmFsRGlnaXRzKSArXG4gICAgICBcIn0pJClcIixcbiAgKTtcblxuICBjb25zdCBjYXB0dXJlcyA9IGRhdGVTdHJpbmcubWF0Y2gocmVnZXgpO1xuICAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgeWVhclxuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4geyB5ZWFyOiBOYU4sIHJlc3REYXRlU3RyaW5nOiBcIlwiIH07XG5cbiAgY29uc3QgeWVhciA9IGNhcHR1cmVzWzFdID8gcGFyc2VJbnQoY2FwdHVyZXNbMV0pIDogbnVsbDtcbiAgY29uc3QgY2VudHVyeSA9IGNhcHR1cmVzWzJdID8gcGFyc2VJbnQoY2FwdHVyZXNbMl0pIDogbnVsbDtcblxuICAvLyBlaXRoZXIgeWVhciBvciBjZW50dXJ5IGlzIG51bGwsIG5vdCBib3RoXG4gIHJldHVybiB7XG4gICAgeWVhcjogY2VudHVyeSA9PT0gbnVsbCA/IHllYXIgOiBjZW50dXJ5ICogMTAwLFxuICAgIHJlc3REYXRlU3RyaW5nOiBkYXRlU3RyaW5nLnNsaWNlKChjYXB0dXJlc1sxXSB8fCBjYXB0dXJlc1syXSkubGVuZ3RoKSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gcGFyc2VEYXRlKGRhdGVTdHJpbmcsIHllYXIpIHtcbiAgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHllYXJcbiAgaWYgKHllYXIgPT09IG51bGwpIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuXG4gIGNvbnN0IGNhcHR1cmVzID0gZGF0ZVN0cmluZy5tYXRjaChkYXRlUmVnZXgpO1xuICAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgc3RyaW5nXG4gIGlmICghY2FwdHVyZXMpIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuXG4gIGNvbnN0IGlzV2Vla0RhdGUgPSAhIWNhcHR1cmVzWzRdO1xuICBjb25zdCBkYXlPZlllYXIgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzFdKTtcbiAgY29uc3QgbW9udGggPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzJdKSAtIDE7XG4gIGNvbnN0IGRheSA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbM10pO1xuICBjb25zdCB3ZWVrID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1s0XSk7XG4gIGNvbnN0IGRheU9mV2VlayA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbNV0pIC0gMTtcblxuICBpZiAoaXNXZWVrRGF0ZSkge1xuICAgIGlmICghdmFsaWRhdGVXZWVrRGF0ZSh5ZWFyLCB3ZWVrLCBkYXlPZldlZWspKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG4gICAgcmV0dXJuIGRheU9mSVNPV2Vla1llYXIoeWVhciwgd2VlaywgZGF5T2ZXZWVrKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoMCk7XG4gICAgaWYgKFxuICAgICAgIXZhbGlkYXRlRGF0ZSh5ZWFyLCBtb250aCwgZGF5KSB8fFxuICAgICAgIXZhbGlkYXRlRGF5T2ZZZWFyRGF0ZSh5ZWFyLCBkYXlPZlllYXIpXG4gICAgKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG4gICAgZGF0ZS5zZXRVVENGdWxsWWVhcih5ZWFyLCBtb250aCwgTWF0aC5tYXgoZGF5T2ZZZWFyLCBkYXkpKTtcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwYXJzZURhdGVVbml0KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA/IHBhcnNlSW50KHZhbHVlKSA6IDE7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVGltZSh0aW1lU3RyaW5nKSB7XG4gIGNvbnN0IGNhcHR1cmVzID0gdGltZVN0cmluZy5tYXRjaCh0aW1lUmVnZXgpO1xuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4gTmFOOyAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgdGltZVxuXG4gIGNvbnN0IGhvdXJzID0gcGFyc2VUaW1lVW5pdChjYXB0dXJlc1sxXSk7XG4gIGNvbnN0IG1pbnV0ZXMgPSBwYXJzZVRpbWVVbml0KGNhcHR1cmVzWzJdKTtcbiAgY29uc3Qgc2Vjb25kcyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbM10pO1xuXG4gIGlmICghdmFsaWRhdGVUaW1lKGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzKSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIGhvdXJzICogbWlsbGlzZWNvbmRzSW5Ib3VyICsgbWludXRlcyAqIG1pbGxpc2Vjb25kc0luTWludXRlICsgc2Vjb25kcyAqIDEwMDBcbiAgKTtcbn1cblxuZnVuY3Rpb24gcGFyc2VUaW1lVW5pdCh2YWx1ZSkge1xuICByZXR1cm4gKHZhbHVlICYmIHBhcnNlRmxvYXQodmFsdWUucmVwbGFjZShcIixcIiwgXCIuXCIpKSkgfHwgMDtcbn1cblxuZnVuY3Rpb24gcGFyc2VUaW1lem9uZSh0aW1lem9uZVN0cmluZykge1xuICBpZiAodGltZXpvbmVTdHJpbmcgPT09IFwiWlwiKSByZXR1cm4gMDtcblxuICBjb25zdCBjYXB0dXJlcyA9IHRpbWV6b25lU3RyaW5nLm1hdGNoKHRpbWV6b25lUmVnZXgpO1xuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4gMDtcblxuICBjb25zdCBzaWduID0gY2FwdHVyZXNbMV0gPT09IFwiK1wiID8gLTEgOiAxO1xuICBjb25zdCBob3VycyA9IHBhcnNlSW50KGNhcHR1cmVzWzJdKTtcbiAgY29uc3QgbWludXRlcyA9IChjYXB0dXJlc1szXSAmJiBwYXJzZUludChjYXB0dXJlc1szXSkpIHx8IDA7XG5cbiAgaWYgKCF2YWxpZGF0ZVRpbWV6b25lKGhvdXJzLCBtaW51dGVzKSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICByZXR1cm4gc2lnbiAqIChob3VycyAqIG1pbGxpc2Vjb25kc0luSG91ciArIG1pbnV0ZXMgKiBtaWxsaXNlY29uZHNJbk1pbnV0ZSk7XG59XG5cbmZ1bmN0aW9uIGRheU9mSVNPV2Vla1llYXIoaXNvV2Vla1llYXIsIHdlZWssIGRheSkge1xuICBjb25zdCBkYXRlID0gbmV3IERhdGUoMCk7XG4gIGRhdGUuc2V0VVRDRnVsbFllYXIoaXNvV2Vla1llYXIsIDAsIDQpO1xuICBjb25zdCBmb3VydGhPZkphbnVhcnlEYXkgPSBkYXRlLmdldFVUQ0RheSgpIHx8IDc7XG4gIGNvbnN0IGRpZmYgPSAod2VlayAtIDEpICogNyArIGRheSArIDEgLSBmb3VydGhPZkphbnVhcnlEYXk7XG4gIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSArIGRpZmYpO1xuICByZXR1cm4gZGF0ZTtcbn1cblxuLy8gVmFsaWRhdGlvbiBmdW5jdGlvbnNcblxuLy8gRmVicnVhcnkgaXMgbnVsbCB0byBoYW5kbGUgdGhlIGxlYXAgeWVhciAodXNpbmcgfHwpXG5jb25zdCBkYXlzSW5Nb250aHMgPSBbMzEsIG51bGwsIDMxLCAzMCwgMzEsIDMwLCAzMSwgMzEsIDMwLCAzMSwgMzAsIDMxXTtcblxuZnVuY3Rpb24gaXNMZWFwWWVhckluZGV4KHllYXIpIHtcbiAgcmV0dXJuIHllYXIgJSA0MDAgPT09IDAgfHwgKHllYXIgJSA0ID09PSAwICYmIHllYXIgJSAxMDAgIT09IDApO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZURhdGUoeWVhciwgbW9udGgsIGRhdGUpIHtcbiAgcmV0dXJuIChcbiAgICBtb250aCA+PSAwICYmXG4gICAgbW9udGggPD0gMTEgJiZcbiAgICBkYXRlID49IDEgJiZcbiAgICBkYXRlIDw9IChkYXlzSW5Nb250aHNbbW9udGhdIHx8IChpc0xlYXBZZWFySW5kZXgoeWVhcikgPyAyOSA6IDI4KSlcbiAgKTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVEYXlPZlllYXJEYXRlKHllYXIsIGRheU9mWWVhcikge1xuICByZXR1cm4gZGF5T2ZZZWFyID49IDEgJiYgZGF5T2ZZZWFyIDw9IChpc0xlYXBZZWFySW5kZXgoeWVhcikgPyAzNjYgOiAzNjUpO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVdlZWtEYXRlKF95ZWFyLCB3ZWVrLCBkYXkpIHtcbiAgcmV0dXJuIHdlZWsgPj0gMSAmJiB3ZWVrIDw9IDUzICYmIGRheSA+PSAwICYmIGRheSA8PSA2O1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVRpbWUoaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMpIHtcbiAgaWYgKGhvdXJzID09PSAyNCkge1xuICAgIHJldHVybiBtaW51dGVzID09PSAwICYmIHNlY29uZHMgPT09IDA7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIHNlY29uZHMgPj0gMCAmJlxuICAgIHNlY29uZHMgPCA2MCAmJlxuICAgIG1pbnV0ZXMgPj0gMCAmJlxuICAgIG1pbnV0ZXMgPCA2MCAmJlxuICAgIGhvdXJzID49IDAgJiZcbiAgICBob3VycyA8IDI1XG4gICk7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlVGltZXpvbmUoX2hvdXJzLCBtaW51dGVzKSB7XG4gIHJldHVybiBtaW51dGVzID49IDAgJiYgbWludXRlcyA8PSA1OTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBwYXJzZUlTTztcbiIsImltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBzdGFydE9mRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIG9yaWdpbmFsIGRhdGVcbiAqXG4gKiBAcmV0dXJucyBUaGUgc3RhcnQgb2YgYSBkYXlcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgZGF5IGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZkRheShuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBUdWUgU2VwIDAyIDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0T2ZEYXkoZGF0ZSkge1xuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgX2RhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBfZGF0ZTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBzdGFydE9mRGF5O1xuIiwiaW1wb3J0IHsgc3RhcnRPZldlZWsgfSBmcm9tIFwiLi9zdGFydE9mV2Vlay5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBzdGFydE9mSVNPV2Vla1xuICogQGNhdGVnb3J5IElTTyBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYW4gSVNPIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhbiBJU08gd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyOiBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT193ZWVrX2RhdGVcbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBvcmlnaW5hbCBkYXRlXG4gKlxuICogQHJldHVybnMgVGhlIHN0YXJ0IG9mIGFuIElTTyB3ZWVrXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhbiBJU08gd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZJU09XZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IE1vbiBTZXAgMDEgMjAxNCAwMDowMDowMFxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRPZklTT1dlZWsoZGF0ZSkge1xuICByZXR1cm4gc3RhcnRPZldlZWsoZGF0ZSwgeyB3ZWVrU3RhcnRzT246IDEgfSk7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgc3RhcnRPZklTT1dlZWs7XG4iLCJpbXBvcnQgeyBnZXRJU09XZWVrWWVhciB9IGZyb20gXCIuL2dldElTT1dlZWtZZWFyLm1qc1wiO1xuaW1wb3J0IHsgc3RhcnRPZklTT1dlZWsgfSBmcm9tIFwiLi9zdGFydE9mSVNPV2Vlay5tanNcIjtcbmltcG9ydCB7IGNvbnN0cnVjdEZyb20gfSBmcm9tIFwiLi9jb25zdHJ1Y3RGcm9tLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZJU09XZWVrWWVhclxuICogQGNhdGVnb3J5IElTTyBXZWVrLU51bWJlcmluZyBZZWFyIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYW4gSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhbiBJU08gd2Vlay1udW1iZXJpbmcgeWVhcixcbiAqIHdoaWNoIGFsd2F5cyBzdGFydHMgMyBkYXlzIGJlZm9yZSB0aGUgeWVhcidzIGZpcnN0IFRodXJzZGF5LlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBJU08gd2Vlay1udW1iZXJpbmcgeWVhcjogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgb3JpZ2luYWwgZGF0ZVxuICpcbiAqIEByZXR1cm5zIFRoZSBzdGFydCBvZiBhbiBJU08gd2Vlay1udW1iZXJpbmcgeWVhclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYW4gSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgZm9yIDIgSnVseSAyMDA1OlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZklTT1dlZWtZZWFyKG5ldyBEYXRlKDIwMDUsIDYsIDIpKVxuICogLy89PiBNb24gSmFuIDAzIDIwMDUgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0T2ZJU09XZWVrWWVhcihkYXRlKSB7XG4gIGNvbnN0IHllYXIgPSBnZXRJU09XZWVrWWVhcihkYXRlKTtcbiAgY29uc3QgZm91cnRoT2ZKYW51YXJ5ID0gY29uc3RydWN0RnJvbShkYXRlLCAwKTtcbiAgZm91cnRoT2ZKYW51YXJ5LnNldEZ1bGxZZWFyKHllYXIsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnkuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBzdGFydE9mSVNPV2Vlayhmb3VydGhPZkphbnVhcnkpO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHN0YXJ0T2ZJU09XZWVrWWVhcjtcbiIsImltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4vX2xpYi9kZWZhdWx0T3B0aW9ucy5tanNcIjtcblxuLyoqXG4gKiBUaGUge0BsaW5rIHN0YXJ0T2ZXZWVrfSBmdW5jdGlvbiBvcHRpb25zLlxuICovXG5cbi8qKlxuICogQG5hbWUgc3RhcnRPZldlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIG9wdGlvbnMgLSBBbiBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKlxuICogQHJldHVybnMgVGhlIHN0YXJ0IG9mIGEgd2Vla1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gU3VuIEF1ZyAzMSAyMDE0IDAwOjAwOjAwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRoZSB3ZWVrIHN0YXJ0cyBvbiBNb25kYXksIHRoZSBzdGFydCBvZiB0aGUgd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCksIHsgd2Vla1N0YXJ0c09uOiAxIH0pXG4gKiAvLz0+IE1vbiBTZXAgMDEgMjAxNCAwMDowMDowMFxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRPZldlZWsoZGF0ZSwgb3B0aW9ucykge1xuICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIGNvbnN0IHdlZWtTdGFydHNPbiA9XG4gICAgb3B0aW9ucz8ud2Vla1N0YXJ0c09uID8/XG4gICAgb3B0aW9ucz8ubG9jYWxlPy5vcHRpb25zPy53ZWVrU3RhcnRzT24gPz9cbiAgICBkZWZhdWx0T3B0aW9ucy53ZWVrU3RhcnRzT24gPz9cbiAgICBkZWZhdWx0T3B0aW9ucy5sb2NhbGU/Lm9wdGlvbnM/LndlZWtTdGFydHNPbiA/P1xuICAgIDA7XG5cbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIGNvbnN0IGRheSA9IF9kYXRlLmdldERheSgpO1xuICBjb25zdCBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcblxuICBfZGF0ZS5zZXREYXRlKF9kYXRlLmdldERhdGUoKSAtIGRpZmYpO1xuICBfZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIF9kYXRlO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHN0YXJ0T2ZXZWVrO1xuIiwiaW1wb3J0IHsgY29uc3RydWN0RnJvbSB9IGZyb20gXCIuL2NvbnN0cnVjdEZyb20ubWpzXCI7XG5pbXBvcnQgeyBnZXRXZWVrWWVhciB9IGZyb20gXCIuL2dldFdlZWtZZWFyLm1qc1wiO1xuaW1wb3J0IHsgc3RhcnRPZldlZWsgfSBmcm9tIFwiLi9zdGFydE9mV2Vlay5tanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4vX2xpYi9kZWZhdWx0T3B0aW9ucy5tanNcIjtcblxuLyoqXG4gKiBUaGUge0BsaW5rIHN0YXJ0T2ZXZWVrWWVhcn0gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZXZWVrWWVhclxuICogQGNhdGVnb3J5IFdlZWstTnVtYmVyaW5nIFllYXIgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIuXG4gKiBUaGUgZXhhY3QgY2FsY3VsYXRpb24gZGVwZW5kcyBvbiB0aGUgdmFsdWVzIG9mXG4gKiBgb3B0aW9ucy53ZWVrU3RhcnRzT25gICh3aGljaCBpcyB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlaylcbiAqIGFuZCBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgICh3aGljaCBpcyB0aGUgZGF5IG9mIEphbnVhcnksIHdoaWNoIGlzIGFsd2F5cyBpblxuICogdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHdlZWstbnVtYmVyaW5nIHllYXIpXG4gKlxuICogV2VlayBudW1iZXJpbmc6IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1dlZWsjVGhlX0lTT193ZWVrX2RhdGVfc3lzdGVtXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIG9wdGlvbnMgLSBBbiBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKlxuICogQHJldHVybnMgVGhlIHN0YXJ0IG9mIGEgd2Vlay1udW1iZXJpbmcgeWVhclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYW4gYSB3ZWVrLW51bWJlcmluZyB5ZWFyIGZvciAyIEp1bHkgMjAwNSB3aXRoIGRlZmF1bHQgc2V0dGluZ3M6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2Vla1llYXIobmV3IERhdGUoMjAwNSwgNiwgMikpXG4gKiAvLz0+IFN1biBEZWMgMjYgMjAwNCAwMDowMDowMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSB3ZWVrLW51bWJlcmluZyB5ZWFyIGZvciAyIEp1bHkgMjAwNVxuICogLy8gaWYgTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2Ygd2Vla1xuICogLy8gYW5kIDQgSmFudWFyeSBpcyBhbHdheXMgaW4gdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXI6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2Vla1llYXIobmV3IERhdGUoMjAwNSwgNiwgMiksIHtcbiAqICAgd2Vla1N0YXJ0c09uOiAxLFxuICogICBmaXJzdFdlZWtDb250YWluc0RhdGU6IDRcbiAqIH0pXG4gKiAvLz0+IE1vbiBKYW4gMDMgMjAwNSAwMDowMDowMFxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRPZldlZWtZZWFyKGRhdGUsIG9wdGlvbnMpIHtcbiAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICBjb25zdCBmaXJzdFdlZWtDb250YWluc0RhdGUgPVxuICAgIG9wdGlvbnM/LmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIG9wdGlvbnM/LmxvY2FsZT8ub3B0aW9ucz8uZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgZGVmYXVsdE9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgZGVmYXVsdE9wdGlvbnMubG9jYWxlPy5vcHRpb25zPy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICAxO1xuXG4gIGNvbnN0IHllYXIgPSBnZXRXZWVrWWVhcihkYXRlLCBvcHRpb25zKTtcbiAgY29uc3QgZmlyc3RXZWVrID0gY29uc3RydWN0RnJvbShkYXRlLCAwKTtcbiAgZmlyc3RXZWVrLnNldEZ1bGxZZWFyKHllYXIsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vlay5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgY29uc3QgX2RhdGUgPSBzdGFydE9mV2VlayhmaXJzdFdlZWssIG9wdGlvbnMpO1xuICByZXR1cm4gX2RhdGU7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgc3RhcnRPZldlZWtZZWFyO1xuIiwiaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuaW1wb3J0IHsgY29uc3RydWN0RnJvbSB9IGZyb20gXCIuL2NvbnN0cnVjdEZyb20ubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgc3RhcnRPZlllYXJcbiAqIEBjYXRlZ29yeSBZZWFyIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSB5ZWFyIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSB5ZWFyIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgb3JpZ2luYWwgZGF0ZVxuICpcbiAqIEByZXR1cm5zIFRoZSBzdGFydCBvZiBhIHllYXJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgeWVhciBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZZZWFyKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMDApKVxuICogLy89PiBXZWQgSmFuIDAxIDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0T2ZZZWFyKGRhdGUpIHtcbiAgY29uc3QgY2xlYW5EYXRlID0gdG9EYXRlKGRhdGUpO1xuICBjb25zdCBfZGF0ZSA9IGNvbnN0cnVjdEZyb20oZGF0ZSwgMCk7XG4gIF9kYXRlLnNldEZ1bGxZZWFyKGNsZWFuRGF0ZS5nZXRGdWxsWWVhcigpLCAwLCAxKTtcbiAgX2RhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBfZGF0ZTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBzdGFydE9mWWVhcjtcbiIsIi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBhcmd1bWVudCAtIFRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKlxuICogQHJldHVybnMgVGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgY29uc3QgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTtcblxuICAvLyBDbG9uZSB0aGUgZGF0ZVxuICBpZiAoXG4gICAgYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8XG4gICAgKHR5cGVvZiBhcmd1bWVudCA9PT0gXCJvYmplY3RcIiAmJiBhcmdTdHIgPT09IFwiW29iamVjdCBEYXRlXVwiKVxuICApIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IGFyZ3VtZW50LmNvbnN0cnVjdG9yKCthcmd1bWVudCk7XG4gIH0gZWxzZSBpZiAoXG4gICAgdHlwZW9mIGFyZ3VtZW50ID09PSBcIm51bWJlclwiIHx8XG4gICAgYXJnU3RyID09PSBcIltvYmplY3QgTnVtYmVyXVwiIHx8XG4gICAgdHlwZW9mIGFyZ3VtZW50ID09PSBcInN0cmluZ1wiIHx8XG4gICAgYXJnU3RyID09PSBcIltvYmplY3QgU3RyaW5nXVwiXG4gICkge1xuICAgIC8vIFRPRE86IENhbiB3ZSBnZXQgcmlkIG9mIGFzP1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gVE9ETzogQ2FuIHdlIGdldCByaWQgb2YgYXM/XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCB0b0RhdGU7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vYXNzZXRzL3N0eWxlcy9tYWluLmNzc1wiO1xuaW1wb3J0IGNyZWF0ZUhvbWVQYWdlIGZyb20gXCIuL3BhZ2VzL2hvbWVQYWdlLmpzXCI7XG5pbXBvcnQgeyBjcmVhdGVBbGxQcm9qZWN0c1BhZ2UgfSBmcm9tIFwiLi9wYWdlcy9hbGxQcm9qZWN0c1BhZ2UuanNcIjtcbmltcG9ydCB7IGluaXRpYWxpemVEZWZhdWx0UHJvamVjdERhdGEgfSBmcm9tIFwiLi9zZXJ2aWNlcy9wcm9qZWN0TG9jYWxTdG9yYWdlLmpzXCI7XG5pbXBvcnQgeyBjbGVhckNvbnRlbnRUaXRsZURpc3BsYXkgfSBmcm9tIFwiLi91aS9jbGVhckRpc3BsYXkuanNcIjtcbmltcG9ydCB7IHJlbmRlckF0dHJpYnV0aW9uc01vZGFsIH0gZnJvbSBcIi4vdWkvcmVuZGVyQXR0cmlidXRpb25zTW9kYWwuanNcIjtcblxuaW5pdGlhbGl6ZURlZmF1bHRQcm9qZWN0RGF0YSgpO1xucmVuZGVyQXR0cmlidXRpb25zTW9kYWwoKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICBjcmVhdGVIb21lUGFnZSgpO1xuICBjb25zdCB0YWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YWJcIik7XG4gIGxldCBhY3RpdmVUYWIgPSB0YWJzWzBdO1xuICBhY3RpdmVUYWIuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgdGFicy5mb3JFYWNoKCh0YWIpID0+IHtcbiAgICB0YWIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGFjdGl2ZVRhYi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgdGFiLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICBhY3RpdmVUYWIgPSB0YWI7XG4gICAgICBjbGVhckNvbnRlbnRUaXRsZURpc3BsYXkoKTtcbiAgICAgIGNvbnN0IHRhYlR5cGUgPSB0YWIudGV4dENvbnRlbnQudHJpbSgpLnJlcGxhY2UoL1xccysvZywgXCJcIik7XG4gICAgICBjb25zdCBwYWdlQ3JlYXRvciA9IHBhZ2VDcmVhdG9yc1t0YWJUeXBlXTtcbiAgICAgIHBhZ2VDcmVhdG9yKCk7XG4gICAgfSk7XG4gIH0pO1xufSk7XG5cbmNvbnN0IHBhZ2VDcmVhdG9ycyA9IHtcbiAgSG9tZTogY3JlYXRlSG9tZVBhZ2UsXG4gIFByb2plY3RzOiBjcmVhdGVBbGxQcm9qZWN0c1BhZ2UsXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9