import { DefaultProject } from "./display/projectView";
import { projectContainer } from "./display/actionBar";
import { renderTODO } from "./todo";
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
  projectsArray,
};

// recator to make folders to classes

class projectFolder {
  constructor(name) {
    this.name = name;
    this.array = [];
  }
}
