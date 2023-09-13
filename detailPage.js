const myKeyValue = window.location.search;
const urlParams = new URLSearchParams(myKeyValue);
const itemId = urlParams.get("id");

let cardDetails = [];
const loading_indicator = document.getElementById("loading-indicator");

const apiUrl = `https://tap-web-1.herokuapp.com/topics/details/${itemId}`;
export const loadCardDetails = async () => {
  let res = await fetch(apiUrl);
  return await res.json();
};

console.log(loadCardDetails());

export function renderDetails(cardDetails) {
  let cardDetailHTML = ``;
  let subtopicsHTML = ``;
  let subTopics = cardDetails.subTopics;
  console.log(subTopics);
  const listOfSubtopics = document.getElementById("sub-topics-list");
  const cardDetail = document.getElementById("detail-container");
  cardDetailHTML += `<div class="black-container">
          <div class="language-details main-width-percentage">
            <div
              class="language-description main-width-percentage full-width-content"
            >
              <p class="category">${cardDetails.category}</p>
              <h2>${cardDetails.topic}</h2>
              <div class="star-icons favorite-card-info">
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star-outline"></ion-icon>
              </div>
              <p class="language-definition">${cardDetails.description}</p>
            </div>
            <div class="language-card full-width-content">
              <img
                class="full-width-content"
                src="images/${cardDetails.image}" alt='${cardDetails.topic}' 
              />
              <div class="favorite-lang dynamic-tolerance">
                <p>
                  <span class="lang-name">${cardDetails.topic}</span>by
                  <span class="author-name">${cardDetails.name}</span>
                </p>
              </div>
              <div class="favorite-request favorite-lang">
                <p>Interested about this topic?</p>
                <button class="favorite-button full-width-content">
                  Add to Favorites<ion-icon name="heart-outline"></ion-icon>
                </button>
                <p class="credit">Unlimited Credits</p>
              </div>
            </div>
          </div>
        </div>
        <div class="topic-container main-width-percentage">
            <div
              class="course-topic main-width-percentage full-width-content"
            >
              <h3>${cardDetails.topic} Sub Topics</h3>
  `;
  cardDetail.innerHTML = cardDetailHTML;
  subTopics.forEach((element) => {
    subtopicsHTML += `
                <li>
                  <ion-icon
                    class="check-icon"
                    name="checkmark-circle-outline"
                  ></ion-icon>
                  ${element}
                </li>
              })
            </div>
          </div>`;
  });
  listOfSubtopics.innerHTML = subtopicsHTML;
}

async function initDetail() {
  loading_indicator.style.display = "block";
  cardDetails = await loadCardDetails();
  loading_indicator.style.display = "none";
  renderDetails(cardDetails);
}

initDetail();
