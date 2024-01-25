import { DefaultProject } from "./display/projectView";
import { projectContainer } from "./display/actionBar";
import { renderTODO } from "./todo";
let i = 0;
let projectsArray = [];
function addProject(name) {
  let projectEntry = document.querySelector("#projectEntry");
  name = projectEntry.value;

  let newProject = new projectFolder(name);
  newProject.index = projectsArray.length;
  console.log(`${newProject.name} index ${newProject.index}`);
  projectsArray.push(newProject);

  renderProjects();
}

function renderProjects() {
  const projectContainer = document.querySelector("#projectContainer");
  if (projectContainer !== null) {
    while (projectContainer.firstChild) {
      projectContainer.removeChild(projectContainer.firstChild);
    }
  } else {
    return;
  }
  console.log(projectsArray);
  projectsArray.forEach((project) => {
    let folderContainer = document.createElement("div");
    folderContainer.setAttribute("id", "folderContainer");

    let projectFolderButton = document.createElement("button");
    projectFolderButton.setAttribute("id", project.index);
    projectFolderButton.textContent = project.name;
    projectFolderButton.dataset.array = project.index;

    let deletefolder = document.createElement("button");
    deletefolder.setAttribute("id", `deleteProject`);
    deletefolder.textContent = "x";

    i++;
    projectFolderButton.addEventListener("click", (event) => {
      let arrayIndex = event.target.id;
      console.log(`Project ${arrayIndex}`);
      changeProjectViewHeading(project.name, arrayIndex);
      renderTODO(projectsArray[project.index].array);
      console.log(projectsArray[project.index].array);

      projectEntry.value = "";
    });

    deletefolder.addEventListener("click", () => {
      projectsArray.splice(project.index, 1);
      renderProjects();
    });

    folderContainer.appendChild(projectFolderButton);
    folderContainer.appendChild(deletefolder);
    projectContainer.appendChild(folderContainer);
  });
}
function changeProjectViewHeading(projectName, arrayIndex) {
  console.log("changing name");

  DefaultProject.textContent = projectName;
  DefaultProject.dataset.array = arrayIndex;
}

export {
  addProject,
  renderProjects,
  changeProjectViewHeading,
  projectFolder,
  projectsArray,
};

// recator to make folders to classes

class projectFolder {
  constructor(name) {
    this.name = name;
    this.array = [];
    this.index = null;
  }
}
