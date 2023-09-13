import { debounce } from "./asyncutiles.js";
import { sortCards, filterCards } from "./cardsUtiles.js";
import { loadCards } from "./fetchData.js";
import {
  filtering,
  renderCards,
  searchTopic,
  sorting,
  renderCategory,
} from "./presentation.js";
let cards = [];
let searchTerm = ``;
let sortBy = ``;
let filterBy = ``;

const loading_indicator = document.getElementById("loading-indicator");

async function presentOption() {
  if (searchTerm) {
    cards = await loadCards(searchTerm);
  } else {
    cards = await loadCards();
  }
  renderCategory(cards);
}

async function init() {
  loading_indicator.style.display = "block";
  cards = await loadCards();
  loading_indicator.style.display = "none";
  renderCards(cards);
}

searchTopic(
  debounce(300, async (searchValue) => {
    searchTerm = searchValue;
    let requestIdentifier = searchTerm;
    loading_indicator.style.display = "block";
    cards = await loadCards(searchTerm);
    if (requestIdentifier === searchTerm) {
      loading_indicator.style.display = "none";
      renderCards(sortCards(sortBy, cards));
    }
  })
);

sorting((value) => {
  sortBy = value;
  renderCards(sortCards(sortBy, cards));
});

filtering(async (value) => {
  filterBy = value;
  if (searchTerm) {
    cards = await loadCards(searchTerm);
  } else {
    cards = await loadCards();
  }
  renderCards(filterCards(filterBy, cards));
});

init();
presentOption();

// let modeValue = getItem();

// if (modeValue === "dark") {
//   darkMode();
// } else {
//   lightMode();
// }

// const darkModeButton = document.getElementById("dark-mode-button");
// let isChanged = false;
// darkModeButton.addEventListener("click", function () {
//   if (isChanged) {
//     darkMode();
//   } else {
//     lightMode();
//   }
//   isChanged = !isChanged;
// });

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
