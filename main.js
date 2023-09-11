import { getItem } from "./loacalStorage.js";
import { darkMode, lightMode } from "./darkMode.js";
import { createCard } from "./cardCreator.js";

createCard();

let modeValue = getItem();

if (modeValue === "dark") {
  darkMode();
} else {
  lightMode();
}

const darkModeButton = document.getElementById("dark-mode-button");
let isChanged = false;
darkModeButton.addEventListener("click", function () {
  if (isChanged) {
    darkMode();
  } else {
    lightMode();
  }
  isChanged = !isChanged;
});

console.log(localStorage);

// const favouriteButton = document.getElementById("favourite-button");
// const favouriteTopic = document.querySelector(".favourite-topics");
// let isVisible = false;
// favouriteButton.addEventListener("click", function () {
//   if (isVisible) {
//     favouriteTopic.style.display = "none";
//   } else {
//     favouriteTopic.style.display = "block";
//   }
//   isVisible = !isVisible;
// });
