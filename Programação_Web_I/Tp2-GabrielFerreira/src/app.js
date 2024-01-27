let playerTurn = 0;
const boardBox = document.querySelectorAll(".col-4");
const resetGame = document.querySelector("#resetBoard");
const toast = document.querySelector(".toast");
const toastBody = document.querySelector(".toast-body p");

boardBox.forEach((box) => {
  box.addEventListener("click", () => {

    // Joga Nesta Box se Não ouver Conteudo
    if (box.textContent.trim() === '') {
      //Remove o toast
      (toast.classList.contains("show")) && toast.classList.remove("show");
      //Verifica se é o X ou O a jogar
      if (playerTurn % 2 === 0) {
        box.textContent = "X";
        move();
      } else {
        box.textContent = "O";
        move();
      }
      box.classList.add("bg-primary");
      playerTurn++;
    }
    //Se a Box já ter sido marcada então mostra erro
    else {
      toast.classList.add("show");
      toastBody.textContent = `Erro - Esta posição já contém ${box.textContent}.`;
    }
  })
});

//Reseta a board
resetGame.addEventListener("click", () => {
  boardBox.forEach(box => {
    box.classList.remove("bg-primary");
    box.classList.remove("bg-success");
    box.classList.remove("bg-danger");
    box.classList.remove("pe-none");
    box.classList.remove("fs-1");
    box.classList.remove("opacity-50");
    box.textContent = "";

    (toast.classList.contains("show")) && toast.classList.remove("show");

    playerTurn = 0;
  });
})


//Função para verificar se existe vitória
function checkWin() {

  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // lina
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // coluna
    [0, 4, 8], [2, 4, 6]             // diagonal
  ];

  for (const combination of winningCombinations) {
    const [a, b, c] = combination;
    if (boardBox[a].textContent && boardBox[a].textContent === boardBox[b].textContent && boardBox[a].textContent === boardBox[c].textContent) {

      //Se ouver vitória adiciona a classe opacity-50 a todos as box
      boardBox.forEach(box => {
        box.classList.add("opacity-50");
      });

      //Box Vitorias adiciona classes bg-success e fs-1 e remove a opacity. com um delay de 50ms por cada
      setTimeout(() => {
        boardBox[a].classList.remove("opacity-50");
        boardBox[a].classList.add("bg-success");
        boardBox[a].classList.add("fs-1");
      }, 100);
      setTimeout(() => {
        boardBox[b].classList.remove("opacity-50");
        boardBox[b].classList.add("bg-success");
        boardBox[b].classList.add("fs-1");
      }, 150);
      setTimeout(() => {
        boardBox[c].classList.remove("opacity-50");
        boardBox[c].classList.add("bg-success");
        boardBox[c].classList.add("fs-1");
      }, 200);

      //Aparece o toast e a informação do vitorioso
      toast.classList.add("show");
      toastBody.textContent = `Vitória - ${boardBox[a].textContent}. Faça reset para começar.`;
      return true;
    }
  }
  //Se ainda nao ouver vitorioso retorna falso
  return false;
}


//Função para verificar se existe empate
function checkDraw() {
  //Se ainda existir caixas por preencher retorna falso para continuar a jogar
  for (const cell of boardBox) {
    if (!cell.textContent) {
      return false;
    }
  }

  //Se nao existir entao adiciona todas as box com a class bg-danger
  boardBox.forEach(box => {
    box.classList.remove("bg-primary");
    box.classList.add("bg-danger");
  });

  //Abre toast e informa que é empate
  toast.classList.add("show");
  toastBody.textContent = `Empate`;

  //Entao retorna verdade que existe empate
  return true;
}

//Função de jogar
function move() {
  //Se existir vitória ou empate adiciona a todos os elementos pe-none para não continuar a jogar
  if (checkWin()) {
    boardBox.forEach(allBox => {
      allBox.classList.add("pe-none");
    });
  } else if (checkDraw()) {
    boardBox.forEach(allBox => {
      allBox.classList.add("pe-none");
    });
  }

}