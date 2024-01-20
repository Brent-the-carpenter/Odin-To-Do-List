import { actionBar } from "../index.js";
const buttonContainer = document.createElement("div");
buttonContainer.setAttribute("id", "buttonContainer");
const Home = document.createElement("button");
const Today = document.createElement("button");
const Week = document.createElement("button");
const Month = document.createElement("button");
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
