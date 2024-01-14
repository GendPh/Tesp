import { fetchData, getQueryParam } from "./API/fetch.js";
import { createMovieBox } from "./CreateMovieContainer/CreateMovieContainer.js";
import { createBtn, btnEvents } from "./CreateBtn/PopularBtn.js";

async function loadData() {
  const page = (getQueryParam("page") < 1) ? 1 : getQueryParam("page");
  const search = getQueryParam("search");

  const data = await fetchData(`movie/${search}?language=en-US&page=${page}`);
  console.log(data);
  createMovieBox(data.results, "#movie-container");

  createBtn(data);
  btnEvents(page, `${search}.html?search=${encodeURIComponent(search)}`);
}

loadData();
