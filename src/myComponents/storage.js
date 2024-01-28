import { projectsArray, renderProjects } from "./project";
import { DefaultProject } from "./display/projectView";
import { renderTODO } from "./todo";
function getAllProjectsFromStorage() {
  const storedProjectsString = localStorage.getItem("projectFolders");

  if (storedProjectsString) {
    const parsedProjects = JSON.parse(storedProjectsString);

    projectsArray.length = 0;

    parsedProjects.forEach((parsedProject) => {
      projectsArray[parsedProject.index] = parsedProject;
    });
  }
}

function updateLocalStorageProjects(array) {
  const existingProjectsString = localStorage.getItem("ProjectFolders");
  const existingProjects = existingProjectsString
    ? JSON.parse(existingProjectsString)
    : [];

  const selectedProjectIndex = DefaultProject.dataset.array;
  existingProjects[selectedProjectIndex].array = array;

  localStorage.setItem("ProjectFolders", JSON.stringify(existingProjects));
}

function loadAndRenderTodosForAllProjects() {
  const existingProjectsString = localStorage.getItem("ProjectFolders");
  const existingProjects = existingProjectsString
    ? JSON.parse(existingProjectsString)
    : [];

  existingProjects.forEach((project) => {
    renderTodosForProject(project);
  });
}

window.addEventListener("load", loadAndRenderTodosForAllProjects);

function renderTodosForProject(project) {
  const todosArray = project.array;

  renderTODO(todosArray);
}

renderProjects();
export { getAllProjectsFromStorage, updateLocalStorageProjects };
