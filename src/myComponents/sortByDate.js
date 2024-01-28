import { renderTODO } from "./todo.js";

let filteredArray = [];
function filterTodosByDate(dateRange, currentArray) {
  let today = new Date();
  let filterDate;
  console.log(currentArray);
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
  filteredArray = [];
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

export { filterTodosByDate, filteredArray };
