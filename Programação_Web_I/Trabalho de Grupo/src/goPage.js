import { fetchData, getQueryParam } from "./API/fetch.js";
import { createMovieBox } from "./CreateMovieContainer/CreateMovieContainer.js";
import { createBtn, btnEvents } from "./CreateBtn/PopularBtn.js";
import { LoadYear } from "./load_year.js";

async function loadData() {
  const page = (getQueryParam("page") < 1) ? 1 : getQueryParam("page");
  const search = getQueryParam("search");

  // Remove the specific HTML file and check the category
  const path = window.location.pathname;
  const category = getCategoryFromPath(path);

  if (window.location.pathname.endsWith(`/${category}.html`)) {
    const newPath = window.location.pathname.replace(`/${category}.html`, "");
    const newUrl = window.location.origin + newPath + window.location.search;
    window.history.replaceState({}, document.title, newUrl);
  }

  const data = await fetchData(`movie/${search}?language=en-US&page=${page}`);

  if (data.length != 0) {
    createMovieBox(data.results, "#movie-container");
    createBtn(data);
    btnEvents(page, `${search}.html?search=${encodeURIComponent(search)}`);
  } else {
    createMovieBox([], "#movie-container");
  }
}

function getCategoryFromPath(path) {
  const categories = ["popular", "top_rated", "playing", "upcoming"];

  for (const category of categories) {
    if (path.includes(`/${category}`)) {
      return category;
    }
  }

  return null;
}

loadData();
LoadYear();