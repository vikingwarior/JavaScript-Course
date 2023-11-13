let toDoTasks = [`Grocery`, `Dusting`];
let doneTasks = [`Walking the pets`, `Laundry`];

const createBtn = (btnLabel) => {
  let btn = document.createElement("button");
  btn.classList = `btn btn-outline-primary rounded-circle border btn-outline-info border-0 ms-auto`;
  btn.innerHTML = btnLabel;
  return btn;
};

const createCheckbox = () => {
  let checkBox = document.createElement(`input`);
  checkBox.type = `checkbox`;
  checkBox.classList = `form-check-input me-1`;

  return checkBox;
};

const createTasklabel = (labelName) => {
  label = document.createElement(`label`);
  label.classList = `form-check-label`;
  label.innerHTML = `<s>${labelName}</s>` ? labelName : taskType == `completed`;

  return label;
};

const newTaskInput = () => {
  console.log(`lol`);
  let lastListItem = document.getElementById(`last`);
  lastListItem.removeAttribute(`id`);

  let addBtn = lastListItem.querySelector(`button`);
  lastListItem.removeChild(addBtn);

  let taskTextBox = createListItem();
  taskTextBox.id = `last`;

  lastListItem.insertAdjacentElement(`afterend`, taskTextBox);
};

const createListItem = (
  taskName = null,
  taskType = null,
  addButton = false
) => {
  let listItemContainer = document.createElement(`div`);
  listItemContainer.classList = `listItemContainer`;

  let listItem = document.createElement(`li`);
  listItem.classList = `list-group-item d-flex align-items-center`;

  if (taskName != null) {
    listItemContainer.appendChild(createCheckbox());
    listItemContainer.appendChild(createTasklabel(taskName));
    listItem.appendChild(listItemContainer);

    if (addButton) {
      listItem.id = `last`;

      let newTaskBtn = createBtn(`+`);
      newTaskBtn.addEventListener(`click`, () => newTaskInput());
      listItem.appendChild(newTaskBtn);
    }
  } else {
    listItem.innerHTML = `<input class="form-control form-control border border-info border-0" type="text"
    placeholder="Add your Task">`;
    listItem.appendChild(createBtn(`add`));
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
// toDolistContainer.appendChild(createListItem());
