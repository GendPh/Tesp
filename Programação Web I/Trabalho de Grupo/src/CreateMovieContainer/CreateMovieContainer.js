const standLoader = `<div class="card opacity-50 h-25">
<span class="loader mx-auto"></span>
<div class="card-body">
  <p class="card-text text-center">Loading</p>
</div>
</div>
<div class="card opacity-50 h-25">
<span class="loader mx-auto"></span>
<div class="card-body">
  <p class="card-text text-center">Loading</p>
</div>
</div>
<div class="card opacity-50 h-25">
<span class="loader mx-auto"></span>
<div class="card-body">
  <p class="card-text text-center">Loading</p>
</div>
</div>
<div class="card opacity-50 h-25">
<span class="loader mx-auto"></span>
<div class="card-body">
  <p class="card-text text-center">Loading</p>
</div>
</div>
`;

export function createMovieBox(data, container) {
  const movieContainer = document.querySelector(`${container}`);
  // Clear existing content
  movieContainer.innerHTML = standLoader;

  setTimeout(() => {
    movieContainer.innerHTML = "";

    data.forEach(box => {
      const newMovieBox = movieBox(box);
      // Convert the HTML string to a DOM element before appending
      const parser = new DOMParser();
      const doc = parser.parseFromString(newMovieBox, 'text/html');
      const movieBoxElement = doc.body.firstChild;
      movieContainer.appendChild(movieBoxElement);
    });
  }, 1000);

}

export function movieBox(info) {

  const poster = (info.poster_path) ? `https://image.tmdb.org/t/p/w500${info.poster_path}` : "https://picsum.photos/500";

  const releaseDate = (info.release_date) ? info.release_date : "00-00-0000";

  return `
    <div class="card shadow">
      <img src="${poster}" class="card-img-top h-100" alt="...">
      <div class="card-body fw-bold">
        <p class="card-text truncate">${info.title}</p>
        <p class="card-text opacity-50">${releaseDate}</p>
        <p class="float-end average">${(info.vote_average * 10).toFixed(0)}%</p>
      </div>
    </div>
  `;
}