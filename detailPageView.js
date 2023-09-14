import { renderDetails, renderSubTopics } from "./detailPagePresentation.js";
import { loadCardDetails } from "./fetchData.js";

let cardDetails = [];
const loading_indicator = document.getElementById("loading-indicator");

async function initDetail() {
  loading_indicator.style.display = "block";
  cardDetails = await loadCardDetails();
  loading_indicator.style.display = "none";
  renderDetails(cardDetails);
  renderSubTopics(cardDetails);
}

initDetail();
