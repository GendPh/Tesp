import { fetchData, getQueryParam } from "../src/API/fetch.js";
import { createMovieBox } from "../src/CreateMovieContainer/CreateMovieContainer.js";
import { createBtn } from "../src/CreateBtn/PopularBtn.js";

async function loadPage() {
  // Get the search key from the URL
  var searchKey = getQueryParam('search');
  var page = getQueryParam('page');

  const data = await fetchData(`search/movie?query=${searchKey}&page=${page}`);
  console.log(data);

  if (data.results.length > 0) {
    createMovieBox(data.results, "#movie-container");
    createBtn(data, "#btn-container");

    const changePageBtn = document.querySelectorAll("#btn-container button");

    changePageBtn[page - 1].classList.add("opacity-50");

    changePageBtn.forEach((btn, index) => {
      btn.addEventListener("click", () => {
        window.location.href = 'search.html?search=' + encodeURIComponent(searchKey) + `&page=${index + 1}`;
      })
    });
    
  } else {
    window.location.href = '404.html';
  }

}

loadPage();