const darkModeButton = document.getElementById("dark-mode-button");
const root = document.documentElement;
let isChanged = false;

darkModeButton.addEventListener("click", function () {
  if (isChanged) {
    root.style.setProperty("--bg_default", "#FFFFFF");
    root.style.setProperty("--bg_body", "#F0F9FF");
    root.style.setProperty("--lines-color", "#DDDDDD");
    root.style.setProperty("--body-text", "#333333");
  } else {
    root.style.setProperty("--bg_default", "#1A1A1A");
    root.style.setProperty("--bg_body", "#282828");
    root.style.setProperty("--lines-color", "#000000");
    root.style.setProperty("--body-text", "#EDEDED");
  }
  isChanged = !isChanged;
});

const favouriteButton = document.getElementById("favourite-button");
const favouriteTopic = document.querySelector(".favourite-topics");
let isVisible = false;
favouriteButton.addEventListener("click", function () {
  if (isVisible) {
    favouriteTopic.style.display = "none";
  } else {
    favouriteTopic.style.display = "inline";
  }
  isVisible = !isVisible;
});


