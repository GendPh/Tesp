const tarefasDiv = document.getElementById("tarefas");
const btnAddTarefa = document.getElementById("addTarefa");
const emptyTasks = document.getElementById("empty-tasks");

const tarefaErrorEl = document.getElementById("error");
const taskSuccessEl = document.querySelector("#trocar-success");

btnAddTarefa.addEventListener("click", (e) => {
  e.preventDefault();

  const tarefaText = document.getElementById("text-tarefa");

  if (tarefaText.value.length == 0) {
    tarefaErrorEl.textContent = "Por favor inserir uma tarefa";
  } else {
    let taskHTML = addTaskEl(tarefaText.value);
    tarefasDiv.insertAdjacentHTML('beforeend', taskHTML);

    tarefaText.value = "";
    tarefaErrorEl.textContent = "";
    emptyTasks.classList.add("d-none");
  }
})

function addTaskEl(text) {
  return `
  <div class="tarefa-div bg-secondary mb-2 p-2 rounded d-flex justify-content-between align-items-center gap-2">
  <span class="tarefa-text">${text}</span>
  <button class="remove-tarefa bg-transparent border-0 fa-regular fa-circle-xmark" onClick="removeTask()">
  </button>
</div>
  `
}

function removeTask() {
  const removeButtons = document.querySelectorAll(".remove-tarefa");

  removeButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const allTask = document.querySelectorAll(".tarefa-div");
      // Access the parent node and directly remove it
      event.currentTarget.closest(".tarefa-div").remove();

      (allTask.length == 0) && emptyTasks.classList.remove("d-none");
    });
  });
}

document.getElementById("trocar-task").addEventListener("click", () => {
  taskSuccessEl.textContent = "";
  const tarefaTrocaEl1 = document.querySelector("#tarefa-1-trocar");
  const tarefaTrocaEl2 = document.querySelector("#tarefa-2-trocar");
  const value1El = tarefaTrocaEl1.value;
  const value2El = tarefaTrocaEl2.value;
  const errorTrocar = document.querySelector("#trocar-error");
  const allTask = document.querySelectorAll(".tarefa-div");

  if (allTask.length < 2) {
    errorTrocar.textContent = "Inserir Tarefas.";
    return false;
  }

  if (value1El < 1 || value2El < 1 || value1El > allTask.length || value2El > allTask.length || value1El === value2El) {
    errorTrocar.textContent = (value1El === value2El) ? "Por Favor. Inserir Tarefas diferentes entre si." : `Por Favor inserir um valor entre 1 e ${allTask.length}`;
    return false;
  }

  errorTrocar.textContent = "";
  reverseTask(value1El - 1, value2El - 1);
  tarefaTrocaEl1.value = "";
  tarefaTrocaEl2.value = "";
})

function reverseTask(index1, index2) {
  const allTask = document.querySelectorAll(".tarefa-div");

  // Ensure that index1 and index2 are within valid range
  if (index1 < 0 || index1 >= allTask.length || index2 < 0 || index2 >= allTask.length) {
    console.error("Invalid indices");
    return;
  }

  // Clone the content of the element at index1
  let contentOfFirstEl = allTask[index1].innerHTML;

  // Replace the content of the element at index1 with the content of the element at index2
  allTask[index1].innerHTML = allTask[index2].innerHTML;

  // Replace the content of the element at index2 with the cloned content
  allTask[index2].innerHTML = contentOfFirstEl;

  taskSuccessEl.textContent = "Task alterada com sucesso.";
}





