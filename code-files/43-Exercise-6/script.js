let toDoTasks = [`Grocery`, `Dusting`, `Rationing`, `Bills`];
let doneTasks = [`Walking the pets`, `Laundry`];

/**
 * This method takes the list of elements and returns a list that can be directly added inside DOM
 * @param {object} tasks List of the tasks
 * @param {boolean} completed this flag defines if the list is of toDo Task or completed tasks
 * @returns An Unorderded HTML list of tasks
 */
const createTasksTable = (tasks, completed = false) => {
  let listContainer = document.createElement(`ul`);
  listContainer.classList = `list-group`;

  for (let taskName of tasks) {
    let lastEntryFlag = isLastEntry(tasks, taskName);
    let listItem = createListItem(taskName, completed, lastEntryFlag);
    listContainer.appendChild(listItem);
  }

  return listContainer;
};

const createListItem = (
  taskName = null,
  completed = false,
  addButton = false
) => {
  let listItemContainer = document.createElement(`div`);
  listItemContainer.classList = `listItemContainer`;

  let listItem = document.createElement(`li`);
  listItem.classList = `list-group-item d-flex align-items-center`;

  if (taskName != null) {
    taskCheckBox = createCheckbox();

    listItemContainer.appendChild(taskCheckBox);
    listItemContainer.appendChild(createTasklabel(taskName));
    listItem.appendChild(listItemContainer);

    if (addButton) {
      listItem.id = `last`;

      let newTaskBtn = createBtn(`+`);
      newTaskBtn.addEventListener(`click`, () => addDynamicTableEntry());
      listItem.appendChild(newTaskBtn);
    }
  } else {
    listItem.innerHTML = `<input class="form-control form-control border border-info border-0" type="text" name="newTaskEntry"
    placeholder="Add your Task">`;

    let addTaskBtn = createBtn(`✅`);
    addTaskBtn.addEventListener(`click`, () =>
      addDynamicTableEntry(document.getElementsByName(`newTaskEntry`)[0].value)
    );

    listItem.appendChild(addTaskBtn);
  }

  return listItem;
};

const createCheckbox = () => {
  let checkBox = document.createElement(`input`);
  checkBox.type = `checkbox`;
  checkBox.classList = `form-check-input me-1`;

  return checkBox;
};

const addTaskToList = (listToAddTaskTo, listToRemoveTaskFrom, taskName) => {
  const index = listToRemoveTaskFrom.indexOf(taskName);
  listToRemoveTaskFrom.splice(index, 1);
  // listToRemoveTaskFrom = listToRemoveTaskFrom.filter(e => e !== taskName);

  listToAddTaskTo.push(taskName);
  // toDolistContainer.innerHTML = ``;
  // toDolistContainer.appendChild(createTasksTable(toDoTasks));
  console.log(toDoTasks);
  console.log(doneTasks);
  console.log(taskName);
};

const createTasklabel = (labelName) => {
  label = document.createElement(`label`);
  label.classList = `form-check-label`;
  label.innerHTML = `<s>${labelName}</s>` ? labelName : taskType == `completed`;

  return label;
};

const createBtn = (btnLabel) => {
  let btn = document.createElement("button");
  btn.classList = `btn btn-outline-primary rounded-circle border btn-outline-info border-0 ms-auto`;
  btn.innerHTML = btnLabel;
  return btn;
};

const addDynamicTableEntry = (newTaskLabel = null) => {
  let lastListItem = document.getElementById(`last`);
  lastListItem.removeAttribute(`id`);

  let addBtn = lastListItem.querySelector(`button`);
  lastListItem.removeChild(addBtn);

  let dynamicListItem = createListItem()
    ? createListItem(newTaskLabel, `toDo`, true)
    : newTaskLabel == null;
  dynamicListItem.id = `last`;

  lastListItem.insertAdjacentElement(`afterend`, dynamicListItem);

  addCheckBoxEventListener(dynamicListItem);

  if (lastListItem.querySelector('input[type="text"]') !== null)
    lastListItem.remove();
};

const isLastEntry = (arr, value) => {
  if (arr.length > 0) return value === arr[arr.length - 1];
  return false;
};

const addEventListenersToCheckBoxes = (container) => {
  let ulElems = container.querySelectorAll(`li.list-group-item`);
  console.log(ulElems);
  for (let listItem of ulElems) {
    addCheckBoxEventListener(listItem);
  }
};

const addCheckBoxEventListener = (liReference) => {
  let checkbox = liReference.querySelector('input[type="checkbox"]');
  let taskName = liReference.querySelector(".form-check-label").innerText;

  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      addTaskToList(doneTasks, toDoTasks, taskName);
    } else {
      addTaskToList(toDoTasks, doneTasks, taskName);
    }

    liReference.remove();
  });
};


// Driver code ->
let toDolistContainer = document.getElementsByClassName(`listContainer`)[0];

let tasksTable = createTasksTable(toDoTasks);
toDolistContainer.appendChild(tasksTable);

addEventListenersToCheckBoxes(toDolistContainer);

// Boilerplate code for testing

// HTML:
// <!DOCTYPE html>
// <html data-bs-theme="dark">

// <head>
//   <meta charset="utf-8">
//   <meta name="viewport" content="width=device-width">
//   <title>template</title>
//   <link href="style.css" rel="stylesheet" type="text/css" />
//   <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
//     integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
// </head>

// <body>
//    <div class="tabs d-flex flex-column justify-content-center align-items-center">
//     <ul class="nav nav-pills my-4 ">
//       <li class="toDo nav-item">
//         <a class="nav-link active" href="#">To Do</a>
//       </li>
//       <li class="completed nav-item">
//         <a class="nav-link" href="#">Completed</a>
//       </li>
//     </ul>
//   </div>
//   <div class="toDoList d-flex flex-column justify-content-center align-items-center">
//   <ul class="list-group"><li class="list-group-item d-flex align-items-center"><div class="listItemContainer"><input type="checkbox" class="form-check-input me-1"><label class="form-check-label">Grocery</label></div></li><li class="list-group-item d-flex align-items-center" id="last"><div class="listItemContainer"><input type="checkbox" class="form-check-input me-1"><label class="form-check-label">Dusting</label></div><button class="btn btn-outline-primary rounded-circle border btn-outline-info border-0 ms-auto">+</button></li></ul></div>
//   <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
//     integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
//     crossorigin="anonymous"></script>
// </body>

// </html>

// JS:

//  let toDoTasks = [`Grocery`, `Dusting`];
//  let doneTasks = [`Walking the pets`, `Laundry`];

//  let ulElems = document.getElementsByClassName('list-group-item d-flex align-items-center');

//  for (let listItem of ulElems) {
//    let checkbox = listItem.querySelector('input[type="checkbox"]');
//    let taskName = listItem.querySelector('.form-check-label').innerText;

//    checkbox.addEventListener('change', (listItem) => {
//     if (checkbox.checked) {
//       addTaskToList(doneTasks, toDoTasks, taskName);
//       listItem.remove;
//     } else {
//       addTaskToList(toDoTasks, doneTasks, taskName);
//     }
//   });
//  }

//  const addTaskToList = (listToAddTaskTo, listToRemoveTaskFrom, taskName) => {
//    const index = listToRemoveTaskFrom.indexOf(taskName);

//    if (index !== -1) {
//      listToRemoveTaskFrom.splice(index, 1);
//      listToAddTaskTo.push(taskName);

//      console.log(toDoTasks);
//      console.log(doneTasks);
//      console.log(taskName);
//    }
//  };
