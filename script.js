let taskList = [];
let button = document.getElementById("sendTask");
let list = document.getElementById("list");

button.addEventListener("click", function addTask() {
  let task = document.getElementById("task").value;
  if (task.trim() === "") return; // evita tarefas vazias
  taskList.push(task);
  document.getElementById("task").value = ""; // limpa input
  renderList();
});

function renderList() {
  list.innerHTML = "";

  taskList.forEach((task, index) => {
    let item = document.createElement("li");
    let span = document.createElement("span");
    let delButton = document.createElement("button");

    // Texto da tarefa
    span.textContent = task;
    span.style.cursor = "pointer";
    span.addEventListener("click", () => {
      // Alterna classe para marcar como concluída
      span.classList.toggle("completed");
    });

    // Botão de exclusão
    delButton.textContent = "Excluir";
    delButton.classList.toggle("delButton");
    delButton.addEventListener("click", () => {
      taskList.splice(index, 1); // remove do array
      renderList(); // atualiza visualmente
    });

    item.appendChild(span);
    item.appendChild(delButton);
    list.appendChild(item);
  });
}
