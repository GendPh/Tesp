const standLoader = `<div class="card opacity-50">
<span class="loader mx-auto"></span>
<div class="card-body">
  <p class="card-text text-center">Loading</p>
</div>
</div>
<div class="card opacity-50">
<span class="loader mx-auto"></span>
<div class="card-body">
  <p class="card-text text-center">Loading</p>
</div>
</div>
<div class="card opacity-50">
<span class="loader mx-auto"></span>
<div class="card-body">
  <p class="card-text text-center">Loading</p>
</div>
</div>
<div class="card opacity-50">
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
  return `
    <div class="card shadow">
      <img src="https://image.tmdb.org/t/p/w500${info.poster_path}" class="card-img-top" alt="...">
      <div class="card-body">
        <p class="card-text">${info.title}</p>
      </div>
    </div>
  `;
}


// function createBtnPage(i) {
//   const btnContainer = document.querySelector("#btn-popular");
//   // Clear existing content
//   btnContainer.innerHTML = "";

//   for (let index = 0; index < 500; index++) {

//     const newBtn = `<button class="btn btn-dark" onclick="changePage(${index + 1})">${index + 1}</button>`;
//     // Convert the HTML string to a DOM element before appending
//     const parser = new DOMParser();
//     const doc = parser.parseFromString(newBtn, 'text/html');
//     const btn = doc.body.firstChild;
//     btnContainer.appendChild(btn);
//   }
// }

// function scrollContainer(direction) {
//   var container = document.getElementById('btn-popular');
//   var content = document.getElementById('content');
//   var scrollLeftBtn = document.getElementById('scrollLeftBtn');
//   var scrollRightBtn = document.getElementById('scrollRightBtn');

//   if (direction === 'left') {
//     container.scrollLeft -= 200; // Adjust the scroll distance as needed
//   } else if (direction === 'right') {
//     container.scrollLeft += 200; // Adjust the scroll distance as needed
//   }

//   // Check scroll position and add/remove classes
//   scrollLeftBtn.classList.toggle('opacity-50', container.scrollLeft === 0);
//   scrollRightBtn.classList.toggle('opacity-50', container.scrollLeft + container.clientWidth >= content.scrollWidth);
// }