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
  img.src = require(`../assets/images/badges/lvl-${level / 20}.png`);
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

export { createBadge };
