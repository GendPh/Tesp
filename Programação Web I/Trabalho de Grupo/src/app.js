import { fetchData } from "./API/fetch.js";
import { createMovieBox, movieBox } from "./CreateMovieContainer/CreateMovieContainer.js";

let startPage = 1; // Set the initial page number
const btnChangePopular = document.querySelectorAll(".btn-change-popular");


async function StartPage(page) {
  const data = await fetchData(page);
  console.log(data);
  createMovieBox(data.results);
}

StartPage(startPage);

// Function to update the page in the URL and fetch data
function updatePageAndFetchData(newPage) {
  history.pushState(null, null, `?page=${newPage}`);
  StartPage(newPage);
}

btnChangePopular.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    updatePageAndFetchData(index + 2)
  });
});