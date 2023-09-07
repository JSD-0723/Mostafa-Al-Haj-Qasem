export function fetchData() {
  return fetch("https://tap-web-1.herokuapp.com/topics/list")
    .then((res) => {
      return res.json();
    })
    .then((data) => console.log(data))
    .catch((error) =>
      console.error("Something went wrong. Web topics failed to load.", error)
    );
}
