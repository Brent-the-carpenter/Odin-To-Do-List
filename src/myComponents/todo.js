class todo {
  constructor(title, description, duedate, priority, checked) {
    (this.title = title),
      (this.description = description),
      (this.duedate = duedate),
      (this.priority = priority),
      (this.checked = checked);
  }
}
function renderTODO(array) {
  const todoList = document.querySelector("#projectView");
  const todoContainer = document.querySelector("#todoContainer");
  if (todoContainer !== null) {
    while (todoContainer.firstChild) {
      todoContainer.removeChild(todoContainer.firstChild);
    }
  } else {
    return;
  }
  array.forEach((object) => {
    let todoBody = document.createElement("div");
    todoBody.setAttribute("id", "todoBody");

    let todotitle = document.createElement("h3");
    todotitle.setAttribute("id", "todoTitle");
    todotitle.textContent = object.title;

    let description = document.createElement("p");
    description.setAttribute("id", "description");
    description.textContent = object.description;

    let date = document.createElement("div");
    date.textContent = object.duedate;
    let priority = document.createElement("span");
    priority.setAttribute("id", "priority");
    priority.textContent = object.priority;

    let checked = document.createElement("button");
    checked.setAttribute("type", "radio");
    checked.setAttribute("id", "radioButton");

    todoBody.appendChild(checked);
    todoBody.appendChild(todotitle);
    todoBody.appendChild(description);
    todoBody.appendChild(date);
    todoBody.appendChild(priority);
    todoContainer.appendChild(todoBody);
    todoList.appendChild(todoContainer);
  });
}
let currentproject = [];
function addToDO(project) {
  console.log("hi");
  let title = document.querySelector("#title").value;
  let description = document.querySelector("#description").value;
  let priority = document.querySelector("#priority").value;
  let date = document.querySelector("#date").value;
  console.log(title, description);
  let Todo = new todo(title, description, date, priority);
  currentproject.push(Todo);
  console.log(currentproject);

  renderTODO(currentproject);
}

export { addToDO, currentproject, renderTODO };
