import { fetchData } from "./fetchData.js";

const cardContainer = document.getElementById("all-cards");
const loading_indicator = document.getElementById("loading-indicator");
export async function createCard() {
  try {
    //loading indicator shown
    loading_indicator.style.display = "block";
    const data = await fetchData();
    //loading indicator disappear
    loading_indicator.style.display = "none";

    const cards = data.map((item) => createCardElement(item));
    cards.forEach((card) => cardContainer.appendChild(card));
  } catch (error) {
    console.error("Error creating cards:", error);
  }

  function createCardElement(item) {
    const card = document.createElement("a");
    card.classList.add("anchor-card");
    card.innerHTML = `
    <div class="card box-shadow">
      <img src="images/${item.image}" alt=${item.title} />
      <div class="card-info">
        <p class="language-category dynamic-tolerance">${item.category}</p>
        <h2 class="language">${item.topic}</h2>
        <div class="star-icons">
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star-outline"></ion-icon>
        </div>
        <p class="author-name">Author: ${item.name}</p>
      </div>
    </div>
  `;

    return card;
  }
}
