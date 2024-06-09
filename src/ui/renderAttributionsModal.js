import { displayModal, addOverlay } from "../helpers/modalHelpers.js";

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
    displayModal(createAttributionsModal());
    addOverlay();
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

export { renderAttributionsModal };
