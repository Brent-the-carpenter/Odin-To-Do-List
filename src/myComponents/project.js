import { DefaultProject } from "./display/projectView";

import { renderTODO } from "./todo";

let projectsArray = [];

class ProjectFolder {
  constructor(name) {
    this.name = name;
    this.array = [];
    this.index = null;
  }
}
function addProject(name) {
  if (name === "") {
    alert("can not create project with no name!");
  } else {
    let newProject = new ProjectFolder(name);
    newProject.index = projectsArray.length;
    console.log(`${newProject.name} index ${newProject.index}`);

    const existingProjectsString = localStorage.getItem("ProjectFolders");
    const existingProjects = existingProjectsString
      ? JSON.parse(existingProjectsString)
      : [];

    const isProjectExists = existingProjects.some(
      (project) => project.name === name
    );

    if (!isProjectExists) {
      existingProjects.push(newProject);
    }

    localStorage.setItem("ProjectFolders", JSON.stringify(existingProjects));

    projectsArray = existingProjects;

    renderProjects();

    return newProject;
  }
}

// Add the default project
const defaultProject = addProject("Default Project");

function deleteProjectFromStorage(projectIndex) {
  // Get the current projects array from local storage
  const existingProjectsString = localStorage.getItem("ProjectFolders");
  const existingProjects = existingProjectsString
    ? JSON.parse(existingProjectsString)
    : [];

  // Check if the project at the specified index exists
  if (existingProjects[projectIndex]) {
    // Remove the project from the array
    existingProjects.splice(projectIndex, 1);

    // Update local storage with the modified projects array
    localStorage.setItem("ProjectFolders", JSON.stringify(existingProjects));

    // Optionally, update the UI to reflect the changes
    renderProjects();
  } else {
    console.error("Invalid project index or project does not exist.");
  }
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
  projectsArray.forEach((project, index) => {
    let folderContainer = document.createElement("div");
    folderContainer.setAttribute("id", "folderContainer");

    let projectFolderButton = document.createElement("button");
    projectFolderButton.setAttribute("id", project.index);
    projectFolderButton.textContent = project.name;
    projectFolderButton.dataset.array = project.index;

    let deletefolder = document.createElement("button");
    deletefolder.setAttribute("id", `deleteProject-${index}`);
    deletefolder.textContent = "x";

    // i++;
    projectFolderButton.addEventListener("click", (event) => {
      let arrayIndex = event.target.id;
      console.log(`Project ${arrayIndex}`);
      changeProjectViewHeading(project.name, arrayIndex);
      renderTODO(projectsArray[project.index].array);
      console.log(projectsArray[project.index].array);

      projectEntry.value = "";
    });

    deletefolder.addEventListener("click", (event) => {
      let deleteFolderIndex = event.target.id;

      let deleteFolderAt = deleteFolderIndex.split("-");
      projectsArray.splice(deleteFolderAt[1], 1);

      deleteProjectFromStorage(deleteFolderAt[1]);
      renderProjects();
    });

    folderContainer.appendChild(projectFolderButton);
    folderContainer.appendChild(deletefolder);
    projectContainer.appendChild(folderContainer);
  });

  // renderTODO(projectsArray[defaultProject.dataset.array].array);
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
  ProjectFolder,
  projectsArray,
};
