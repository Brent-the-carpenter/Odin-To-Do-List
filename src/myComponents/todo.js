class todo {
  constructor(title, description, duedate, priority, checked) {
    (this.title = title),
      (this.description = description),
      (this.duedate = duedate),
      (this.priority = priority),
      (this.checked = checked);
  }

  renderTODO() {
    const todoList = document.querySelector("#projectView");
    let todoBody = document.createElement("div");
    todoBody.setAttribute("id", "todoBody");

    let todotitle = document.createElement("h3");
    todotitle.setAttribute("id", "todoTitle");
    todotitle.textContent = this.title;

    let description = document.createElement("p");
    description.setAttribute("id", "description");
    description.textContent = this.description;

    let date = document.createElement("div");
    date.textContent = this.duedate;
    let priority = document.createElement("span");
    priority.setAttribute("id", "priority");
    priority.textContent = this.priority;

    let checked = document.createElement("button");
    checked.setAttribute("type", "radio");
    checked.setAttribute("id", "radioButton");

    todoBody.appendChild(checked);
    todoBody.appendChild(todotitle);
    todoBody.appendChild(description);
    todoBody.appendChild(date);
    todoBody.appendChild(priority);

    todoList.appendChild(todoBody);
  }
}

function addToDO() {
  console.log("hi");
  let title = document.querySelector("#title").value;
  let description = document.querySelector("#description").value;
  let priority = document.querySelector("#priority").value;
  let date = document.querySelector("#date").value;
  console.log(title, description);
  let Todo = new todo(title, description, priority, date);
  Todo.renderTODO();
}

export { addToDO };
