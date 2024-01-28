import { actionBar } from "../index.js";
import { addProject, projectsArray, renderProjects } from "../project.js";
import { filterTodosByDate } from "../sortByDate.js";
import "../sortByDate.js";
import { DefaultProject } from "./projectView.js";
import { renderTODO } from "../todo.js";
import { getAllProjectsFromStorage } from "../storage.js";

const buttonContainer = document.createElement("div");
buttonContainer.setAttribute("id", "buttonContainer");
const Home = document.createElement("button");
Home.setAttribute("id", "home");
Home.addEventListener("click", () => {
  (DefaultProject.dataset.filter = "home"),
    renderTODO(projectsArray[DefaultProject.dataset.array].array);
});

const Today = document.createElement("button");
Today.setAttribute("id", "today");
Today.addEventListener("click", () => {
  (DefaultProject.dataset.filter = "today"),
    filterTodosByDate(
      "today",
      projectsArray[DefaultProject.dataset.array].array
    );
});

const Week = document.createElement("button");
Week.setAttribute("id", "week");
Week.addEventListener("click", () => {
  console.log(projectsArray[DefaultProject.dataset.array].array),
    (DefaultProject.dataset.filter = "week"),
    filterTodosByDate(
      "week",
      projectsArray[DefaultProject.dataset.array].array
    );
});

const Month = document.createElement("button");
Month.setAttribute("id", "month");
Month.addEventListener("click", () => {
  (DefaultProject.dataset.filter = "month"),
    filterTodosByDate(
      "month",
      projectsArray[DefaultProject.dataset.array].array
    );
});

const projectHeading = document.createElement("h3");
projectHeading.setAttribute("id", "projectHead");
const projectsWrapper = document.createElement("div");
projectsWrapper.setAttribute("id", "projectWrapper");
const projectContainer = document.createElement("div");
projectContainer.setAttribute("id", "projectContainer");

const projectEntry = document.createElement("input");
projectEntry.setAttribute("type", "text");
projectEntry.setAttribute("id", "projectEntry");
projectEntry.setAttribute("placeholder", "enter name here.");

projectEntry.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    console.log("enter");
    addProject(projectEntry.value);
    projectEntry.value = "";
  }
});

const createProject = document.createElement("button");
createProject.setAttribute("id", "createProject");
createProject.addEventListener("click", () => addProject());

createProject.textContent = "New project +";
projectHeading.textContent = "Projects";
Home.textContent = "Home";
Today.textContent = "Today";
Week.textContent = "Week";
Month.textContent = "Month";

function renderActionbar() {
  buttonContainer.appendChild(Home);
  buttonContainer.appendChild(Today);
  buttonContainer.appendChild(Week);
  buttonContainer.appendChild(Month);
  projectsWrapper.appendChild(projectHeading);
  projectsWrapper.appendChild(projectContainer);
  projectsWrapper.appendChild(projectEntry);
  projectContainer.appendChild(createProject);

  actionBar.appendChild(buttonContainer);
  actionBar.appendChild(projectsWrapper);

  projectEntry.value = "";
  getAllProjectsFromStorage();
}

export { renderActionbar, Home, Today, Week, Month, projectContainer };
