export const loadCards = async (searchTerm) => {
  let res = await fetch(
    searchTerm
      ? `https://tap-web-1.herokuapp.com/topics/list?phrase=${searchTerm}`
      : "https://tap-web-1.herokuapp.com/topics/list"
  );
  return await res.json();
};

// function getQueryParam(name) {
//   const urlSearchParams = new urlSearchParams(window.location.search);
//   return urlSearchParams.get(name);
// }

// const itemId = getQueryParam("id");

// export const loadCardDetails = async () => {
//   let res = await fetch(
//     "https://tap-web-1.herokuapp.com/topics/details/${itemId}"
//   );
//   return await res.json();
// };
