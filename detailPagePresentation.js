export function renderDetails(cardDetails) {
  let cardDetailHTML = ``;
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
}

export function renderSubTopics(cardDetails) {
  let subTopics = cardDetails.subtopics;
  const subTopicsList = document.getElementById("sub-topics-list");
  console.log(subTopics);
  let subtopicsHTML = ``;
  subTopics.forEach((element) => {
    subtopicsHTML += `
                <li>
                  <ion-icon
                    class="check-icon"
                    name="checkmark-circle-outline"
                  ></ion-icon>
                  ${element}
                </li>`;
    console.log(subtopicsHTML);
  });
  subTopicsList.innerHTML = subtopicsHTML;
}
