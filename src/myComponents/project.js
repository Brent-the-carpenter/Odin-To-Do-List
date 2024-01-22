import { DefaultProject } from "./display/projectView";
import { projectContainer } from "./display/actionBar";
import { renderTODO, getCurrentProject, setCurrentProject } from "./todo";

let projectArray = [];

function addProject() {
  let projectEntry = document.querySelector("#projectEntry");
  const projectName = projectEntry.value;
  const projectFolder = document.createElement("button");

  projectFolder.textContent = projectName;
  projectFolder.addEventListener("click", () => {
    changeProjectViewHeading(projectName);
    projectEntry.value = "";
  });

  projectContainer.appendChild(projectFolder);
}

function changeProjectArray(array, projectName) {
  console.log("changing array");
  setCurrentProject({ array: array.slice(), projectName });
}
function changeProjectViewHeading(projectName) {
  console.log("changing name");

  DefaultProject.textContent = projectName;
}

export { addProject, changeProjectArray, changeProjectViewHeading };
