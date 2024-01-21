import "./style.css";

import { renderActionbar } from "./display/actionBar.js";
import { renderProjectview } from "./display/projectView.js";
import { cancel, submit } from "./display/projectView.js";
const actionBar = document.querySelector("#actionBar");
const projectView = document.querySelector("#projectView");

renderActionbar();
renderProjectview();
cancel();
submit();
export { actionBar, projectView };
