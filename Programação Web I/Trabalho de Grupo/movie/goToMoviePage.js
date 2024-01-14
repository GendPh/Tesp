export function attachMoviePageLinkToCard(component, url) {
  const cards = document.querySelectorAll(component);
  console.log(cards);
  cards.forEach(card => {
    card.addEventListener("click", () => {
      const movie = card.getAttribute("data-movie-id");
      window.location.href = `${url}?movie=${encodeURIComponent(movie)}`;
    })
  });
}