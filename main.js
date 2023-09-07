import { darkMode, lightMode } from "./darkMode.js";
import { getMode } from "./loacalStorage.js";
// import { fetchData } from "./fetchData.js";
// import { createCard } from "./cardCreator.js";

fetch("https://tap-web-1.herokuapp.com/topics/list")
  .then((res) => {
    return res.json();
  })
  .then((data) => {})
  .catch((error) =>
    console.error("Something went wrong. Web topics failed to load.", error)
  );
export function createCard(data) {
  const cardContainer = document.getElementsByClassName("all-cards");
  data.forEach((element) => {
    const card = document.createElement("div");
    card.classList.add("card");
    const image = document.createElement("img");
    image.src = element.image;
    const category = document.createElement("p");
    category.textContent = element.category;
    const topic = document.createElement("p");
    topic.textContent = element.topic;
    card.appendChild(image);
    card.appendChild(category);
    card.appendChild(topic);
    cardContainer.appendChild(card);
  });
}

let modeValue = getMode();
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
