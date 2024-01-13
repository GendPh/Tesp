function btn(index) {
  return `<button type="button" class="btn btn-dark">${index + 1}</button>`;
}

export function createBtn(data, container) {
  const btnContainer = document.querySelector(`${container}`);

  const totalPages = data.total_results / 20;

  for (let i = 0; i < totalPages; i++) {
    const newBtn = btn(i);
    // Convert the HTML string to a DOM element before appending
    const parser = new DOMParser();
    const doc = parser.parseFromString(newBtn, 'text/html');
    const BtnElement = doc.body.firstChild;
    btnContainer.appendChild(BtnElement);

  }
}