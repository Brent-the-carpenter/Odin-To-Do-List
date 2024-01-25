import { DefaultProject } from "./display/projectView.js";
import { renderTODO } from "./todo.js";
import { projectsArray } from "./project.js";
// function logProjectProperties() {
//   projectsArray[DefaultProject.dataset.array].forEach((todo, index) => {
//     const todoString = JSON.stringify(todo, null, 2);
//     console.log(`Todo ${index + 1}:`);
//     console.log(todoString);
//     console.log("---------------------");
//   });
// }

function filterTodosByDate(dateRange, currentArray) {
  // logProjectProperties();

  let today = new Date();
  let filterDate;

  if (dateRange === "today") {
    filterDate = today;
  } else if (dateRange === "week") {
    let endOfWeek = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() + (6 - today.getDay())
    );
    filterDate = endOfWeek;
    console.log(`end of week ${filterDate}`);
  } else if (dateRange === "month") {
    let endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    filterDate = endOfMonth;
    console.log(`end of month ${filterDate}`);
  }

  let filteredArray = [];

  currentArray.forEach(function (object) {
    console.log(object.duedate);

    let dueDate = new Date(object.duedate);

    if (
      dueDate <= filterDate &&
      !filteredArray.some((item) => item.title === object.title)
    ) {
      filteredArray.push(object);
    }
  });

  console.log(filteredArray);
  renderTODO(filteredArray);
}

export { filterTodosByDate };