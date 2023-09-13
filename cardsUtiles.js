export function sortCards(sortBy, cards) {
  let sortedCards = [];
  switch (sortBy) {
    case "topic":
      sortedCards = [...cards].sort((a, b) => (a.topic > b.topic ? 1 : -1));
      break;
    case "name":
      sortedCards = [...cards].sort((a, b) => (a.name > b.name ? 1 : -1));
      break;
    default:
      sortedCards = [...cards];
  }
  return sortedCards;
}

export function filterCards(filterBy, cards) {
  let filterdCards = [];
  if(filterBy==="default"){
    return cards
  }
  filterdCards = cards.filter((card) => card.category === filterBy);
  return filterdCards;
}
