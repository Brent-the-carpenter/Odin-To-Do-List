import { actionBar } from "../index.js";
import { filterTodosByDate } from "../sortByDate.js";
import "../sortByDate.js"; // might not need
import { todo } from "../todo.js";
import {
  addProject,
  changeProjectViewHeading,
  changeProjectArray,
  projectFolder,
} from "../project.js";

const buttonContainer = document.createElement("div");
buttonContainer.setAttribute("id", "buttonContainer");
const Home = document.createElement("button");
Home.setAttribute("id", "home");
Home.addEventListener("click", () => renderTODO(getCurrentProject()));

const Today = document.createElement("button");
Today.setAttribute("id", "today");
Today.addEventListener("click", () =>
  filterTodosByDate("today", getCurrentProject())
);

const Week = document.createElement("button");
Week.setAttribute("id", "week");
Week.addEventListener("click", () =>
  filterTodosByDate("week", getCurrentProject())
);

const Month = document.createElement("button");
Month.setAttribute("id", "month");
Month.addEventListener("click", () =>
  filterTodosByDate("month", getCurrentProject())
);

const projectHeading = document.createElement("h3");
projectHeading.setAttribute("id", "projectHead");

const projectContainer = document.createElement("div");
projectContainer.setAttribute("id", "projectContainer");

const projectEntry = document.createElement("input");
projectEntry.setAttribute("type", "text");
projectEntry.setAttribute("id", "projectEntry");
projectEntry.setAttribute("placeholder", "enter name here.");
projectEntry.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    console.log("enter");
    addProject(projectEntry.value, []);
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
  projectContainer.appendChild(projectEntry);
  projectContainer.appendChild(createProject);

  actionBar.appendChild(buttonContainer);
  actionBar.appendChild(projectHeading);
  actionBar.appendChild(projectContainer);
  // Initiallize with value to pass func call then set to blank for user
  projectEntry.value = "Default Project";
  addProject("Default Project", []);
  projectEntry.value = "";
}

export { renderActionbar, Home, Today, Week, Month, projectContainer };
