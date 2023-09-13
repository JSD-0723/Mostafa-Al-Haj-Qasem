const cardContainer = document.getElementsByClassName("all-cards");

export function renderCards(cards) {
  let cardHTML = ``;
  const card = document.getElementById("single-card");
  cards.forEach((item) => {
    cardHTML += `
    <a href="detail.html?id=${item.id}" class="anchor-card">
        <div class="card box-shadow">
          <img src="images/${item.image}" alt='${item.topic}' />
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
        </a>`;
  });
  card.innerHTML = cardHTML;
  cardContainer[0].appendChild(card);
}

export function searchTopic(callBack) {
  const searchInput = document.getElementById("search-input");
  searchInput.addEventListener("input", async (e) => {
    callBack(e.target.value.toLowerCase());
  });
}

export function sorting(callBack) {
  document.getElementById("sort").addEventListener("change", async (e) => {
    callBack(e.target.value);
  });
}

export function renderCategory(cards) {
  let setOfCategory = new Set();
  cards.forEach((item) => {
    setOfCategory.add(item.category);
  });
  let filterHTML = ``;
  filterHTML += `<option value="default">Default</option>`;
  setOfCategory.forEach((item) => {
    filterHTML += `<option value="${item}">${item}</option>`;
  });
  document.getElementById("filter").innerHTML = filterHTML;
}

export function filtering(callBack) {
  document.getElementById("filter").addEventListener("change", async (e) => {
    callBack(e.target.value);
  });
}
