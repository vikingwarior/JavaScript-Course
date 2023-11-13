let toDoTasks = [`Grocery`, `Dusting`];
let doneTasks = [`Walking the pets`, `Laundry`];

const createBtn = (btnLabel) => {
  let btn = document.createElement("button");
  btn.classList = `btn btn-outline-primary rounded-circle border btn-outline-info border-0 ms-auto`;
  btn.innerHTML = btnLabel;
  return btn;
};

const createListItem = (taskName=null, taskType=null, addButton = false) => {
    let listItemContainer = document.createElement(`div`);
    listItemContainer.classList = `listItemContainer`;

    let listItem = document.createElement(`li`);
    listItem.classList = `list-group-item d-flex align-items-center`;

  if (taskName != null) {
    let checkBox = document.createElement(`input`);
    checkBox.type = `checkbox`;
    checkBox.classList = `form-check-input me-1`;

    let taskLabel = document.createElement(`label`);
    taskLabel.classList = `form-check-label`;
    taskLabel.innerHTML = `<s>${taskName}</s>`
      ? taskName
      : taskType == `completed`;

    listItemContainer.appendChild(checkBox);
    listItemContainer.appendChild(taskLabel);
    listItem.appendChild(listItemContainer);

    if (addButton) {
      let newTaskBtn = createBtn(`+`);
      newTaskBtn.addEventListener(`click`, () => {
        let lastListItem = document.getElementById(`last`);
        lastListItem.removeAttribute(`id`);
        lastListItem.insertAdjacentElement(`afterend`, createListItem());
      });  
      listItem.appendChild(createBtn(`+`));
      listItem.id = `last`;
    }
  } else {
    listItemContainer.innerHTML = `<input class="form-control form-control border border-info border-0" type="text"
    placeholder="Add your Task">`;
    listItem.appendChild(listItemContainer);
    listItem.appendChild(createBtn(`ü`))
  }
  
  return listItem;
};

const isLastEntry = (arr, value) => {
  if (arr.length > 0) return value === arr[arr.length - 1];
  return false;
};

const createTasksTable = (tasks, listType) => {
  let listContainer = document.createElement(`ul`);
  listContainer.classList = `list-group`;

  for (let taskName of tasks) {
    if (isLastEntry(tasks, taskName))
      listContainer.appendChild(createListItem(taskName, listType, true));
    else listContainer.appendChild(createListItem(taskName, listType, false));
  }

  return listContainer;
};

let toDolistContainer = document.getElementsByClassName(`toDoList`)[0];
let completedListContainer =
  document.getElementsByClassName(`completedList`)[0];

toDolistContainer.appendChild(createTasksTable(toDoTasks, `toDo`));
toDolistContainer.appendChild(createListItem());