import { DefaultProject } from "./display/projectView";
import { projectsArray } from "./project";
import { updateLocalStorageProjects } from "./storage";
import { filterTodosByDate, filteredArray } from "./sortByDate";

class todo {
  constructor(title, description, duedate, priority, checked) {
    (this.title = title),
      (this.description = description),
      (this.duedate = duedate),
      (this.priority = priority),
      (this.checked = checked);
    this.dateParts = this.duedate.split("-");
    this.reformattedDate = `${this.dateParts[1]}/${this.dateParts[2]}/${this.dateParts[0]}`;
    this.index = null;
  }
}
function addToDO(array, selectedProjectIndex) {
  console.log(array);
  let title = document.querySelector("#title").value;
  let description = document.querySelector("#description").value;
  let priority = document.querySelector("#priority").value;
  let date = document.querySelector("#date").value;
  if (title === "") {
    alert("Title Cannot be blank");
  } else {
    let newTodo = new todo(title, description, date, priority);
    newTodo.index = array.length;

    array.push(newTodo);
    updateLocalStorageProjects(array, selectedProjectIndex);

    renderTODO(array);
  }
}

function deleteTodo(projectIndex, todoIndex) {
  const existingProjectsString = localStorage.getItem("ProjectFolders");
  const existingProjects = existingProjectsString
    ? JSON.parse(existingProjectsString)
    : [];

  // Remove the todo from the specified project's todos array
  existingProjects[projectIndex].array.splice(todoIndex, 1);

  // Update local storage with the modified projects array
  localStorage.setItem("ProjectFolders", JSON.stringify(existingProjects));

  // Optionally, update the UI to reflect the changes
  // renderTODO(existingProjects[projectIndex].array);
}

function renderTODO(array) {
  const todoList = document.querySelector("#projectView");
  const todoContainer = document.querySelector("#todoContainer");
  console.log(array);

  if (todoContainer !== null) {
    while (todoContainer.firstChild) {
      todoContainer.removeChild(todoContainer.firstChild);
    }
  } else {
    return;
  }
  array.forEach((object, index) => {
    let todoBody = document.createElement("div");
    todoBody.setAttribute("id", "todoBody");

    let todotitle = document.createElement("h3");
    todotitle.setAttribute("id", "todoTitle");
    todotitle.textContent = object.title;

    let description = document.createElement("p");
    description.setAttribute("id", "todoDescription");
    description.textContent = object.description;

    let date = document.createElement("div");
    date.textContent = `Due by : ${object.reformattedDate}`;
    date.setAttribute("id", "todoDate");
    let priority = document.createElement("span");
    priority.setAttribute("id", "todoPriority");
    priority.textContent = ` Priority : ${object.priority}`;

    let checked = document.createElement("input");
    checked.setAttribute("type", "checkbox");
    checked.setAttribute("id", "checkbox");

    let deleteToDo = document.createElement("button");
    deleteToDo.setAttribute("id", `deleteTodo-${index}`);
    deleteToDo.textContent = "x";
    deleteToDo.addEventListener("click", (event) => {
      let currentProject = DefaultProject.dataset.array;
      let deleteToDoIndex = event.target.id;
      let deleteToDoAt = deleteToDoIndex.split("-");
      console.log(`array before delete ${projectsArray[currentProject].array}`);
      // console.log(object.index);

      projectsArray[currentProject].array.splice(deleteToDoAt[1], 1);
      deleteTodo(currentProject, deleteToDo[1]);
      if (DefaultProject.dataset.filter !== " ") {
        console.log(
          ` array after delete${projectsArray[currentProject].array}`
        );
        filterTodosByDate(
          DefaultProject.dataset.filter,
          projectsArray[currentProject].array
        );
        renderTODO(filteredArray);
      } else {
        renderTODO(array);
      }
    });

    todoBody.appendChild(deleteToDo);
    todoBody.appendChild(checked);
    todoBody.appendChild(todotitle);
    todoBody.appendChild(description);
    todoBody.appendChild(date);
    todoBody.appendChild(priority);
    todoContainer.appendChild(todoBody);
    todoList.appendChild(todoContainer);
  });
}

export { todo, renderTODO, addToDO };
