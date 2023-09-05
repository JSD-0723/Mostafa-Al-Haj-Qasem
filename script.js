const darkModeButton = document.getElementById("dark-mode-button");
const modeText = document.getElementById("mode-text");
const modeIcon = document.getElementById("mode-icon");
const root = document.documentElement;
let isChanged = false;

saveMode = localStorage.getItem("mode");
if (saveMode === "dark") {
  darkMode();
}

darkModeButton.addEventListener("click", function () {
  if (isChanged) {
    darkMode();
  } else {
    lightMode();
  }
  isChanged = !isChanged;
  const currentMode = isChanged ? "light" : "dark";
  localStorage.setItem("mode", currentMode);
});

function darkMode() {
  root.style.setProperty("--bg_default", "#FFFFFF");
  root.style.setProperty("--bg_body", "#F0F9FF");
  root.style.setProperty("--lines-color", "#DDDDDD");
  root.style.setProperty("--body-text", "#333333");
  modeText.textContent = "Dark Mode";
  modeIcon.setAttribute("name", "moon-outline");
}
function lightMode() {
  root.style.setProperty("--bg_default", "#1A1A1A");
  root.style.setProperty("--bg_body", "#282828");
  root.style.setProperty("--lines-color", "#000000");
  root.style.setProperty("--body-text", "#EDEDED");
  modeText.textContent = "Light Mode";
  modeIcon.setAttribute("name", "sunny-outline");
}

const favouriteButton = document.getElementById("favourite-button");
const favouriteTopic = document.querySelector(".favourite-topics");
let isVisible = false;
favouriteButton.addEventListener("click", function () {
  if (isVisible) {
    favouriteTopic.style.display = "none";
  } else {
    favouriteTopic.style.display = "block";
  }
  isVisible = !isVisible;
});
