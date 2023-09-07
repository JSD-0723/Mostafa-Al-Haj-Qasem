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
