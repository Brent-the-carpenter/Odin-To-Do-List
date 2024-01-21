import { actionBar } from "../index.js";
const buttonContainer = document.createElement("div");
buttonContainer.setAttribute("id", "buttonContainer");
const Home = document.createElement("button");
Home.setAttribute("id", "home");
const Today = document.createElement("button");
Today.setAttribute("id", "today");
const Week = document.createElement("button");
Week.setAttribute("id", "week");
const Month = document.createElement("button");
Month.setAttribute("id", "month");
const projectHeading = document.createElement("h3");
projectHeading.setAttribute("id", "projectHead");
const createProject = document.createElement("button");
createProject.setAttribute("id", "createProject");

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
export { renderActionbar };
