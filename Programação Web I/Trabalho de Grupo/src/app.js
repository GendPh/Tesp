import { fetchData } from "./API/fetch.js";
import { loadSlide, slideBox } from "./splide.js";

function StartPage() {
  loadSections("movie/popular?language=en-US&page=1", "#popular-slide-list", "#popular.splide");
  loadSections("movie/top_rated?language=en-US&page=1", "#top-rated-slide-list", "#top-rated.splide");
  loadSections("movie/now_playing?language=en-US&page=2", "#playing-slide-list", "#playing.splide");
  loadSections("movie/upcoming?language=en-US&page=2", "#upcoming-slide-list", "#upcoming.splide");
  const todayYear = new Date().getFullYear();
  document.getElementById("year").textContent = todayYear;
}

StartPage();

async function loadSections(ApiData, slideDest, slide) {
  const data = await fetchData(ApiData);
  const slicedData = data.results.slice(0, 8);
  const slideContainer = document.querySelector(slideDest);

  slicedData.forEach(poster => {
    const newMovieBox = slideBox(poster);
    // Convert the HTML string to a DOM element before appending
    const parser = new DOMParser();
    const doc = parser.parseFromString(newMovieBox, 'text/html');
    const movieBoxElement = doc.body.firstChild;
    slideContainer.appendChild(movieBoxElement);
  });

  loadSlide(slide);
}

const linksChangePage = document.querySelectorAll(".change-page");

linksChangePage.forEach(links => {
  links.addEventListener("click", () => {
    const urlDestination = links.getAttribute("data-page");
    console.log(urlDestination);

    window.location.href = `./${urlDestination}/${urlDestination}.html?search=` + encodeURIComponent(urlDestination) + '&page=1';
  })
});