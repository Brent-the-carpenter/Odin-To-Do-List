import { projectView } from "../index.js";
import { addToDO } from "../todo.js";
import { projectsArray } from "../project.js";
let today = new Date();
let month = today.getMonth() + 1;
let monthString = month < 10 ? `0${month}` : `${month}`;
let todayDateString = `${today.getFullYear()}-${monthString}-${today.getDate()}`;

let DefaultProject = document.createElement("h1");
DefaultProject.setAttribute("id", "projectViewHeading");
DefaultProject.textContent = "Default Project";
DefaultProject.dataset.array = 0;
DefaultProject.dataset.filter = " ";

const createToDo = document.createElement("button");
createToDo.setAttribute("id", "addTodo");
const todoContainer = document.createElement("div");
todoContainer.setAttribute("id", "todoContainer");
let dialog = document.createElement("dialog");
dialog.innerHTML = `
  <form method="dialog" id="form">
      <p>
          
          <label for="title"></label>
          <input type="text" name="title" id="title" minlength="4" placeholder="Title"  required>
          <label for="description"></label>
          <textarea name="description" id="description"  rows="5" cols="33" placeholder= "description"></textarea>
          <label class="dateLabel" for="date">Due date:</label>
          <input type="date" name="date" id="date" value = "${todayDateString}"min="${todayDateString}" required>
         <label class = "priorityLabel" for ="priority">Priority:</label>
         <select name="priority" id="priority">
          <option value ="high">high</option>
          <option value ="medium">medium</option>
          <option value ="low"> low</option>
          </select>
           
      </p>
      <div>
          <button id="cancel" type="reset">Cancel</button>
          <button id="submit" type="submit"> Confirm</button>
      </div>
  </form>
`;

function openCheck(dialog) {
  if (dialog.open) {
    console.log("Dialog open");
  } else {
    console.log("Dialog closed");
  }
}
createToDo.addEventListener("click", () => {
  dialog.showModal();
  openCheck(dialog);
});

function renderProjectview() {
  projectView.appendChild(DefaultProject);
  projectView.appendChild(createToDo);
  projectView.appendChild(dialog);
  projectView.appendChild(todoContainer);
}
function cancel() {
  let cancelButton = document.querySelector("#cancel");

  cancelButton.addEventListener("click", () => {
    dialog.close();
    openCheck(dialog);
  });
}

function submit() {
  let submitButton = document.querySelector("#submit");
  let form = document.querySelector("#form");
  submitButton.addEventListener("click", () => {
    let selectedProjectIndex = DefaultProject.dataset.array;
    console.log(`Submit button clicked for array ${selectedProjectIndex}`);
    addToDO(projectsArray[selectedProjectIndex].array, selectedProjectIndex);
    form.reset();
    dialog.close();
  });
}

export { renderProjectview, cancel, submit, DefaultProject };
