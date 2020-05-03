const querryString = document.location.search;
const params = new URLSearchParams(querryString);

const id = params.get("id");

const url = "https://ghibliapi.herokuapp.com/films/" + id;

fetch(url)
  .then((response) => response.json())
  .then((json) => getMovieByID(json))
  .catch((error) => console.log(error));

function getMovieByID(id) {
  const detailsContainer = document.querySelector(".details-container");
  console.log(id);
  const title = document.querySelector("h1");
  title.innerHTML = id.title;
  const paragraph = document.querySelector("p");
  paragraph.innerHTML = `<p>Release Year:  <span class="value" id="propertyName">${id.release_date}</span></p>
 <p>Description: <span class="value" id="propertyName">${id.description}</span></p>`;
}
