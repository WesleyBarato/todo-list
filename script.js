let taskList = [];
let button = document.getElementById("sendTask");
let list = document.getElementById("list");

button.addEventListener("click", function addTask() {
  let task = document.getElementById("task").value;
  taskList.push(task);
  console.log(taskList);
  list.innerHTML = "";

  for (let i = 0; i < taskList.length; i++) {
    console.log(taskList[i]);
    let item = document.createElement("li");
    item.textContent = taskList[i];
    list.appendChild(item);
  }
});
