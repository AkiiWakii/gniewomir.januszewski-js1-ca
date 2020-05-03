// const url = "http://dummy.restapiexample.com/api/v1/employees";
const url = "https://ghibliapi.herokuapp.com/films/";

fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    createDetails(json);
  })
  .catch(function (error) {
    console.log(error);
  });

function createDetails(details) {
  const contentContainer = document.querySelector(".content");

  let html = "";
  for (let i = 0; i < details.length; i++) {
    const movieName = details[i].title;
    const movieYear = details[i].release_date;
    const movieDescription = details[i].description;
    const moviePicture =
      "https://img.icons8.com/cute-clipart/64/000000/movie.png";
    const movieId = details[i].id;

    html += `<div class="col-sm-6 col-md-4 col-lg-3">
    <div class="card">
        <img class="image" src="${moviePicture}" alt="Title/Name" />
        <div class="details">
            <h4 class="name">${movieName}</h4>
            <p><b>Release Year: </b> ${movieYear}</p>
            <p><b>Description: </b>${movieDescription}</p>
            <a class="btn btn-primary" href="details.html?id=${movieId}">Details</a>
        </div>
    </div>
</div>`;

    contentContainer.innerHTML = html;
  }
}
