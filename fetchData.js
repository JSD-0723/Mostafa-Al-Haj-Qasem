export const loadCards = async (searchTerm) => {
  let res = await fetch(
    searchTerm
      ? `https://tap-web-1.herokuapp.com/topics/list?phrase=${searchTerm}`
      : "https://tap-web-1.herokuapp.com/topics/list"
  );
  return await res.json();
};

const myKeyValue = window.location.search;
const urlParams = new URLSearchParams(myKeyValue);
const itemId = urlParams.get("id");

const apiUrl = `https://tap-web-1.herokuapp.com/topics/details/${itemId}`;

export const loadCardDetails = async () => {
  let res = await fetch(apiUrl);
  return await res.json();
};
