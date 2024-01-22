import { DefaultProject } from "./display/projectView";

import { projectContainer } from "./display/actionBar";
import { renderTODO, getCurrentProject, setCurrentProject } from "./todo";

function addProject() {
  let projectEntry = document.querySelector("#projectEntry");
  const projectName = projectEntry.value;
  const ProjectArray = [];
  const projectFolder = document.createElement("button");

  projectFolder.textContent = projectName;
  projectFolder.addEventListener("click", () => {
    changeProjectViewHeading(projectName);
    projectEntry.value = "";
    changeProjectArray(ProjectArray);
    renderTODO(getCurrentProject());
  });

  projectContainer.appendChild(projectFolder);
}

function changeProjectViewHeading(projectName) {
  console.log("changing name");

  DefaultProject.textContent = projectName;
}

function changeProjectArray(array) {
  console.log("changing array");
  setCurrentProject(array.slice());
}

export { addProject, changeProjectViewHeading, changeProjectArray };
