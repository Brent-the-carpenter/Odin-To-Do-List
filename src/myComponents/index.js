import "./style.css";
import { addProject } from "./project.js";
import { projectsArray } from "./project.js";
import { renderActionbar } from "./display/actionBar.js";
import { renderProjectview } from "./display/projectView.js";
import { cancel, submit } from "./display/projectView.js";

const actionBar = document.querySelector("#actionBar");
const projectView = document.querySelector("#projectView");

renderProjectview();
renderActionbar();

cancel();
submit();
export { actionBar, projectView };
