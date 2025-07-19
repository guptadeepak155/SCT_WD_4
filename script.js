const form = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskDateTime = document.getElementById("task-datetime");
const taskList = document.getElementById("task-list");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const taskText = taskInput.value.trim();
  const taskTime = taskDateTime.value;

  if (taskText !== "") {
    addTask(taskText, taskTime);
    taskInput.value = "";
    taskDateTime.value = "";
  }
});

function addTask(text, time) {
  const li = document.createElement("li");

  const taskInfo = document.createElement("div");
  taskInfo.className = "task-info";
  taskInfo.innerHTML = `<strong>${text}</strong><small>${time ? `⏰ ${new Date(time).toLocaleString()}` : ''}</small>`;

  const actions = document.createElement("div");
  actions.className = "task-actions";

  const doneBtn = document.createElement("button");
  doneBtn.innerHTML = "✅";
  doneBtn.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  const editBtn = document.createElement("button");
  editBtn.innerHTML = "✏️";
  editBtn.addEventListener("click", () => {
    const newText = prompt("Edit task:", text);
    if (newText) {
      taskInfo.querySelector("strong").textContent = newText;
    }
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "🗑️";
  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  actions.appendChild(doneBtn);
  actions.appendChild(editBtn);
  actions.appendChild(deleteBtn);

  li.appendChild(taskInfo);
  li.appendChild(actions);
  taskList.appendChild(li);
}