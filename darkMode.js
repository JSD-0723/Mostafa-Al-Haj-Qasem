import { setItem } from "./loacalStorage.js";

const root = document.documentElement;

export function darkMode() {
  root.style.setProperty("--bg_default", "#FFFFFF");
  root.style.setProperty("--bg_body", "#F0F9FF");
  root.style.setProperty("--lines-color", "#DDDDDD");
  root.style.setProperty("--body-text", "#333333");
  updateTextMode("Dark Mode");
  updateIconeMode("moon-outline");
  setItem("dark");
}
export function lightMode() {
  root.style.setProperty("--bg_default", "#1A1A1A");
  root.style.setProperty("--bg_body", "#282828");
  root.style.setProperty("--lines-color", "#000000");
  root.style.setProperty("--body-text", "#EDEDED");
  updateTextMode("Light Mode");
  updateIconeMode("sunny-outline");
  setItem("light");
}

function updateTextMode(text) {
  const modeText = document.getElementById("mode-text");
  modeText.textContent = text;
}

function updateIconeMode(iconName) {
  const modeIcon = document.getElementById("mode-icon");
  modeIcon.setAttribute("name", iconName);
}
