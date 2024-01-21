import { projectView } from "../index.js";
import { addToDO } from "../todo.js";
let currentProject = document.createElement("h1");
currentProject.textContent = "Current Project";

const createToDo = document.createElement("button");
createToDo.setAttribute("id", "addTodo");

let dialog = document.createElement("dialog");
dialog.innerHTML = `
  <form method="dialog" id="form">
      <p>
          
          <label for="title"></label>
          <input type="text" name="title" id="title" minlength="4" placeholder="Title"  required>
          <label for="description"></label>
          <textarea name="description" id="description"  rows="5" cols="33" placeholder= "description"></textarea>
          <label class="dateLabel" for="date">Due date:</label>
          <input type="date" name="date" id="date"  required>
         <label class = "priorityLabel" for ="priority">Priority:</label>
         <select name="priority" id="priority">
          <option value ="high">high</option>
          <option vaule ="medium">medium</option>
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
  projectView.appendChild(currentProject);
  projectView.appendChild(createToDo);
  projectView.appendChild(dialog);
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
  submitButton.addEventListener("click", () => {
    addToDO();
  });
}

export { renderProjectview, cancel, submit };
