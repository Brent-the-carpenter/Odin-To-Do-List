import { actionBar } from "../index.js";
import { filterTodosByDate } from "../sortByDate.js";
import "../sortByDate.js"; // might not need
import { renderTODO, currentproject } from "../todo.js";
const buttonContainer = document.createElement("div");
buttonContainer.setAttribute("id", "buttonContainer");
const Home = document.createElement("button");
Home.setAttribute("id", "home");
Home.addEventListener("click", () => renderTODO(currentproject));

const Today = document.createElement("button");
Today.setAttribute("id", "today");
Today.addEventListener("click", () => filterTodosByDate("today"));

const Week = document.createElement("button");
Week.setAttribute("id", "week");
Week.addEventListener("click", () => filterTodosByDate("week"));

const Month = document.createElement("button");
Month.setAttribute("id", "month");
Month.addEventListener("click", () => filterTodosByDate("month"));

const projectHeading = document.createElement("h3");
projectHeading.setAttribute("id", "projectHead");

const createProject = document.createElement("button");
createProject.setAttribute("id", "createProject");
createProject.addEventListener("click", working);

createProject.textContent = "New project";
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
  actionBar.appendChild(buttonContainer);
  actionBar.appendChild(projectHeading);
  actionBar.appendChild(createProject);
}
function working() {
  console.log("working");
}
export { renderActionbar, Home, Today, Week, Month };
