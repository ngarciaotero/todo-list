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
  });

  document.body.appendChild(overlay);
};

const removeOverlay = () => {
  const overlay = document.querySelector(".overlay");
  if (overlay) {
    overlay.remove();
  }
};
export {
  createModalHeader,
  createCloseModalBtn,
  createModalFormElement,
  displayModal,
  closeModal,
  addOverlay,
  removeOverlay,
};
