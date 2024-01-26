import { projectsArray, renderProjects } from "./project";
import { DefaultProject } from "./display/projectView";
import { renderTODO } from "./todo";
function getAllProjectsFromStorage() {
  const storedProjectsString = localStorage.getItem("projectFolders");

  if (storedProjectsString) {
    // Parse the stored string
    const parsedProjects = JSON.parse(storedProjectsString);

    // Ensure projectsArray is empty before pushing new items
    projectsArray.length = 0;

    // Map the parsed projects to their respective indices in projectsArray
    parsedProjects.forEach((parsedProject) => {
      projectsArray[parsedProject.index] = parsedProject;
    });
  }
}

function updateLocalStorageProjects(array) {
  // Retrieve existing projects from local storage
  const existingProjectsString = localStorage.getItem("ProjectFolders");
  const existingProjects = existingProjectsString
    ? JSON.parse(existingProjectsString)
    : [];

  // Update the specific project's todos array
  const selectedProjectIndex = DefaultProject.dataset.array;
  existingProjects[selectedProjectIndex].array = array;

  // Update local storage with the modified projects array
  localStorage.setItem("ProjectFolders", JSON.stringify(existingProjects));
}

// Function to load todos from local storage
function loadTodosFromLocalStorage() {
  const existingProjectsString = localStorage.getItem("ProjectFolders");
  const existingProjects = existingProjectsString
    ? JSON.parse(existingProjectsString)
    : [];

  // Determine the index of the selected project or use the first project as an example
  const selectedProjectIndex = DefaultProject.dataset.array;

  // Reference the correct todos array from your application state
  const todosArray = existingProjects[selectedProjectIndex].array;

  // Render the todos in your UI
  renderTODO(todosArray);
}

// Call the function when the page is loaded
window.addEventListener("load", loadTodosFromLocalStorage);
renderProjects();
export { getAllProjectsFromStorage, updateLocalStorageProjects };
