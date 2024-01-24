import { DefaultProject } from "./display/projectView";
import { projectContainer } from "./display/actionBar";
import { todo } from "./todo";
let i = 0;
let projectsArray = [];
function addProject(name) {
  let projectEntry = document.querySelector("#projectEntry");
  name = projectEntry.value;
  let arrayIndex = i;
  let projectFolderButton = document.createElement("button");
  projectFolderButton.setAttribute("id", arrayIndex);
  i++;

  let newProject = new projectFolder(name);
  console.log(`${newProject.name} index ${arrayIndex}`);
  projectsArray.push(newProject);
  console.log(projectsArray);
  projectFolderButton.textContent = name;

  projectFolderButton.addEventListener("click", (event) => {
    let arrayIndex = event.target.id;
    changeProjectViewHeading(newProject.name, arrayIndex);
    renderTODO(projectsArray[arrayIndex].array);
    console.log(projectsArray[arrayIndex].array);
    changeProjectArray();
    projectEntry.value = "";
  });

  projectContainer.appendChild(projectFolderButton);
}

function changeProjectArray(array, projectName) {
  console.log("changing array");
}
function changeProjectViewHeading(projectName, arrayIndex) {
  console.log("changing name");

  DefaultProject.textContent = projectName;
  DefaultProject.dataset.array = arrayIndex;
}

export {
  addProject,
  changeProjectArray,
  changeProjectViewHeading,
  projectFolder,
  addToDO,
  renderTODO,
  projectsArray,
};

// recator to make folders to classes

class projectFolder {
  constructor(name) {
    this.name = name;
    this.array = [];
  }
}
function addToDO(array) {
  console.log(array);
  let title = document.querySelector("#title").value;
  let description = document.querySelector("#description").value;
  let priority = document.querySelector("#priority").value;
  let date = document.querySelector("#date").value;

  let newTodo = new todo(title, description, date, priority);

  array.push(newTodo);

  renderTODO(array);
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
