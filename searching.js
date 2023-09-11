import { createCard } from "./cardCreator.js";
createCard();
export function searchTopic() {
  const searchInput = document.getElementById("searc-input");

  searchInput.addEventListener("input", async (e) => {
    const value = e.target.value.toLowerCase();

    cards.forEach((card) => {
      const cardTopic = card
        .querySelector(".language")
        .textContent.toLowerCase();
      const isVisible = cardTopic.includes(value);

      card.style.display = isVisible ? "block" : "none";
    });
  });
}
