// Get references to DOM elements
const input = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

// Add task when button is clicked
addBtn.addEventListener("click", () => {
  const task = input.value.trim();
  if (task === "") return;

  // Create new list item
  const li = document.createElement("li");
  li.innerHTML = `
    ${task}
    <button class="deleteBtn">Delete</button>
  `;

  // Append to the list
  todoList.appendChild(li);
  input.value = "";
});

// Event delegation for delete buttons
todoList.addEventListener("click", (e) => {
  if (e.target.classList.contains("deleteBtn")) {
    const li = e.target.parentElement;
    todoList.removeChild(li);
  }
});
